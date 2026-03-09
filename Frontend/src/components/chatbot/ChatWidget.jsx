// // src/components/chatbot/ChatWidget.jsx
// import { useState, useRef, useEffect, useCallback } from "react";
// import { Box, Fab, Zoom, Slide, Tooltip, useMediaQuery, useTheme } from "@mui/material";
// import SmartToyIcon from "@mui/icons-material/SmartToy";
// import CloseIcon from "@mui/icons-material/Close";
// import ChatWindow from "./ChatWindow";

// const getSessionId = () => {
//   const key = "thelrx_chat_session";
//   let id = localStorage.getItem(key);
//   if (!id) {
//     id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
//       const r = (Math.random() * 16) | 0;
//       return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
//     });
//     localStorage.setItem(key, id);
//   }
//   return id;
// };

// const BUTTON_SIZE   = 56;
// const WINDOW_WIDTH  = 360;
// const WINDOW_HEIGHT = 520;
// const EDGE_MARGIN   = 16;

// const ChatWidget = () => {
//   const [open, setOpen]         = useState(false);
//   const [position, setPosition] = useState(null);
//   const [dragging, setDragging] = useState(false);
//   const [hasMoved, setHasMoved] = useState(false);
//   const sessionId               = useRef(getSessionId()).current;
//   const dragOffset              = useRef(null);
//   const posRef                  = useRef(null);
//   const rafRef                  = useRef(null);

//   const theme    = useTheme();
//   // sm = max-width:899px (MUI md breakpoint), so isMobile = xs + sm
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));

//   // Set default position bottom-right on mount (desktop only)
//   useEffect(() => {
//     const x = window.innerWidth - BUTTON_SIZE - EDGE_MARGIN * 2;
//     const y = window.innerHeight - BUTTON_SIZE - EDGE_MARGIN * 2;
//     setPosition({ x, y });
//     posRef.current = { x, y };
//   }, []);

//   // Lock body scroll when chat open on mobile
//   useEffect(() => {
//     if (isMobile && open) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => { document.body.style.overflow = ""; };
//   }, [isMobile, open]);

//   // ── Drag: mouse ──────────────────────────────────
//   const onMouseDown = useCallback((e) => {
//     if (isMobile) return;
//     e.preventDefault();
//     dragOffset.current = {
//       dx: e.clientX - posRef.current.x,
//       dy: e.clientY - posRef.current.y,
//     };
//     setDragging(true);
//     setHasMoved(false);
//   }, [isMobile]);

//   // ── Drag: touch ──────────────────────────────────
//   const onTouchStart = useCallback((e) => {
//     if (isMobile) return;
//     const t = e.touches[0];
//     dragOffset.current = {
//       dx: t.clientX - posRef.current.x,
//       dy: t.clientY - posRef.current.y,
//     };
//     setDragging(true);
//     setHasMoved(false);
//   }, [isMobile]);

//   useEffect(() => {
//     const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

//     const move = (clientX, clientY) => {
//       if (!dragOffset.current) return;

//       const rawX = clientX - dragOffset.current.dx;
//       const rawY = clientY - dragOffset.current.dy;

//       if (Math.abs(rawX - posRef.current.x) > 2 || Math.abs(rawY - posRef.current.y) > 2) {
//         setHasMoved(true);
//       }

//       const newX = clamp(rawX, EDGE_MARGIN, window.innerWidth  - BUTTON_SIZE - EDGE_MARGIN);
//       const newY = clamp(rawY, EDGE_MARGIN, window.innerHeight - BUTTON_SIZE - EDGE_MARGIN);

//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       rafRef.current = requestAnimationFrame(() => {
//         posRef.current = { x: newX, y: newY };
//         setPosition({ x: newX, y: newY });
//       });
//     };

//     const onMouseMove = (e) => move(e.clientX, e.clientY);
//     const onTouchMove = (e) => {
//       const t = e.touches[0];
//       move(t.clientX, t.clientY);
//     };
//     const onUp = () => {
//       dragOffset.current = null;
//       setDragging(false);
//     };

//     window.addEventListener("mousemove", onMouseMove);
//     window.addEventListener("mouseup",   onUp);
//     window.addEventListener("touchmove", onTouchMove, { passive: true });
//     window.addEventListener("touchend",  onUp);
//     return () => {
//       window.removeEventListener("mousemove", onMouseMove);
//       window.removeEventListener("mouseup",   onUp);
//       window.removeEventListener("touchmove", onTouchMove);
//       window.removeEventListener("touchend",  onUp);
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//     };
//   }, []);

