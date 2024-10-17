import React from 'react';
import { Box, Typography, Button, Link } from '@mui/material';

const PrivacySection = () => {
  const handleOpenCookiePreferences = () => {
    console.log('Open cookie preferences');
    // Logic to open cookie preferences goes here (e.g., modal or redirect)
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000', // Black background
        color: '#fff',            // White text color
        padding: '40px',
        maxWidth: '600px',
        textAlign:'left',
        margin: 'auto',
        borderRadius: '8px',
      }}
    >
      {/* Privacy Title */}
      

      <Typography sx={{ marginBottom: '30px', fontSize: '16px', color: '#ccc' ,marginLeft:'-470px'}}>
        Your privacy matters to us, so we're committed to being transparent about how we collect, use, and share your information.
      </Typography>

      {/* Cookie Preferences Title */}
      <Typography variant="h5" sx={{ marginBottom: '10px',marginLeft:'-470px' }}>
        Cookie preferences
      </Typography>

      <Typography sx={{ marginBottom: '20px', fontSize: '14px', color: '#ccc',marginLeft:'-470px' }}>
        When you visit a Clikkle product, it may store or retrieve information in your browser, primarily through cookies. This data may relate to you, your preferences, or your device, and is mainly used to ensure the site functions as expected. While it typically doesn't directly identify you, it helps provide a more personalized browsing experience. We respect your privacy, allowing you to choose which cookies you'd like to allow.{' '}
        <Link href="#" sx={{ color: '#3767B1', textDecoration: 'underline' }}>
          Clikkle cookies and tracking notice
        </Link>
      </Typography>

      {/* Open Cookie Preferences Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleOpenCookiePreferences}
        sx={{
            width:'250px',
            marginLeft:'-470px',
          backgroundColor: '#151515', // Disabled look
          color: '#A5A5A5',
          cursor: 'not-allowed',
          padding: '12px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#555', // Same color on hover when disabled
          },
        }}
       
      >
        Open cookie preferences
      </Button>
    </Box>
  );
};

export default PrivacySection;
