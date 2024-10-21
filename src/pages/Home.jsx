import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Dashboard from '../pages/Dashboard';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useLocation, useNavigate } from "react-router-dom";

import AddIcon from '@mui/icons-material/Add';

import { 
  Box, Typography, Grid,IconButton, 
} from '@mui/material';



const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [dataAvailable, ] = useState(true); // Simulate whether data exists or not

    


    useEffect(() => {
        const selectedOrg = location.state?.organization;
        if (!selectedOrg) {
          // If no organization is found, redirect back to the organization list
          navigate("/listorganisation");
        }
      }, [location, navigate]);
    
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
