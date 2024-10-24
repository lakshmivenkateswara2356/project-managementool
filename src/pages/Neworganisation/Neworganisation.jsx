import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Dialog, TextField, IconButton } from '@mui/material';
import Image from '../../components/Image';
import neworganisationImage from '../../Assets/organisation.png'; // Adjust image path if necessary
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import Themeentire from '../../style/theme';

const Neworganisation = ({ addOrganization }) => {
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState('');
  const [avatarPreview, setAvatarPreview] = useState(null); // Preview for uploaded image
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
  const [organizationEmail, setOrganizationEmail] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [errors, setErrors] = useState({ email: '', url: '' });

  // Helper to check if the required fields are filled
  const isNextButtonEnabled = organizationName.trim() !== '';

  // Validate email format (must end with @gmail.com)
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setOrganizationEmail(value);
    if (!value.endsWith('@gmail.com')) {
      setErrors((prev) => ({ ...prev, email: '' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // Validate URL format (must end with .com)
  const handleURLChange = (e) => {
    const value = e.target.value;
    setWebsiteURL(value);
    if (!value.endsWith('.com')) {
      setErrors((prev) => ({ ...prev, url: '' }));
    } else {
      setErrors((prev) => ({ ...prev, url: '' }));
    }
  };

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result); // Preview the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle organization creation
  const handleCreateOrganisation = () => {
    if (organizationName && organizationEmail && websiteURL && avatarPreview) {
      const newOrg = {
        name: organizationName,
        email: organizationEmail,
        website: websiteURL,
        status: 'Active',
        imageUrl: avatarPreview || 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg',
      };

      addOrganization(newOrg);
      navigate('/listorganisation');
    } else {
      alert('Please fill all fields correctly to create the organization.');
    }
  };

  return (
    <Themeentire>
      <Box sx={{}}>
        <Box
          sx={{
            backgroundColor:'background.main',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '90px',
            height: '100vh',
          }}
        >
          <Typography
            sx={{
              fontSize: '34px',
              fontFamily:'sans-serif',
              marginLeft: '78px',
              marginTop:"-22px",
              '@media(max-width:600px)': {
                width: '330px',
                fontSize: '26px',
                textAlign: 'center',
                marginLeft:"22px",
                marginBottom: '22px',
              },
            }}
          >
            Create an Organization to track the status of your projects.
          </Typography>
          <Typography
            sx={{
              
              color:'gray',
              marginTop:'12px',
              marginLeft: '78px',
              fontFamily:'sans-serif',
              '@media(max-width:600px)': {
                width: '322px',
                fontSize: '12px',
                textAlign: 'center',
                marginLeft:"37px",
                marginTop:'-13px',
              },
            }}
          >
            Project organization refers to the style of coordination, communication, and management
            a team uses throughout a project’s lifecycle.
          </Typography>

          <Box sx={{ textAlign: 'center', marginTop: '42px' }}>
  <Image 
    sx={{ 
      height: '370px', // Reduce the height
      width: 'auto',    // Maintain aspect ratio
      maxWidth: '100%', // Ensure it doesn’t overflow the parent box
  '@media(max-width:600px)':{
    height:'220px',
  }
  
  
    }} 
    src={neworganisationImage} 
  />
</Box>

         

          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <TextField
  placeholder="Organization Name"
  value={organizationName}
  onChange={(e) => setOrganizationName(e.target.value)}
  type="text"
  style={{
    width: '90vw',
    marginLeft: '-12px',
    marginBottom: '10px',
    borderRadius: '6px',
    marginTop:'12px',
    backgroundColor: 'background.default',
  }}
  InputProps={{
    style: {
      height: '41px', // Custom height for the input
      padding: '0 10px', // Control inner padding
      fontSize: '14px', // Adjust text size
      lineHeight: '1.2',
      borderRadius: '6px',
    },
  }}
/>


          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '7px' }}>
            <Button
              onClick={() => setIsPopupOpen(true)}
              sx={{
                marginRight: '82px',
                backgroundColor: isNextButtonEnabled ? '#3767B1' : '#1f1e1e',
                color: 'white',
                width: '110px',
                height:'41px',
                marginBottom: '12px',
                '@media(max-width:600px)': { marginRight: '22px' },
                '&:hover': {
                  backgroundColor: isNextButtonEnabled ? '#3767B1' : '#555555',
                },
              }}
              disabled={!isNextButtonEnabled} // Disable button if input is empty
            >
              Next
            </Button>
          </Box>

          {/* Popup Dialog */}
          <Dialog
            open={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            PaperProps={{
              style: {
                height: '570px',
                width: '620px',
                borderRadius: '1px',
                padding: '30px',
                minWidth: '450px',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
              <IconButton sx={{marginTop:'-22px',marginRight:'-12px'}} onClick={() => setIsPopupOpen(false)}>
                <CloseIcon sx={{ color: '#b0b0b0' }} />
              </IconButton>
            </Box>

            <Typography sx={{ fontWeight: 500, marginTop: '22px', fontSize: '19px',fontFamily:'sans-serif',}}>
              Organization Email
            </Typography>
            <TextField
  fullWidth
  margin="dense"
  placeholder="Enter Email"
  variant="outlined"
  value={organizationEmail}
  onChange={handleEmailChange}
  error={!!errors.email}
  helperText={errors.email}
  sx={{ marginBottom: '10px',marginTop:'12px' }} // Optional external margin styling
  InputProps={{
    style: {
      height: '40px',  // Set your desired height
      padding: '0 12px',  // Adjust inner padding
      fontSize: '14px',  // Adjust font size
    },
  }}
/>


            <Typography sx={{ fontWeight: 500, marginTop: '40px', fontSize: '19px',fontFamily:'sans-serif', }}>
              Organization Website url
            </Typography>
            <TextField
  fullWidth
  margin="dense"
  placeholder=""
  variant="outlined"
  value={websiteURL}
  onChange={handleURLChange}
  error={!!errors.url}
  helperText={errors.url}
  sx={{ marginBottom: '10px',marginTop:'12px' }}
  InputProps={{
    style: {
      height: '40px',  // Custom height
      padding: '8px 12px',  // Adjust inner padding
      fontSize: '14px',  // Font size adjustment
     
    },
  }}
/>


            <Typography sx={{ fontWeight: 500, marginTop: '42px', fontSize: '18px',fontFamily:'sans-serif' }}>
              Organization Logo
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
            <Button
  variant="outlined"
  component="label"
  sx={{
    borderRadius: '50%',
    height: '48px', // Set below 20px
    width: '48px',  // Set below 20px
    minHeight: '18px', // Ensure no default size override
    minWidth: '18px',  // Ensure no default size override
    borderWidth: '3px',
    padding: 0, // Remove padding
    margin: 0,  // Remove margin
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    color: 'gray',
    borderColor: 'gray',
  }}
>
  {avatarPreview ? (
    <img
      src={avatarPreview}
      alt="Uploaded Logo"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
      }}
    />
  ) : (
    <AddIcon sx={{ fontSize: '20px' }} /> // Smaller icon size for smaller button
  )}
  <input type="file" hidden onChange={handleFileChange} />
</Button>

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={handleCreateOrganisation}
                sx={{
                  mt: 3,
                  height: '45px',
                  width: '120px',
                  backgroundColor: organizationEmail && websiteURL ? '#3767B1' : '#555555',
                  color: 'white',
                  borderRadius: '8px',
                }}
                disabled={!organizationEmail || !websiteURL}
              >
                Create
              </Button>
            </Box>
          </Dialog>
        </Box>
      </Box>
    </Themeentire>
  );
};

export default Neworganisation;
