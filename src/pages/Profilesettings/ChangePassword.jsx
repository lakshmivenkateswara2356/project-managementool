import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  // Handlers for password visibility toggle
  const handleClickShowCurrentPassword = () => setShowCurrentPassword(!showCurrentPassword);
  const handleClickShowNewPassword = () => setShowNewPassword(!showNewPassword);

  // Handler for changing passwords
  const handleSaveChanges = () => {
    console.log('Password Changed');
    // Add logic for saving password (API call, etc.)
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000', // Black background
        color: '#fff',            // White text color
        padding: '40px',
        maxWidth: '500px',
        margin: 'auto',
        textAlign:'left',
        borderRadius: '8px',
      }}
    >
      {/* Title Section */}
      <Typography variant="h5" sx={{ marginBottom: '20px',marginLeft:'-520px' }}>
        Change your password
      </Typography>
      <Typography sx={{ marginBottom: '30px', fontSize: '14px', color: '#ccc',marginLeft:'-520px' }}>
        When you update your password, you’ll stay logged in on this device, but you may be logged out on other devices.
      </Typography>

      {/* Current Password */}
      <Typography sx={{ marginBottom: '10px', fontSize: '14px',marginLeft:'-520px' }}>
        <strong>Current password</strong>
      </Typography>
<Box>
      <Box>
      <TextField
      
        fullWidth
        type={showCurrentPassword ? 'text' : 'password'}
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        placeholder="Enter current password"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowCurrentPassword} edge="end">
                {showCurrentPassword ? <VisibilityOff sx={{ color: '#666' }} /> : <Visibility sx={{ color: '#666' }} />}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            backgroundColor: '#000',
            color: '#fff',
            borderColor: '#666',
          },
        }}
        sx={{
            width:'800px',
            marginLeft:'-520px',
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#666',
            },
            '&:hover fieldset': {
              borderColor: '#888',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        }}
      />

      {/* New Password */}
      <Typography sx={{ marginBottom: '10px', fontSize: '14px',marginLeft:'-520px' }}>
        <strong>New password</strong>
      </Typography>
      <TextField
        fullWidth
        type={showNewPassword ? 'text' : 'password'}
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment sx={{}} position="end">
              <IconButton onClick={handleClickShowNewPassword} edge="end">
                {showNewPassword ? <VisibilityOff sx={{ color: '#666',marginLeft:'-520px' }} /> : <Visibility sx={{ color: '#666' }} />}
              </IconButton>
            </InputAdornment>
          ),
          style: {
            backgroundColor: '#000',
            color: '#fff',
            borderColor: '#666',
          },
        }}
        sx={{
            width:'800px',
          marginBottom: '20px',marginLeft:'-520px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#666',
            },
            '&:hover fieldset': {
              borderColor: '#888',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#fff',
            },
          },
        }}
      />
      </Box>

<Box>
      {/* Save Changes Button */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleSaveChanges}
        sx={{
            width:'200px',
            marginLeft:'-520px',
          backgroundColor: currentPassword && newPassword ? '#3767B1' : 'gray',
          '&:hover': {
            backgroundColor: currentPassword && newPassword ? '#285693' : 'gray',
          },
          textTransform: 'none', // Disable uppercase text
          padding: '10px 20px',
          cursor: currentPassword && newPassword ? 'pointer' : 'not-allowed',
        }}
        // Disable button if fields are empty
      >
        Save changes
      </Button>
      </Box>

      </Box>
    </Box>
  );
};

export default ChangePassword;
