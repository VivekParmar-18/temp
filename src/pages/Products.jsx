import { useState } from 'react';
import { 
  Box, 
  Tabs, 
  Tab, 
  Typography, 
  useMediaQuery, 
  Grid, 
  Card, 
  Select,
  MenuItem,
  Stack,
  Avatar,
  Button,
  Divider,
  Chip
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import KingBedIcon from '@mui/icons-material/KingBed';
import CurtainsIcon from '@mui/icons-material/Curtains';
import { generateWhatsAppMessage } from '../utils/whatsapp';

// Local image imports
import MattressSingle from '../assets/mattress1.jpg';
import MattressDouble from '../assets/mattress1.jpg';
import MattressQueen from '../assets/mattress1.jpg';
import MattressKing from '../assets/mattress2.jpg';
import CurtainArabian from '../assets/curtains1.jpg';
import CurtainModern from '../assets/curtains1.jpg';
import CurtainCustom from '../assets/curtains2.jpg';

const ProductsPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box sx={{ 
      py: 4, 
      px: { xs: 2, md: 0 }, 
      maxWidth: 1200, 
      mx: 'auto',
      minHeight: '70vh'
    }}>
      <Typography variant="h3" align="center" sx={{ 
        fontSize: { xs: '2rem', md: '2.5rem' },
        mb: 4,
        color: 'primary.main',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: 1
      }}>
        Premium Sleep Solutions
      </Typography>
      
      <Tabs 
        value={tabValue} 
        onChange={(e, newValue) => setTabValue(newValue)}
        centered
        variant={isMobile ? 'scrollable' : 'standard'}
        sx={{ 
          mb: 4,
          '& .MuiTabs-indicator': { 
            height: 4,
            bgcolor: 'secondary.main'
          }
        }}
      >
        <Tab 
          icon={<KingBedIcon fontSize="medium" />} 
          label="Luxury Mattresses" 
          sx={{ fontWeight: 550 }}
        />
        <Tab 
          icon={<CurtainsIcon fontSize="medium" />} 
          label="Designer Curtains" 
          sx={{ fontWeight: 550 }}
        />
      </Tabs>

      <Box sx={{ 
        width: '100%',
        maxWidth: 1000,
        mx: 'auto'
      }}>
        {tabValue === 0 && <MattressConfigurator />}
        {tabValue === 1 && <CurtainConfigurator />}
      </Box>
    </Box>
  );
};

