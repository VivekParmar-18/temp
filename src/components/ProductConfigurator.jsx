import { useState } from 'react';
import { Box, Grid, Slider, Select, MenuItem, Typography, Alert, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductConfigurator = ({ productType }) => {
  const { t } = useTranslation();
  const [config, setConfig] = useState({
    width: 60,
    height: 72,
    material: '',
    color: '#2A4B5A'
  });
  const [showAlert, setShowAlert] = useState(false);

  const materials = {
    mattress: ['memory-foam', 'latex', 'coir', 'pocket-spring'],
    curtains: ['linen', 'silk', 'polyester', 'sheer']
  };

  const calculatePrice = () => {
    const basePrice = productType === 'mattress' ? 5000 : 2000;
    return basePrice + (config.width * config.height * 2);
  };

  return (
    <Box sx={{ 
      maxWidth: 800, 
      mx: 'auto', 
      p: { xs: 2, md: 4 }, 
      bgcolor: 'background.paper', 
      borderRadius: 2 
    }}>
      {showAlert && (
        <Alert severity="success" onClose={() => setShowAlert(false)} sx={{ mb: 2 }}>
          {t('added_to_cart')}
        </Alert>
      )}

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>{t('dimensions')}</Typography>
          <Box sx={{ mb: 4 }}>
            <Typography gutterBottom>{t('width')}: {config.width}"</Typography>
            <Slider
              value={config.width}
              onChange={(e, v) => setConfig(c => ({ ...c, width: v }))}
              min={36}
              max={84}
            />
          </Box>
          <Box sx={{ mb: 4 }}>
            <Typography gutterBottom>{t('height')}: {config.height}"</Typography>
            <Slider
              value={config.height}
              onChange={(e, v) => setConfig(c => ({ ...c, height: v }))}
              min={72}
              max={120}
            />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>{t('materials')}</Typography>
          <Select
            fullWidth
            value={config.material}
            onChange={(e) => setConfig(c => ({ ...c, material: e.target.value }))}
            displayEmpty
            sx={{ mb: 4 }}
          >
            <MenuItem value="" disabled>{t('select_material')}</MenuItem>
            {materials[productType].map(mat => (
              <MenuItem key={mat} value={mat}>
                {t(`materials.${mat}`)}
              </MenuItem>
            ))}
          </Select>

          <Typography variant="h5" sx={{ mt: 4 }}>
            {t('estimated_price')}: ₹{calculatePrice()}
          </Typography>

          <Button 
            variant="contained" 
            size="large" 
            fullWidth 
            sx={{ mt: 4 }}
            onClick={() => setShowAlert(true)}
          >
            {t('add_to_cart')}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductConfigurator;