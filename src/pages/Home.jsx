import { Box, Grid, IconButton, Typography,Avatar } from '@mui/material';
import image from './dahboardimg.png';
import './Home.css'

import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import React from 'react';
const Home = () => {
    return (
        <Box p={2}>
            <Grid container alignItems='center' width='100%'>
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <IconButton sx={{ color: 'white' }}>
                    <AddIcon />
                        
                        </IconButton>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { xs: 'none', sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                
            </Grid>
           
            

            <Box   textAlign="center"
                sx={{
                    
                    alignItems:'center',
                }}>
                  <div className='elignment' >
                    <Avatar 
                        alt="No activity"
                        
                        src={image}
                        sx={{ width: 150, height: 150,  marginBottom: 2,alignItems:'center',marginTop:'105px' }}
                    />

</div>
                    
                    <Typography variant="h5" sx={{ color: '#bbb' }}>
                    No current activity!
                    </Typography>
                    <div className='parraek'>
                    <p1 className='projectpara'>
                        When you create projects or projects are assigned to you, all progress
                        updates will be seen here.
                    </p1>
                    </div>
                </Box>
        </Box>
    );
};
export default Home;