//   // ── Desktop chat window positioning ─────────────
//   const getWindowStyle = () => {
//     if (!position) return {};

//     const vw = window.innerWidth;
//     const vh = window.innerHeight;

//     let left;
//     const rightAligned = position.x + WINDOW_WIDTH + EDGE_MARGIN;
//     if (rightAligned <= vw) {
//       left = position.x;
//     } else {
//       left = position.x + BUTTON_SIZE - WINDOW_WIDTH;
//     }
//     left = Math.max(EDGE_MARGIN, left);

//     let top;
//     const spaceBelow = vh - (position.y + BUTTON_SIZE);
//     const spaceAbove = position.y;

//     if (spaceBelow >= WINDOW_HEIGHT + EDGE_MARGIN) {
//       top = position.y + BUTTON_SIZE + 8;
//     } else if (spaceAbove >= WINDOW_HEIGHT + EDGE_MARGIN) {
//       top = position.y - WINDOW_HEIGHT - 8;
//     } else {
//       top = Math.max(EDGE_MARGIN, (vh - WINDOW_HEIGHT) / 2);
//     }

//     return {
//       position: "fixed",
//       left,
//       top,
//       width: WINDOW_WIDTH,
//       zIndex: 10000,
//     };
//   };

//   const handleClick = () => {
//     if (!hasMoved) setOpen((p) => !p);
//   };

//   if (!position) return null;

//   // ── Mobile button: fixed bottom-right ───────────
//   const buttonStyle = isMobile
//     ? {
//         position: "fixed",
//         bottom: `calc(${EDGE_MARGIN}px + env(safe-area-inset-bottom, 0px))`,
//         right: EDGE_MARGIN,
//         zIndex: 9999,
//         cursor: "pointer",
//       }
//     : {
//         position: "fixed",
//         left: position.x,
//         top: position.y,
//         zIndex: 9999,
//         cursor: dragging ? "grabbing" : "grab",
//         userSelect: "none",
//         willChange: "left, top",
//       };

//   return (
//     <>
//       {/* ── Mobile Full-Screen Chat Overlay ── */}
//       {isMobile && (
//         <Slide direction="up" in={open} mountOnEnter unmountOnExit>
//           <Box
//             sx={{
//               position: "fixed",
//               inset: 0,
//               zIndex: 10000,
//               display: "flex",
//               flexDirection: "column",
//               // Use dvh so it shrinks when keyboard appears
//               height: "100dvh",
//             }}
//           >
//             <ChatWindow sessionId={sessionId} onClose={() => setOpen(false)} isMobile />
//           </Box>
//         </Slide>
//       )}

//       {/* ── Desktop Chat Window ── */}
//       {!isMobile && (
//         <Zoom in={open} unmountOnExit>
//           <Box
//             sx={getWindowStyle()}
//             onMouseDown={(e) => e.stopPropagation()}
//           >
//             <ChatWindow sessionId={sessionId} onClose={() => setOpen(false)} />
//           </Box>
//         </Zoom>
//       )}

//       {/* ── Floating Button ── */}
//       <Box sx={buttonStyle}>
//         <Tooltip title={open ? "Close" : "Chat with us"} placement="left">
//           <Fab
//             onMouseDown={onMouseDown}
//             onTouchStart={onTouchStart}
//             onClick={handleClick}
//             sx={{
//               width: BUTTON_SIZE,
//               height: BUTTON_SIZE,
//               background: "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
//               boxShadow: "0 4px 20px rgba(25,118,210,0.5)",
//               border: "2px solid rgba(255,255,255,0.15)",
//               transition: "transform 0.2s, box-shadow 0.2s",
//               "&:hover": {
//                 background: "linear-gradient(135deg, #1e88e5 0%, #1976d2 100%)",
//                 boxShadow: "0 6px 28px rgba(25,118,210,0.7)",
//                 transform: "scale(1.08)",
//               },
//               "&:active": { transform: "scale(0.96)" },
//             }}
//           >
//             <Box sx={{
//               transition: "transform 0.3s",
//               transform: open ? "rotate(90deg)" : "rotate(0deg)",
//               display: "flex", alignItems: "center", justifyContent: "center",
//             }}>
//               {open
//                 ? <CloseIcon    sx={{ color: "#fff", fontSize: 24 }} />
//                 : <SmartToyIcon sx={{ color: "#fff", fontSize: 26 }} />
//               }
//             </Box>
//           </Fab>
//         </Tooltip>
//       </Box>
//     </>
//   );
// };

// export default ChatWidget;