import React, { useState } from 'react';
import { Box, Typography, Button, MenuItem, Select, Link, Divider } from '@mui/material';
import Themeentire from '../style/theme';
import Projectsettingthe from './projectsettingspopup/SettingsPage';

const PersonalSettings = () => {
  const [showProjectIssuesSettings, setShowProjectIssuesSettings] = useState(false);

  const handleToggleProjectIssues = () => {
    setShowProjectIssuesSettings((prev) => !prev);
  };

  return (
    <Themeentire>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: '100vh',
          padding: '24px',
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
        }}
      >
        {/* Sidebar */}
        <Box sx={{ width: '25%', padding: '16px' }}>
          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
            Personal Settings
          </Typography>
          <Box sx={{ marginBottom: '16px' }}>
            <Typography variant="body1" sx={{ color: '#fff', padding: '8px 0' }}>
              General
            </Typography>
            <Divider sx={{ backgroundColor: '#666' }} />
          </Box>
          <Box>
            <Typography variant="body1" sx={{ color: '#ccc', padding: '8px 0', cursor: 'pointer' }} onClick={handleToggleProjectIssues}>
              Notification Settings
            </Typography>
            <Typography variant="body1" sx={{ color: '#ccc', padding: '8px 0', cursor: 'pointer' }} onClick={handleToggleProjectIssues}>
              Projects and Issues
            </Typography>
          </Box>
        </Box>

        {/* Main Content */}
        <Box sx={{ width: '75%', padding: '16px', marginTop: '-44px' }}>
          <Typography sx={{ marginBottom: '22px', color: 'gray', fontSize: '13px' }}>
            Personal settings / General
          </Typography>

          <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
            General
          </Typography>

          {/* Timezone Setting */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
              Your time zone
            </Typography>
            <Select
              value="America/Toronto"
              variant="outlined"
              sx={{
                width: '100%',
                '.MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              }}
            >
              <MenuItem value="America/Toronto">America/Toronto</MenuItem>
            </Select>
            <Link href="#" sx={{ color: '#3996f5', fontSize: '14px', marginTop: '8px', display: 'block' }}>
              Configure your time zone settings in your profile settings page
            </Link>
          </Box>

          {/* Language Setting */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
              Language
            </Typography>
            <Select
              value="English (United States)"
              variant="outlined"
              sx={{
                width: '100%',
                '.MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              }}
            >
              <MenuItem value="English (United States)">English (United States)</MenuItem>
            </Select>
            <Link href="#" sx={{ color: '#3996f5', fontSize: '14px', marginTop: '8px', display: 'block' }}>
              Configure your language settings in your profile settings page
            </Link>
          </Box>

          {/* Watch Issues Setting */}
          <Box sx={{ marginBottom: '24px' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
              Watch your issues
            </Typography>
            <Select
              value="Inherit from global settings"
              variant="outlined"
              sx={{
                width: '100%',
                '.MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              }}
            >
              <MenuItem value="Inherit from global settings">Inherit from global settings</MenuItem>
            </Select>
            <Typography variant="body2" sx={{ color: '#ccc', marginTop: '8px' }}>
              By selecting "enabled", you’ll automatically start “watching” the issues you engage with.
            </Typography>
          </Box>

          {/* Project Homepage Setting */}
          <Box sx={{ marginBottom: '32px' }}>
            <Typography variant="subtitle1" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
              Your Clikkle Projects homepage
            </Typography>
            <Select
              value="Your work"
              variant="outlined"
              sx={{
                width: '100%',
                '.MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
              }}
            >
              <MenuItem value="Your work">Your work</MenuItem>
            </Select>
            <Typography variant="body2" sx={{ color: '#ccc', marginTop: '8px' }}>
              This page will appear when you log in or click the Clikkle Projects logo.
            </Typography>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#3996f5', color: '#fff', textTransform: 'none', padding: '8px 16px' }}
            >
              Save changes
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: '#252525',
                textTransform: 'none',
                padding: '8px 16px',
                borderWidth: '0px',
                color: 'gray',
                '&:hover': { backgroundColor: '#252525' },
              }}
            >
              Discard
            </Button>
          </Box>

          {/* Project and Issues Settings */}
          {showProjectIssuesSettings && (
            <Box sx={{ marginTop: '32px' }}>
              <Projectsettingthe />
            </Box>
          )}
        </Box>
      </Box>
    </Themeentire>
  );
};

export default PersonalSettings;
