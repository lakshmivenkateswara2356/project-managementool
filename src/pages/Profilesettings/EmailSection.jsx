import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

const EmailSection = () => {
  const [newEmail, setNewEmail] = useState('');

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSaveChanges = () => {
    console.log('New email:', newEmail);
    // Add logic to save changes, e.g., API call to update email
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000', // Black background
        color: '#fff',            // White text color
        padding: '40px',
        maxWidth: '500px',        // Width of the content
        margin: 'auto',
        textAlign:'left',alignItems:'left',
        borderRadius: '8px',      // Optional rounded corners
      }}
    >
      {/* Email Title */}
     

      {/* Current Email Section */}
      <Typography sx={{ marginBottom: '10px', fontSize: '14px',marginLeft:'-525px' }}>
        <strong>Current email</strong>
      </Typography>
      <Typography sx={{ marginBottom: '30px', fontSize: '14px', color: '#ccc',marginLeft:'-525px' }}>
        Your current email address is <strong style={{ color: '#fff' }}>rohitanderson@clikkle.com</strong>
      </Typography>

      {/* New Email Input */}
      <Typography sx={{ marginBottom: '10px', fontSize: '14px',marginLeft:'-525px' }}>
        <strong>New email address</strong>
      </Typography>

      <Box sx={{display:'flex',flexDirection:'column'}}>
      <TextField
        fullWidth
        value={newEmail}
        onChange={handleEmailChange}
        placeholder="Enter new email address"
        variant="outlined"
        InputProps={{
          style: {
            width:'800px',
            backgroundColor: '#000', // Input background color
            color: '#fff',           // Input text color
            borderColor: '#666',marginLeft:'-525px',  
               // Border color
          },
        }}
        InputLabelProps={{
          style: { color: '#666' },  // Placeholder color
        }}
        sx={{
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#666',   // Border color
            },
            '&:hover fieldset': {
              borderColor: '#888',   // Border on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',   // Border on focus
            },
          },
        }}
      />

      {/* Save Changes Button */}
      <Button
        variant="contained"
        sx={{
            width:'200px',
          backgroundColor: '#3767B1'
          ,marginLeft:'-525px',
          '&:hover': {
            backgroundColor: '#285693',
          },
          textTransform: 'none',      // Disable uppercase text transform
          padding: '10px 20px',
          marginBottom: '30px',
        }}
        onClick={handleSaveChanges}
      >
        Save changes
      </Button>
      </Box>

      {/* Email Notification Section */}
      <Typography sx={{ marginBottom: '10px', fontSize: '14px',marginLeft:'-525px' }}>
        <strong>Email notification</strong>
      </Typography>
      <Typography sx={{ fontSize: '14px', color: '#ccc',marginLeft:'-525px' }}>
        To manage product emails, visit{' '}
        <Link
          href="#"
          sx={{
            color: '#3c7cd7',
            textDecoration: 'underline',
          }}
        >
          product settings
        </Link>
        .
      </Typography>
    </Box>
  );
};

export default EmailSection;
