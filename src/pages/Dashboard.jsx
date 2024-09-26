import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from '../components/Navbar';
import profileclikk from '../Assets/profileclikk.jpeg';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

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
  
    const [active, setActive] = useState('home');

    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };
    const [activeButton, setActiveButton] = useState('Dashboard'); // Set 'Dashboard' as the default active button

    const handleButtonClick = (button) => {
        setActiveButton(button); // Update the active button when a button is clicked
    };

    

    return (
        
       <div>
<Navbar/>
<Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#fff', color: '#1a1a1a' }}>
            {/* Sidebar */}
            
            <Box className="dispalyresponsive" sx={{ width: '250px', backgroundColor: '#f7f9fc', color:'#333', padding: '20px' }}>
            <div className='alighite'>
                    <img src={clikklereport} alt="clikklerep" className='cikklerepair'/>
                    <h1 className='clikkletechnologies'>Clikkle Technologies</h1>
                    
                    </div>
                <List component="nav">
                    {/* Dashboard Sidebar Item */}
                    
                    <Box sx={{ padding: '10px', width: '200px', backgroundColor: '#f7f9fc' }}>
            {/* Dashboard Sidebar Item */}
            <Box sx={{ padding: '10px', width: '200px', backgroundColor: '#f7f9fc' }}>
            {/* Dashboard Sidebar Button */}
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Dashboard' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Dashboard' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Dashboard')}
            >
                <HomeIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">Dashboard</Typography>
            </Box>

            {/* Projects Sidebar Button */}
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Projects' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Projects' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Projects')}
            >
                <AssignmentIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">Projects</Typography>
            </Box>

            {/* Your Work Sidebar Button */}
            <Box
                display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Your Work' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Your Work' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Your Work')}
            >
                <AccountBalanceWalletIcon sx={{ marginRight: 1 }} />
                <Typography variant="body1">Your Work</Typography>
            </Box>
        </Box>
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
            <Box sx={{ flexGrow: 1,height:'100vh',overflow:'scroll',width:'70vw',backgroundColor:'background.default', padding: '20px' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: '20px',
                    }}
                >
                  
                    <Typography variant="h6" component="div" sx={{ color: '#333' }}>
                        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton sx={{ color: '#000000' }}>
                    <AddIcon className='iconsize'/>
                        
                        </IconButton>
                        <IconButton sx={{ color: '#333' }}>
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                    

                </Box>

                <h1 className='seperationline'></h1>
                {/* The rest of your content remains the same, like task overview and issues updates */}
                <Grid className='heero' container spacing={2}>
                    {/* To Do */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: 'background.default',
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
                            <FolderOutlinedIcon sx={{ fontSize: 40, color: '#FF6347' }} />
                        </Paper>
                    </Grid>

                    {/* In Progress */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: 'background.default',
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
                            <AccessTimeOutlinedIcon sx={{ fontSize: 40, color: '#1E90FF' }} />
                        </Paper>
                    </Grid>

                    {/* Review */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: 'background.default',
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
                            <GradeOutlinedIcon sx={{ fontSize: 40, color: '#FFD700' }} />
                        </Paper>
                    </Grid>
                    

                    {/* Done */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor:'background.default',
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
                            <DeleteOutlinedIcon sx={{ fontSize: 40, color: '#32CD32' }} />
                        </Paper>
                    </Grid>
                </Grid>

                {/* Issues Updates Section */}
                <Box className="dashboardesettingocn" sx={{ display: 'flex',flexDirection:'row',justifyContent:'space-between',  padding: 2, gap: 2 }}>
          {/* Activity Section */}
          <Paper className='totalissues'
      sx={{
        backgroundColor: 'backgroud.default', // Dark background
        padding: 2,
        color: '#fff',
        borderRadius: '10px',
        width:'40vw'
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ color: '#bbb' }}>
          Activity
        </Typography>
        <Button
          sx={{
            color: '#0A84FF',
            textTransform: 'none',
          }}
        >
          View All
        </Button>
      </Box>

      {/* Divider */}
      <Divider sx={{ backgroundColor: '#333' }} />

      {/* Activity List */}
      <Box sx={{ paddingY: 2 }}>
        {[...Array(5)].map((_, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 2,
            }}
          >
            {/* Avatar */}
            <Avatar
              src={profileclikk}
              alt="Daniel Thompson"
              sx={{ width: 40,borderRadius:'8px', height: 40, marginRight: 2 }}
            />

            {/* Activity Details */}
            <Box className="adjustingtexr" sx={{ flex: 1 }}>
              <Typography
                variant="body1"
                sx={{ color: '#fff',width:'192px', fontWeight: 500, mb: 0.5 }}
                noWrap
              >
                {index === 2
                  ? 'New Add list permission on the member list issue'
                  : index < 2
                  ? 'Add list permission on the member list issue'
                  : 'Work progress % calculation issue'}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#bbb' }}
              >
                Daniel Thompson • {index * 2 + 38} minutes ago
              </Typography>
            </Box>

            {/* Issue Button */}
            <Button
              variant="outlined"
              size="small"
              sx={{
                color: '#00C853', // Light green text color for the button
                borderColor: '#00C853', // Light green border
                textTransform: 'none',
                padding: '2px 8px',
                fontSize: '12px',
                marginLeft: 'auto',
                backgroundColor: 'rgba(0, 200, 83, 0.1)', // Transparent light green background
              }}
            >
              Issue
            </Button>
          </Box>
        ))}
      </Box>
    </Paper>

          {/* Issues Section */}
          <Paper className='issuessection'
  sx={{
    backgroundColor: 'background.default', // Matches dark background
    width: '30vw',
    color: '#bbb', // White text color
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px', // Rounded corners
  }}
>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
    <Typography variant="h6" sx={{ color: '#bbb', fontWeight: 600 }}>
      Issues
    </Typography>
    <Button
      variant="contained"
      sx={{
        backgroundColor: '#0A84FF', 
        color: '#fff',
        borderRadius: '8px', 
        padding: '5px 15px',
        textTransform: 'none', // Prevents text capitalization
        '&:hover': { backgroundColor: '#007AFF' } // Hover effect
      }}
    >
      View All
    </Button>
  </Box>

  <Tabs value={3} textColor="inherit" indicatorColor="primary" sx={{ marginBottom: 1 }}>
    <Tab label="Today Issues" sx={{ minWidth: 'auto', color: '#bbb', fontSize: '14px' }} />
    <Tab label="Pending Issues" sx={{ minWidth: 'auto', color: '#bbb', fontSize: '14px' }} />
    <Tab label="Review Issues" sx={{ minWidth: 'auto', color: '#bbb', fontSize: '14px' }} />
    <Tab label="Completed Issues" sx={{ minWidth: 'auto', color: '#bbb', fontSize: '14px' }} />
  </Tabs>
  <Divider sx={{ backgroundColor: '#333' }} />

  <Box className="textnskn" sx={{ paddingY: 2,color:'black' }}>
    {[{ label: 'Show employee attendance record in attendance view page', done: true },
      { label: 'There should be show file successfully uploaded instead of...', done: true }].map(
      (issue, index) => (
        <Box key={index} sx={{ display: 'flex', marginBottom: 2, alignItems: 'center' }}>
          <Box sx={{ 
            width: '20px', 
            height: '20px', 
            backgroundColor: issue.done ? '#0A84FF' : '#FF453A', 
            borderRadius: '50%', 
            marginRight: 2 
          }} />
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="body1" sx={{ color: '#bbb', fontWeight: 500 }}>
              {issue.label}
            </Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              {index === 0 ? 'CHR-17 • Clikkle HR' : 'ES-18 • Clikkle E-sign'}
            </Typography>
          </Box>
          <Button
            size="small"
            variant="outlined"
            sx={{
              color: issue.done ? '#0A84FF' : '#FF453A',
              borderColor: issue.done ? '#0A84FF' : '#FF453A',
              borderRadius: '12px',
              textTransform: 'none',
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

        </Box>

        <div className='structured-icons'>
            <div 
                className={`menu-item ${active === 'home' ? 'active' : ''}`} 
                onClick={() => setActive('home')}>
                <HomeIcon className='icon'/>
                <h1 className='menu-text'>Home</h1>
            </div>

            <div 
                className={`menu-item ${active === 'projects' ? 'active' : ''}`} 
                onClick={() => setActive('projects')}>
                <AssignmentIcon className='icon'/>
                <h1 className='menu-text'>Projects</h1>
            </div>

            <div 
                className={`menu-item ${active === 'dashboard' ? 'active' : ''}`} 
                onClick={() => setActive('dashboard')}>
                <DashboardIcon className='icon'/>
                <h1 className='menu-text'>Dashboard</h1>
            </div>

            <div 
                className={`menu-item ${active === 'work' ? 'active' : ''}`} 
                onClick={() => setActive('work')}>
                <WorkIcon className='icon'/>
                <h1 className='menu-text'>Your Work</h1>
            </div>

            <div 
                className={`menu-item ${active === 'team' ? 'active' : ''}`} 
                onClick={() => setActive('team')}>
                <GroupIcon className='icon'/>
                <h1 className='menu-text'>Team</h1>
            </div>
        </div>       </div>
    );
};

export default Dashboard;
