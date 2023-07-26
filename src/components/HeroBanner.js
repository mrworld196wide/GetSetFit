import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '210px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="10px">
    <Typography color="#FF2625" fontWeight={ 600 } fontSize="96px" sx={{opacity: '0.6'}} mb="2px">GetSetFit</Typography>
    <Typography fontSize="32px" fontFamily="Alegreya" lineHeight="35px">
      Because who needs a personal trainer <br style={{margin:"9px"}}/>when you can have an algorithm?
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '160px' }}>
      Exercise
    </Typography>
    <Typography fontWeight={700} color="#FF2625" sx={{ opacity: '0.4', display: { lg: 'block', xs: 'none' }, fontSize: '30px' }}>
      Push, Pull, Legs And Repeat
    </Typography>  
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
