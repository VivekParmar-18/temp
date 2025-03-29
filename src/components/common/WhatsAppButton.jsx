import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
  const phoneNumber = '+919876543210';
  const message = 'Hello! I need information about your products.';

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon />}
      onClick={() => window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
        '_blank'
      )}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1000,
        bgcolor: '#25D366',
        '&:hover': { bgcolor: '#128C7E' },
        fontSize: { xs: '0.875rem', md: '1rem' }
      }}
    >
      WhatsApp Us
    </Button>
  );
};

export default WhatsAppButton;