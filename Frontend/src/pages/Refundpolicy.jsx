import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  useTheme,
  useMediaQuery,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  margin: theme.spacing(4, 0),
  borderRadius: theme.spacing(3),
  background: "linear-gradient(145deg, #ffffff 0%, #f8faff 100%)",
  boxShadow: "0 8px 40px rgba(0, 53, 158, 0.08)",
  border: "1px solid rgba(0, 53, 158, 0.05)",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3),
  },
}));

const InfoCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(3),
  border: "1px solid rgba(0, 53, 158, 0.15)",
  borderRadius: theme.spacing(2),
  background: "rgba(0, 53, 158, 0.02)",
  boxShadow: "0 4px 16px rgba(0, 53, 158, 0.08)",
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: "white",
  borderRadius: theme.spacing(2.5),
  padding: theme.spacing(4),
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4),
  border: "1px solid rgba(0, 53, 158, 0.1)",
  boxShadow: "0px 12px 48px rgba(0, 53, 158, 0.08)",
  position: "relative",
  "&:before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 6,
    background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
  },
}));

export default function RefundPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8faff 0%, #ffffff 100%)",
        py: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 10 },
            position: "relative",
            overflow: "hidden",
            py: { xs: 4, md: 6 },
            px: { xs: 2, sm: 0 },
          }}
        >
          {/* Background Gradient */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "linear-gradient(135deg, rgba(248, 250, 255, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)",
              zIndex: 0,
            }}
          />
          
          {/* Floating Gradient Orbs */}
          <Box
            sx={{
              position: "absolute",
              top: "10%",
              right: "5%",
              width: { xs: 120, md: 200 },
              height: { xs: 120, md: 200 },
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(0, 53, 158, 0.08) 0%, rgba(76, 201, 240, 0.08) 100%)",
              filter: "blur(40px)",
              zIndex: 0,
              animation: "float 6s ease-in-out infinite",
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-20px)" },
              },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "15%",
              left: "5%",
              width: { xs: 100, md: 180 },
              height: { xs: 100, md: 180 },
              borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(76, 201, 240, 0.08) 0%, rgba(0, 53, 158, 0.08) 100%)",
              filter: "blur(40px)",
              zIndex: 0,
              animation: "float 8s ease-in-out infinite 1s",
            }}
          />

          {/* Main Content */}
          <Box sx={{ position: "relative", zIndex: 1 }}>
            {/* Icon Circle */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: 80, md: 100 },
                height: { xs: 80, md: 100 },
                borderRadius: "50%",
                background: "linear-gradient(135deg, #00359E 0%, #4CC9F0 100%)",
                mb: { xs: 3, md: 4 },
                boxShadow: "0 16px 32px rgba(0, 53, 158, 0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 20px 40px rgba(0, 53, 158, 0.2)",
                },
              }}
            >
              <AssignmentReturnIcon
                sx={{
                  fontSize: { xs: 36, md: 48 },
                  color: "white",
                }}
              />
            </Box>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 2,
                lineHeight: 1.1,
                fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4rem" },
                letterSpacing: "-0.5px",
              }}
            >
              Refund Policy
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h4"
              sx={{
                color: "#00359E",
                fontWeight: 600,
                mb: 3,
                fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.5rem" },
                opacity: 0.9,
              }}
            >
              Your Satisfaction is Our Priority
            </Typography>

            {/* Decorative Line */}
            <Box
              sx={{
                width: 120,
                height: 4,
                background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
                mx: "auto",
                mt: 5,
                borderRadius: 2,
              }}
            />
          </Box>
        </Box>

        <StyledPaper elevation={0}>
          {/* Main Content */}
          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            At Liquid RX, LLC., your satisfaction is our top priority. We strive to provide high-quality products and an exceptional customer experience with every order placed through our store. We understand that there may be rare occasions when a product may not fully meet your expectations. Because of this, we believe in being transparent and setting clear guidelines to help you understand how our refund and return process works.
          </Typography>

          {/* No Returns Policy Card */}
          <InfoCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <InfoIcon sx={{ color: "#00359E", mr: 1.5, mt: 0.5, fontSize: 28 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#00359E", mb: 2 }}>
                    Our Refund and Return Policy
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444" }}>
                    Due to the nature of our products, we are unable to accommodate returns or offer refunds once an order has been delivered. Many of our items fall under categories that cannot be resold or restocked once they leave our facility, primarily for safety, hygiene, or product integrity reasons. To maintain the highest quality standards, we cannot accept opened, used, or otherwise handled products back into our inventory. This ensures that every item shipped to our customers is brand new, safe, and uncompromised.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </InfoCard>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            We recognize that this may feel inconvenient in situations where you are not entirely satisfied with a purchase. Please know that this policy is not intended to limit your experience or prevent you from receiving the support you deserve. Instead, it is in place to protect the quality of our products and ensure compliance with industry standards and regulations.
          </Typography>

          {/* Customer Support Section */}
          <InfoCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <SupportAgentIcon sx={{ color: "#00359E", mr: 1.5, mt: 0.5, fontSize: 28 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#00359E", mb: 2 }}>
                    We're Here to Help
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444", mb: 2 }}>
                    Although we cannot process refunds or accept returns, we are fully committed to assisting you with any concerns regarding your order. If you receive a product that does not meet your expectations, or if you feel dissatisfied for any reason, we strongly encourage you to reach out to us. Our customer support team is here to listen, understand your concern, and work with you to find a solution.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444" }}>
                    We invite you to contact us with the details of your issue, including your order number and a brief explanation of the problem you experienced. Whether you encountered something unexpected, have questions about using the product, or feel the results are not what you anticipated, we want to help. Your feedback is extremely valuable and plays an important role in our ongoing efforts to improve our products, services, and customer care.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </InfoCard>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            At Liquid RX, LLC. we work hard to earn your trust and build a positive relationship with every customer. Even though we are unable to process refunds, we take every concern seriously and aim to address your needs in the most supportive and respectful way possible. Our mission is not just to deliver great products but also to ensure you feel heard, appreciated, and assisted throughout your journey with us.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            If you have any questions about this policy or need assistance with an existing order, please contact our support team at any time. We are here to help and look forward to providing you with the best possible experience.
          </Typography>

          {/* Contact Section */}
          <ContactCard>
            <Box sx={{ textAlign: "center" }}>
              <SupportAgentIcon sx={{ fontSize: 48, color: "#00359E", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#00359E" }}>
                Need Assistance?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
                Our customer support team is ready to help you with any questions or concerns.
              </Typography>
              
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <EmailIcon sx={{ color: "#00359E" }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#00359E", 
                      fontWeight: 600
                    }}
                  >
                    support@thelrx.com
                  </Typography>
                </Box>
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: "#00359E" }} />
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: "#00359E", 
                      fontWeight: 600
                    }}
                  >
                    (866) 669-9191
                  </Typography>
                </Box>
              </Box>

              <Typography variant="body2" sx={{ color: "#666", fontStyle: "italic" }}>
                We're available to answer your questions and address your concerns
              </Typography>
            </Box>
          </ContactCard>

          {/* Footer Note */}
          <Box
            sx={{
              mt: 6,
              pt: 4,
              borderTop: "1px solid rgba(0, 53, 158, 0.1)",
              textAlign: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mb: 2 }}>
              <VerifiedUserIcon sx={{ color: "#00359E" }} />
              <Typography variant="body2" sx={{ color: "#666", fontWeight: 600 }}>
                Quality & Safety Commitment
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
              This policy ensures that every customer receives products of the highest quality and safety standards.
            </Typography>
            <Typography variant="caption" sx={{ color: "#888" }}>
              © 2024 Liquid RX, LLC. All Rights Reserved.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}