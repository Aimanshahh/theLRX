import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  List,
  ListItem,
  Divider,
  useTheme,
  useMediaQuery,
  Button,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import SecurityIcon from "@mui/icons-material/Security";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WarningIcon from "@mui/icons-material/Warning";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ScienceIcon from "@mui/icons-material/Science";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: "#00359E",
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  marginTop: theme.spacing(5),
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  "&:after": {
    content: '""',
    position: "absolute",
    bottom: -12,
    left: 0,
    width: 80,
    height: 4,
    background: "linear-gradient(90deg, #00359E 0%, #4CC9F0 100%)",
    borderRadius: 2,
  },
}));

const WarningCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  border: "1px solid rgba(219, 68, 55, 0.2)",
  borderRadius: theme.spacing(1.5),
  background: "rgba(219, 68, 55, 0.03)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 6px 20px rgba(219, 68, 55, 0.1)",
  },
}));

const EmergencyCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  border: "2px solid #DB4437",
  borderRadius: theme.spacing(2),
  background: "linear-gradient(135deg, rgba(219, 68, 55, 0.05) 0%, rgba(219, 68, 55, 0.02) 100%)",
  boxShadow: "0 8px 32px rgba(219, 68, 55, 0.15)",
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

export default function TelehealthConsent() {
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
              <HealthAndSafetyIcon
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
              Telehealth Consent
            </Typography>

            {/* Updated Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                px: 3,
                py: 1,
                bgcolor: "rgba(255, 255, 255, 0.8)",
                borderRadius: "50px",
                border: "1px solid rgba(0, 53, 158, 0.15)",
                mb: 4,
                backdropFilter: "blur(10px)",
                boxShadow: "0 8px 24px rgba(0, 53, 158, 0.08)",
              }}
            >
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4CC9F0",
                  animation: "pulse 2s ease-in-out infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                  },
                }}
              />
              <Typography
                sx={{
                  color: "#00359E",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                }}
              >
                Last Updated: Febuary 12, 2026
              </Typography>
            </Box>

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
          {/* Important Notice */}
          <WarningCard>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <WarningIcon sx={{ color: "#DB4437", mr: 1.5, mt: 0.5 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#DB4437", mb: 1 }}>
                    INFORMED CONSENT REGARDING USE OF TELEHEALTH
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#444" }}>
                    BY CLICKING "I AGREE," CHECKING A RELATED BOX TO SIGNIFY YOUR ACCEPTANCE, USING ANY OTHER ACCEPTANCE PROTOCOL PRESENTED THROUGH THE SERVICE OR OTHERWISE AFFIRMATIVELY ACCEPTING THIS CONSENT, YOU ACKNOWLEDGE THAT YOU HAVE READ, ACCEPTED, AND AGREED TO BE BOUND BY THIS CONSENT. IF YOU DO NOT AGREE TO THIS CONSENT, DO NOT CREATE AN ACCOUNT OR USE THE SERVICE. YOU HEREBY GRANT AGENCY AUTHORITY TO ANY PARTY WHO CLICKS ON THE "I AGREE" BUTTON OR OTHERWISE INDICATES ACCEPTANCE TO THIS CONSENT ON YOUR BEHALF. <strong>IF YOU ARE EXPERIENCING A LIFE-THREATENING SITUATION SUCH AS CONTEMPLATING SUICIDE, CALL 911 OR THE 988 SUICIDE & CRISIS LIFELINE AT 988.</strong>
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </WarningCard>

          {/* Purpose Section */}
          <SectionTitle variant="h4">
            <HealthAndSafetyIcon />
            Purpose
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            The purpose of this consent form ("Consent") is to provide you with information about telehealth and to obtain your informed consent to the use of telehealth in the delivery of healthcare and/or mental health services to you by physicians, physician assistants, nurse practitioners, and/or mental health professionals ("Providers") using the online platforms owned and operated by Liquid RX, LLC.("Service"). In this Consent, the terms "you" and "yours" refer to the person using the Service, or in the case of a use of the Service by or on behalf of an individual minor between the ages of thirteen (13) and eighteen (18) or higher age of majority under applicable state law, "you" and "yours" refer to and include (i) the parent or legal guardian who provides consent to the use of the Service by such minor or uses the Service on behalf of such minor, and (ii) the minor for whom consent is being provided or on whose behalf the Service is being utilized.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Use of Telehealth Section */}
          <SectionTitle variant="h4">
            <VideoCallIcon />
            Use of Telehealth
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Telehealth involves the delivery of healthcare and/or mental health services using electronic communications, information technology or other means between a healthcare or mental health provider and a patient who are not in the same physical location. Through Liquid RX, LLC. telehealth may be used for diagnosis, treatment, follow-up and/or patient education, and may include, but is not limited to, one or more of the following:
          </Typography>

          <Box sx={{ pl: 3, mb: 4 }}>
            <List>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Electronic transmission of medical records
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Photo images, personal health information or other data between you and your provider
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Real-time interactions with your provider via audio and video communications
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Secure messaging and email communications
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0, mb: 1 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Review and sharing of medical device data, sound files, and video files
                </Typography>
              </ListItem>
              <ListItem sx={{ display: 'list-item', pl: 0 }}>
                <Typography variant="body1" sx={{ color: "#444" }}>
                  Remote monitoring and assessment of health conditions
                </Typography>
              </ListItem>
            </List>
          </Box>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            Alternative methods of care may be available to you, such as in-person services, and you have the right to choose an alternative method of care at any time. We encourage you to discuss all available treatment options with your Provider to determine the most appropriate care plan for your specific situation.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Anticipated Benefits Section */}
          <SectionTitle variant="h4">
            <FavoriteIcon />
            Anticipated Benefits
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            The use of Liquid RX, LLC. telehealth services may offer you several possible benefits. Our platform makes it easier and more efficient for you to access medical care and treatment for conditions managed by your Provider(s), while allowing you to obtain these services at times that are most convenient for you. You can receive care from the comfort and privacy of your chosen location, eliminating the need for travel and reducing exposure to other patients and potential illnesses. The platform enables continuous access to your healthcare team through secure messaging, fostering more frequent and consistent communication with your Provider(s).
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            For mental health services specifically, participation may help reduce stress and anxiety, assist in managing and decreasing negative thoughts, and support improved relationships and communication skills. Many patients find that telehealth services increase their comfort and confidence in various settings, provide valuable tools for better emotional regulation, and enable more consistent access to mental health support. The convenience and accessibility of telehealth often leads to better engagement with treatment and improved overall outcomes.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Potential Risks Section */}
          <SectionTitle variant="h4">
            <WarningIcon />
            Potential Risks
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            While Liquid RX, LLC. is telehealth services offer many advantages, it's important to understand that there are potential risks associated with the use of telehealth and related technology. The quality, accuracy, or effectiveness of services you receive from your Provider could be affected by the limitations of virtual care. Our technology platform, like any digital service, may experience technical issues including system bugs or errors that could limit functionality, affect data transmission, or temporarily make services unavailable.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            The virtual nature of care means your Provider(s) cannot perform physical examinations or conduct certain tests that might be possible during in-person visits. This limitation may affect their ability to diagnose or treat some conditions, and in some cases, they may need to refer you to in-person care or emergency services. For instance, without the ability to directly assess vital signs or perform hands-on examinations, your Provider(s) may have a more limited ability to identify certain medical conditions or emergency situations.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Technology-related challenges could lead to delays in medical evaluation or treatment. These might occur due to provider unavailability, technical difficulties, or equipment failures. While we maintain robust security measures, there is always a risk that electronic systems or security protocols could be compromised, potentially affecting the privacy of your medical information. Electronic storage and communication of health information, including through email, may be more vulnerable to unauthorized access compared to traditional paper records.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Your treatment options may be limited by regulatory requirements in certain jurisdictions, particularly regarding prescriptions and controlled substances. Without complete access to all your medical records, there is a potential risk of adverse drug interactions, allergic reactions, or other medical judgment errors.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            For mental health services specifically, it's important to note that you may temporarily experience increased discomfort or emotional difficulty as therapy progresses this is a normal part of the therapeutic process, but the virtual format may present unique challenges in managing these feelings.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            Additionally, telehealth services rely heavily on information you provide directly to your Provider(s). The accuracy and completeness of this information significantly impacts the quality of care we can deliver. If you are unable to effectively communicate your symptoms or concerns through our virtual platform, this could affect the quality of care you receive.
          </Typography>

          {/* Emergency Situations Card */}
          <EmergencyCard>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}>
                <LocalHospitalIcon sx={{ fontSize: 40, color: "#DB4437", mr: 2 }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 700, color: "#DB4437", mb: 2 }}>
                    LIFE THREATENING AND OTHER EMERGENCY SITUATIONS; FOLLOW-UP CARE
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444", mb: 2, fontWeight: 600 }}>
                    If you are experiencing a life-threatening situation such as contemplating suicide, call 911 or the 988 Suicide and Crisis Lifeline at 988.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444", mb: 2, fontWeight: 600 }}>
                    If the situation is an emergency, call 911.
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: "#444" }}>
                    In some situations, telehealth is not an appropriate method of care. If you require immediate or urgent care, you must seek care at an emergency room facility or other provider equipped to deliver urgent or emergent care. Providers may not respond promptly to communications you submit through the Service. If you are not experiencing an emergency or do not require immediate or urgent care, you can communicate with Providers through the secure message service in the Service.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </EmergencyCard>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Data Privacy & Protection Section */}
          <SectionTitle variant="h4">
            <SecurityIcon />
            Data Privacy & Protection
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            The electronic systems used in the Service will incorporate network and software security protocols to protect the privacy and security of your information and will include measures to safeguard data against intentional or unintentional corruption. Personal information that identifies you or contains protected health information will not be disclosed to any third party without your consent, except as authorized by law for the purposes of consultation, treatment, payment/billing, certain administrative purposes, and as required by law to disclose to other persons and agencies certain information obtained during the provision of mental health services (e.g., danger to self or others; mandatory reporting of child, elder, or vulnerable adult abuse) or as otherwise set forth in your Provider's Notice of Privacy Practices. Use of the Service may include email communications to and from you that may include your protected health information. You understand that Hims & Hers does not and cannot guarantee the security or privacy of the services you use to receive communications, including for example your email service provider.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Laboratory Products & Services Section */}
          <SectionTitle variant="h4">
            <ScienceIcon />
            Laboratory Products & Services
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 3, color: "#444" }}>
            Certain healthcare services provided to you by Providers via Liquid RX, LLC. Service may require that you complete an at-home diagnostic test. These diagnostic tests are provided by third-party laboratories, and neither Liquid RX, LLC. or your Provider(s) can guarantee the accuracy or reliability of these tests. Like all medical tests, these laboratory tests may occasionally provide false negative, false positive, or inconclusive results that could impact your Provider(s) ability to correctly diagnose or treat your medical conditions.
          </Typography>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 4, color: "#444" }}>
            It's important to understand that any failure or defect in these tests, or errors in sample collection, could affect your Provider(s) ability to accurately diagnose or treat your conditions. We work with reputable laboratory partners, but as with any medical testing, there are inherent limitations and risks that you should be aware of when using at-home diagnostic services. Your Provider will help you understand your test results and may recommend additional testing or in-person evaluation if necessary to ensure accurate diagnosis and appropriate treatment.
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Open Payments Notice Section */}
          <SectionTitle variant="h4">
            <AccountBalanceIcon />
            Open Payments Notice
          </SectionTitle>

          <Typography variant="body1" sx={{ lineHeight: 1.8, mb: 2, color: "#444" }}>
            For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services Open Payments web page is provided here. The federal Physician Payments Sunshine Act requires that detailed information about payment and other payments of value worth over ten dollars ($10) from manufacturers of drugs, medical device, and biologics to physicians and teaching hospitals be made available to the public. The Open Payments database is a federal tool used to search payments made by drug and device companies to physicians and teaching hospitals. It can be found at{" "}
            <Link 
              href="https://openpaymentsdata.cms.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ 
                color: "#00359E", 
                fontWeight: 600,
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline"
                }
              }}
            >
              https://openpaymentsdata.cms.gov
            </Link>
            .
          </Typography>

          <Divider sx={{ my: 4, borderColor: "rgba(0, 53, 158, 0.1)" }} />

          {/* Contact Section */}
          <SectionTitle variant="h4">
            <EmailIcon />
            Contacting Us
          </SectionTitle>

          <ContactCard>
            <Box sx={{ textAlign: "center" }}>
              <EmailIcon sx={{ fontSize: 48, color: "#00359E", mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: "#00359E" }}>
                Questions About This Consent?
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, color: "#666" }}>
                If you have any questions about this Privacy Policy, please contact us by email at:
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: "#00359E", 
                  fontWeight: 600,
                  mb: 3
                }}
              >
                support@thelrx.com
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 2, flexWrap: "wrap" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PhoneIcon sx={{ color: "#00359E" }} />
                  <Typography variant="body1" sx={{ color: "#444" }}>
                    (866) 669-9191
                  </Typography>
                </Box>
              </Box>
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
            <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
              © 2025 Liquid RX, LLC. All rights reserved. Liquid RX, LLC. and the Liquid RX, LLC. logo are trademarks of Liquid RX, LLC.
            </Typography>
          </Box>
        </StyledPaper>
      </Container>
    </Box>
  );
}