import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from '../components/Navbar';
import profileclikk from '../Assets/profileclikk.jpeg'
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {
        Avatar, AppBar, Toolbar, InputBase,
    Card, CardContent, Tabs, Tab,  Divider
  } from '@mui/material';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

import clikklereport from '../Assets/clikklerepair.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Icon from '../components/Icon'
import './Dashboard.css'; // Include custom styles for extra styling

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard'); // Set the initial active section

    const [selectedSection, setSelectedSection] = useState('Dashboard');
  


    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        
       <div>
<Navbar/>
<Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#fff', color: '#1a1a1a' }}>
            {/* Sidebar */}
            
            <Box sx={{ width: '250px', backgroundColor: '#f7f9fc', color:'#333', padding: '20px' }}>
            <div className='alighite'>
                    <img src={clikklereport} alt="clikklerep" className='cikklerepair'/>
                    <h1 className='clikkletechnologies'>Clikkle Technologies</h1>
                    
                    </div>
                <List component="nav">
                    {/* Dashboard Sidebar Item */}
                    
                    <Box className="addingsomestyles" display="flex"
                                alignItems="center"
                                sx={{
                                    backgroundColor: selectedSection === 'Dashboard' ? '#3b84d9' : 'transparent',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleSectionClick('Dashboard')}
                            >
                        <HomeIcon sx={{  marginRight: 1 }} />
                        <Typography variant="body1" >
                            Dashboard
                        </Typography>
                    </Box>
                    
                    

                    {/* Projects Sidebar Item */}
                    <Box display="flex"
                                alignItems="center"
                                sx={{
                                    backgroundColor: selectedSection === 'Projects' ? '#3b84d9' : 'transparent',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleSectionClick('Projects')}>
                        <AssignmentIcon sx={{ color: '#666665', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#666665' }}>
                            Projects
                        </Typography>
                    </Box>

                    {/* Team Sidebar Item */}
                    
                    <Box  display="flex"
                                alignItems="center"
                                sx={{
                                    backgroundColor: selectedSection === 'Your Work' ? '#3b84d9' : 'transparent',
                                    borderRadius: '5px',
                                    
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleSectionClick('Your Work')}>
                        
                        <AccountBalanceWalletIcon sx={{ color: '#666665', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#666665' }}>
                            Your Work
                        </Typography>
                    </Box>
                </List>
                <Box sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
                <div className='sectionseperatione'></div>
                    <Typography className='marginbottom' variant="body2" sx={{ color: '#000000' }}>
                        Storage
                    </Typography>
                    <div className='storagetracj'></div>
                    <div className='alignitemvert'>
                    <Typography className='devidingbothele' variant="caption" sx={{ color: '#3d83d5' }}>
                        1 GB used of 5 GB
                    </Typography>
                    <button className='buttonelemente'>Upgrade Storege</button>
                    </div>
                </Box>
            </Box>



            {/* Main Dashboard Content */}
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '20px',
                    }}
                >
                    <Typography variant="h4" component="div" sx={{ color: '#333' }}>
                        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={{ color: '#333' }}>
                            <AddIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#333' }}>
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                </Box>


                {/* The rest of your content remains the same, like task overview and issues updates */}
                <Grid container spacing={2}>
                    {/* To Do */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: '8px',
                                color:  '#333' ,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant="h6">To Do</Typography>
                                <Typography variant="h4" sx={{ color: '#FF6347' }}>
                                    0
                                </Typography>
                            </Box>
                            <WorkIcon sx={{ fontSize: 40, color: '#FF6347' }} />
                        </Paper>
                    </Grid>

                    {/* In Progress */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: '8px',
                                color:  '#333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant="h6">In Progress</Typography>
                                <Typography variant="h4" sx={{ color: '#1E90FF' }}>
                                    0
                                </Typography>
                            </Box>
                            <PendingActionsIcon sx={{ fontSize: 40, color: '#1E90FF' }} />
                        </Paper>
                    </Grid>

                    {/* Review */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: '#fff',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#333' ,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant="h6">Review</Typography>
                                <Typography variant="h4" sx={{ color: '#FFD700' }}>
                                    0
                                </Typography>
                            </Box>
                            <InfoIcon sx={{ fontSize: 40, color: '#FFD700' }} />
                        </Paper>
                    </Grid>
                    

                    {/* Done */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor:'#fff',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography variant="h6">Done</Typography>
                                <Typography variant="h4" sx={{ color: '#32CD32' }}>
                                    2
                                </Typography>
                            </Box>
                            <CheckCircleIcon sx={{ fontSize: 40, color: '#32CD32' }} />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Issues Updates Section */}
                <Box sx={{ display: 'flex',  padding: 2, gap: 2 }}>
          {/* Activity Section */}
          <Paper
            sx={{
              flex: 2,
              backgroundColor: '#fff',
              padding: 2,
              display: 'flex',
              color: '#333',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex',backgroundColor: '#fff', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Activity
              </Typography>
              <Button sx={{ color: '#0A84FF' }}>View All</Button>
            </Box>
            <Divider sx={{ backgroundColor: '#333' }} />
            <Box sx={{ paddingY: 2 }}>
              {[...Array(5)].map((_, index) => (
                <Box key={index} sx={{ display: 'flex', marginBottom: 2 }}>
                  <Avatar sx={{ marginRight: 2 }} src={profileclikk} />
                  <Box>
                    <Typography variant="body1" sx={{ color: '#333' }}>
                      Add list permission on the member list issue
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                      Daniel Thompson • {index + 5} minutes ago
                    </Typography>
                  </Box>
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{ 
                        backgroundColor: '#fff',
                      color: '#333',
                      borderColor: '#0A84FF',
                      marginLeft: 'auto',
                    }}
                  >
                    Issue
                  </Button>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* Issues Section */}
          <Paper
            sx={{
              flex: 1,
              backgroundColor: '#fff',

              color:'#333',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', color:'#333', backgroundColor:'#fff', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#fff' }}>
                Issues
              </Typography>
              <Button sx={{ color: '#0A84FF' }}>View All</Button>
            </Box>
            <Tabs value={0} textColor="secondary" indicatorColor="primary">
              <Tab label="Today Issues" />
              <Tab label="Pending Issues" />
              <Tab label="Review Issues" />
              <Tab label="Completed Issues" />
            </Tabs>
            <Divider sx={{ backgroundColor: '#333' }} />
            <Box sx={{ paddingY: 2 }}>
              {[{ label: 'Show employee attendance record', done: true }, { label: 'Show file upload success message', done: true }].map(
                (issue, index) => (
                  <Box key={index} sx={{ display: 'flex', marginBottom: 2, alignItems: 'center' }}>
                    <CheckCircleIcon sx={{ color: '#0A84FF', marginRight: 2 }} />
                    <Box>
                      <Typography variant="body1" sx={{ color: '#fff' }}>
                        {issue.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#bbb' }}>
                        CHR-17 • Clikkle HR
                      </Typography>
                    </Box>
                    <Button
                      size="small"
                      variant="outlined"
                      sx={{
                        color: issue.done ? '#0A84FF' : '#FF453A',
                        borderColor: issue.done ? '#0A84FF' : '#FF453A',
                        marginLeft: 'auto',
                      }}
                    >
                      {issue.done ? 'Done' : 'Pending'}
                    </Button>
                  </Box>
                )
              )}
            </Box>
          </Paper>
        </Box>
               
            </Box>
            <Icon/>
        </Box>


       </div>
    );
};

export default Dashboard;
