import React, { useState } from 'react';
import { Box, Typography, FormControlLabel, RadioGroup, Radio, Switch, Divider } from '@mui/material';

import Image1 from '../../Assets/Projectsettingimg/Rectangle 185 (1).png';
import Image2 from '../../Assets/Projectsettingimg/Rectangle 185.png';
import Image3 from '../../Assets/Projectsettingimg/Group 1082.png';
import Image4 from '../../Assets/Projectsettingimg/Group (8).png';
import Image5 from '../../Assets/Projectsettingimg/rafiki.png';
import Image6 from '../../Assets/Projectsettingimg/Group 1108.png';

const SettingsPage = () => {
  const [theme, setTheme] = useState('matchBrowser');
  const [newIssueTransition, setNewIssueTransition] = useState(false);
  const [quickSearchQueries, setQuickSearchQueries] = useState(false);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        minHeight: '100vh',
        padding: '32px',
      }}
    >
      {/* Theme Section */}
      <Box sx={{ marginBottom: '32px' }}>
        <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Theme
        </Typography>
        <RadioGroup row value={theme} onChange={handleThemeChange}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '32px' }}>
            <FormControlLabel
              value="light"
              control={<Radio />}
              label="Light"
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            />
            <img
              src={Image1}
              alt="Light Theme"
              style={{ width: '100px', height: '60px', marginTop: '8px' }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '32px' }}>
            <FormControlLabel
              value="dark"
              control={<Radio />}
              label="Dark"
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            />
            <img
              src={Image2}
              alt="Dark Theme"
              style={{ width: '100px', height: '60px', marginTop: '8px' }}
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <FormControlLabel
              value=""
              control={<Radio />}
              label="Match browser"
              sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            />
            <img
              src={Image3}
              alt="Match Browser Theme"
              style={{ width: '100px', height: '60px', marginTop: '8px' }}
            />
          </Box>
        </RadioGroup>
      </Box>

      <Divider sx={{ backgroundColor: '#666', marginBottom: '32px' }} />

      {/* Clikkle Projects Lab Section */}
      <Box>
        <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
          Clikkle Projects Lab
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '32px', color: '#ccc' }}>
          Labs features allow us to test new ideas and gather real-world feedback to refine them. Since they are still in
          development, they may change, encounter issues, or might not be released.
        </Typography>

        {/* New Issue Transition Experience */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Image4}
              alt="New Issue Transition Experience"
              style={{ width: '90px', height: '60px', marginRight: '16px' }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                New issue transition experience
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                We’ve enhanced how you transition issues between statuses. Please note, not all fields are supported in
                the new experience yet. You can switch back to the previous version anytime while we continue to make
                improvements.
              </Typography>
            </Box>
          </Box>
          <Switch
            checked={newIssueTransition}
            onChange={(e) => setNewIssueTransition(e.target.checked)}
            color="primary"
          />
        </Box>

        {/* Quick Search Smart Queries */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Image5}
              alt="Quick Search Smart Queries"
              style={{ width: '90px', height: '60px', marginRight: '16px' }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Quick search smart queries
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                Utilize smart queries to narrow down and focus your results during quick searches.
              </Typography>
            </Box>
          </Box>
          <Switch
            checked={quickSearchQueries}
            onChange={(e) => setQuickSearchQueries(e.target.checked)}
            color="primary"
          />
        </Box>

        {/* Store Data on Your Own Device */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src={Image6}
              alt="Store Data on Your Own Device"
              style={{width: '90px', height: '60px', marginRight: '16px' }}
            />
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                Store data on your own device
              </Typography>
              <Typography variant="body2" sx={{ color: '#ccc' }}>
                This feature has been relocated to Product settings and requires site admin approval to be enabled.
              </Typography>
            </Box>
          </Box>
          <Switch color="primary" />
        </Box>
      </Box>
    </Box>
  );
};

export default SettingsPage;
