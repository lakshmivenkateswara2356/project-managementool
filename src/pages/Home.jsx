import { Box, IconButton, Typography, Stack, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import image from './dahboardimg.png';
import ActionIcon from '../components/ActionIcon';
import Icon from '../components/Icon';

import './Home.css'

const Home = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newItem, setNewItem] = useState('');

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleSave = () => {
        console.log('New item added:', newItem);
        setOpenDialog(false);
        setNewItem('');
    };

    return (
       <div>
        
        <Navbar/>
        
        <div className='dashboardarrange'>
        <Box
            p={2}
            sx={{
                backgroundColor: '#ffffff', // Black background
                height: '100vh',
                color: '#000000',
            }}
        >
            {/* Sidebar */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '250px',
                    height: '100vh',
                    color: '#1a1a1a',
                    backgroundColor: '#FFFFFF',
                    padding: '20px',
                }}
            >
                <Typography variant="h6" color="text.primary" sx={{ color: '#1a1a1a' }}>
                    Clikkle Projects
                </Typography>

                <Stack mt={2} spacing={2}>
                    <Box display="flex" alignItems="center">
                        <HomeIcon sx={{ color: '#bbb', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#bbb' }}>
                            Dashboard
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <AssignmentIcon sx={{ color: '#bbb', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#bbb' }}>
                            Projects
                        </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                        
                        <AccountBalanceWalletIcon sx={{ color: '#bbb', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#bbb' }}>
                            Your Work
                        </Typography>
                    </Box>
                    <div className='dividingline'></div>
                    <p1 className="yourworj">Your work</p1>
                    <Box display="flex" alignItems="center">
                        <GroupIcon sx={{ color: '#bbb', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#bbb' }}>
                            Team
                        </Typography>
                    </Box>

                    
                </Stack>
                <IconButton sx={{ color: '#fff' }}>
                            <AddIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#fff' }}>
                            <MoreVertIcon />
                        </IconButton>
                    

                <Box sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
                    <Typography variant="body2" sx={{ color: '#bbb' }}>
                        Storage
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#888' }}>
                        1 GB used of 5 GB
                    </Typography>
                    <button className='buttonelement'>Upgrade Storege</button>
                </Box>
            </Box>

            {/* Main content area */}
            <Box
                ml="250px"
                sx={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                   
                    backgroundColor: '#FFFFFF',
                }}
            >
                {/* Top-right corner with Dashboard text and icons */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography variant="h5" color="text.primary" sx={{ color: '#fff', marginRight: 2 }}>
                        Dashboard
                    </Typography>

                    <IconButton onClick={handleClickOpen}>
                        <AddIcon sx={{ color: '#0000FF' }} />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon sx={{ color: '#fff' }} />
                    </IconButton>
                </Box>

                {/* Center content */}
                <Box textAlign="center">
                    <Avatar
                        alt="No activity"
                        className='imagedashboard'
                        src={image}
                        sx={{ width: 150, height: 150, marginBottom: 2 }}
                    />
                    <Typography variant="h5" color="text.primary" sx={{ color: '#fff' }}>
                        No current activity!
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ color: '#bbb' }}>
                        When you create projects or projects are assigned to you, all progress
                        updates will be seen here.
                    </Typography>
                </Box>
            </Box>

            {/* Right toolbar */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '100vh',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '10px',
                }}
            >
               
                <IconButton>
                    <InfoIcon sx={{ color: '#fff' }} />
                </IconButton>
                <Icon/>
            </Box>

            {/* Dialog for adding new item */}
            <Dialog open={openDialog} onClose={handleClose}>
                <DialogTitle>Add New Item</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of the new item you want to add.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="New Item"
                        fullWidth
                        variant="standard"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Add</Button>
                </DialogActions>
            </Dialog>
        </Box>
        

        </div>
       </div>
       
    );
};

export default Home;
