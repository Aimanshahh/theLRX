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
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 5 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: { xs: "nowrap", md: "wrap" },
          overflowX: { xs: "auto", md: "visible" },
          gap: { xs: 3, md: 4 },
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {[
          "FORBES",
          "GQ",
          "NEW YORK",
          "GEAR PATROL",
          "BLOOMBERG",
        ].map((text, i) => (
          <Typography
            key={i}
            sx={{
              flex: "0 0 auto", // prevent shrinking
              fontFamily:
                i === 0
                  ? "'Playfair Display', serif"
                  : i === 1
                  ? "'Helvetica Neue', Arial, sans-serif"
                  : i === 2
                  ? "'Cormorant Garamond', serif"
                  : i === 3
                  ? "'Oswald', sans-serif"
                  : "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.9rem" },
              letterSpacing: { xs: "0", sm: "0.02em", md: "-0.03em" },
              color: "#00359E",
              whiteSpace: "nowrap",
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>

      {/* DISCLAIMER — OUTSIDE CONTAINER */}
      <Typography
        sx={{
          mt: 3,
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
