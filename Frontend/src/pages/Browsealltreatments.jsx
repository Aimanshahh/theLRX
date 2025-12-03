import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  TextField,
  InputAdornment,
  Divider,
  Stack,
  alpha,
  Fab,
  Fade,
  Zoom,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { motion } from 'framer-motion';
import logoImg from '../assets/LRXLOGOS/LOGO-1.png'; // <-- your logo

const navLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'How It Works', href: '/how-it-works' },
];

// Treatment categories data
const treatmentCategories = [
  {
    id: 1,
    title: 'Hair Restoration',
    description: 'Advanced solutions for hair growth, thickness, and density restoration',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 8,
    popular: true,
    color: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
  },
  {
    id: 2,
    title: 'Skin Rejuvenation',
    description: 'Youthful, glowing skin with advanced dermatological treatments',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 12,
    popular: true,
    color: 'linear-gradient(135deg, #747578 0%, #8B8D8E 100%)',
  },
  {
    id: 3,
    title: 'Body Contouring',
    description: 'Sculpt and tone your body with non-invasive contouring treatments',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 6,
    popular: false,
    color: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
  },
  {
    id: 4,
    title: 'Laser Treatments',
    description: 'Precision laser solutions for hair removal and skin concerns',
    image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 10,
    popular: true,
    color: 'linear-gradient(135deg, #747578 0%, #8B8D8E 100%)',
  },
  {
    id: 5,
    title: 'Injectables',
    description: 'Botox, fillers, and other injectable aesthetic treatments',
    image: 'https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 7,
    popular: true,
    color: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
  },
  {
    id: 6,
    title: 'Wellness & IV Therapy',
    description: 'Hydration, vitamin infusion, and holistic wellness treatments',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 5,
    popular: false,
    color: 'linear-gradient(135deg, #747578 0%, #8B8D8E 100%)',
  },
  {
    id: 7,
    title: 'Men\'s Treatments',
    description: 'Aesthetic solutions specifically designed for men',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 9,
    popular: true,
    color: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
  },
  {
    id: 8,
    title: 'Post-Treatment Care',
    description: 'Specialized care and maintenance after your treatments',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    subTreatments: 4,
    popular: false,
    color: 'linear-gradient(135deg, #747578 0%, #8B8D8E 100%)',
  },
];

