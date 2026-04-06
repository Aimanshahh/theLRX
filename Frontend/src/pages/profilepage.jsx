import React, { useState, useEffect } from "react";
import {
  Box,Container,
  Typography,
  TextField,
  Button,
  Avatar,
  Divider,
  Grid,
  Alert,
  Fade,
  CircularProgress,
  IconButton,
  InputAdornment,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Person as PersonIcon,
  Mail,
  Phone,
  CalendarToday,
  LocationOn,
  Save,
  ArrowBack,
  Lock,
  Visibility,
  VisibilityOff,
  Edit,
  CheckCircle,
  Security,
  Badge,
  Home,
  Shield,
  VerifiedUser,
  Healing,
} from "@mui/icons-material";
import { getUserProfile, updateProfile as updateProfileAPI, changePassword as changePasswordAPI } from "../services/api";

export default function Profile() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

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
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  // Load user data on mount
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchProfile = async () => {
      try {
        const userData = await getUserProfile();
        const updatedData = {
          firstName: userData.firstName || "",
          lastName: userData.lastName || "",
          email: userData.email || "",
          phone: userData.phone || "",
          dateOfBirth: userData.dateOfBirth ? userData.dateOfBirth.split('T')[0] : "",
          address: userData.address || "",
          city: userData.city || "",
          state: userData.state || "",
          zipCode: userData.zipCode || "",
        };
        setFormData(updatedData);
      } catch (error) {
        console.error("Failed to fetch profile:", error);
        setErrorMessage("Failed to load profile data");
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePassword = () => {
    const newErrors = {};

    if (!passwordData.currentPassword) {
      newErrors.currentPassword = "Current password is required";
    }

    if (!passwordData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (passwordData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(passwordData.newPassword)
    ) {
      newErrors.newPassword =
        "Password must contain uppercase, lowercase, and numbers";
    }

    if (!passwordData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (passwordData.newPassword !== passwordData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveProfile = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await updateProfileAPI(formData);
      
      // Update localStorage with new data
      const user = JSON.parse(localStorage.getItem("user") || "{}");
      const updatedUser = { ...user, ...formData };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);
      setIsLoading(false);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Profile update error:", error);
      setErrorMessage(error.message || "Failed to update profile");
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (!validatePassword()) return;

    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      await changePasswordAPI({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword,
      });

      setSuccessMessage("Password changed successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setActiveTab(0);
      setIsLoading(false);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("Password change error:", error);
      setErrorMessage(error.message || "Failed to change password");
      setIsLoading(false);
    }
  };

  const formatPhoneNumber = (value) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(
      6,
      10
    )}`;
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const getUserInitials = () => {
    const firstInitial = formData.firstName?.charAt(0) || "";
    const lastInitial = formData.lastName?.charAt(0) || "";
    return (firstInitial + lastInitial).toUpperCase();
  };

  const tabs = [
    { label: "Profile", icon: <PersonIcon /> },
    { label: "Security", icon: <Security /> },
    { label: "Treatment", icon: <Healing /> },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
        py: { xs: 2, md: 4 },
        px: { xs: 1, sm: 2 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ mb: 4 }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{
              color: "#00359E",
              fontWeight: 600,
              mb: 2,
              "&:hover": {
                backgroundColor: "rgba(0, 53, 158, 0.04)",
              },
            }}
          >
            Back to Dashboard
          </Button>

          <Typography variant="h4" sx={{ color: "#00359E", fontWeight: 800 }}>
            My Profile
          </Typography>
        </Box>

        {/* Success/Error Messages */}
        <Box sx={{ mb: 3 }}>
          {successMessage && (
            <Fade in={true}>
              <Alert
                severity="success"
                icon={<CheckCircle fontSize="inherit" />}
                sx={{
                  borderRadius: 2,
                  background: "linear-gradient(135deg, #4CAF50, #45a049)",
                  color: "white",
                  border: "none",
                  "& .MuiAlert-icon": { color: "white" },
                }}
              >
                {successMessage}
              </Alert>
            </Fade>
          )}

          {errorMessage && (
            <Fade in={true}>
              <Alert
                severity="error"
                sx={{
                  borderRadius: 2,
                  border: "none",
                }}
              >
                {errorMessage}
              </Alert>
            </Fade>
          )}
        </Box>

        {/* Distinct Profile Header Section */}
        <Box sx={{ 
          mb: 4,
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 2,
          backgroundColor: '#ffffff',
          boxShadow: '0 4px 20px rgba(0, 53, 158, 0.08)',
          border: '1px solid rgba(0, 53, 158, 0.1)',
        }}>
          {/* Decorative Background Element */}
          <Box sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(0, 53, 158, 0.05) 0%, rgba(0, 82, 212, 0.05) 100%)',
            clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          }} />
          
          <Box sx={{ 
            p: { xs: 3, sm: 4 },
            position: 'relative',
            zIndex: 1,
          }}>
            <Grid container alignItems="center" spacing={3}>
              {/* Left Side - Avatar and Basic Info */}
              <Grid item xs={12} md="auto">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Avatar
                    sx={{
                      width: 96,
                      height: 96,
                      background: 'linear-gradient(135deg, #00359E 0%, #0052D4 100%)',
                      color: 'white',
                      fontSize: '2rem',
                      fontWeight: 700,
                      border: '4px solid white',
                      boxShadow: '0 8px 24px rgba(0, 53, 158, 0.2)',
                    }}
                  >
                    {getUserInitials()}
                  </Avatar>
                  
                  <Box>
                    <Typography variant="h4" sx={{ 
                      fontWeight: 800, 
                      color: '#00359E',
                      mb: 0.5
                    }}>
                      {formData.firstName} {formData.lastName}
                    </Typography>
                    <Typography variant="body1" sx={{ 
                      color: '#666',
                      mb: 1,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}>
                      <Mail sx={{ fontSize: 18, color: '#00359E' }} />
                      {formData.email}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 0.5,
                        px: 1.5,
                        py: 0.5,
                        backgroundColor: 'rgba(0, 53, 158, 0.08)',
                        borderRadius: 1,
                      }}>
                        <Shield sx={{ fontSize: 16, color: '#00359E' }} />
                        <Typography variant="caption" sx={{ 
                          color: '#00359E',
                          fontWeight: 600
                        }}>
                          Verified Account
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              
              {/* Right Side - Contact Info in a clean layout */}
              <Grid item xs={12} md>
                <Box sx={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: 1.5,
                  pl: { md: 2 },
                  borderLeft: { md: '2px solid rgba(0, 53, 158, 0.1)' },
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 53, 158, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <Phone sx={{ fontSize: 18, color: '#00359E' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="textSecondary">
                        Phone Number
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formData.phone || "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      backgroundColor: 'rgba(0, 53, 158, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <LocationOn sx={{ fontSize: 18, color: '#00359E' }} />
                    </Box>
                    <Box>
                      <Typography variant="caption" color="textSecondary">
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 500 }}>
                        {formData.city ? `${formData.city}, ${formData.state}` : "Not provided"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          
          {/* Status Bar */}
          <Box sx={{
            borderTop: '1px solid rgba(0, 53, 158, 0.1)',
            backgroundColor: 'rgba(0, 53, 158, 0.02)',
            p: 2,
          }}>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary" display="block">
                    Account Type
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#00359E' }}>
                    Standard
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary" display="block">
                    Status
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5 }}>
                    <VerifiedUser sx={{ fontSize: 16, color: '#4CAF50' }} />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: '#4CAF50' }}>
                      Active
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary" display="block">
                    Last Login
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Today
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={3}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" color="textSecondary" display="block">
                    Updated
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    Just now
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>

        {/* Divider */}
        <Divider sx={{ mb: 4 }} />

        {/* Main Content Area */}
        <Box sx={{ 
          backgroundColor: "white",
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
          mb: 4,
        }}>
          {/* Tabs Navigation */}
          <Box sx={{ 
            borderBottom: 1, 
            borderColor: 'divider',
            background: "linear-gradient(135deg, #00359E 0%, #0052D4 100%)",
          }}>
            <Tabs
              value={activeTab}
              onChange={(e, newValue) => setActiveTab(newValue)}
              variant={isMobile ? "fullWidth" : "standard"}
              textColor="inherit"
              sx={{
                "& .MuiTab-root": {
                  fontWeight: 600,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  color: "rgba(255, 255, 255, 0.8)",
                  minHeight: 56,
                  padding: { xs: '12px 8px', sm: '12px 16px' },
                  "&:hover": {
                    color: "white",
                  },
                },
                "& .Mui-selected": {
                  color: "white !important",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "white",
                  height: 3,
                },
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  iconPosition="start"
                  label={tab.label}
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            {activeTab === 0 ? (
              /* Profile Information Tab */
              <Box>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: { xs: 'flex-start', sm: 'center' }, 
                  mb: { xs: 3, sm: 4 },
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 2, sm: 0 }
                }}>
                  <Box sx={{ mb: { xs: 1, sm: 0 } }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 800, 
                        color: "#00359E",
                        fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                      }}
                    >
                      Personal Information
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="textSecondary"
                      sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem" } }}
                    >
                      Update your personal details and contact information
                    </Typography>
                  </Box>
                  {!isEditing && (
                    <Button
                      variant="contained"
                      startIcon={<Edit />}
                      onClick={() => setIsEditing(true)}
                      sx={{
                        background: "linear-gradient(135deg, #00359E 0%, #0052D4 100%)",
                        borderRadius: 2,
                        px: { xs: 2.5, sm: 3 },
                        py: { xs: 0.75, sm: 0.875 },
                        fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                        boxShadow: "0 4px 12px rgba(0, 53, 158, 0.2)",
                        "&:hover": {
                          boxShadow: "0 6px 16px rgba(0, 53, 158, 0.3)",
                        },
                        width: { xs: '100%', sm: 'auto' }
                      }}
                    >
                      Edit Profile
                    </Button>
                  )}
                </Box>

                {/* Personal Information Section */}
                <Box sx={{ 
                  mb: { xs: 3, sm: 4 }, 
                  p: { xs: 2, sm: 3 }, 
                  borderRadius: 2, 
                  border: "1px solid #e0e0e0", 
                  backgroundColor: "#fafafa" 
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: { xs: 2, sm: 3 } 
                  }}>
                    <Badge sx={{ 
                      color: "#00359E", 
                      mr: 2,
                      fontSize: { xs: 20, sm: 24 } 
                    }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: "#00359E",
                        fontSize: { xs: "1.125rem", sm: "1.25rem" }
                      }}
                    >
                      Basic Information
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" },
                            "&:hover": {
                              "& .MuiOutlinedInput-notchedOutline": {
                                borderColor: "#00359E",
                              },
                            },
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={!isEditing}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        error={!!errors.email}
                        helperText={errors.email}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        disabled={!isEditing}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Phone sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Date of Birth"
                        name="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        disabled={!isEditing}
                        InputLabelProps={{ shrink: true }}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <CalendarToday sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Address Information Section */}
                <Box sx={{ 
                  mb: { xs: 3, sm: 4 }, 
                  p: { xs: 2, sm: 3 }, 
                  borderRadius: 2, 
                  border: "1px solid #e0e0e0", 
                  backgroundColor: "#fafafa" 
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: { xs: 2, sm: 3 } 
                  }}>
                    <Home sx={{ 
                      color: "#00359E", 
                      mr: 2,
                      fontSize: { xs: 20, sm: 24 } 
                    }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: "#00359E",
                        fontSize: { xs: "1.125rem", sm: "1.25rem" }
                      }}
                    >
                      Address Information
                    </Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Street Address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LocationOn sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        fullWidth
                        label="City"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        disabled={!isEditing}
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <TextField
                        fullWidth
                        label="State"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        disabled={!isEditing}
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        fullWidth
                        label="ZIP Code"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        disabled={!isEditing}
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            backgroundColor: isEditing ? "white" : "#f8f9fa",
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Save/Cancel Buttons */}
                {isEditing && (
                  <Box sx={{ 
                    display: 'flex', 
                    gap: { xs: 1, sm: 2 }, 
                    justifyContent: 'flex-end', 
                    mt: { xs: 3, sm: 4 },
                    flexWrap: 'wrap' 
                  }}>
                    <Button
                      variant="outlined"
                      onClick={() => setIsEditing(false)}
                      disabled={isLoading}
                      sx={{
                        px: { xs: 3, sm: 4 },
                        py: { xs: 0.75, sm: 0.875 },
                        borderRadius: 1.5,
                        borderColor: "#747578",
                        color: "#747578",
                        fontWeight: 600,
                        minWidth: { xs: 100, sm: 120 },
                        fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                        width: { xs: 'calc(50% - 4px)', sm: 'auto' }
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={
                        isLoading ? (
                          <CircularProgress size={20} color="inherit" />
                        ) : (
                          <Save />
                        )
                      }
                      onClick={handleSaveProfile}
                      disabled={isLoading}
                      sx={{
                        px: { xs: 3, sm: 4 },
                        py: { xs: 0.75, sm: 0.875 },
                        background: "linear-gradient(135deg, #00359E 0%, #0052D4 100%)",
                        borderRadius: 1.5,
                        fontWeight: 600,
                        minWidth: { xs: 100, sm: 140 },
                        fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                        boxShadow: "0 4px 12px rgba(0, 53, 158, 0.2)",
                        "&:hover": {
                          boxShadow: "0 6px 16px rgba(0, 53, 158, 0.3)",
                        },
                        width: { xs: 'calc(50% - 4px)', sm: 'auto' }
                      }}
                    >
                      {isLoading ? "Saving..." : "Save Changes"}
                    </Button>
                  </Box>
                )}
              </Box>
            ) : activeTab === 1 ? (
              /* Security Tab */
              <Box>
                <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 800, 
                      color: "#00359E",
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                    }}
                  >
                    Security Settings
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem" } }}
                  >
                    Manage your password and security preferences
                  </Typography>
                </Box>

                <Box sx={{ 
                  p: { xs: 2, sm: 3 }, 
                  borderRadius: 2, 
                  border: "1px solid #e0e0e0", 
                  backgroundColor: "#fafafa" 
                }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: { xs: 2, sm: 3 } 
                  }}>
                    <Security sx={{ 
                      color: "#00359E", 
                      mr: 2,
                      fontSize: { xs: 20, sm: 24 } 
                    }} />
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 600, 
                        color: "#00359E",
                        fontSize: { xs: "1.125rem", sm: "1.25rem" }
                      }}
                    >
                      Change Password
                    </Typography>
                  </Box>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Current Password"
                        name="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        value={passwordData.currentPassword}
                        onChange={handlePasswordChange}
                        error={!!errors.currentPassword}
                        helperText={errors.currentPassword}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Lock sx={{ 
                                color: "#00359E", 
                                fontSize: { xs: 18, sm: 20 } 
                              }} />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                edge="end"
                                size="small"
                                sx={{ 
                                  padding: { xs: 0.5, sm: 0.75 },
                                  "& .MuiSvgIcon-root": {
                                    fontSize: { xs: 18, sm: 20 }
                                  }
                                }}
                              >
                                {showCurrentPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="New Password"
                        name="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        value={passwordData.newPassword}
                        onChange={handlePasswordChange}
                        error={!!errors.newPassword}
                        helperText={errors.newPassword}
                        variant="outlined"
                        size="small"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                edge="end"
                                size="small"
                                sx={{ 
                                  padding: { xs: 0.5, sm: 0.75 },
                                  "& .MuiSvgIcon-root": {
                                    fontSize: { xs: 18, sm: 20 }
                                  }
                                }}
                              >
                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Confirm New Password"
                        name="confirmPassword"
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={handlePasswordChange}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        variant="outlined"
                        size="small"
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 1.5,
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          },
                          "& .MuiInputLabel-root": {
                            fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                          }
                        }}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Box sx={{ 
                        display: 'flex', 
                        gap: { xs: 1, sm: 2 },
                        justifyContent: 'flex-end', 
                        mt: { xs: 1, sm: 2 },
                        flexWrap: 'wrap' 
                      }}>
                        <Button
                          variant="outlined"
                          onClick={() => {
                            setPasswordData({
                              currentPassword: "",
                              newPassword: "",
                              confirmPassword: "",
                            });
                            setErrors({});
                            setActiveTab(0);
                          }}
                          disabled={isLoading}
                          sx={{
                            px: { xs: 3, sm: 4 },
                            py: { xs: 0.75, sm: 0.875 },
                            borderRadius: 1.5,
                            borderColor: "#747578",
                            color: "#747578",
                            fontWeight: 600,
                            minWidth: { xs: 100, sm: 120 },
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          variant="contained"
                          onClick={handleChangePassword}
                          disabled={isLoading}
                          sx={{
                            px: { xs: 3, sm: 4 },
                            py: { xs: 0.75, sm: 0.875 },
                            background: "linear-gradient(135deg, #00359E 0%, #0052D4 100%)",
                            borderRadius: 1.5,
                            fontWeight: 600,
                            minWidth: { xs: 120, sm: 140 },
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" },
                            boxShadow: "0 4px 12px rgba(0, 53, 158, 0.2)",
                            "&:hover": {
                              boxShadow: "0 6px 16px rgba(0, 53, 158, 0.3)",
                            },
                          }}
                        >
                          {isLoading ? "Changing..." : "Update Password"}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Password Requirements */}
                <Box sx={{ 
                  mt: { xs: 2, sm: 3 }, 
                  p: { xs: 2, sm: 3 }, 
                  borderRadius: 2, 
                  border: "1px solid #e0e0e0", 
                  backgroundColor: "#f8f9fa"
                }}>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      fontWeight: 600, 
                      mb: { xs: 0.5, sm: 1 }, 
                      color: "#00359E",
                      fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                    }}
                  >
                    Password Requirements:
                  </Typography>
                  <Grid container spacing={{ xs: 0.5, sm: 1 }}>
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="body2" 
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}
                      >
                        • Minimum 8 characters
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="body2" 
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}
                      >
                        • At least one uppercase letter
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="body2" 
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}
                      >
                        • At least one lowercase letter
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography 
                        variant="body2" 
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.8125rem", sm: "0.875rem" } }}
                      >
                        • At least one number
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            ) : (
              /* Treatment Tab - WITH THE NEW BUTTON */
              <Box>
                <Box sx={{ mb: { xs: 3, sm: 4 } }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 800, 
                      color: "#00359E",
                      fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" }
                    }}
                  >
                    Treatment Information
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="textSecondary"
                    sx={{ fontSize: { xs: "0.875rem", sm: "0.9375rem" } }}
                  >
                    View and manage your treatment plans and medical information
                  </Typography>
                </Box>

                {/* Treatment Plan Card with Action Button */}
                <Box sx={{ 
                  mb: { xs: 3, sm: 4 }, 
                  p: { xs: 3, sm: 4 }, 
                  borderRadius: 3, 
                  border: "1px solid rgba(0, 53, 158, 0.1)", 
                  backgroundColor: "white",
                  boxShadow: "0 8px 32px rgba(0, 53, 158, 0.08)",
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #00359E 0%, #0052D4 50%, #00D4FF 100%)',
                  }
                }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} md={8}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{
                          width: 40,
                          height: 40,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 53, 158, 0.1)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mr: 2
                        }}>
                          <Healing sx={{ color: "#00359E", fontSize: 24 }} />
                        </Box>
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: 700, 
                            color: "#00359E",
                            fontSize: { xs: "1rem", sm: "1.125rem" }
                          }}
                        >
                          Current Treatment Plan
                        </Typography>
                      </Box>
                      
                      <Typography 
                        variant="body1" 
                        color="textSecondary"
                        sx={{ 
                          mb: 2,
                          fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                        }}
                      >
                        Access your personalized treatment plan, view prescription details, and track your progress in one centralized location.
                      </Typography>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        flexWrap: 'wrap',
                        gap: 1.5,
                        mb: 2 
                      }}>
                        <Box sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'rgba(0, 212, 255, 0.1)',
                          borderRadius: 1,
                          border: '1px solid rgba(0, 212, 255, 0.2)'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#0052D4',
                            fontWeight: 600,
                            fontSize: { xs: "0.75rem", sm: "0.8125rem" }
                          }}>
                            Prescription Details
                          </Typography>
                        </Box>
                        <Box sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'rgba(0, 53, 158, 0.1)',
                          borderRadius: 1,
                          border: '1px solid rgba(0, 53, 158, 0.2)'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#00359E',
                            fontWeight: 600,
                            fontSize: { xs: "0.75rem", sm: "0.8125rem" }
                          }}>
                            Progress Tracking
                          </Typography>
                        </Box>
                        <Box sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          px: 1.5,
                          py: 0.5,
                          backgroundColor: 'rgba(0, 82, 212, 0.1)',
                          borderRadius: 1,
                          border: '1px solid rgba(0, 82, 212, 0.2)'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: '#0052D4',
                            fontWeight: 600,
                            fontSize: { xs: "0.75rem", sm: "0.8125rem" }
                          }}>
                            Secure Access
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={12} md={4}>
                      <Button
                        variant="contained"
                        fullWidth
                        startIcon={
                          <Box sx={{
                            width: 20,
                            height: 20,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 1
                          }}>
                            <Healing sx={{ fontSize: 14 }} />
                          </Box>
                        }
                        onClick={() => window.open('https://try.thelrx.com', '_blank')}
                        sx={{
                          background: 'linear-gradient(135deg, #00359E 0%, #0052D4 50%, #00D4FF 100%)',
                          borderRadius: 2,
                          px: 3,
                          py: 1.5,
                          fontSize: { xs: "0.875rem", sm: "1rem" },
                          fontWeight: 700,
                          boxShadow: '0 8px 20px rgba(0, 53, 158, 0.3)',
                          textTransform: 'none',
                          position: 'relative',
                          overflow: 'hidden',
                          '&:hover': {
                            background: 'linear-gradient(135deg, #0052D4 0%, #00359E 50%, #0052D4 100%)',
                            boxShadow: '0 12px 24px rgba(0, 53, 158, 0.4)',
                            transform: 'translateY(-2px)',
                            transition: 'all 0.3s ease'
                          },
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: '-100%',
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                            transition: 'left 0.7s ease'
                          },
                          '&:hover::before': {
                            left: '100%'
                          }
                        }}
                      >
                        Check My Current Plan
                      </Button>
                      
                    </Grid>
                  </Grid>
                </Box>

                {/* Additional Features Section */}
                <Box sx={{ mt: { xs: 3, sm: 4 } }}>
                  <Typography 
                    variant="subtitle1" 
                    sx={{ 
                      fontWeight: 600, 
                      color: "#00359E",
                      mb: 3,
                      fontSize: { xs: "0.9375rem", sm: "1rem" }
                    }}
                  >
                    Additional Features Coming Soon:
                  </Typography>
                  <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: { xs: 1.5, sm: 2 }, 
                        borderRadius: 2, 
                        border: "1px solid rgba(0, 53, 158, 0.1)", 
                        backgroundColor: "white",
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 53, 158, 0.1)',
                          borderColor: 'rgba(0, 53, 158, 0.2)'
                        }
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500,
                            color: "#00359E",
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                          }}
                        >
                          • Treatment Plans & Progress Tracking
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: { xs: 1.5, sm: 2 }, 
                        borderRadius: 2, 
                        border: "1px solid rgba(0, 53, 158, 0.1)", 
                        backgroundColor: "white",
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 53, 158, 0.1)',
                          borderColor: 'rgba(0, 53, 158, 0.2)'
                        }
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500,
                            color: "#00359E",
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                          }}
                        >
                          • Medication Schedule & Reminders
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: { xs: 1.5, sm: 2 }, 
                        borderRadius: 2, 
                        border: "1px solid rgba(0, 53, 158, 0.1)", 
                        backgroundColor: "white",
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 53, 158, 0.1)',
                          borderColor: 'rgba(0, 53, 158, 0.2)'
                        }
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500,
                            color: "#00359E",
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                          }}
                        >
                          • Appointment History & Notes
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ 
                        p: { xs: 1.5, sm: 2 }, 
                        borderRadius: 2, 
                        border: "1px solid rgba(0, 53, 158, 0.1)", 
                        backgroundColor: "white",
                        height: '100%',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 16px rgba(0, 53, 158, 0.1)',
                          borderColor: 'rgba(0, 53, 158, 0.2)'
                        }
                      }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            fontWeight: 500,
                            color: "#00359E",
                            fontSize: { xs: "0.8125rem", sm: "0.875rem" }
                          }}
                        >
                          • Medical Documents & Reports
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>

                {/* Security Notice */}
                <Box sx={{ 
                  mt: { xs: 3, sm: 4 },
                  p: { xs: 2, sm: 3 },
                  borderRadius: 2,
                  backgroundColor: 'rgba(0, 53, 158, 0.02)',
                  border: '1px solid rgba(0, 53, 158, 0.1)'
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                    <Shield sx={{ color: "#00359E", mt: 0.5, fontSize: 20 }} />
                    <Box>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 600,
                          color: "#00359E",
                          mb: 0.5,
                          fontSize: { xs: "0.875rem", sm: "0.9375rem" }
                        }}
                      >
                        Secure Connection
                      </Typography>
                      <Typography 
                        variant="caption" 
                        color="textSecondary"
                        sx={{ fontSize: { xs: "0.75rem", sm: "0.8125rem" } }}
                      >
                        Your treatment plan is accessed through a secure, encrypted connection. 
                        All personal health information is protected and confidential.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}