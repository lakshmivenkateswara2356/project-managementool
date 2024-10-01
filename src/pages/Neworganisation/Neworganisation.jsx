import React, { useState } from 'react';

import { 
    Box, Typography, Grid, Paper, Button, Divider, Tabs, Tab, Avatar 
  } from '@mui/material';
 import  Image from '../../components/Image';
import neworganisation from '../../Assets/organisation.png'


const Neworganisation =() => {

    const [organizationName, setOrganizationName] = useState('');

    const handleCreateOrganization = () => {
        // Call the API to create an organization
        if (organizationName) {
          console.log('Creating organization:', organizationName);
          // Perform the POST request to save the organization
        } else {
          alert('Please enter an organization name.');
        }
      };
    
    return (
       
        <Box sx={{backgroundColor:'black',}}>
            <Box sx={{display:'flex',flexDirection:'column',paddingTop:'90px',backgroundColor:'black',height:'100vh',}}>
            <Typography sx={{fontSize:'30px',marginLeft:'33px',color:'white',}}>Create an Organization to track the status of your projects. </Typography>
            <Typography sx={{color:'gray',width:'858px',marginLeft:'33px'}}>Project organization refer to the style of coordination, communication and management a team uses throughout a project’s lifecycle.</Typography>
            
            <Box sx={{textAlign:'center',}}>
            <Image sx={{height:'305px'}} src={neworganisation}/>
            </Box>
<Box sx={{display:'flex',
    flexDirection:'row',
    justifyContent:"center"
}}>
       <Box
          type="text"
          placeholder="Create Organisation"
          style={{
            backgroundColor: '#1c1c1c',
            border: 'none',
            outline: 'none',
            color: 'white',
            borderStyle:'solid',
            height:'45px',
            borderRadius:'3px',
            width:'91vw',
            marginRight:'12px',
            borderWidth:'1px',
            
            fontSize: '16px',
          }}
        >
            <Typography sx={{marginTop:'8px',marginLeft:'12px'}}>Create organisation</Typography>
        </Box>
</Box>


            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginLeft:'42px',marginTop:'-175px'}}>
    <Button sx={{marginRight:'82px',backgroundColor:'#3767B1',color:'white',width:'120px',marginBottom:"12px",}}>Create</Button>
</Box>
        </Box>
    )
}

export default Neworganisation;