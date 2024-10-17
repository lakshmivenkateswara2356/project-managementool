import React from 'react';
import { Box, Typography, Select, MenuItem, FormControl, Button } from '@mui/material';

const AccountPreferences = () => {
  return (
    <Box
      sx={{
         // Dark background
        color: '#fff',            // White text
            // Full height for the view
        padding: '20px',          // Padding around the content
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '400px',         // Container width
          padding: '30px',        // Inner padding
          borderRadius: '8px',    // Rounded corners
           // Slightly lighter background
        }}
      >
        {/* Title */}
       
        <Typography variant="body2" sx={{ marginBottom: '30px', color: '#bbb',marginLeft:'-550px', }}>
          Control settings related to your account.
        </Typography>

        {/* Language and Region Section */}
        <Typography variant="h6" sx={{ marginBottom: '10px',marginLeft:'-550px', }}>
          Language and region
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '15px', color: '#bbb',marginLeft:'-550px', }}>
          Changes to your language and time zone will be reflected on your Clikkle Projects. Update your language and time zone for other Clikkle products from your product settings.
        </Typography>
<Box sx={{display:'flex',flexDirection:'column',}}>
        {/* Language Select */}
        <FormControl fullWidth sx={{ marginBottom: '20px',marginLeft:'-550px', }}>
          <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>Language</Typography>
          <Select defaultValue="en" sx={{  width:'800px',borderStyle:'solid',borderWidth:'1px', color: 'gray',height:'55px'}}>
            <MenuItem value="en">English (US)</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
          </Select>
        </FormControl>

        {/* Time Zone Select */}
        <FormControl fullWidth sx={{ marginBottom: '40px',marginLeft:'-550px', }}>
          <Typography variant="subtitle1" sx={{ marginBottom: '8px' }}>Time zone</Typography>
          <Select defaultValue="" displayEmpty sx={{ width:'800px',borderStyle:'solid',borderWidth:'1px', color: 'gray',height:'55px' }}>
            <MenuItem sx={{backgroundColor:'red'}} value="">
              <em>Your time zone</em>
            </MenuItem>
            <MenuItem value="PST">Pacific Standard Time (PST)</MenuItem>
            <MenuItem value="EST">Eastern Standard Time (EST)</MenuItem>
          </Select>
        </FormControl>

        </Box>

        {/* Delete Account Section */}
        <Typography variant="h6" sx={{ marginBottom: '10px',marginLeft:'-550px', }}>
          Delete your account
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '15px', color: '#bbb',marginLeft:'-550px', }}>
          When you delete your account, you lose access to Clikkle account services, and we permanently delete your personal data. You can cancel the deletion within 14 days.
        </Typography>

        <Button
          variant="contained"
          fullWidth
         
          sx={{
            marginLeft:'-550px',
            backgroundColor: '#333',
            color: '#666',
            textTransform: 'none',
            cursor: 'not-allowed',
          }}
        >
          Delete account
        </Button>
      </Box>
    </Box>
  );
};

export default AccountPreferences;
