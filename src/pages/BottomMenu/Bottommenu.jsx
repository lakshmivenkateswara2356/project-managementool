import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import { useNavigate } from 'react-router-dom';

import {
    Box,
    IconButton,
    Typography
} from '@mui/material';

const Bottommenu = () => {
    const navigate = useNavigate(); // Initialize navigate

    const [activeTab, setActiveTab] = useState('home'); // Set 'home' as the initial active tab

    // Function to handle tab click and change the activeTab state
    const handleTabClick = (tab) => {
        setActiveTab(tab);


    };


    const handleProjectd =()=>{
        navigate('/Projects')
    }

    const handleWork =()=>{
        navigate ('/yourwork')
    }

    const handleTeams =()=>{
        navigate('/shared-with-me')
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: '60px',
           alignItems:'center',
            position: 'fixed',
            paddingLeft: '12px',
            paddingRight: '12px',
            backgroundColor: '#1f1e1e',
            backgroundColor:'#161717',
            paddingTop: '22px',
            bottom: 0,
            zIndex: 1000,
            left: 0,
            right: 0,
        }}>
            {/* Home Icon */}
            <Box sx={{ alignItems: 'center' }} onClick={() => handleTabClick('home')}>
                <Box
                    sx={{
                        backgroundColor: activeTab === 'home' ? 'rgba(46, 99, 160, 0.2)' : '', // Active when 'home' is selected
                        borderRadius: '40%',
                        width: '47px',
                        height: '31px',
                        display: 'flex',
                        marginTop:'-25px',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <HomeOutlinedIcon
                        sx={{
                            fontSize: '20px',
                            color: activeTab === 'home' ? 'primary.main' : 'text.secondary', // Color changes based on activeTab
                        }}
                    />
                </Box>
                <Typography sx={{ fontSize: '12px', marginLeft: '8px', color: activeTab === 'home' ? 'primary.main' : 'text.secondary' }}>
                    Home
                </Typography>
            </Box>

            {/* Project Icon */}
            <Box sx={{ alignItems: 'center' }} onClick={() => handleTabClick('project')}>
                <Box
                    sx={{
                        backgroundColor: activeTab === 'project' ? 'rgba(46, 99, 160, 0.2)' : '', // Active when 'project' is selected
                        borderRadius: '40%',
                        width: '47px',
                        height: '31px',
                        marginTop:'-25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <AssignmentOutlinedIcon
                        sx={{
                            fontSize: '20px',
                            color: activeTab === 'project' ? 'primary.main' : 'text.secondary', // Color changes based on activeTab
                        }}
                    />
                </Box>
                <Typography onClick={handleProjectd} sx={{ fontSize: '12px', marginLeft: '7px', color: activeTab === 'project' ? 'primary.main' : 'text.secondary' }}>
                    Project
                </Typography>
            </Box>





            <Box
                    sx={{
                        backgroundColor: activeTab === ' ' ? 'rgba(46, 99, 160, 0.2)' : '', // Active when 'home' is selected
                        borderRadius: '40%',
                        width: '55px',
                        height: '37px',
                        marginTop:'-25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >  <IconButton sx={{marginLeft:'22px',marginTop:'10px'}} onClick={() => window.location.href = 'https://apps.clikkle.com/'}>
                    <AppsIcon
                        sx={{
                            fontSize: '30px',
                            color: activeTab === '' ? 'primary.main' : 'text.secondary', // Color changes based on activeTab
                        }}
                    />

</IconButton>
                </Box>
            {/* Apps Icon */}
            <Box>
              
                   
                
            </Box>

            {/* Work Icon */}
            <Box sx={{ alignItems: 'center' }} onClick={() => handleTabClick('work')}>
                <Box
                    sx={{
                        backgroundColor: activeTab === 'work' ? 'rgba(46, 99, 160, 0.2)' : '', // Active when 'work' is selected
                        borderRadius: '40%',
                        width: '47px',
                        height: '31px',
                        marginTop:'-25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <WorkOutlineIcon
                        sx={{
                            fontSize: '20px',
                            color: activeTab === 'work' ? 'primary.main' : 'text.secondary', // Color changes based on activeTab
                        }}
                    />
                </Box>
                <Typography onClick={handleWork} sx={{ fontSize: '12px', marginLeft: '10px', color: activeTab === 'work' ? 'primary.main' : 'text.secondary' }}>
                    Work
                </Typography>
            </Box>

            {/* Teams Icon */}
            <Box sx={{ alignItems: 'center' }} onClick={() => handleTabClick('teams')}>
                <Box
                    sx={{
                        backgroundColor: activeTab === 'teams' ? 'rgba(46, 99, 160, 0.2)' : '', // Active when 'teams' is selected
                        borderRadius: '40%',
                        width: '47px',
                        height: '31px',
                        marginTop:'-25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <PeopleIcon
                        sx={{
                            fontSize: '20px',
                            color: activeTab === 'teams' ? 'primary.main' : 'text.secondary', // Color changes based on activeTab
                        }}
                    />
                </Box>
                <Typography onClick={handleTeams } sx={{ fontSize: '12px', marginLeft: '7px', color: activeTab === 'teams' ? 'primary.main' : 'text.secondary' }}>
                    Teams
                </Typography>
            </Box>
        </Box>
    );
};

export default Bottommenu;
