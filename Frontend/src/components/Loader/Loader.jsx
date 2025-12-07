// src/components/Loader/Loader.jsx
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { Activity, Shield, Wifi, Cpu } from "lucide-react";
import { useState, useEffect } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + (0.5 + Math.random() * 1.5);
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        bgcolor: "#FFFFFF",
        zIndex: 99999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Animated background grid */}
      <Box sx={{
        position: "absolute",
        width: "120%",
        height: "120%",
        opacity: 0.03,
        backgroundImage: `
          linear-gradient(90deg, #00359E 1px, transparent 1px),
          linear-gradient(#00359E 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}>
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </Box>

      {/* Main loader container */}
      <Box sx={{
        position: "relative",
        width: "100%",
        maxWidth: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}>
        
        {/* Connection visualization */}
        <Box sx={{
          position: "relative",
          width: "100%",
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          
          {/* Left node */}
          <Box sx={{
            position: "absolute",
            left: "20%",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #00359E, #003B9D)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(0, 53, 158, 0.15)",
            zIndex: 2,
          }}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Activity size={24} color="#FFFFFF" />
            </motion.div>
          </Box>

          {/* Connection line */}
          <Box sx={{
            position: "absolute",
            width: "60%",
            height: 2,
            background: "linear-gradient(90deg, transparent, #8B8D8E33, transparent)",
            overflow: "hidden",
          }}>
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                width: "30%",
                height: "100%",
                background: "linear-gradient(90deg, transparent, #00359E, #003B9D, transparent)",
              }}
            />
          </Box>

          {/* Right node */}
          <Box sx={{
            position: "absolute",
            right: "20%",
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #747578, #8B8D8E)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 8px 24px rgba(116, 117, 120, 0.15)",
            zIndex: 2,
          }}>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut"
              }}
            >
              <Shield size={24} color="#FFFFFF" />
            </motion.div>
          </Box>

          {/* Data points along connection */}
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{
                scale: [0, 1, 0],
                x: [`${30 + i * 13.3}%`, `${30 + i * 13.3}%`],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              style={{
                position: "absolute",
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: i % 2 === 0 ? "#00359E" : "#003B9D",
                zIndex: 1,
              }}
            />
          ))}
        </Box>

        {/* Heartbeat waveform */}
        <Box sx={{
          position: "relative",
          width: 280,
          height: 60,
          overflow: "hidden",
        }}>
          <svg width="280" height="60" viewBox="0 0 280 60" fill="none">
            <motion.path
              d="M0,30 Q20,10 40,30 T80,30 T120,30 T160,10 T200,30 T240,30 T280,30"
              stroke="#00359E"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M0,30 Q20,50 40,30 T80,30 T120,30 T160,50 T200,30 T240,30 T280,30"
              stroke="#003B9D"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3,
                ease: "easeInOut"
              }}
            />
          </svg>
        </Box>

        {/* Progress indicator */}
        <Box sx={{
          width: "100%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}>
          
          <Box sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Typography variant="caption" sx={{ color: "#8B8D8E", fontSize: 12 }}>
              Establishing secure connection
            </Typography>
            <Typography sx={{
              fontSize: 24,
              fontWeight: 700,
              background: "linear-gradient(135deg, #00359E, #003B9D)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              lineHeight: 1,
            }}>
              {Math.min(Math.round(progress), 100)}%
            </Typography>
          </Box>

          {/* Progress bar */}
          <Box sx={{
            width: "100%",
            height: 4,
            backgroundColor: "#F5F5F5",
            borderRadius: 2,
            overflow: "hidden",
          }}>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              style={{
                height: "100%",
                background: "linear-gradient(90deg, #00359E, #003B9D)",
                borderRadius: 2,
              }}
            />
          </Box>

          {/* Status indicators */}
          <Box sx={{
            display: "flex",
            gap: 3,
            mt: 2,
          }}>
            {[
              { icon: Wifi, label: "Network", color: progress > 25 ? "#00359E" : "#8B8D8E" },
              { icon: Shield, label: "Security", color: progress > 50 ? "#00359E" : "#8B8D8E" },
              { icon: Cpu, label: "Systems", color: progress > 75 ? "#00359E" : "#8B8D8E" },
            ].map((item, index) => (
              <Box key={index} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <item.icon size={16} color={item.color} />
                <Typography variant="caption" sx={{ 
                  color: item.color,
                  fontSize: 11,
                  fontWeight: 600,
                }}>
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Loading message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Typography sx={{
            color: "#747578",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 0.5,
          }}>
            Initializing telehealth environment...
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}