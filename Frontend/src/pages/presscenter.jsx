import React from 'react';
import { Box, Typography, Container, useTheme, alpha } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Campaign';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { keyframes } from '@mui/system';

const PressCenter = () => {
  const theme = useTheme();
  
  // Using YOUR theme colors
  const colors = {
    darkGrey: '#747578',
    lightGrey: '#8B8D8E',
    darkBlue: '#00359E',
    lightBlue: '#003B9D',
    white: '#FFFFFF',
    black: '#000000',
    background: '#f8fafc'
  };

  // Animation keyframes
  const float = keyframes`
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  `;

  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

  const pulse = keyframes`
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  `;

  const shimmer = keyframes`
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  `;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `linear-gradient(135deg, ${colors.background} 0%, ${alpha(colors.darkBlue, 0.05)} 100%)`,
        py: { xs: 4, sm: 8 },
        px: { xs: 2, sm: 3 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 20% 50%, ${alpha(colors.darkBlue, 0.05)} 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, ${alpha(colors.lightBlue, 0.05)} 0%, transparent 50%)`,
          pointerEvents: 'none',
        }
      }}
    >
      {/* Animated background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(colors.darkBlue, 0.1)}, ${alpha(colors.lightBlue, 0.1)})`,
          animation: `${float} 6s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '15%',
          right: '10%',
          width: 150,
          height: 150,
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${alpha(colors.lightBlue, 0.1)}, ${alpha(colors.darkBlue, 0.1)})`,
          animation: `${float} 8s ease-in-out infinite 1s`,
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Main Construction Spinner/Icon */}
          <Box
            sx={{
              width: { xs: 120, sm: 160 },
              height: { xs: 120, sm: 160 },
              margin: '0 auto 40px',
              position: 'relative',
              animation: `${pulse} 3s ease-in-out infinite`,
            }}
          >
            {/* Outer ring */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: `4px solid ${alpha(colors.darkBlue, 0.2)}`,
                borderRadius: '50%',
                animation: `${spin} 10s linear infinite`,
              }}
            />
            
            {/* Middle ring */}
            <Box
              sx={{
                position: 'absolute',
                top: '20%',
                left: '20%',
                right: '20%',
                bottom: '20%',
                border: `3px solid ${alpha(colors.lightBlue, 0.3)}`,
                borderRadius: '50%',
                animation: `${spin} 8s linear infinite reverse`,
              }}
            />
            
            {/* Inner content */}
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: 80, sm: 100 },
                height: { xs: 80, sm: 100 },
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 20px 40px ${alpha(colors.darkBlue, 0.3)}`,
              }}
            >
              <CampaignIcon 
                sx={{ 
                  fontSize: { xs: 40, sm: 50 }, 
                  color: 'white',
                  animation: `${spin} 20s linear infinite`,
                }} 
              />
            </Box>
          </Box>

          {/* Prominent Coming Soon Badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 2,
              px: { xs: 3, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              borderRadius: 50,
              background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.lightBlue})`,
              backgroundSize: '200% auto',
              animation: `${shimmer} 3s linear infinite`,
              marginBottom: { xs: 4, sm: 5 },
              boxShadow: `0 10px 30px ${alpha(colors.darkBlue, 0.3)}`,
              border: `2px solid ${alpha(colors.white, 0.2)}`,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(90deg, transparent, ${alpha(colors.white, 0.2)}, transparent)`,
                animation: `${shimmer} 2s linear infinite`,
              }
            }}
          >
            <NewReleasesIcon sx={{ fontSize: { xs: 20, sm: 24 }, color: 'white' }} />
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                fontWeight: 800,
                letterSpacing: 3,
                fontSize: { xs: '0.9rem', sm: '1.1rem' },
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              COMING SOON
            </Typography>
            <NewReleasesIcon sx={{ fontSize: { xs: 20, sm: 24 }, color: 'white' }} />
          </Box>

          {/* Main Title with Gradient */}
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              background: `linear-gradient(135deg, ${colors.darkBlue}, ${colors.lightBlue})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              lineHeight: 1.2,
            }}
          >
            Press Center
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              color: colors.darkGrey,
              mb: 6,
              fontWeight: 400,
              fontSize: { xs: '1.1rem', sm: '1.5rem' },
              maxWidth: 600,
              mx: 'auto',
            }}
          >
            Media resources and announcements
          </Typography>

          {/* WIDE, SHORT COMING SOON CARD */}
          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              p: { xs: 3, sm: 4 },
              borderRadius: 2,
              background: colors.white,
              boxShadow: `0 10px 40px ${alpha(colors.darkBlue, 0.1)}`,
              border: `1px solid ${alpha(colors.darkBlue, 0.1)}`,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: { xs: 3, sm: 4 },
              textAlign: 'left',
              minHeight: { xs: 'auto', sm: 140 },
              flexDirection: { xs: 'column', sm: 'row' },
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 3,
                background: `linear-gradient(90deg, ${colors.darkBlue}, ${colors.lightBlue})`,
              }
            }}
          >
            {/* Left Icon Section */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${alpha(colors.darkBlue, 0.1)}, ${alpha(colors.lightBlue, 0.1)})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CampaignIcon sx={{ fontSize: 32, color: colors.darkBlue }} />
              </Box>
            </Box>
            
            {/* Center Content Section */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="h5"
                sx={{
                  color: colors.darkBlue,
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: '1.3rem', sm: '1.5rem' },
                }}
              >
                Press Resources Coming Soon
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  color: colors.darkGrey,
                  fontSize: { xs: '0.95rem', sm: '1rem' },
                  lineHeight: 1.6,
                }}
              >
                Our Press Center is currently under development. Soon you'll find press releases, 
                media kits, company information, and resources for journalists and media professionals.
              </Typography>
            </Box>
            
            {/* Right Status Section */}
            <Box
              sx={{
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-end' },
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2.5,
                  py: 0.75,
                  borderRadius: 20,
                  background: alpha(colors.darkBlue, 0.1),
                  border: `1px solid ${alpha(colors.darkBlue, 0.2)}`,
                }}
              >
                <CampaignIcon sx={{ fontSize: 14, color: colors.darkBlue }} />
                <Typography
                  variant="caption"
                  sx={{
                    color: colors.darkBlue,
                    fontWeight: 600,
                    letterSpacing: 0.5,
                    fontSize: '0.75rem',
                  }}
                >
                  In Development
                </Typography>
              </Box>
              
            </Box>
          </Box>

          {/* Progress Section */}
          <Box sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: colors.black,
                  fontWeight: 600,
                }}
              >
                Development Progress
              </Typography>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: colors.darkBlue, 
                  fontWeight: 700,
                }}
              >
                60%
              </Typography>
            </Box>
            
            {/* Progress Bar */}
            <Box
              sx={{
                height: 8,
                width: '100%',
                bgcolor: alpha(colors.lightGrey, 0.2),
                borderRadius: 4,
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(90deg, 
                    ${colors.darkBlue} 0%, 
                    ${colors.lightBlue} 50%, 
                    ${colors.darkBlue} 100%)`,
                  backgroundSize: '200% auto',
                  width: '60%',
                  borderRadius: 4,
                  animation: `${shimmer} 2s linear infinite`,
                }
              }}
            />
            
            <Typography 
              variant="caption" 
              sx={{ 
                color: colors.darkGrey,
                mt: 1,
                display: 'block',
                textAlign: 'center',
              }}
            >
              Under active development
            </Typography>
          </Box>

          {/* Simple Call to Action */}
          <Box
            sx={{
              maxWidth: 800,
              mx: 'auto',
              p: 3,
              borderRadius: 2,
              bgcolor: alpha(colors.darkBlue, 0.03),
              border: `1px solid ${alpha(colors.darkBlue, 0.1)}`,
            }}
          >
            <Typography variant="body1" sx={{ color: colors.darkGrey, textAlign: 'center' }}>
              For immediate press inquiries, please contact us directly. Our full press center will be available soon.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PressCenter;