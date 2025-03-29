import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link as RouterLink } from 'react-router-dom';
import { 
  ThemeProvider,
  createTheme,
  CssBaseline,
  AppBar,
  Toolbar,
  Container,
  Box,
  Link,
  IconButton,
  Drawer,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import AboutPage from './pages/About';
import GalleryPage from './pages/Gallery';
import Footer from './components/common/Footer';
import LanguageToggle from './components/common/LanguageToggle';
import logo from './assets/logo.png';
const theme = createTheme({
  palette: {
    primary: { main: '#2A4B5A' },
    secondary: { main: '#E8C07D' },
    background: { default: '#f5f5f5' }
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    h4: { fontWeight: 600 }
  }
});

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = (
    <Box 
      component="nav" 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center',
        gap: 2
      }}
    >
      <Link component={RouterLink} to="/" color="inherit">Home</Link>
      <Link component={RouterLink} to="/products" color="inherit">Products</Link>
      <Link component={RouterLink} to="/gallery" color="inherit">Gallery</Link>
      <Link component={RouterLink} to="/about" color="inherit">About</Link>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <AppBar position="sticky" color="primary">
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <img 
              src={logo} 
              alt="Logo" 
              style={{ height: '40px', marginRight: '20px' }} 
            />
             {!isMobile && (
              <Box sx={{ 
                display: 'flex',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)'
              }}>
                {navLinks}
              </Box>
            )}

            {/* Language toggle - right aligned */}
            <Box sx={{ marginLeft: 'auto' }}>
              <LanguageToggle />
            </Box>
          </Toolbar>
        </AppBar>

        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': { 
                width: 240,
                p: 2,
                boxSizing: 'border-box'
              }
            }}
          >
            {navLinks}
          </Drawer>
        )}

        <Container maxWidth="xl" sx={{ py: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;