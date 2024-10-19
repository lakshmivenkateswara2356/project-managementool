import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Dialog, TextField, IconButton } from '@mui/material';
import Image from '../../components/Image';
import neworganisationImage from '../../Assets/organisation.png'; // Use your correct image path
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';


const Neworganisation = ({ addOrganization }) => {
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState('');
  const [organizationAvatar, setOrganizationAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null); // Preview for uploaded image
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Popup state
  const [organizationEmail, setOrganizationEmail] = useState('');
  const [websiteURL, setWebsiteURL] = useState('');
  const [errors, setErrors] = useState({ email: '', url: '' });

  // Validate email format (must end with @gmail.com)
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setOrganizationEmail(value);
    if (!value.endsWith('@gmail.com')) {
      setErrors((prev) => ({ ...prev, email: 'Email must end with @gmail.com' }));
    } else {
      setErrors((prev) => ({ ...prev, email: '' }));
    }
  };

  // Validate URL format (must end with .com)
  const handleURLChange = (e) => {
    const value = e.target.value;
    setWebsiteURL(value);
    if (!value.endsWith('.com')) {
      setErrors((prev) => ({ ...prev, url: 'Website URL must end with .com' }));
    } else {
      setErrors((prev) => ({ ...prev, url: '' }));
    }
  };

  // Handle file selection and preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setOrganizationAvatar(file);
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
    <Box sx={{ backgroundColor: 'black' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '90px',
          backgroundColor: 'black',
          height: '100vh',
        }}
      >
        <Typography
          sx={{
            fontSize: '30px',
            marginLeft: '33px',
            color: 'white',
            '@media(max-width:600px)': {
              width: '370px',
              fontSize: '26px',
              textAlign: 'center',
              marginLeft: '16px',
              marginBottom: '22px',
            },
          }}
        >
          Create an Organization to track the status of your projects.
        </Typography>
        <Typography
          sx={{
            color: 'gray',
            width: '858px',
            marginLeft: '33px',
            '@media(max-width:600px)': { width: '322px', fontSize: '12px', textAlign: 'center' },
          }}
        >
          Project organization refers to the style of coordination, communication, and management a
          team uses throughout a project’s lifecycle.
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Image sx={{ height: '305px' }} src={neworganisationImage} />
        </Box>

        <Box sx={{ textAlign: 'center', marginTop: '5px' }}>
          {avatarPreview && (
            <img
              src={avatarPreview}
              alt="Organization Avatar"
              style={{ width: '40px', height: '40px', borderRadius: '50%', marginBottom: '20px' }}
            />
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <input
            placeholder="Create organization"
            style={{
              width: '91vw',
              height: '40px',
              borderRadius: '9px',
              color: 'white',
              backgroundColor: '#141414',
              borderWidth: '0px',
              paddingLeft: '35px',
              marginBottom: '12px',
              outline: 'none',
            }}
            type="text"
            value={organizationName}
            onChange={(e) => setOrganizationName(e.target.value)}
          />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '25px' }}>
          <Button
            onClick={() => setIsPopupOpen(true)}
            sx={{
              marginRight: '82px',
              backgroundColor: '#3767B1',
              color: 'white',
              width: '120px',
              marginBottom: '12px',
              '@media(max-width:600px)': { marginRight: '22px' },
            }}
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
      backgroundColor: '#2a2a2a',
      height:'620px',
      width:'620px',
      borderRadius: '10px',
      padding: '30px',
      minWidth: '450px',
      color: 'white',
    },
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
    <IconButton onClick={() => setIsPopupOpen(false)}>
      <CloseIcon sx={{ color: '#b0b0b0' }} />
    </IconButton>
  </Box>


  <Typography sx={{ fontSize: '18px', fontWeight: 500,marginTop:'22px',fontFamily:'sans-serif',fontSize:'20px' }}>Organization Email</Typography>


  <TextField
  fullWidth
  margin="dense"
  placeholder="Enter Email"
  variant="outlined"
  InputLabelProps={{ style: { color: 'gray' } }}
  inputProps={{
    style: {
      color: 'white',
      height: '40px', // Adjust height here
      padding: '0 10px', // Adjust padding for better input spacing
    },
  }}
  InputProps={{
    style: {
      borderRadius: '5px',
      borderColor: 'gray', // Custom border color
    },
    sx: {
      '& fieldset': {
        borderColor: 'gray', // Ensures border color is applied properly
      },
      '&:hover fieldset': {
        borderColor: 'lightgray', // Lighter border on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'lightgray', // Custom color when focused
      },
    },
  }}
  sx={{
    width: '100%', // Adjust width here
    maxWidth: '600px', // Optional: Limit max width
    marginBottom: '10px', // Optional: Add spacing between inputs
  }}
  value={organizationEmail}
  onChange={handleEmailChange}
  error={!!errors.email}
  helperText={errors.email}
/>


 
  <Typography sx={{ fontSize: '18px', fontWeight: 500, mt: 2 ,marginTop:'40px'}}>
  Organization Website URL
</Typography>
<TextField
  fullWidth
  margin="dense"
  placeholder="Enter website url"
  variant="outlined"
  InputLabelProps={{ style: { color: 'gray' } }}
  inputProps={{
    style: {
      color: 'white',
     // Dark background for input
      height: '40px', // Adjust height here
      padding: '0 10px', // Adjust padding for better spacing
      borderRadius: '5px', // Rounded corners
    },
  }}
  InputProps={{
    sx: {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'lightgray', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'lightgray', // Border color on focus
      },
    },
  }}
  sx={{
    width: '100%', // Full width
    maxWidth: '600px', // Optional: Control max width
    marginBottom: '10px', // Add spacing between inputs
  }}
  value={websiteURL}
  onChange={handleURLChange}
  error={!!errors.url}
  helperText={errors.url}
/>


  <Typography sx={{ fontSize: '18px', fontWeight: 500, mt: 2,marginTop:'42px' }}>
    Organization Logo
  </Typography>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
  <Button
  variant="outlined"
  component="label"
  sx={{
    marginTop:"22px",
    width: '45px',  // Reduced width
    height: '45px',  // Reduced height
    borderRadius: '50%',
    borderColor: '#b0b0b0',
    color: '#b0b0b0',
    borderWidth: '2px',
    padding: '0',  // Ensure no extra padding
    minWidth: '0',  // Override any default minWidth
    minHeight: '0',  // Override any default minHeight
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .MuiSvgIcon-root': {
      fontSize: '25px',  // Adjust icon size to fit smaller button
    },
  }}
>
  <AddIcon sx={{height:"40px"}}/>
  <input type="file" hidden onChange={handleFileChange} />
</Button>


    {avatarPreview && (
      <img
        src={avatarPreview}
        alt="Uploaded Logo"
        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
      />
    )}
  </Box>
<Box sx={{display:'flex',flexDirection:"row",justifyContent:"flex-end"}}>
  <Button
    fullWidth
    onClick={handleCreateOrganisation}
    sx={{
      mt: 3,
      height: '45px',
      width:'120px',
      backgroundColor: organizationEmail && websiteURL ? '#3767B1' : '#555555',
      color: 'white',
      borderRadius: '8px',
      textTransform: 'none',
      
      fontSize: '16px',
    }}
    disabled={!organizationEmail || !websiteURL}
  >
    Create
  </Button>
  </Box>
</Dialog>

      </Box>
    </Box>
  );
};

export default Neworganisation;
