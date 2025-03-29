import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const ProductGallery = () => {
  const { t } = useTranslation();

  const products = [
    { id: 1, type: 'mattress', title: t('materials.memory-foam'), image: '/src/assets/mattress1.jpg' },
    { id: 2, type: 'mattress', title: t('materials.latex'), image: '/src/assets/mattress2.jpg' },
    { id: 3, type: 'curtains', title: t('materials.linen'), image: '/src/assets/curtain1.jpg' },
    { id: 4, type: 'curtains', title: t('materials.sheer'), image: '/src/assets/curtain2.jpg' }
  ];

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              height="200"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: 'cover' }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" align="center">
                {product.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGallery;