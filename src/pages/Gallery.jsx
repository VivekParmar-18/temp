import { Box, ImageList, ImageListItem, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const GalleryPage = () => {
  const { t } = useTranslation();

  const galleryItems = [
    { 
      img: 'https://images.unsplash.com/photo-1616627561839-074385245ff6',
      title: t('gallery.mattress1'),
      cols: 2
    },
    { 
      img: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69', 
      title: t('gallery.mattress2'),
      cols: 1
    },
    { 
      img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba', 
      title: t('gallery.workshop'),
      cols: 1
    },
    { 
      img: 'https://images.unsplash.com/photo-1571456690423-c965b878b715', 
      title: t('gallery.curtains1'),
      cols: 2
    },
    { 
      img: 'https://images.unsplash.com/photo-1582582621959-48d27397dc69', 
      title: t('gallery.curtains2'),
      cols: 1
    },
    { 
      img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba', 
      title: t('gallery.installation'),
      cols: 1
    },
  ];

  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 0 } }}>
      <Typography variant="h3" align="center" sx={{ 
        fontSize: { xs: '2rem', md: '2.5rem' },
        mb: 4
      }}>
        {t('our_gallery')}
      </Typography>
      
      <ImageList 
        variant="masonry" 
        cols={3} 
        gap={16}
        sx={{
          maxWidth: '95vw',
          mx: 'auto',
          '& .MuiImageList-root': {
            overflow: 'visible'
          }
        }}
      >
        {galleryItems.map((item) => (
          <ImageListItem 
            key={item.img}
            cols={item.cols || 1}
            sx={{ 
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: 3
            }}
          >
            <img
              src={`${item.img}?w=400&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover'
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryPage;