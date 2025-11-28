import React, { useState } from "react";
import { 
  Box, 
  Typography, 
  TextField, 
  Button, 
  Paper,
  Container,
  Link,
  Fade,
  Slide
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight, Eye, EyeOff, UserPlus } from "lucide-react";

export default function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsLoading(false);
      // In real app, you would handle actual authentication here
      console.log("Signin attempt with:", formData);
      navigate("/");
    }
  };

  const handleRegisterNavigation = () => {
    navigate("/register");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #F4F5F6 0%, #E8EBF0 50%, #DCE3EC 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          background: "linear-gradient(135deg, rgba(0, 53, 158, 0.05) 0%, rgba(0, 59, 157, 0.1) 100%)",
          borderRadius: "50%",
          zIndex: 0,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          background: "linear-gradient(135deg, rgba(116, 117, 120, 0.05) 0%, rgba(139, 141, 142, 0.1) 100%)",
          borderRadius: "50%",
          zIndex: 0,
        }
      }}
    >
      <Container 
        maxWidth="sm" 
        sx={{ 
          position: "relative", 
          zIndex: 1 
        }}
      >
        <Slide in={true} direction="up" timeout={800}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5, md: 6 },
              borderRadius: 4,
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 25px 50px rgba(0, 53, 158, 0.15)",
              position: "relative",
              overflow: "hidden",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #747578, #00359E, #8B8D8E, #003B9D)",
                backgroundSize: "300% 300%",
                animation: "gradientShift 3s ease infinite",
              }
            }}
          >
            {/* Header Section */}
            <Fade in={true} timeout={1000}>
              <Box textAlign="center" mb={4}>
                <Box
                  sx={{
                    width: 60,
                    height: 60,
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    boxShadow: "0 8px 25px rgba(0, 53, 158, 0.3)",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-2px) scale(1.05)",
                      boxShadow: "0 12px 35px rgba(0, 53, 158, 0.4)",
                    }
                  }}
                >
                  <Lock size={28} color="white" />
                </Box>
                <Typography 
                  variant="h3" 
                  component="h1" 
                  fontWeight="800"
                  sx={{
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "2.75rem" },
                    mb: 1
                  }}
                >
                  Welcome Back
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  fontWeight="400"
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                >
                  Sign in to your TheLRX account
                </Typography>
              </Box>
            </Fade>

            {/* Signin Form */}
            <Fade in={true} timeout={1200}>
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <Box sx={{ position: "relative", mb: 3 }}>
                  <Mail 
                    size={20} 
                    color="#8B8D8E" 
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1
                    }} 
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    autoComplete="email"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(244, 245, 246, 0.8)",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "white",
                          boxShadow: "0 0 0 3px rgba(0, 53, 158, 0.1)",
                        }
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 53, 158, 0.1)",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00359E",
                        borderWidth: "2px",
                      }
                    }}
                  />
                </Box>

                {/* Password Field */}
                <Box sx={{ position: "relative", mb: 1 }}>
                  <Lock 
                    size={20} 
                    color="#8B8D8E" 
                    style={{
                      position: "absolute",
                      left: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      zIndex: 1
                    }} 
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter your password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password}
                    variant="outlined"
                    autoComplete="current-password"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        paddingRight: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: "rgba(244, 245, 246, 0.8)",
                        },
                        "&.Mui-focused": {
                          backgroundColor: "white",
                          boxShadow: "0 0 0 3px rgba(0, 53, 158, 0.1)",
                        }
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(0, 53, 158, 0.1)",
                      },
                      "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#00359E",
                        borderWidth: "2px",
                      }
                    }}
                  />
                  <Box
                    onClick={() => setShowPassword(!showPassword)}
                    sx={{
                      position: "absolute",
                      right: 16,
                      top: "50%",
                      transform: "translateY(-50%)",
                      cursor: "pointer",
                      color: "#8B8D8E",
                      transition: "color 0.3s ease",
                      "&:hover": {
                        color: "#00359E",
                      }
                    }}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </Box>
                </Box>

                {/* Forgot Password Link */}
                <Box textAlign="right" mb={3}>
                  <Link 
                    component="button"
                    type="button"
                    variant="body2"
                    sx={{
                      color: "#8B8D8E",
                      textDecoration: "none",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        color: "#00359E",
                        textDecoration: "underline",
                      }
                    }}
                  >
                    Forgot your password?
                  </Link>
                </Box>

                {/* Sign In Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                  sx={{
                    py: 1.5,
                    borderRadius: "12px",
                    background: "linear-gradient(135deg, #00359E, #003B9D)",
                    color: "white",
                    fontWeight: "700",
                    fontSize: "1.1rem",
                    textTransform: "none",
                    boxShadow: "0 8px 25px rgba(0, 53, 158, 0.3)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 12px 35px rgba(0, 53, 158, 0.4)",
                      background: "linear-gradient(135deg, #00257A, #00359E)",
                    },
                    "&:active": {
                      transform: "translateY(0)",
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                      transition: "left 0.5s ease",
                    },
                    "&:hover::before": {
                      left: "100%",
                    }
                  }}
                >
                  {isLoading ? (
                    "Signing In..."
                  ) : (
                    <>
                      Sign In
                      <ArrowRight size={20} style={{ marginLeft: 8 }} />
                    </>
                  )}
                </Button>
              </form>
            </Fade>

            {/* Registration Section */}
            <Fade in={true} timeout={1400}>
              <Box textAlign="center" mt={4} pt={3} sx={{ borderTop: "1px solid rgba(0, 53, 158, 0.1)" }}>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  Don't have an account?
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  onClick={handleRegisterNavigation}
                  startIcon={<UserPlus size={20} />}
                  sx={{
                    py: 1.5,
                    borderRadius: "12px",
                    borderColor: "#00359E",
                    color: "#00359E",
                    fontWeight: "600",
                    fontSize: "1rem",
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(0, 53, 158, 0.04)",
                      borderColor: "#00359E",
                      transform: "translateY(-1px)",
                      boxShadow: "0 6px 20px rgba(0, 53, 158, 0.15)",
                    }
                  }}
                >
                  Create New Account
                </Button>
              </Box>
            </Fade>
          </Paper>
        </Slide>
      </Container>

      {/* Keyframe Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
}