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
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '90px',
            height: '100vh',
          }}
        >
          <Typography
            sx={{
              fontSize: '30px',
              marginLeft: '33px',
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
              width: '858px',
              marginLeft: '33px',
              '@media(max-width:600px)': {
                width: '322px',
                fontSize: '12px',
                textAlign: 'center',
              },
            }}
          >
            Project organization refer to the style of coordination, communication, and management a
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
            <TextField
              placeholder="Create Organization"
              style={{
                width: '95vw',
                marginLeft:'-37px',
                height: '40px',
                borderRadius: '9px',
                backgroundColor: 'background.default',
                paddingLeft: '35px',
                marginBottom: '12px',
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
      '&:hover': {
        backgroundColor: '#3767B1', // Maintain the same background color on hover
        opacity: 1, // Ensure the opacity remains unchanged
      },
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
                height: '620px',
                width: '620px',
                borderRadius: '10px',
                padding: '30px',
                minWidth: '450px',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mb: 3 }}>
              <IconButton onClick={() => setIsPopupOpen(false)}>
                <CloseIcon sx={{ color: '#b0b0b0' }} />
              </IconButton>
            </Box>

            <Typography sx={{ fontWeight: 500, marginTop: '22px', fontSize: '20px' }}>
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
              sx={{ marginBottom: '10px' }}
            />

            <Typography sx={{ fontWeight: 500, marginTop: '40px', fontSize: '18px' }}>
              Organization Website URL
            </Typography>
            <TextField
              fullWidth
              margin="dense"
              placeholder="Enter website URL"
              variant="outlined"
              value={websiteURL}
              onChange={handleURLChange}
              error={!!errors.url}
              helperText={errors.url}
              sx={{ marginBottom: '10px' }}
            />

            <Typography sx={{ fontWeight: 500, marginTop: '42px', fontSize: '18px' }}>
              Organization Logo
            </Typography>
            <Box container sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1, }}>
              <Button variant="outlined" component="label" sx={{ borderRadius: '50%',height:'60px',borderWidth:'2px' }}>
                <AddIcon sx={{}} />
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
