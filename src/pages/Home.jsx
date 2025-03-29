import { Box, Typography, Grid, Card, Container, Avatar, Chip, Divider, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import WhatsAppButton from '../components/common/WhatsAppButton';
import { motion } from 'framer-motion';
import { Engineering, CheckCircle, LocalShipping, Star, Groups, Favorite, History, SupportAgent } from '@mui/icons-material';

// Background images
const craftsmanshipBg = 'https://images.unsplash.com/photo-1581539250439-c96689b516dd';
const testimonialBg = 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca';
const legacyImg = 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf';


// Testimonial images (replace with your actual imports)
import Testimonial1 from '../assets/testimonials/rajesh.jpg';
import Testimonial2 from '../assets/testimonials/rajesh.jpg';
import Testimonial3 from '../assets/testimonials/rajesh.jpg';
import Testimonial4 from '../assets/testimonials/rajesh.jpg';
import Testimonial5 from '../assets/testimonials/rajesh.jpg';
import Testimonial6 from '../assets/testimonials/rajesh.jpg';

const HomePage = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(max-width:600px)');

  const testimonials = [
    {
      name: "Rajesh Mehta",
      role: "Hotel Owner",
      company: "Grand Palace Hotels",
      text: "For 15 years, Yogeshbhai's mattresses have been the backbone of our hotel's comfort. Their durability and support are unmatched in Ahmedabad.",
      rating: 5,
      image: Testimonial1
    },
    {
      name: "Neha Patel",
      role: "Homeowner",
      text: "The personalized attention we received while selecting curtains was exceptional. They transformed our living space completely!",
      rating: 5,
      image: Testimonial2
    },
    {
      name: "Dr. Amit Shah",
      role: "Orthopedic Surgeon",
      company: "City Hospital",
      text: "I recommend their orthopedic mattresses to all my patients. Quality that truly supports health and wellness.",
      rating: 5,
      image: Testimonial3
    },
    {
      name: "Priya Desai",
      role: "Interior Designer",
      company: "Design Studio",
      text: "The premium quality curtains with perfect finishing have become my go-to recommendation for all my clients.",
      rating: 5,
      image: Testimonial4
    },
    {
      name: "Vikram Joshi",
      role: "Hospitality Manager",
      company: "Heritage Inn",
      text: "Consistent quality across hundreds of mattresses we've purchased. A reliable partner for our chain of hotels.",
      rating: 5,
      image: Testimonial5
    }

  ];

  
  const services = [
    {
      title: "Expert Craftsmanship",
      icon: <Engineering fontSize="large" />,
      description: "40+ years of specialized mattress-making expertise",
      stats: "50,000+ Happy Customers",
    },
    {
      title: "Premium Quality",
      icon: <CheckCircle fontSize="large" />,
      description: "100% certified materials with 10-year warranty",
      stats: "0% Compromise Promise",
    },
    {
      title: "Personalized Service",
      icon: <Groups fontSize="large" />,
      description: "Custom solutions tailored to your needs",
      stats: "24/7 Support",
    },
  ];

  const processSteps = [
    {
      title: "Expert Consultation",
      icon: <Engineering sx={{ fontSize: 40 }} />,
      text: "Personalized sleep analysis with our experienced technicians"
    },
    {
      title: "Precision Manufacturing",
      icon: <CheckCircle sx={{ fontSize: 40 }} />,
      text: "87 quality checkpoints ensuring perfection in every stitch"
    },
    {
      title: "White-Glove Delivery",
      icon: <LocalShipping sx={{ fontSize: 40 }} />,
      text: "Careful installation and old mattress removal service"
    }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <Box sx={{ position: "relative" }}>
      {/* Hero Section with Craftsmanship Background */}
      <Box
        sx={{
          height: { xs: "70vh", md: "80vh" },
          background: `linear-gradient(rgba(12, 32, 45, 0.92), rgba(12, 32, 45, 0.88)), url(${craftsmanshipBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          p: 3,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.2rem", md: "3.5rem" },
                fontWeight: 700,
                mb: 2,
                lineHeight: 1.2,
              }}
            >
              Master Craftsmanship in
              <br />
              Every Stitch
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: "1.2rem", md: "1.6rem" },
                mb: 4,
                fontWeight: 300,
                maxWidth: 800,
                mx: "auto",
              }}
            >
              Three Generations of Sleep Perfection Since 1982
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <WhatsAppButton
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                px: { xs: 3, md: 4 },
                py: { xs: 1.5, md: 2 },
              }}
            />
          </motion.div>
        </Box>
      </Box>
      {/* Family Legacy Section - NEW */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.8rem" },
                    mb: 3,
                    fontWeight: 800,
                    color: "primary.main",
                  }}
                >
                  Our Sleep Legacy
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    mb: 3,
                    lineHeight: 1.8,
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 700 }}>
                    1962:
                  </Box>{" "}
                  Grandfather Shri. Rameshbhai Patel founds the workshop with 3
                  artisans
                  <br />
                  <Box component="span" sx={{ fontWeight: 700 }}>
                    1995:
                  </Box>{" "}
                  Father Yogeshbhai modernizes production while preserving
                  craftsmanship
                  <br />
                  <Box component="span" sx={{ fontWeight: 700 }}>
                    2023:
                  </Box>{" "}
                  We combine 60+ years expertise with digital innovation
                </Typography>

                <Box sx={{ display: "flex", gap: 3, mt: 4, flexWrap: "wrap" }}>
                  <Chip
                    label="60+ Years Expertise"
                    color="secondary"
                    icon={<History />}
                    sx={{ fontSize: "1.1rem", p: 2 }}
                  />
                  <Chip
                    label="Digital Transformation"
                    color="primary"
                    icon={<CheckCircle />}
                    sx={{ fontSize: "1.1rem", p: 2 }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    borderRadius: 3,
                    overflow: "hidden",
                    boxShadow: 6,
                    height: { xs: 300, md: 400 },
                  }}
                >
                  <Box
                    component="img"
                    src={Testimonial1}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      filter: "sepia(20%) contrast(110%)",
                    }}
                  />
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
      {/* Testimonials Section */}
      <Box
        sx={{
          // background: `linear-gradient(rgba(12, 32, 45, 0.92), url(${testimonialBg})`,
          background: `linear-gradient(rgba(12, 32, 45, 0.92), rgba(12, 32, 45, 0.92)), url(${testimonialBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",

          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeInUp}>
              <Typography
                variant="h3"
                align="center"
                sx={{
                  mb: 6,
                  fontWeight: 700,
                  color: "white",
                }}
              >
                Voices of Trust
              </Typography>
            </motion.div>

            <Box
              component={motion.div}
              sx={{
                display: "flex",
                gap: 4,
                pb: 4,
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                "&::-webkit-scrollbar": { display: "none" },
                width: "100%",
              }}
              drag="x"
              dragConstraints={{ right: 0, left: -1000 }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  component={motion.div}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.03 }}
                  sx={{
                    minWidth: 320,
                    maxWidth: 350,
                    scrollSnapAlign: "start",
                    p: 3,
                    height: "auto",
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <Box sx={{ display: "flex", mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} color="secondary" />
                    ))}
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: "italic",
                      color: "white",
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={testimonial.image}
                      sx={{ width: 56, height: 56 }}
                    />
                    <Box>
                      <Typography fontWeight={700} color="white">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {testimonial.role}
                        {testimonial.company && ` • ${testimonial.company}`}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </motion.div>
        </Container>
      </Box>
      {/* Commitment Section */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    mb: 3,
                    fontWeight: 700,
                  }}
                >
                  Our Artisanal Promise
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.1rem",
                    mb: 3,
                    lineHeight: 1.7,
                  }}
                >
                  Each product embodies our three core principles: Precision,
                  Passion, and Perfection
                </Typography>
                <Box sx={{ display: "flex", gap: 3, mt: 4, flexWrap: "wrap" }}>
                  <Chip
                    label="Handcrafted Excellence"
                    color="primary"
                    icon={<Star />}
                    sx={{ fontSize: "1rem", p: 2 }}
                  />
                  <Chip
                    label="Eco-Friendly Materials"
                    color="secondary"
                    icon={<Favorite />}
                    sx={{ fontSize: "1rem", p: 2 }}
                  />
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Card
                  sx={{
                    borderRadius: 3,
                    p: 4,
                    background: `linear-gradient(45deg, #1976d2 30%, #004ba0 90%)`,
                    color: "white",
                    boxShadow: 4,
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 700 }}
                  >
                    Quality Metrics
                  </Typography>
                  <Divider sx={{ borderColor: "white", mb: 3 }} />
                  <Grid container spacing={3}>
                    {[
                      {
                        icon: <Engineering />,
                        value: "40+",
                        label: "Years Expertise",
                      },
                      {
                        icon: <CheckCircle />,
                        value: "87",
                        label: "Quality Checks",
                      },
                      {
                        icon: <LocalShipping />,
                        value: "24h",
                        label: "Response Time",
                      },
                    ].map((metric, index) => (
                      <Grid item xs={4} key={index}>
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              bgcolor: "rgba(255,255,255,0.15)",
                              borderRadius: "50%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              mx: "auto",
                              mb: 1.5,
                            }}
                          >
                            {metric.icon}
                          </Box>
                          <Typography variant="h4" sx={{ fontWeight: 700 }}>
                            {metric.value}
                          </Typography>
                          <Typography variant="body2">
                            {metric.label}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>

      {/* Quality Process */}
      <Container maxWidth="xl" sx={{ py: 8 }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <Typography
              variant="h3"
              align="center"
              sx={{ mb: 6, fontWeight: 700 }}
            >
              The Royal Treatment Process
            </Typography>
          </motion.div>

          <Grid container spacing={6}>
            {processSteps.map((step, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div variants={fadeInUp}>
                  <Box sx={{ textAlign: "center" }}>
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Avatar
                        sx={{
                          bgcolor: "primary.main",
                          width: 80,
                          height: 80,
                          mb: 2,
                          mx: "auto",
                        }}
                      >
                        {step.icon}
                      </Avatar>
                      <Typography variant="h5" gutterBottom>
                        {step.title}
                      </Typography>
                      <Typography>{step.text}</Typography>
                    </motion.div>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HomePage;