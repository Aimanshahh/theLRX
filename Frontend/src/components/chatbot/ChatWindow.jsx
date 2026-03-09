// // src/components/chatbot/ChatWindow.jsx
// import { useState, useEffect, useRef, useCallback } from "react";
// import {
//   Box, Typography, TextField, IconButton,
//   Avatar, Paper, CircularProgress, Tooltip,
// } from "@mui/material";
// import SendIcon          from "@mui/icons-material/Send";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import CloseIcon         from "@mui/icons-material/Close";
// import SmartToyIcon      from "@mui/icons-material/SmartToy";
// import PersonIcon        from "@mui/icons-material/Person";
// import { sendChatMessage as sendMessage, fetchChatHistory as fetchHistory, clearChatHistory as clearHistory } from "../../services/api";

// // ── Typing dots ──────────────────────────────────────
// const TypingIndicator = () => (
//   <Box sx={{ display: "flex", alignItems: "center", gap: "4px", px: 1, py: 0.5 }}>
//     {[0, 1, 2].map((i) => (
//       <Box key={i} sx={{
//         width: 7, height: 7, borderRadius: "50%", bgcolor: "#90caf9",
//         animation: "bounce 1.2s infinite ease-in-out",
//         animationDelay: `${i * 0.2}s`,
//         "@keyframes bounce": {
//           "0%,80%,100%": { transform: "translateY(0)" },
//           "40%":          { transform: "translateY(-6px)" },
//         },
//       }} />
//     ))}
//   </Box>
// );

// // ── Message bubble ───────────────────────────────────
// const MessageBubble = ({ msg }) => {
//   const isUser = msg.sender === "user";
//   return (
//     <Box sx={{ display: "flex", justifyContent: isUser ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 1, mb: 1.5 }}>
//       {!isUser && (
//         <Avatar sx={{ width: 28, height: 28, bgcolor: "#1565c0", mb: 0.5, flexShrink: 0 }}>
//           <SmartToyIcon sx={{ fontSize: 16 }} />
//         </Avatar>
//       )}
//       <Box sx={{
//         maxWidth: "75%",
//         px: 2, py: 1.2,
//         borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
//         bgcolor: isUser ? "#1976d2" : "#1e1e2e",
//         color:   isUser ? "#fff"    : "#e0e0e0",
//         border:  isUser ? "none"    : "1px solid #2a2a3e",
//         boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
//         fontSize: "0.875rem",
//         lineHeight: 1.5,
//         wordBreak: "break-word",
//       }}>
//         {msg.text}
//         <Typography sx={{ fontSize: "0.65rem", opacity: 0.5, mt: 0.3, textAlign: isUser ? "right" : "left" }}>
//           {new Date(msg.timestamp || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
//         </Typography>
//       </Box>
//       {isUser && (
//         <Avatar sx={{ width: 28, height: 28, bgcolor: "#424242", mb: 0.5, flexShrink: 0 }}>
//           <PersonIcon sx={{ fontSize: 16 }} />
//         </Avatar>
//       )}
//     </Box>
//   );
// };

// // ── Main ChatWindow ──────────────────────────────────
// const ChatWindow = ({ sessionId, onClose, isMobile = false }) => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput]       = useState("");
//   const [loading, setLoading]   = useState(false);
//   const [typing, setTyping]     = useState(false);

//   // visualViewport-aware keyboard offset for mobile
//   const [keyboardOffset, setKeyboardOffset] = useState(0);

//   const bottomRef  = useRef(null);
//   const inputRef   = useRef(null);
//   const containerRef = useRef(null);

//   // ── iOS / Android keyboard handling via visualViewport ──
//   useEffect(() => {
//     if (!isMobile) return;

//     const vv = window.visualViewport;
//     if (!vv) return;

//     const onViewportResize = () => {
//       // How much the keyboard has pushed up the viewport
//       const offset = window.innerHeight - vv.height - vv.offsetTop;
//       setKeyboardOffset(Math.max(0, offset));
//     };

