import React, { useState } from 'react';
import Yogesh from '../../Assets/YOGESH SINGH.jpg';
import Danial from '../../Assets/DANIEL THOMPSON.jpg';
import Smaileman from '../../Assets/smiley-man-holding-camera-front-view.jpg';
import cambpel from '../../Assets/Ellipse 47.png'
import { Box, Typography, Avatar, Button, Badge } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Import Add icon


const OrganizationUsers = () => {
  // Initial user data
  const [users, setUsers] = useState([
    { name: 'Mohammad Ubaid', email: 'theubaidahmed@clikkmail.com', status: 'Active', role: 'Admin', avatar: Yogesh },
    { name: 'Stephan Graham', email: 'admin@clikkmail.com', status: 'Active', role: 'Owner', avatar: '/path/to/avatar2.jpg' },
    { name: 'Areeb Ahmad', email: 'areeb@clikkmail.com', status: 'Active', role: 'User', avatar: Danial },
    { name: 'Amina Asif', email: 'aminaasif786@clikkmail.com', status: 'Active', role: 'User', avatar: Smaileman },
    { name: 'Sunil Kumar Bais', email: 'sunilkumarbais25@clikkmail.com', status: 'Active', role: 'User', avatar: cambpel },
    { name: 'Arjun Singh', email: 'arjunsingh755@clikkmail.com', status: 'Active', role: 'User', avatar: Danial },
    { name: 'Ragaviharini M', email: 'ragaviharini180@clikkmail.com', status: 'Suspended', role: 'User', avatar:  Yogesh }
  ]);

  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'Active').length;
  const administrators = users.filter(user => user.role === 'Admin' || user.role === 'Owner').length;

  // Function to handle suspending a user
  const handleSuspend = (index) => {
    setUsers(prevUsers => 
      prevUsers.map((user, i) => 
        i === index ? { ...user, status: user.status === 'Active' ? 'Suspended' : 'Active' } : user
      )
    );
  };

  return (
    <Box container sx={{ padding: '20px', borderRadius: '8px' }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Box sx={{display:'flex'}}>
        <Typography sx={{fontFamily:'sans-serif'}} variant="h5">Organization </Typography>
        <Typography sx={{marginLeft:'10px',fontSize:'22px',fontFamily:'sans-serif',color:'gray'}}>Users</Typography>
        </Box>
        <Typography sx={{marginLeft:'10px',fontSize:'13px',fontFamily:'sans-serif',color:'gray'}}>Manage product access for all users in your organization</Typography>

        <Button sx={{fontSize:'13px',width:'122px'}} variant="contained" color="primary"  >Invite User <AddIcon sx={{height:'20px'}} /></Button>
      </Box>

      {/* Counts Section */}
      <Box sx={{ display: 'flex', gap:'100px', marginTop: '20px', paddingBottom: '20px', borderBottom: '1px solid #333' }}>
        <Box>
          <Typography sx={{fontFamily:'sans-serif',fontSize:'13px',color:'gray'}} variant="h6">Total Users</Typography>
          <Typography sx={{fontFamily:'sans-serif',color:'gray'}} variant="h4">{totalUsers}</Typography>
        </Box>
        <Box>
          <Typography sx={{fontFamily:'sans-serif',fontSize:'13px',color:'gray'}} variant="h6">Active Users</Typography>
          <Typography sx={{fontFamily:'sans-serif',color:'gray'}} variant="h4">{activeUsers}</Typography>
        </Box>
        <Box>
          <Typography sx={{fontFamily:'sans-serif',fontSize:'13px',color:'gray'}} variant="h6">Administrators</Typography>
          <Typography sx={{fontFamily:'sans-serif',color:'gray'}} variant="h4">{administrators}</Typography>
        </Box>
      </Box>

      {/* User List */}
      <Box sx={{ marginTop: '20px' }}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '10px',
          borderBottom: '1px solid #333',
          marginBottom: '10px',
        }}
      >
        <Typography variant="body1" sx={{ flex: 1 }}>User</Typography>
        <Typography variant="body1" sx={{ flex: 1, textAlign: 'center',marginLeft:'-1103px' }}>
          Status
        </Typography>
        <Box sx={{ width: '100px', textAlign: 'right' }}></Box> {/* Placeholder for Suspend button */}
      </Box>

      {/* User List */}
      {users.map((user, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: '1px solid #333',
          }}
        >
          {/* User Information */}
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Avatar src={user.avatar} sx={{ marginRight: '10px',height:'31px',width:'31px' }} />
            <Box >
              <Box sx={{display:'flex',marginRight:'12px'}}>
              <Typography sx={{display:"flex",  fontFamily:'sans-serif',fontSize:"14px",fontWeight:'bold' }}>
                {user.name}
                
              </Typography>

              <Box> {user.role === 'Owner' && (
               <Badge
               badgeContent={
                 <Typography 
                   sx={{ fontSize: '10px', color: 'black', fontWeight: 'bold', }}
                 >
                   OWNER
                 </Typography>
               }
               color="secondary"
               sx={{ marginLeft: '31px' }}
             />
             
              )}</Box>
                </Box>

              <Typography sx={{fontSize:'11px',color: 'gray'}} variant="body2" >
                {user.email}
               
              </Typography>
             

            
            </Box>
            
          </Box>
          

          {/* Status Display */}
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography
              sx={{
                color: user.status === 'Active' ? 'gray' : 'gray',marginLeft:'-333px'
              }}
            >
              {user.status}
            </Typography>
          </Box>

          {/* Suspend/Unsuspend Button */}
          <Box sx={{ width: '100px', textAlign: 'right',marginRight:'140px' }}>
            <Button sx={{width:'50px',fontSize:'10px'}}
              variant="contained"
              color="primary"
              onClick={() => handleSuspend(index)}
            >
              {user.status === 'Active' ? 'Suspend' : 'Suspend'}
            </Button>
          </Box>
        </Box>
      ))}
    </Box>


    </Box>
  );
};

export default OrganizationUsers;
