import { Box, Typography, Grid, Avatar, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  const team = [
    { name: t('team.yogesh'), role: t('roles.ceo'), img: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: t('team.rahul'), role: t('roles.craftsman'), img: 'https://randomuser.me/api/portraits/men/76.jpg' },
    { name: t('team.priya'), role: t('roles.designer'), img: 'https://randomuser.me/api/portraits/women/75.jpg' },
  ];

  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 0 } }}>
      <Typography variant="h3" align="center" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }} gutterBottom>
        {t('about_us')}
      </Typography>
      
      <Box sx={{ maxWidth: 800, mx: 'auto', my: 6 }}>
        <Typography variant="body1" paragraph>
          {t('about_text')}
        </Typography>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Typography variant="h4" align="center" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }} gutterBottom>
        {t('our_team')}
      </Typography>
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {team.map((member) => (
          <Grid item xs={12} sm={6} md={4} key={member.name}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                src={member.img}
                sx={{ 
                  width: { xs: 150, md: 200 }, 
                  height: { xs: 150, md: 200 }, 
                  mx: 'auto' 
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                {member.name}
              </Typography>
              <Typography color="text.secondary">
                {member.role}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutPage;