import { Box, Grid, IconButton, Typography,Avatar } from '@mui/material';
import image from './dahboardimg.png';

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
                    backgroundColor:'background.default',
                    alignItems:'center',
                }}>
                    <Avatar
                        alt="No activity"
                        
                        src={image}
                        sx={{ width: 150, height: 150, marginLeft:'500px',alignItems:'center', marginBottom: 2 }}
                    />
                    
                    <Typography variant="h5" sx={{ backgroundColor:'background.default',color: '#bbb' }}>
                    No current activity!
                    </Typography>
                    <Typography className='projectpara' variant="body2" color="text.secondary" sx={{textAlign:'center', color: '#bbb' }}>
                        When you create projects or projects are assigned to you, all progress
                        updates will be seen here.
                    </Typography>
                </Box>
        </Box>
    );
};
export default Home;