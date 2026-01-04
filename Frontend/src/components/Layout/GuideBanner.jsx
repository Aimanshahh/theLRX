import { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import heroImg from "../../assets/images/guidebannerremoved.png";
import { subscribeGuide } from "../../services/api";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FullWidthGradientWithText = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return toast.error("Email is required", toastOptions);
    setLoading(true);

    try {
      const res = await subscribeGuide(email);
      toast.success(res.message, toastOptions);
      setEmail("");
    } catch (err) {
      toast.error(err.message, toastOptions);
    } finally {
      setLoading(false);
    }
  };

  // Custom toast styles to match your blue theme
  const toastOptions = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    transition: Slide,
    style: {
      background: "linear-gradient(135deg, #00359E 0%, #003B9D 50%, #8B8D8E 100%)",
      color: "#fff",
      fontWeight: 600,
      fontSize: "14px",
      borderRadius: "12px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.2)",
    },
  };

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: { xs: "90vh", sm: "100vh", md: "120vh", lg: "140vh" },
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
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: { 
            xs: "100%", 
            sm: "100%", 
            md: "55%", 
            lg: "40%" 
          },
          width: "100%",
          ml: { 
            xs: 0, 
            sm: 0, 
            md: "-50px", 
            lg: "-100px" 
          },
          zIndex: 2,
          position: "relative",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: 700,
            fontSize: { 
              xs: "1.8rem", 
              sm: "2.1rem", 
              md: "2.4rem", 
              lg: "3rem" 
            },
            lineHeight: 1.2,
            mb: { xs: 2, sm: 1.5, md: 1.5 },
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          Unlock the Free Guide to Protein for Weight Loss
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#8B8D8E",
            fontSize: { 
              xs: "1rem", 
              sm: "1.1rem", 
              md: "1.15rem", 
              lg: "1.3rem" 
            },
            lineHeight: 1.6,
            mb: { xs: 3, sm: 3.5, md: 4 },
            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          Written by board-certified doctors to support your journey.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "column", lg: "column" },
            gap: { xs: 2, sm: 2, md: 2 },
            mb: { xs: 3, sm: 3, md: 3 },
          }}
        >
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            sx={{
              backgroundColor: "#fff",
              borderRadius: "16px",
              '& .MuiOutlinedInput-root': {
                borderRadius: "16px",
                height: { xs: "56px", sm: "56px", md: "60px", lg: "60px" },
                fontSize: { xs: "16px", sm: "16px", md: "17px", lg: "17px" },
                '& fieldset': { borderColor: "#8B8D8E", borderWidth: "1px" },
                '&:hover fieldset': { borderColor: "#00359E" },
                '&.Mui-focused fieldset': { 
                  borderColor: "#00359E", 
                  borderWidth: { xs: "1px", sm: "1px", md: "2px", lg: "2px" } 
                },
              },
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={{
              backgroundColor: "#747578",
              color: "#fff",
              fontSize: { xs: "16px", sm: "16px", md: "17px", lg: "17px" },
              fontWeight: 700,
              height: { xs: "56px", sm: "56px", md: "60px", lg: "60px" },
              borderRadius: "80px",
              textTransform: "none",
              minWidth: { sm: "180px", md: "auto" },
              '&:hover': { backgroundColor: "#003B9D" },
            }}
          >
            {loading ? "Submitting..." : "Get The Guide"}
          </Button>
        </Box>

        {/* Terms & Privacy */}
        <Typography
          variant="caption"
          sx={{
            color: "rgba(255,255,255,0.85)",
            fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "11px" },
            display: "block",
            lineHeight: 1.5,
            textAlign: { xs: "center", sm: "center", md: "left" },
            px: { xs: 1, sm: 1, md: 0 },
          }}
        >
          By creating an account using email, I agree to the{" "}
          <Typography
            component="span"
            sx={{
              color: "#fff",
              textDecoration: "underline",
              fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "11px" },
              cursor: "pointer",
              fontWeight: 500,
              '&:hover': { color: "#f0f0f0" },
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
              fontSize: { xs: "10px", sm: "10px", md: "11px", lg: "11px" },
              cursor: "pointer",
              fontWeight: 500,
              '&:hover': { color: "#f0f0f0" },
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
          left: { 
            xs: "50%", 
            sm: "50%", 
            md: "50%", 
            lg: "50%" 
          },
          transform: "translateX(-50%)",
          height: { 
            xs: "45%", 
            sm: "55%", 
            md: "70%", 
            lg: "85%" 
          },
          width: { 
            xs: "100%", 
            sm: "90%", 
            md: "auto", 
            lg: "auto" 
          },
          objectFit: { 
            xs: "contain", 
            sm: "contain", 
            md: "contain", 
            lg: "contain" 
          },
          objectPosition: "center",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Toast Container */}
      <ToastContainer />
    </Box>
  );
};

export default FullWidthGradientWithText;