//     vv.addEventListener("resize", onViewportResize);
//     vv.addEventListener("scroll", onViewportResize);

//     return () => {
//       vv.removeEventListener("resize", onViewportResize);
//       vv.removeEventListener("scroll", onViewportResize);
//     };
//   }, [isMobile]);

//   // ── Scroll to bottom on new messages ────────────
//   useEffect(() => {
//     // small delay lets the keyboard animation settle first on mobile
//     const t = setTimeout(() => {
//       bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//     }, isMobile ? 120 : 0);
//     return () => clearTimeout(t);
//   }, [messages, typing, isMobile]);

//   // ── Load history ─────────────────────────────────
//   useEffect(() => {
//     const load = async () => {
//       try {
//         const history = await fetchHistory(sessionId);
//         setMessages(history.length > 0 ? history : [{
//           sender: "bot",
//           text: "👋 Hi! I'm the LiquidRX assistant. How can I help you today?",
//           timestamp: new Date(),
//         }]);
//       } catch {
//         setMessages([{
//           sender: "bot",
//           text: "👋 Hi! I'm the LiquidRX assistant. How can I help you today?",
//           timestamp: new Date(),
//         }]);
//       }
//     };
//     load();
//   }, [sessionId]);

//   const handleSend = useCallback(async () => {
//     const text = input.trim();
//     if (!text || loading) return;

//     setMessages((p) => [...p, { sender: "user", text, timestamp: new Date() }]);
//     setInput("");
//     setLoading(true);
//     setTyping(true);

//     try {
//       const reply = await sendMessage(text, sessionId);
//       setTyping(false);
//       setMessages((p) => [...p, { sender: "bot", text: reply, timestamp: new Date() }]);
//     } catch {
//       setTyping(false);
//       setMessages((p) => [...p, { sender: "bot", text: "Sorry, something went wrong. Please try again.", timestamp: new Date() }]);
//     } finally {
//       setLoading(false);
//       inputRef.current?.focus();
//     }
//   }, [input, loading, sessionId]);

//   const handleClear = async () => {
//     try {
//       await clearHistory(sessionId);
//       setMessages([{ sender: "bot", text: "Chat cleared! How can I help you?", timestamp: new Date() }]);
//     } catch { /* silent */ }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
//   };

//   // ── Mobile: full screen layout ───────────────────
//   if (isMobile) {
//     return (
//       <Box
//         ref={containerRef}
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           width: "100%",
//           height: "100%",
//           bgcolor: "#12121f",
//           // Shift up by keyboard height so input stays above keyboard
//           transform: `translateY(-${keyboardOffset}px)`,
//           transition: "transform 0.25s ease",
//         }}
//       >
//         {/* Header */}
//         <Box sx={{
//           px: 2,
//           pt: `calc(12px + env(safe-area-inset-top, 0px))`,
//           pb: 1.5,
//           display: "flex", alignItems: "center", gap: 1.5,
//           background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
//           borderBottom: "1px solid rgba(255,255,255,0.08)",
//           flexShrink: 0,
//         }}>
//           <Avatar sx={{ width: 36, height: 36, bgcolor: "rgba(255,255,255,0.15)", flexShrink: 0 }}>
//             <SmartToyIcon sx={{ fontSize: 20, color: "#fff" }} />
//           </Avatar>
//           <Box sx={{ flex: 1, minWidth: 0 }}>
//             <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
//               LiquidRX Assistant
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//               <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#69f0ae", flexShrink: 0 }} />
//               <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>Online</Typography>
//             </Box>
//           </Box>
//           <Tooltip title="Clear chat">
//             <IconButton onClick={handleClear} size="small" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: "#fff" } }}>
//               <DeleteOutlineIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//           <Tooltip title="Close">
//             <IconButton onClick={onClose} size="small" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: "#fff" } }}>
//               <CloseIcon fontSize="small" />
//             </IconButton>
//           </Tooltip>
//         </Box>

