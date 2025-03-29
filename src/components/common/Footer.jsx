import { Box, Typography, Grid, Link, Container } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white', 
        py: 6, 
        mt: 'auto' 
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.about.title')}
            </Typography>
            <Typography variant="body2">
              {t('footer.about.description')}
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.links.title')}
            </Typography>
            <Grid container spacing={1}>
              {['home', 'products', 'gallery', 'about'].map((link) => (
                <Grid item xs={6} key={link}>
                  <Link href={`/${link}`} color="inherit" underline="hover">
                    {t(`footer.links.${link}`)}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              {t('footer.contact.title')}
            </Typography>
            <Typography variant="body2">
              {t('address_line1')}<br />
              {t('address_line2')}<br />
              Ahmedabad, Gujarat - 380001
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: 1, pt: 4, mt: 4, textAlign: 'center' }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Yogeshbhai Mattress. {t('footer.rights_reserved')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;