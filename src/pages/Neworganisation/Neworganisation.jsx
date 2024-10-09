import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import Image from '../../components/Image';
import neworganisationImage from '../../Assets/organisation.png'; // Use your correct image path

const Neworganisation = ({ addOrganization }) => {
  const navigate = useNavigate();
  const [organizationName, setOrganizationName] = useState('');

  // Function to handle organization creation
  const handleCreateOrganisation = () => {
    if (organizationName) {
      const newOrg = {
        name: organizationName,
        status: 'Active',  // You can customize this field
        imageUrl: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg',  // Replace with actual uploaded image URL
      };

      // Call addOrganization to add the new organization to the list
      addOrganization(newOrg);

      // Redirect to the organization list page
      navigate('/listorganisation');
    } else {
      alert('Please enter an organization name.');
    }
  };

  return (
    <Box sx={{ backgroundColor: 'black' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingTop: '90px', backgroundColor: 'black', height: '100vh'}}>
        <Typography sx={{ fontSize: '30px', marginLeft: '33px', color: 'white',"@media(max-width:600px)":{width:'370px',fontSize:'26px',textAlign:'center',marginLeft:'16px',marginBottom:'22px'}  }}>
          Create an Organization to track the status of your projects.
        </Typography>
        <Typography sx={{ color: 'gray', width: '858px', marginLeft: '33px',"@media(max-width:600px)":{width:'322px',fontSize:'12px',textAlign:'center',}  }}>
        Project organization refer to the style of coordination, communication and management a team uses throughout a project’s lifecycle.
        </Typography>

        <Box sx={{ textAlign: 'center' }}>
          <Image sx={{ height: '305px' }} src={neworganisationImage} />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: "center" }}>
          <Box
            style={{
              backgroundColor: '#1c1c1c',
              border: 'none',
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
              placeholder="Create organization"
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

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginLeft: '42px', marginTop: '25px' }}>
          <Button onClick={handleCreateOrganisation} sx={{ marginRight: '82px', backgroundColor: '#3767B1', color: 'white', width: '120px', marginBottom: "12px",'@media(max-width:600px)':{marginRight:'22px'} }}>
            Create
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Neworganisation;