//         {/* Messages */}
//         <Box sx={{
//           flex: 1,
//           overflowY: "auto",
//           // Prevent rubber-band scroll bleed on iOS
//           WebkitOverflowScrolling: "touch",
//           overscrollBehavior: "contain",
//           px: 2, py: 2,
//           display: "flex",
//           flexDirection: "column",
//           minHeight: 0,
//           "&::-webkit-scrollbar": { display: "none" },
//         }}>
//           {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
//           {typing && (
//             <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1, mb: 1.5 }}>
//               <Avatar sx={{ width: 28, height: 28, bgcolor: "#1565c0", flexShrink: 0 }}>
//                 <SmartToyIcon sx={{ fontSize: 16 }} />
//               </Avatar>
//               <Box sx={{ bgcolor: "#1e1e2e", border: "1px solid #2a2a3e", borderRadius: "18px 18px 18px 4px", px: 1.5, py: 0.8 }}>
//                 <TypingIndicator />
//               </Box>
//             </Box>
//           )}
//           <div ref={bottomRef} />
//         </Box>

//         {/* Input — sticks above keyboard */}
//         <Box sx={{
//           px: 2,
//           pt: 1.5,
//           pb: `calc(12px + env(safe-area-inset-bottom, 0px))`,
//           borderTop: "1px solid #2a2a3e",
//           bgcolor: "#0d0d1a",
//           display: "flex",
//           alignItems: "flex-end",
//           gap: 1,
//           flexShrink: 0,
//         }}>
//           <TextField
//             inputRef={inputRef}
//             fullWidth
//             multiline
//             maxRows={4}
//             placeholder="Type your message..."
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={handleKeyDown}
//             disabled={loading}
//             // Prevent iOS zoom on focus (font-size >= 16px)
//             inputProps={{ style: { fontSize: "16px" } }}
//             size="small"
//             sx={{
//               "& .MuiOutlinedInput-root": {
//                 bgcolor: "#1e1e2e",
//                 borderRadius: "12px",
//                 color: "#e0e0e0",
//                 fontSize: "1rem",
//                 "& fieldset":             { borderColor: "#2a2a3e" },
//                 "&:hover fieldset":       { borderColor: "#3a3a5e" },
//                 "&.Mui-focused fieldset": { borderColor: "#1976d2" },
//               },
//               "& .MuiInputBase-input::placeholder": { color: "#555", opacity: 1 },
//             }}
//           />
//           <IconButton
//             onClick={handleSend}
//             disabled={!input.trim() || loading}
//             sx={{
//               bgcolor: "#1976d2",
//               color: "#fff",
//               width: 44, height: 44,
//               borderRadius: "12px",
//               flexShrink: 0,
//               "&:hover":        { bgcolor: "#1565c0" },
//               "&.Mui-disabled": { bgcolor: "#1e1e2e", color: "#444" },
//               transition: "all 0.2s",
//             }}
//           >
//             {loading
//               ? <CircularProgress size={18} sx={{ color: "#fff" }} />
//               : <SendIcon fontSize="small" />
//             }
//           </IconButton>
//         </Box>
//       </Box>
//     );
//   }

//   // ── Desktop layout (unchanged) ───────────────────
//   return (
//     <Paper elevation={0} sx={{
//       width: "100%",
//       height: { xs: "70vh", sm: 520 },
//       maxHeight: { xs: "70vh", sm: 520 },
//       display: "flex",
//       flexDirection: "column",
//       borderRadius: "20px",
//       overflow: "hidden",
//       bgcolor: "#12121f",
//       border: "1px solid #2a2a3e",
//       boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
//     }}>
//       {/* Header */}
//       <Box sx={{
//         px: 2, py: 1.5,
//         display: "flex", alignItems: "center", gap: 1.5,
//         background: "linear-gradient(135deg, #1565c0 0%, #0d47a1 100%)",
//         borderBottom: "1px solid rgba(255,255,255,0.08)",
//         flexShrink: 0,
//       }}>
//         <Avatar sx={{ width: 36, height: 36, bgcolor: "rgba(255,255,255,0.15)", flexShrink: 0 }}>
//           <SmartToyIcon sx={{ fontSize: 20, color: "#fff" }} />
//         </Avatar>
//         <Box sx={{ flex: 1, minWidth: 0 }}>
//           <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.2 }}>
//             LiquidRX Assistant
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
//             <Box sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: "#69f0ae", flexShrink: 0 }} />
//             <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}>Online</Typography>
//           </Box>
//         </Box>
//         <Tooltip title="Clear chat">
//           <IconButton onClick={handleClear} size="small" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: "#fff" } }}>
//             <DeleteOutlineIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//         <Tooltip title="Close">
//           <IconButton onClick={onClose} size="small" sx={{ color: "rgba(255,255,255,0.6)", "&:hover": { color: "#fff" } }}>
//             <CloseIcon fontSize="small" />
//           </IconButton>
//         </Tooltip>
//       </Box>

