import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Dashboard.css'; // Include custom styles for extra styling

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('dashboard'); // Set the initial active section

    // Function to handle section click
    const handleSectionClick = (section) => {
        setActiveSection(section);
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1a1a1a', color: '#fff' }}>
            {/* Sidebar */}
            <Box sx={{ width: '250px', backgroundColor: '#2c2c2c', padding: '20px' }}>
                <Typography variant="h5" sx={{ marginBottom: '20px' }}>Clikkle Projects</Typography>
                <List component="nav">
                    {/* Dashboard Sidebar Item */}
                    <ListItem
                        button
                        onClick={() => handleSectionClick('dashboard')}
                        className={activeSection === 'dashboard' ? 'active-item' : ''}
                    >
                        <ListItemIcon>
                            <DashboardIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard" sx={{ color: '#fff' }} />
                    </ListItem>

                    {/* Projects Sidebar Item */}
                    <ListItem
                        button
                        onClick={() => handleSectionClick('projects')}
                        className={activeSection === 'projects' ? 'active-item' : ''}
                    >
                        <ListItemIcon>
                            <WorkIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Projects" sx={{ color: '#fff' }} />
                    </ListItem>

                    {/* Team Sidebar Item */}
                    <ListItem
                        button
                        onClick={() => handleSectionClick('team')}
                        className={activeSection === 'team' ? 'active-item' : ''}
                    >
                        <ListItemIcon>
                            <GroupIcon sx={{ color: '#fff' }} />
                        </ListItemIcon>
                        <ListItemText primary="Team" sx={{ color: '#fff' }} />
                    </ListItem>
                </List>
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
                    <Typography variant="h4" component="div" sx={{ color: '#fff' }}>
                        {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton sx={{ color: '#fff' }}>
                            <AddIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#fff' }}>
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
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#fff',
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
                            <AssignmentTurnedInIcon sx={{ fontSize: 40, color: '#FF6347' }} />
                        </Paper>
                    </Grid>

                    {/* In Progress */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#fff',
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
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#fff',
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
                            <ReportProblemIcon sx={{ fontSize: 40, color: '#FFD700' }} />
                        </Paper>
                    </Grid>

                    {/* Done */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Paper
                            sx={{
                                backgroundColor: '#333',
                                padding: '20px',
                                borderRadius: '8px',
                                color: '#fff',
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
                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="h5" sx={{ color: '#fff', marginBottom: '20px' }}>
                        Issues Updates
                    </Typography>
                    <Grid container spacing={2}>
                        {/* Activity Section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    backgroundColor: '#333',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                }}
                            >
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="h6" sx={{ color: '#fff' }}>
                                        Activity
                                    </Typography>
                                    <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
                                        View All
                                    </Button>
                                </Box>
                                <Box sx={{ marginTop: '20px' }}>
                                    {/* Add your activity updates here */}
                                    <Typography variant="body2" sx={{ color: '#bbb', marginBottom: '10px' }}>
                                        Add list permission on the member list issue... - 38 minutes ago
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#bbb', marginBottom: '10px' }}>
                                        Work progress % calculation issue has been added... - 45 minutes ago
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>

                        {/* Issues Section */}
                        <Grid item xs={12} md={6}>
                            <Paper
                                sx={{
                                    backgroundColor: '#333',
                                    padding: '20px',
                                    borderRadius: '8px',
                                    color: '#fff',
                                }}
                            >
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="h6" sx={{ color: '#fff' }}>
                                        Issues
                                    </Typography>
                                    <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
                                        View All
                                    </Button>
                                </Box>
                                <Box sx={{ marginTop: '20px' }}>
                                    {/* Add your issue updates here */}
                                    <Typography variant="body2" sx={{ color: '#bbb', marginBottom: '10px' }}>
                                        Show employee attendance record - Done
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: '#bbb', marginBottom: '10px' }}>
                                        There should be a file successfully uploaded issue... - Done
                                    </Typography>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;
