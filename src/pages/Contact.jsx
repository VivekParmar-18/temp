import { Box, Typography, TextField, Button, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {t('contact_us')}
      </Typography>

      <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 4 }}>
        <Stack spacing={3}>
          <TextField label={t('full_name')} fullWidth />
          <TextField label={t('phone')} fullWidth />
          <TextField label={t('email')} fullWidth />
          <TextField 
            label={t('message')} 
            multiline 
            rows={4} 
            fullWidth 
          />
          <Button variant="contained" size="large">
            {t('submit')}
          </Button>
        </Stack>

        <Box>
          <Typography variant="h6" gutterBottom>
            {t('our_location')}
          </Typography>
          <Box sx={{ height: 300, bgcolor: '#eee', borderRadius: 2 }}>
            {/* Google Map Embed */}
            <iframe
              title="map"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0, borderRadius: '8px' }}
              src={`https://www.google.com/maps/embed/v1/place?key=${import.meta.env.VITE_GOOGLE_MAPS_KEY}&q=Ahmedabad,Gujarat`}
              allowFullScreen
            />
          </Box>
          <Typography sx={{ mt: 2 }}>
            {t('address_line1')}<br />
            {t('address_line2')}<br />
            Ahmedabad, Gujarat - 380001
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;