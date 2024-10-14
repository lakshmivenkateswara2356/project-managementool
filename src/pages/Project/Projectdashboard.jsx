import React , { useState } from 'react';
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent, Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import Image from '../../components/Image';
import Projecttable from '../../pages/Project/ProjectTable';
import { IoGrid } from "react-icons/io5";
import { MdList } from "react-icons/md";
import Menuitem from '../../Assets/Vector (10).png';

const Projectdashboard =()=>{

    const [view, setView] = useState('list'); // Default to 'list'

    const toggleView = () => {
      setView(view === 'list' ? 'grid' : 'list');
    };
  



    const projects = [
        { name: 'Clikkle E-Sign', image: 'path/to/image1.png' },
        { name: 'Clikkle HR', image: 'path/to/image2.png' },
        { name: 'Web Scrapper', image: 'path/to/image3.png' },
        // Add other projects here...
      ];
    
    return (

    <Box sx={{overflow:'scroll',height:'90vh',}}>
         <Grid sx={{padding:'22px' }} container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
Projects                    </Typography>
                </Grid>

                
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                    <IconButton onClick={''} >
                        
                        <AddIcon className='iconsize'/>
                        </IconButton>
                    </IconButton>
                </Grid>

                <Grid item>
          <IconButton onClick={toggleView}>
            {view === 'list' ? <IoGrid  /> : < MdList />}
          </IconButton>
        </Grid>



                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>


                
                
            </Grid>

            <Grid >
                <Typography sx={{marginLeft:'22px',
                    marginTop:'-27px',
                    fontSize:'13px',
                    color:'gray',
                }}>                Project organization refers to the style of coordination, communication and management a team uses throughout a project’s lifecycle.
                </Typography>
                </Grid>

                <div className='diveder'></div>

                {view === 'list' ? (
        <Box>
          <Projecttable /> {/* List view component */}
        </Box>
      ) : (
        <Grid  sx={{ padding: '22px',display:'flex',marginRight:'12px'
         }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              
                
                  <Avatar sx={{backgroundColor:'red',height:'76px',width:'76px',borderRadius:'7px',marginRight:'18px'}} src={project.image} alt={project.name} />
                  <Typography sx={{fontSize:'13px',marginRight:'12px'}} variant="h6">{project.name}</Typography>
                
              
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
    )
};

export default Projectdashboard ;