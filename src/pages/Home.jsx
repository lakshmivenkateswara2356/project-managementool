import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useLocation, useNavigate } from "react-router-dom";

import Image from '../components/Image';
import AddIcon from '@mui/icons-material/Add';

import { 
  Box, Typography, Grid, Paper, Button, Divider, Tabs, Tab, Avatar , List, ListItem, Dialog,useMediaQuery, ListItemText ,IconButton, DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';



const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [dataAvailable, setDataAvailable] = useState(true); // Simulate whether data exists or not
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleToggleData = () => {
        setDataAvailable(!dataAvailable); // Toggle data availability for testing
    };



    useEffect(() => {
        const selectedOrg = location.state?.organization;
        if (!selectedOrg) {
          // If no organization is found, redirect back to the organization list
          navigate("/listorganisation");
        }
      }, [location, navigate]);
    
      const organization = location.state?.organization;
    return (
        <Header>
            <Box container p={2} marginTop="-8px">
                {dataAvailable ? (
                    <Dashboard /> // Show Dashboard when data exists
                ) : (
                  <Box>
<Grid sx={{marginTop:'3px'}} container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                    <IconButton onClick={'gr'} >
                        
                        <AddIcon className='iconsize'/>
                        </IconButton>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                <div className='diveder'></div>
            </Grid>

            <Box>
            </Box>

                  </Box>
                )}

                
            </Box>
        </Header>
    );
};

export default Home;
