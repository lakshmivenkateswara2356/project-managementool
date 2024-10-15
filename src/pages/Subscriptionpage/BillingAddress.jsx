import React, { useState } from 'react';
import { Box, Typography, Button, Checkbox, Link } from '@mui/material';

const BillingAddress = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        
        color: '#fff',
        padding: '30px',
        borderRadius: '10px',
      
        margin: '0 auto',
      }}
    >
      {/* Billing Address Section */}
      <Typography variant="h5" sx={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Billing Address
      </Typography>

      <Typography sx={{ marginBottom: '10px', fontSize: '14px', color: 'gray' }}>
        BCG Technologies
      </Typography>

      <Typography sx={{ marginBottom: '10px', fontSize: '14px', color: 'gray' }}>
        14thA Cross, Garden Layout, JP Nagar 7th Phase <br />
        Mumbai, India
      </Typography>

      <Typography sx={{ marginBottom: '10px', fontSize: '14px', color: 'gray' }}>
        Sold-to address is the same as billing address
      </Typography>

      {/* Edit Address Link */}
      <Link href="#" sx={{ marginBottom: '20px', display: 'block', fontFamily:'sans-serif', color: '#3767B1', fontSize: '14px',textDecoration:'none', }}>
        Edit address
      </Link>

      {/* Checkbox Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Checkbox
          checked={checked}
          onChange={handleCheckboxChange} // Handle checkbox changes
          sx={{ color: 'gray', '&.Mui-checked': { color: '#1976d2' } }} // Checkbox styles
        />
        <Typography sx={{ fontSize: '14px', color: 'gray',textDecoration:'none', }}>
          I agree to the{' '}
          <Link href="#" sx={{ color: '#3767B1', fontSize: '14px',textDecoration:'none', }}>
            Clikkle Customer Agreement
          </Link>{' '}
          and acknowledge the{' '}
          <Link href="#" sx={{ color: '#3767B1', fontSize: '14px',textDecoration:'none', }}>
            Clikkle Privacy Policy.
          </Link>
        </Typography>
      </Box>

      {/* Confirm Subscription Button */}
      <Button
        variant="contained"
        // Disable button if checkbox is not checked
        sx={{
          backgroundColor: checked ? '#3767B1' : 'gray', // Set button color based on checkbox
          color: checked ? '#fff' : 'white', // Set button text color
          width: '100%',
          fontSize: '16px',
          padding: '10px',
          textTransform: 'none',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: checked ? '#5e5e5e' : '#303030', // Hover color based on checkbox
          },
        }}
      >
        Confirm Subscription
      </Button>
      {/* Subscription Terms */}
      <Typography sx={{ fontSize: '12px', color: 'gray', marginTop: '20px' }}>
        By selecting “Confirm Subscription” you agree to pay the total amount of each billing cycle starting when your
        trial ends until your subscription is canceled. The amount will reflect user count and any applicable discounts,
        promotions or credits. You can{' '}
        <Link href="#" sx={{ color: '#1976d2' }}>
          cancel
        </Link>{' '}
        anytime. If prices change, we’ll notify you.
      </Typography>
    </Box>
  );
};

export default BillingAddress;
