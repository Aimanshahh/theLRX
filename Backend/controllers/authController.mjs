import User from "../models/User.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// REGISTER
export const registerUser = async (req, res) => {
  try {
    console.log("📝 Register request received");
    console.log("Request body:", req.body);
    
    const {
      firstName,
      lastName,
      email,
      phone,
      dateOfBirth,
      address,
      city,
      state,
      zipCode,
      password,
      confirmPassword,
      agreeToTerms
    } = req.body;

    console.log("🔍 Checking required fields...");
    
    // Validate required fields
    if (
      !firstName || !lastName || !email || !phone || !dateOfBirth ||
      !address || !city || !state || !zipCode ||
      !password || !confirmPassword || agreeToTerms !== true
    ) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ 
        message: "Please fill all required fields and agree to terms",
        requiredFields: {
          firstName: !firstName,
          lastName: !lastName,
          email: !email,
          phone: !phone,
          dateOfBirth: !dateOfBirth,
          address: !address,
          city: !city,
          state: !state,
          zipCode: !zipCode,
          password: !password,
          confirmPassword: !confirmPassword,
          agreeToTerms: agreeToTerms !== true
        }
      });
    }

    if (password !== confirmPassword) {
      console.log("❌ Passwords do not match");
      return res.status(400).json({ message: "Passwords do not match" });
    }

    console.log("🔍 Checking for existing user...");
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ Email already registered");
      return res.status(400).json({ message: "Email is already registered" });
    }

    console.log("🔐 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("📝 Creating user...");
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(),
      phone,
      dateOfBirth,
      address,
      city,
      state,
      zipCode,
      password: hashedPassword
    });

    console.log("✅ User created successfully:", user._id);
    
    const token = generateToken(user._id);
    
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      address: user.address,
      city: user.city,
      state: user.state,
      zipCode: user.zipCode,
      token: token,
      message: "Registration successful"
    });

  } catch (error) {
    console.error("❌ Registration error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// LOGIN
export const loginUser = async (req, res) => {
  try {
    console.log("🔑 Login request received");
    console.log("Request body:", req.body);
    
    const { email, password } = req.body;
    
    if (!email || !password) {
      console.log("❌ Missing email or password");
      return res.status(400).json({ 
        message: "Please provide email and password",
        missing: {
          email: !email,
          password: !password
        }
      });
    }

    console.log("🔍 Finding user...");
    const user = await User.findOne({ email: email.toLowerCase() });
    
    if (!user) {
      console.log("❌ User not found");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    console.log("🔐 Comparing passwords...");
    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user._id);
    
    console.log("✅ Login successful for user:", user._id);
    
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      address: user.address,
      city: user.city,
      state: user.state,
      zipCode: user.zipCode,
      token: token,
      message: "Login successful"
    });

  } catch (error) {
    console.error("❌ Login error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
};

// GET USER PROFILE
export const getUserProfile = async (req, res) => {
  try {
    console.log("👤 Get profile request received");
    console.log("User ID:", req.user._id);

    const user = await User.findById(req.user._id).select("-password");

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    console.log("✅ Profile retrieved successfully");
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      dateOfBirth: user.dateOfBirth,
      address: user.address,
      city: user.city,
      state: user.state,
      zipCode: user.zipCode,
    });

  } catch (error) {
    console.error("❌ Get profile error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};

// UPDATE USER PROFILE
export const updateProfile = async (req, res) => {
  try {
    console.log("✏️ Update profile request received");
    console.log("User ID:", req.user._id);
    console.log("Request body:", req.body);

    const user = await User.findById(req.user._id);

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Update fields
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.dateOfBirth = req.body.dateOfBirth || user.dateOfBirth;
    user.address = req.body.address || user.address;
    user.city = req.body.city || user.city;
    user.state = req.body.state || user.state;
    user.zipCode = req.body.zipCode || user.zipCode;

    const updatedUser = await user.save();

    console.log("✅ Profile updated successfully");

    res.status(200).json({
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      phone: updatedUser.phone,
      dateOfBirth: updatedUser.dateOfBirth,
      address: updatedUser.address,
      city: updatedUser.city,
      state: updatedUser.state,
      zipCode: updatedUser.zipCode,
      message: "Profile updated successfully"
    });

  } catch (error) {
    console.error("❌ Update profile error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};

// CHANGE PASSWORD
export const changePassword = async (req, res) => {
  try {
    console.log("🔐 Change password request received");
    console.log("User ID:", req.user._id);

    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      console.log("❌ Missing required fields");
      return res.status(400).json({ 
        message: "Please provide current password and new password" 
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      console.log("❌ User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // Verify current password
    console.log("🔍 Verifying current password...");
    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      console.log("❌ Current password is incorrect");
      return res.status(401).json({ message: "Current password is incorrect" });
    }

    // Validate new password
    if (newPassword.length < 8) {
      console.log("❌ New password too short");
      return res.status(400).json({ 
        message: "New password must be at least 8 characters" 
      });
    }

    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(newPassword)) {
      console.log("❌ New password doesn't meet requirements");
      return res.status(400).json({ 
        message: "Password must contain uppercase, lowercase, and numbers" 
      });
    }

    // Hash new password
    console.log("🔐 Hashing new password...");
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    console.log("✅ Password changed successfully");

    res.status(200).json({
      message: "Password changed successfully"
    });

  } catch (error) {
    console.error("❌ Change password error:", error);
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};