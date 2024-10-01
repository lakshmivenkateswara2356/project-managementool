import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'; // Icon for 'Your Work'
import PeopleIcon from '@mui/icons-material/People';
import { Box, Typography } from '@mui/material';

const Bottommenu = () => {
    const [activeTab, setActiveTab] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    // Style for each icon and label
    const iconStyle = (tab) => ({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: '10px', // Adjusts padding around the icon and label
        width: activeTab === tab ? '80px' : 'auto', // Fixed width when active
        height: 'auto',
        borderRadius: activeTab === tab ? '20px' : 'none', // Rounded background for the active tab
        backgroundColor: activeTab === tab ? 'rgba(0, 122, 255, 0.2)' : 'transparent', // Background color for the active tab
        color: activeTab === tab ? '#007AFF' : '#aaa', // Active color blue and inactive gray
        transition: 'background-color 0.3s ease, color 0.3s ease, width 0.3s ease', // Smooth transitions for background, color, and width
    });

    return (
        <Box sx={{
            width: '100%',
            position: 'fixed',
            bottom: 0,
            backgroundColor: '#262626', // Background color of the menu
            padding: '10px 0',
            display: 'flex',
            justifyContent: 'space-around',
            boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.2)', // Shadow for the bar
        }}>
            {/* Home Tab */}
            <div onClick={() => handleTabClick('home')} style={iconStyle('home')}>
                <HomeOutlinedIcon sx={{
                    fontSize: '30px',
                    color: activeTab === 'home' ? '#007AFF' : '#aaa', // Blue when active, gray when inactive
                }} />
                <Typography variant="caption" sx={{ fontSize: '12px', color: activeTab === 'home' ? '#007AFF' : '#aaa' }}>
                    Home
                </Typography>
            </div>

            {/* Projects Tab */}
            <div onClick={() => handleTabClick('projects')} style={iconStyle('projects')}>
                <AssignmentOutlinedIcon sx={{
                    fontSize: '30px',
                    color: activeTab === 'projects' ? '#007AFF' : '#aaa',
                }} />
                <Typography variant="caption" sx={{ fontSize: '12px', color: activeTab === 'projects' ? '#007AFF' : '#aaa' }}>
                    Projects
                </Typography>
            </div>

            {/* Your Work Tab */}
            <div onClick={() => handleTabClick('yourwork')} style={iconStyle('yourwork')}>
                <GridViewOutlinedIcon sx={{
                    fontSize: '30px',
                    color: activeTab === 'yourwork' ? '#007AFF' : '#aaa',
                }} />
                <Typography variant="caption" sx={{ fontSize: '12px', color: activeTab === 'yourwork' ? '#007AFF' : '#aaa' }}>
                    Your Work
                </Typography>
            </div>

            {/* Team Tab */}
            <div onClick={() => handleTabClick('team')} style={iconStyle('team')}>
                <PeopleIcon sx={{
                    fontSize: '30px',
                    color: activeTab === 'team' ? '#007AFF' : '#aaa',
                }} />
                <Typography variant="caption" sx={{ fontSize: '12px', color: activeTab === 'team' ? '#007AFF' : '#aaa' }}>
                    Team
                </Typography>
            </div>
        </Box>
    );
};

export default Bottommenu;