export default function BrowseAllTreatments() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // Handle category expansion
  const handleCategoryClick = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // Filter categories based on search
  const filteredCategories = treatmentCategories.filter(category =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Scroll to top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll indicator and scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollIndicator = document.getElementById('scrollIndicator');
      if (!scrollIndicator) return;
      
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      scrollIndicator.style.width = `${scrollPercent}%`;
      
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobile drawer
  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box component="img" src={logoImg} alt="Logo" sx={{ width: 50, height: 50 }} />
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <List>
        {navLinks.map((link) => (
          <motion.div
            key={link.label}
            whileHover={{ x: 10, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ListItem button component="a" href={link.href}>
              <ListItemText primary={link.label} />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Main Navbar */}
      <AppBar position="sticky" sx={{ 
        backgroundColor: 'white', 
        color: '#00359E', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        zIndex: theme.zIndex.drawer + 1,
      }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            height: 70, 
            px: { xs: 1, md: 0 } 
          }}>
            {/* Logo */}
            <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="img" src={logoImg} alt="Logo" sx={{ width: 50, height: 50 }} />
            </Box>

            {/* Desktop Links */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                {navLinks.map((link) => (
                  <motion.div
                    key={link.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Button
                      href={link.href}
                      sx={{
                        color: '#00359E',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': { color: '#0053C7', backgroundColor: 'transparent' },
                      }}
                    >
                      {link.label}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton onClick={handleDrawerToggle} sx={{ color: '#00359E' }}>
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(0, 53, 158, 0.05) 0%, rgba(255, 255, 255, 1) 100%)',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 300,
            height: 300,
            background: 'radial-gradient(circle, rgba(0, 59, 157, 0.1) 0%, rgba(0, 59, 157, 0) 70%)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Fade in timeout={800}>
                <Box>
                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: '"Playfair Display", serif',
                      fontWeight: 300,
                      color: '#00359E',
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      lineHeight: 1.2,
                      mb: 2,
                    }}
                  >
                    Discover Our{' '}
                    <Box component="span" sx={{ 
                      background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>
                      Luxury Treatments
                    </Box>
                  </Typography>
                  
                  <Typography
                    variant="h5"
                    sx={{
                      color: '#747578',
                      fontWeight: 300,
                      fontSize: { xs: '1rem', md: '1.25rem' },
                      mb: 4,
                      lineHeight: 1.6,
                    }}
                  >
                    Experience the pinnacle of aesthetic excellence with our curated collection 
                    of advanced treatments, tailored to reveal your most beautiful self.
                  </Typography>

                  {/* Stats */}
                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    {[
                      { value: '50+', label: 'Treatments' },
                      { value: '4.9★', label: 'Client Rating' },
                      { value: '10K+', label: 'Happy Clients' },
                      { value: '15', label: 'Expert Specialists' },
                    ].map((stat, index) => (
                      <Grid item key={index}>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }}
                        >
                          {stat.value}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: '#8B8D8E' }}
                        >
                          {stat.label}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>

                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="contained"
                        size="large"
                        sx={{
                          background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 500,
                          '&:hover': {
                            background: 'linear-gradient(135deg, #002A7A 0%, #00359E 100%)',
                            boxShadow: '0 8px 20px rgba(0, 53, 158, 0.3)',
                          },
                        }}
                      >
                        Browse All Treatments
                      </Button>
                    </motion.div>
                    
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outlined"
                        size="large"
                        sx={{
                          borderColor: '#00359E',
                          color: '#00359E',
                          px: 4,
                          py: 1.5,
                          borderRadius: 2,
                          fontWeight: 500,
                          '&:hover': {
                            borderColor: '#00359E',
                            backgroundColor: 'rgba(0, 53, 158, 0.04)',
                          },
                        }}
                      >
                        Book Consultation
                      </Button>
                    </motion.div>
                  </Box>
                </Box>
              </Fade>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Fade in timeout={1000}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: 300, md: 400 },
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px rgba(0, 53, 158, 0.1)',
                  }}
                >
                  <CardMedia
                    component="img"
                    image="https://images.unsplash.com/photo-1556228578-9c360e1d8d34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Luxury Treatments"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(0, 53, 158, 0.7))',
                      p: 3,
                    }}
                  >
                    <Typography variant="h5" sx={{ color: 'white', fontWeight: 500 }}>
                      Experience Luxury Aesthetics
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      State-of-the-art facility with premium care
                    </Typography>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Treatment Categories Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Fade in timeout={1200}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Playfair Display", serif',
                fontWeight: 300,
                color: '#00359E',
                fontSize: { xs: '2rem', md: '2.5rem' },
                mb: 2,
              }}
            >
              Browse Treatment Categories
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#747578',
                maxWidth: 600,
                mx: 'auto',
                mb: 4,
              }}
            >
              Explore our comprehensive range of luxury aesthetic treatments, 
              each designed to address specific concerns with precision and care.
            </Typography>
            
            {/* Search Bar */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              sx={{
                maxWidth: 500,
                mx: 'auto',
                mb: 4,
                '& .MuiOutlinedInput-root': {
                  borderRadius: 3,
                  backgroundColor: alpha('#f5f5f5', 0.5),
                  '&:hover': {
                    backgroundColor: alpha('#f5f5f5', 0.8),
                  },
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#8B8D8E' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Fade>

        {/* Category Cards Grid */}
        <Grid container spacing={3}>
          {filteredCategories.map((category, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                    border: '1px solid',
                    borderColor: 'rgba(0, 53, 158, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 24px rgba(0, 53, 158, 0.15)',
                    },
                  }}
                >
                  {/* Card Header with Image */}
                  <Box sx={{ position: 'relative', height: 180 }}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={category.image}
                      alt={category.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.5))',
                      }}
                    />
                    
                    {/* Category Badge */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 12,
                        left: 12,
                        background: category.color,
                        color: 'white',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 2,
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {category.subTreatments} treatments
                    </Box>
                    
                    {/* Favorite Button */}
                    <IconButton
                      sx={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        backgroundColor: 'white',
                        '&:hover': { backgroundColor: 'white' },
                      }}
                    >
                      <FavoriteBorderIcon sx={{ color: '#8B8D8E', fontSize: 20 }} />
                    </IconButton>
                    
                    {/* Popular Badge */}
                    {category.popular && (
                      <Chip
                        label="Popular"
                        size="small"
                        sx={{
                          position: 'absolute',
                          bottom: 12,
                          left: 12,
                          backgroundColor: '#FFD700',
                          color: '#000',
                          fontWeight: 600,
                          fontSize: '0.7rem',
                        }}
                      />
                    )}
                  </Box>

                  {/* Card Content */}
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: '#00359E',
                        mb: 1,
                        fontSize: '1.1rem',
                      }}
                    >
                      {category.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#747578',
                        lineHeight: 1.5,
                        fontSize: '0.875rem',
                      }}
                    >
                      {category.description}
                    </Typography>
                  </CardContent>

                  {/* Card Actions */}
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button
                      fullWidth
                      variant="contained"
                      endIcon={<ArrowForwardIcon />}
                      onClick={() => handleCategoryClick(category.id)}
                      sx={{
                        background: category.color,
                        color: 'white',
                        borderRadius: 2,
                        py: 1,
                        '&:hover': {
                          background: category.color,
                          opacity: 0.9,
                        },
                      }}
                    >
                      Explore Treatments
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* No Results Message */}
        {filteredCategories.length === 0 && (
          <Fade in>
            <Box sx={{ textAlign: 'center', py: 10 }}>
              <Typography variant="h6" sx={{ color: '#747578', mb: 2 }}>
                No treatments found matching "{searchQuery}"
              </Typography>
              <Button
                variant="outlined"
                onClick={() => setSearchQuery('')}
                sx={{
                  borderColor: '#00359E',
                  color: '#00359E',
                  '&:hover': {
                    borderColor: '#00359E',
                    backgroundColor: 'rgba(0, 53, 158, 0.04)',
                  },
                }}
              >
                Clear Search
              </Button>
            </Box>
          </Fade>
        )}
      </Container>

      {/* Footer */}
      <Box sx={{ 
        backgroundColor: '#747578', 
        color: 'white', 
        py: { xs: 6, md: 8 } 
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box component="img" src={logoImg} alt="Logo" sx={{ 
                  width: 40, 
                  height: 40, 
                  mr: 2,
                  filter: 'brightness(0) invert(1)'
                }} />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Luxe Clinic
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#E0E0E0', mb: 2 }}>
                Premium aesthetic treatments with exceptional care and results.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                Contact Info
              </Typography>
              <Stack spacing={1}>
                <Typography variant="body2" sx={{ color: '#E0E0E0' }}>
                  123 Beauty Street, Beverly Hills, CA 90210
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E0E0' }}>
                  (310) 123-4567
                </Typography>
                <Typography variant="body2" sx={{ color: '#E0E0E0' }}>
                  contact@luxeclinic.com
                </Typography>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
                Quick Links
              </Typography>
              <Stack spacing={1}>
                {navLinks.map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    sx={{
                      justifyContent: 'flex-start',
                      color: '#E0E0E0',
                      textTransform: 'none',
                      '&:hover': {
                        color: 'white',
                        backgroundColor: 'transparent',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Stack>
            </Grid>
          </Grid>
          
          <Divider sx={{ my: 4, borderColor: '#8B8D8E' }} />
          
          <Typography variant="body2" sx={{ 
            textAlign: 'center', 
            color: '#8B8D8E' 
          }}>
            © {new Date().getFullYear()} Luxe Clinic. All rights reserved.
          </Typography>
        </Container>
      </Box>

      {/* Scroll to Top Button */}
      <Zoom in={showScrollTop}>
        <Fab
          onClick={handleScrollToTop}
          sx={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            backgroundColor: '#00359E',
            color: 'white',
            '&:hover': {
              backgroundColor: '#002A7A',
            },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      {/* Scroll Progress Bar */}
      <Box
        id="scrollIndicator"
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: 3,
          background: 'linear-gradient(135deg, #00359E 0%, #003B9D 100%)',
          width: '0%',
          zIndex: theme.zIndex.drawer + 2,
          transition: 'width 0.25s ease',
        }}
      />
    </>
  );
}
// NEED TO BE CHANGED 