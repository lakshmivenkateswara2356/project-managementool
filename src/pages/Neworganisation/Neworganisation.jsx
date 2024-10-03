import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Image from '../../components/Image';
import neworganisation from '../../Assets/organisation.png';

const Neworganisation = ({ addOrganization }) => {
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState('');

  const handleCreateOrganisation = () => {
    if (organizationName) {
      const newOrg = {
        name: organizationName,
        status: 'Active',  // Placeholder status, you can extend with more fields
        imageUrl: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg',  // Replace with actual uploaded image URL
      };

      addOrganization(newOrg); // Call the function passed as a prop to add the organization
      navigate('/organizations'); // Redirect to home or organization list page
    } else {
      alert('Please enter an organization name.');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '90px', backgroundColor: 'black', height: '100vh' }}>
        <Typography sx={{ fontSize: '30px', marginLeft: '33px', color: 'white' }}>Create an Organization to track the status of your projects.</Typography>
        <Typography sx={{ color: 'gray', width: '858px', marginLeft: '33px' }}>Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.</Typography>
        
        <Box sx={{ textAlign: 'center' }}>
          <Image sx={{ height: '305px' }} src={neworganisation} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Box
            type="text"
            placeholder="Create Organisation"
            style={{
              backgroundColor: '#1c1c1c',
              border: 'none',
              outline: 'none',
              color: 'white',
              borderStyle: 'solid',
              height: '45px',
              borderRadius: '3px',
              width: '92vw',
              marginRight: '12px',
              borderWidth: '1px',
              fontSize: '16px',
            }}
          >
            <input
              placeholder="Create organisation"
              style={{
                width: '91vw',
                height: '38px',
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
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginLeft: '42px', marginTop: '-175px' }}>
          <Button onClick={handleCreateOrganisation} sx={{ marginRight: '82px', backgroundColor: '#3767B1', color: 'white', width: '120px', marginBottom: "12px" }}>Create</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Neworganisation;
