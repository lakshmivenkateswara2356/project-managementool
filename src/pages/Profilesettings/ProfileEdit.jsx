import React, { useState } from 'react';
import Profielinage from '../Profilesettings/ProfileImageSection';
import Profileheding from '../../pages/Profilesettings/Profileheader';
import { Button, Tabs, Tab, Box, Typography } from '@mui/material';

const ProfileEdit = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [profileImage, setProfileImage] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file)); // Preview uploaded profile image
    }
  };

  const handleHeaderImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeaderImage(URL.createObjectURL(file)); // Preview uploaded header image
    }
  };

  return (

    <Box>
        <Profileheding/>
    <Box sx={{ backgroundColor: 'black', color: 'white', padding: '16px', height: '100vh' }}>

        
      {/* Navigation Tabs */}
      <Tabs 
        value={selectedTab} 
        onChange={handleTabChange} 
        indicatorColor="primary" 
        textColor="inherit" 
        variant="fullWidth" 
        sx={{ borderBottom: '', '& .Mui-selected': { color: '#3767B1' }}}
      >
        <Tab label="Profile and Visibility" />
        <Tab label="Email" />
        <Tab label="Security" />
        <Tab label="Privacy" />
        <Tab label="Account Preferences" />
        <Tab label="Link Preferences" />
        <Tab label="Product Settings" />
      </Tabs>

      {/* Tab Panels */}
      <TabPanel value={selectedTab} index={0}>
        {/* Profile and Visibility Content */}
        <Typography variant="h6" gutterBottom sx={{  }}>
          Profile and Visibility
        </Typography>
        <Typography sx={{fontSize:'13px'}} variant="body2" gutterBottom>
          Manage your personal details and control what information others can view and what apps can access.
        </Typography>

      

        {/* Header Image */}
        <Box sx={{ marginTop: '24px', textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontFamily:'sans-serif',fontSize:'15px',marginTop:'33px',fontWeight:'bold'}}>Profile Photo and Header Image</Typography>
          <Profielinage />
        </Box>
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        <Typography variant="h6" sx={{  }}>Email Settings</Typography>
        <h1>hekk</h1>
      </TabPanel>
      
      {/* Add other tab panels for the rest of the sections */}
    </Box>
    </Box>
  );
};

// TabPanel component to display the content of each tab
function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ padding: '16px' }}>{children}</Box>}
    </div>
  );
}

export default ProfileEdit;
