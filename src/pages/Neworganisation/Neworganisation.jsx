import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Dialog, TextField, IconButton } from '@mui/material';
import Image from '../../components/Image';
import neworganisationImage from '../../Assets/organisation.png'; // Use your correct image path
import CloseIcon from '@mui/icons-material/Close';

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
        <Dialog open={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
          <Box sx={{ padding: '20px', backgroundColor: '#1c1c1c', minWidth: '400px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography sx={{ color: 'white', fontSize: '20px' }}>Enter Organization Details</Typography>
              <IconButton onClick={() => setIsPopupOpen(false)}>
                <CloseIcon sx={{ color: 'white' }} />
              </IconButton>
            </Box>

            <TextField
              fullWidth
              margin="normal"
              label="Organization Email"
              variant="outlined"
              InputLabelProps={{ style: { color: 'gray' } }}
              inputProps={{ style: { color: 'white' } }}
              value={organizationEmail}
              onChange={handleEmailChange}
              error={!!errors.email}
              helperText={errors.email}
            />

            <TextField
              fullWidth
              margin="normal"
              label="Organization Website URL"
              variant="outlined"
              InputLabelProps={{ style: { color: 'gray' } }}
              inputProps={{ style: { color: 'white' } }}
              value={websiteURL}
              onChange={handleURLChange}
              error={!!errors.url}
              helperText={errors.url}
            />

            <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
              <Button variant="contained" component="label">
                Upload Logo
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
            </Box>

            {avatarPreview && (
              <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
                <img
                  src={avatarPreview}
                  alt="Uploaded Logo"
                  style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                />
              </Box>
            )}

            <Button
              fullWidth
              onClick={handleCreateOrganisation}
              sx={{
                marginTop: '20px',
                backgroundColor: organizationName && organizationEmail && websiteURL ? '#3767B1' : 'gray',
                color: 'white',
              }}
              disabled={!organizationName || !organizationEmail || !websiteURL}
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