//       {/* Messages */}
//       <Box sx={{
//         flex: 1,
//         overflowY: "auto",
//         px: 2, py: 2,
//         display: "flex",
//         flexDirection: "column",
//         minHeight: 0,
//         "&::-webkit-scrollbar":       { width: "4px" },
//         "&::-webkit-scrollbar-track": { bgcolor: "transparent" },
//         "&::-webkit-scrollbar-thumb": { bgcolor: "#2a2a3e", borderRadius: "4px" },
//       }}>
//         {messages.map((msg, i) => <MessageBubble key={i} msg={msg} />)}
//         {typing && (
//           <Box sx={{ display: "flex", alignItems: "flex-end", gap: 1, mb: 1.5 }}>
//             <Avatar sx={{ width: 28, height: 28, bgcolor: "#1565c0", flexShrink: 0 }}>
//               <SmartToyIcon sx={{ fontSize: 16 }} />
//             </Avatar>
//             <Box sx={{ bgcolor: "#1e1e2e", border: "1px solid #2a2a3e", borderRadius: "18px 18px 18px 4px", px: 1.5, py: 0.8 }}>
//               <TypingIndicator />
//             </Box>
//           </Box>
//         )}
//         <div ref={bottomRef} />
//       </Box>

//       {/* Input */}
//       <Box sx={{
//         px: 2, py: 1.5,
//         borderTop: "1px solid #2a2a3e",
//         bgcolor: "#0d0d1a",
//         display: "flex",
//         alignItems: "flex-end",
//         gap: 1,
//         flexShrink: 0,
//       }}>
//         <TextField
//           inputRef={inputRef}
//           fullWidth
//           multiline
//           maxRows={3}
//           placeholder="Type your message..."
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           disabled={loading}
//           size="small"
//           sx={{
//             "& .MuiOutlinedInput-root": {
//               bgcolor: "#1e1e2e",
//               borderRadius: "12px",
//               color: "#e0e0e0",
//               fontSize: "0.875rem",
//               "& fieldset":              { borderColor: "#2a2a3e" },
//               "&:hover fieldset":        { borderColor: "#3a3a5e" },
//               "&.Mui-focused fieldset":  { borderColor: "#1976d2" },
//             },
//             "& .MuiInputBase-input::placeholder": { color: "#555", opacity: 1 },
//           }}
//         />
//         <IconButton
//           onClick={handleSend}
//           disabled={!input.trim() || loading}
//           sx={{
//             bgcolor: "#1976d2",
//             color: "#fff",
//             width: 40, height: 40,
//             borderRadius: "12px",
//             flexShrink: 0,
//             "&:hover":       { bgcolor: "#1565c0" },
//             "&.Mui-disabled":{ bgcolor: "#1e1e2e", color: "#444" },
//             transition: "all 0.2s",
//           }}
//         >
//           {loading
//             ? <CircularProgress size={18} sx={{ color: "#fff" }} />
//             : <SendIcon fontSize="small" />
//           }
//         </IconButton>
//       </Box>
//     </Paper>
//   );
// };

// export default ChatWindow;