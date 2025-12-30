import React from "react";
import { Box, Typography } from "@mui/material";

export default function PressTags() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* OUTER CONTAINER */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          bgcolor: "#F5F5F5",
          borderRadius: "32px",
          px: { xs: 3, md: 6 },
          py: { xs: 4, md: 5 },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            letterSpacing: "-0.03em",
            color: "#00359E",
          }}
        >
          FORBES
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Helvetica Neue', Arial, sans-serif",
            fontWeight: 800,
            fontSize: { xs: "1.7rem", md: "2.1rem" },
            letterSpacing: "-0.02em",
            color: "#00359E",
          }}
        >
          GQ
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            letterSpacing: "0.02em",
            color: "#00359E",
          }}
        >
          NEW&nbsp;YORK
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 600,
            fontSize: { xs: "1.9rem", md: "2.3rem" },
            letterSpacing: "0.08em",
            color: "#00359E",
          }}
        >
          GEAR&nbsp;PATROL
        </Typography>

        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            letterSpacing: "-0.01em",
            color: "#00359E",
          }}
        >
          BLOOMBERG
        </Typography>
      </Box>
<br></br>
<br></br>
      {/* DISCLAIMER — OUTSIDE CONTAINER */}
      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: "0.75rem", sm: "0.8rem" },
          color: "#747578",
          textAlign: "center",
           fontWeight: 700,
          lineHeight: 1.5,
          maxWidth: "1000px",
          px: 2,
        }}
      >
        All product names, logos, and brands are property of their respective
        owners. Use of these names, logos, and brands does not imply endorsement.
      </Typography>
    </Box>
  );
}
