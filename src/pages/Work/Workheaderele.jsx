import React from 'react';
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Partyillu from '../../Assets/Illustrtion.png';
import { GoTypography } from 'react-icons/go';
import Image from '../../components/Image';
import Listofprojects from '../../pages/Work/listofprojectsifwehave';
import Detailsoftheproject from '../../pages/Work/Detailofworkproject';


const Workheaderele =()=>{


      // Example data to check if projects exist. Replace with actual logic or API call.
  const projects = [
    {
      name: 'Clikkle HR',
      description: 'Team-managed business',
      avatarColor: '#00C853',
      openIssues: 0,
      done: 1,
    },
    {
      name: 'Clikkle E-Sign',
      description: 'Team-managed business',
      avatarColor: '#F50057',
      openIssues: 3,
      done: 1,
    },
  ];; // If empty, show the message; if not, show Listofprojects.


   
    
    return (
       <Box >
            <Grid container alignItems="center">
        <Grid item xs>
          <Typography sx={{ marginLeft: '22px', color: 'gray' }} variant="h5" color="text.primary">
            Your Work
          </Typography>
        </Grid>
        <Grid item>
          <IconButton sx={{ display: { sm: 'block' } }}></IconButton>
        </Grid>
        <Grid item>
          <IconButton sx={{ display: { sm: 'block' } }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Typography
        sx={{ marginLeft: '22px', color: 'gray', fontSize: '14px', fontFamily: 'sans-serif' }}
      >
        Recent projects
      </Typography>

      {projects.length === 0 ? (
        // If there are no projects, show this content.
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
          <Box>
            <Box>
              <img
                src={Partyillu}
                alt="Party Illustration"
                style={{ height: '102px', display: 'block', margin: '0 auto' }}
              />
            </Box>
            <Box textAlign="center" mt={2}>
              <Typography sx={{ fontFamily: 'sans-serif' }}>
                You haven’t worked on anything yet!
              </Typography>
              <Typography sx={{ fontFamily: 'sans-serif', color: 'gray', fontSize: '12px' }}>
                On this page, you’ll find your recently worked on issues.
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        // If there are projects, show the Listofprojects component.
        <Listofprojects />
      )}
          <Detailsoftheproject/>

         
          
       </Box>
    )
}

export default Workheaderele ;