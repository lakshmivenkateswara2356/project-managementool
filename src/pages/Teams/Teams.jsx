import React from 'react';
import { Box, IconButton, Typography, Stack, Avatar, Dialog, DialogActions,useMediaQuery, Grid,  Divider, Alert, DialogContent, DialogContentText, DialogTitle, TextField, Button, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Teammembers from '../Teams/Teammembers';
import Header from '../../components/Header';


const Teams =()=>{
    return (
<Box>
    <Header>
        <Box>
        <Grid sx={{paddingTop:'7px'}} container alignItems='center'  >
                <Grid item xs>
                    <Typography sx={{marginLeft:'22px',color:'gray',}} variant='h5' color='text.primary'>
                        Teams
                    </Typography>
                </Grid>
              
                <Grid sx={{display:'flex'}} item>
<Box sx={{marginTop:'8px',}}>
                    <Button sx={{color:'white',backgroundColor:'#1c1c1c',width:'95px',height:'32px',marginRight:'10px',fontSize:'12px',}}>Create team</Button>
                    <Button sx={{color:'white',backgroundColor:'#3b84d9',width:'95px',height:'32px',fontSize:'12px',}}>Add people</Button>
                    </Box>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                
            </Grid>
            <Typography sx={{fontFamily:'sans-serif',fontSize:'15px',marginLeft:'22px',color:'gray'}}>See your team members and people you collaborate with.</Typography>
            <div className='diveder'></div>



            <Teammembers/>
        </Box>


    </Header>
</Box>
    )
};
export default Teams;