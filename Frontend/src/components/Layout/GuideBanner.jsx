import { Box, TextField, Button, Typography } from "@mui/material";
import heroImg from "../../assets/images/guidebannerremoved.png";

const FullWidthGradientWithText = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: {
          xs: "90vh",
          sm: "100vh",
          md: "120vh",
          lg: "140vh",
        },
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #00359E 0%, #003B9D 50%, #8B8D8E 100%)",
        display: "flex",
        alignItems: "flex-start",
        pt: { xs: 8, sm: 10, md: 12, lg: 14 },
        px: { xs: 4, sm: 6, md: 12, lg: 16 },
      }}
    >
      {/* Text Container */}
      <Box
        sx={{
          maxWidth: { xs: "90%", sm: "60%", md: "50%", lg: "40%" },
          ml: "-100px",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.5rem", lg: "3rem" },
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          Unlock the Free Guide to Protein for Weight Loss
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: "#8B8D8E",
            fontSize: { xs: "0.95rem", sm: "1.1rem", md: "1.2rem", lg: "1.3rem" },
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Written by board-certified doctors to support your journey.
        </Typography>

        {/* Email Input Field */}
        <TextField
          fullWidth
          placeholder="Email"
          type="email"
          required
          sx={{
            mb: 2,
            backgroundColor: "#fff",
            borderRadius: "16px",
            '& .MuiOutlinedInput-root': {
              borderRadius: "16px",
              height: "60px",
              fontSize: "17px",
              '& fieldset': {
                borderColor: "#8B8D8E",
                borderWidth: "1px",
              },
              '&:hover fieldset': {
                borderColor: "#00359E",
              },
              '&.Mui-focused fieldset': {
                borderColor: "#00359E",
                borderWidth: "2px",
              },
            },
          }}
        />
<br></br>
<br></br>

        {/* Get the Guide Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: "#747578",
            color: "#fff",
            fontSize: "17px",
            fontWeight: 700,
            height: "60px",
            borderRadius: "80px",
            textTransform: "none",
            mb: 3,
            '&:hover': {
              backgroundColor: "#003B9D",
            },
          }}
        >
          Get The Guide
        </Button>

        {/* Terms & Privacy Text */}
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "11px",
            display: "block",
            lineHeight: 1.5,
            mt: 1,
          }}
        >
          By creating an account using email, I agree to the{" "}
          <Typography
            component="span"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "11px",
              cursor: "pointer",
              fontWeight: 500,
              '&:hover': {
                color: "#f0f0f0",
              },
            }}
          >
            Terms & Conditions
          </Typography>
          , and acknowledge the{" "}
          <Typography
            component="span"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: "11px",
              cursor: "pointer",
              fontWeight: 500,
              '&:hover': {
                color: "#f0f0f0",
              },
            }}
          >
            Privacy Policy
          </Typography>
          .
        </Typography>
      </Box>

      {/* Hero Image */}
      <Box
        component="img"
        src={heroImg}
        alt="Hero"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: {
            xs: "55%",
            sm: "65%",
            md: "75%",
            lg: "85%",
          },
          objectFit: "contain",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
    </Box>
  );
};

export default FullWidthGradientWithText;