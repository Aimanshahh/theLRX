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
  Slide,
  Checkbox,
  FormControlLabel,
  Alert
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  LogIn,
  Calendar,
  Phone,
  MapPin
} from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeToNewsletter: true
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    // Personal Information
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    // Contact Information
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = "Date of birth is required";
    } else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) {
        newErrors.dateOfBirth = "You must be at least 18 years old to register";
      }
    }

    // Address Information
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";
    
    // Password Validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = "Password must contain uppercase, lowercase, and numbers";
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms Agreement
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsLoading(false);
      setSuccessMessage("Account created successfully! Welcome to TheLRX.");
      
      // Redirect to signin after successful registration
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  };

  const handleSignInNavigation = () => {
    navigate("/signin");
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
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
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Slide in={true} direction="up" timeout={800}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
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
            {/* Success Message */}
            {successMessage && (
              <Fade in={true}>
                <Alert 
                  severity="success" 
                  sx={{ 
                    mb: 3,
                    borderRadius: 2,
                    background: "linear-gradient(135deg, #4CAF50, #45a049)",
                    color: "white",
                    "& .MuiAlert-icon": { color: "white" }
                  }}
                >
                  {successMessage}
                </Alert>
              </Fade>
            )}

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
                  <User size={28} color="white" />
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
                  Join TheLRX Today
                </Typography>
                <Typography 
                  variant="h6" 
                  color="text.secondary"
                  fontWeight="400"
                  sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                >
                  Start your journey to better health with personalized care
                </Typography>
              </Box>
            </Fade>

            {/* Registration Form */}
            <Fade in={true} timeout={1200}>
              <form onSubmit={handleSubmit}>
                {/* Personal Information Section */}
                <Typography variant="h6" sx={{ mb: 2, color: "#00359E", fontWeight: 600 }}>
                  Personal Information
                </Typography>
                
                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, position: "relative" }}>
                    <User 
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
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      variant="outlined"
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
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
                    <TextField
                      fullWidth
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
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
                      }}
                    />
                  </Box>
                </Box>

                {/* Contact Information Section */}
                <Typography variant="h6" sx={{ mb: 2, color: "#00359E", fontWeight: 600, mt: 4 }}>
                  Contact Information
                </Typography>

                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, position: "relative" }}>
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
                      placeholder="Email address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          paddingLeft: "52px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(244, 245, 246, 0.5)",
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' }, position: "relative" }}>
                    <Phone 
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
                      placeholder="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          paddingLeft: "52px",
                          borderRadius: "12px",
                          backgroundColor: "rgba(244, 245, 246, 0.5)",
                        },
                      }}
                    />
                  </Box>
                </Box>

                <Box sx={{ mb: 3, position: "relative" }}>
                  <Calendar 
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
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    error={!!errors.dateOfBirth}
                    helperText={errors.dateOfBirth || "You must be 18 years or older"}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                      },
                    }}
                  />
                </Box>

                {/* Address Information Section */}
                <Typography variant="h6" sx={{ mb: 2, color: "#00359E", fontWeight: 600, mt: 4 }}>
                  Address Information
                </Typography>

                <Box sx={{ mb: 3, position: "relative" }}>
                  <MapPin 
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
                    placeholder="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    error={!!errors.address}
                    helperText={errors.address}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                      },
                    }}
                  />
                </Box>

                <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
                    <TextField
                      fullWidth
                      placeholder="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      error={!!errors.city}
                      helperText={errors.city}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "rgba(244, 245, 246, 0.5)",
                        },
                      }}
                    />
                  </Box>
                  
                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
                    <TextField
                      fullWidth
                      placeholder="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      error={!!errors.state}
                      helperText={errors.state}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "rgba(244, 245, 246, 0.5)",
                        },
                      }}
                    />
                  </Box>

                  <Box sx={{ flex: 1, minWidth: { xs: '100%', sm: 'auto' } }}>
                    <TextField
                      fullWidth
                      placeholder="ZIP Code"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      error={!!errors.zipCode}
                      helperText={errors.zipCode}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "12px",
                          backgroundColor: "rgba(244, 245, 246, 0.5)",
                        },
                      }}
                    />
                  </Box>
                </Box>

                {/* Security Section */}
                <Typography variant="h6" sx={{ mb: 2, color: "#00359E", fontWeight: 600, mt: 4 }}>
                  Security
                </Typography>

                <Box sx={{ position: "relative", mb: 3 }}>
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
                    placeholder="Create password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    error={!!errors.password}
                    helperText={errors.password || "Minimum 8 characters with uppercase, lowercase, and numbers"}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        paddingRight: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                      },
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

                <Box sx={{ position: "relative", mb: 3 }}>
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
                    placeholder="Confirm password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        paddingLeft: "52px",
                        paddingRight: "52px",
                        borderRadius: "12px",
                        backgroundColor: "rgba(244, 245, 246, 0.5)",
                      },
                    }}
                  />
                  <Box
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </Box>
                </Box>

                {/* Terms and Conditions */}
                <Box sx={{ mb: 3 }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        sx={{
                          color: "#00359E",
                          '&.Mui-checked': {
                            color: "#00359E",
                          },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2">
                        I agree to the{" "}
                        <Link href="#" sx={{ color: "#00359E", fontWeight: 600 }}>
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" sx={{ color: "#00359E", fontWeight: 600 }}>
                          Privacy Policy
                        </Link>
                      </Typography>
                    }
                  />
                  {errors.agreeToTerms && (
                    <Typography color="error" variant="caption" sx={{ display: 'block', mt: 0.5 }}>
                      {errors.agreeToTerms}
                    </Typography>
                  )}
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      name="subscribeToNewsletter"
                      checked={formData.subscribeToNewsletter}
                      onChange={handleChange}
                      sx={{
                        color: "#00359E",
                        '&.Mui-checked': {
                          color: "#00359E",
                        },
                      }}
                    />
                  }
                  label="Send me health tips, special offers, and updates from TheLRX"
                />

                {/* Register Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={isLoading || successMessage}
                  sx={{
                    py: 1.5,
                    mt: 3,
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
                    "Creating Your Account..."
                  ) : successMessage ? (
                    "Account Created Successfully!"
                  ) : (
                    <>
                      Create My TheLRX Account
                      <ArrowRight size={20} style={{ marginLeft: 8 }} />
                    </>
                  )}
                </Button>
              </form>
            </Fade>

            {/* Sign In Section */}
            <Fade in={true} timeout={1400}>
              <Box textAlign="center" mt={4} pt={3} sx={{ borderTop: "1px solid rgba(0, 53, 158, 0.1)" }}>
                <Typography variant="body1" color="text.secondary" mb={2}>
                  Already have an account?
                </Typography>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  onClick={handleSignInNavigation}
                  startIcon={<LogIn size={20} />}
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
                  Sign In to Existing Account
                </Button>
              </Box>
            </Fade>

            {/* Benefits Section */}
            <Fade in={true} timeout={1600}>
              <Box 
                mt={4} 
                p={3} 
                sx={{ 
                  backgroundColor: "rgba(0, 53, 158, 0.03)", 
                  borderRadius: 3,
                  border: "1px solid rgba(0, 53, 158, 0.1)"
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, color: "#00359E", fontWeight: 600 }}>
                  Why Join TheLRX?
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    ✓ Personalized healthcare plans tailored to your needs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✓ 24/7 access to licensed medical professionals
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✓ Secure and confidential medical consultations
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✓ Convenient prescription delivery to your door
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✓ Ongoing support from our dedicated care team
                  </Typography>
                </Box>
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