const MattressConfigurator = () => {
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState(null);
  
  const mattressSizes = [
    { 
      name: 'Ortho Comfort', 
      dimensions: '36"x75"',
      features: ['Memory Foam', 'Pressure Relief', 'Anti-Dust'],
      image: MattressSingle
    },
    { 
      name: 'Royal Double', 
      dimensions: '54"x75"',
      features: ['Pocket Springs', 'Latex Layer', 'Edge Support'],
      image: MattressDouble
    },
    { 
      name: 'Queen Elite', 
      dimensions: '60"x80"',
      features: ['Cooling Gel', 'Zoned Support', 'Eco-Friendly'],
      image: MattressQueen
    },
    { 
      name: 'Grand King', 
      dimensions: '76"x80"',
      features: ['Hybrid Design', 'Premium Coir', '10-Year Warranty'],
      image: MattressKing
    },
  ];

  const handleWhatsApp = (product) => {
    const phoneNumber = '+919824365189'; // Your WhatsApp number
    const message = generateWhatsAppMessage(product);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <Card sx={{ 
      p: 4, 
      borderRadius: 3,
      boxShadow: 3,
      width: '100%',
      bgcolor: 'background.paper'
    }}>
      <Typography variant="h4" gutterBottom sx={{ 
        fontWeight: 600,
        mb: 3,
        color: 'text.primary',
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}>
        <KingBedIcon color="primary" fontSize="large" />
        Bespoke Mattress Collection
      </Typography>
      <Divider sx={{ mb: 4 }} />
      
      <Select
        fullWidth
        value={selectedSize || ''}
        onChange={(e) => setSelectedSize(e.target.value)}
        displayEmpty
        sx={{ 
          mb: 4,
          height: 56,
          '& .MuiSelect-select': { 
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            py: 1.5
          }
        }}
        renderValue={(value) => value ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar 
              src={value.image} 
              sx={{ width: 60, height: 60, borderRadius: 1 }}
              variant="square"
            />
            <Box>
              <Typography fontWeight={600}>{value.name}</Typography>
              <Typography variant="body2">{value.dimensions}</Typography>
            </Box>
          </Box>
        ) : (
          <Typography color="text.secondary">Select mattress type</Typography>
        )}
      >
        {mattressSizes.map((size) => (
          <MenuItem key={size.name} value={size} sx={{ py: 2 }}>
            <Stack direction="row" spacing={3} alignItems="center" width="100%">
              <Avatar 
                src={size.image} 
                sx={{ width: 80, height: 80, borderRadius: 1 }}
                variant="square"
              />
              <Box flexGrow={1}>
                <Typography variant="body1" fontWeight={600}>
                  {size.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {size.dimensions}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {size.features.map((feature) => (
                    <Chip 
                      key={feature}
                      label={feature}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </Stack>
          </MenuItem>
        ))}
      </Select>

      {selectedSize && (
        <Box sx={{ 
          bgcolor: 'background.default', 
          p: 4, 
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.3s ease'
        }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={selectedSize.image}
                alt={selectedSize.name}
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: 400,
                  mx: 'auto',
                  display: 'block',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {selectedSize.name} Specifications
              </Typography>
              
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 3,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Stack spacing={2}>
                  <Typography variant="body1">
                    <strong>Dimensions:</strong> {selectedSize.dimensions}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Key Features:</strong>
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {selectedSize.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        color="primary"
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                  <Button 
                    variant="contained" 
                    size="large" 
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={() => handleWhatsApp(selectedSize)}
                  >
                    Request Custom Quote
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Card>
  );
};

const CurtainConfigurator = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(null);
  
  const curtainOptions = [
    { 
      type: 'Arabian Elegance', 
      style: 'Traditional',
      features: ['Hand-embroidered', 'Heavy Fabric', 'Gold Threads'],
      image: CurtainArabian
    },
    { 
      type: 'Modern Minimalist', 
      style: 'Contemporary',
      features: ['Noise Reducing', 'Blackout', 'Thermal Insulation'],
      image: CurtainModern
    },
    { 
      type: 'Royal Jacquard', 
      style: 'Luxury',
      features: ['Custom Length', 'Premium Lining', 'Designer Patterns'],
      image: CurtainCustom
    },
  ];
  const handleWhatsApp = (product) => {
    const phoneNumber = '+919824365189'; // Your WhatsApp number
    const message = generateWhatsAppMessage(product);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Card
      sx={{
        p: 4,
        borderRadius: 3,
        boxShadow: 3,
        width: "100%",
        bgcolor: "background.paper",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 600,
          mb: 3,
          color: "text.primary",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <CurtainsIcon color="primary" fontSize="large" />
        Artisan Curtain Designs
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Select
        fullWidth
        value={selectedOption || ""}
        onChange={(e) => setSelectedOption(e.target.value)}
        displayEmpty
        sx={{
          mb: 4,
          height: 56,
          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
            gap: 2,
            py: 1.5,
          },
        }}
        renderValue={(value) =>
          value ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Avatar
                src={value.image}
                sx={{ width: 60, height: 60, borderRadius: 1 }}
                variant="square"
              />
              <Box>
                <Typography fontWeight={600}>{value.type}</Typography>
                <Typography variant="body2">{value.style}</Typography>
              </Box>
            </Box>
          ) : (
            <Typography color="text.secondary">Select curtain style</Typography>
          )
        }
      >
         {curtainOptions.map((size) => (
          <MenuItem key={size.name} value={size} sx={{ py: 2 }}>
            <Stack direction="row" spacing={3} alignItems="center" width="100%">
              <Avatar 
                src={size.image} 
                sx={{ width: 80, height: 80, borderRadius: 1 }}
                variant="square"
              />
              <Box flexGrow={1}>
                <Typography variant="body1" fontWeight={600}>
                  {size.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {size.style}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {size.features.map((feature) => (
                    <Chip 
                      key={feature}
                      label={feature}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
              </Box>
            </Stack>
          </MenuItem>
        ))}
      </Select>

      {/* {selectedOption && (
        <Box
          sx={{
            bgcolor: "background.default",
            p: 4,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            transition: "all 0.3s ease",
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "100%", // 1:1 aspect ratio
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={selectedOption.image}
                  alt={selectedOption.type}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {selectedOption.type} Details
              </Typography>

              <Box
                sx={{
                  bgcolor: "background.paper",
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              > */}
              {selectedOption && (
        <Box sx={{ 
          bgcolor: 'background.default', 
          p: 4, 
          borderRadius: 3,
          border: '1px solid',
          borderColor: 'divider',
          transition: 'all 0.3s ease'
        }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={selectedOption.image}
                alt={selectedOption.type}
                sx={{ 
                  width: '100%', 
                  height: 'auto',
                  maxWidth: 400,
                  mx: 'auto',
                  display: 'block',
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                {selectedOption.type} Details
              </Typography>
              
              <Box sx={{ 
                bgcolor: 'background.paper', 
                p: 3,
                borderRadius: 2,
                border: '1px solid',
                borderColor: 'divider'
              }}>
                <Stack spacing={2}>
                  <Typography variant="body1">
                    <strong>Style:</strong> {selectedOption.style}
                  </Typography>
                  <Typography variant="body1">
                    <strong>Premium Features:</strong>
                  </Typography>
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {selectedOption.features.map((feature) => (
                      <Chip
                        key={feature}
                        label={feature}
                        color="secondary"
                        size="small"
                        sx={{ borderRadius: 1 }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{ mt: 3 }}
                    onClick={() => handleWhatsApp(selectedOption)}
                  >
                    Request Quotation
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      )}
    </Card>
  );
};

export default ProductsPage;