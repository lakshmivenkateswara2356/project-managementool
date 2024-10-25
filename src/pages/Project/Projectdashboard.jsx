import React , { useState } from 'react';
import { Box, Typography, IconButton,   Grid, Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import AddIcon from '@mui/icons-material/Add';
import Listimageone from '../../Assets/listimgone.png';
import Listimagetwo from '../../Assets/listimagetwo.png';
import Listimagethree from '../../Assets/listimagethree.png';
import Listimagefour from '../../Assets/listimagefour.png';
import Listimagefive from '../../Assets/listimagefive.png';
import Listimagesix from '../../Assets/listimagesix.png';
import Listimageseven from '../../Assets/listimageseven.png';
import Listimageeight from '../../Assets/listimageeight.png';
import Listimagenine from '../../Assets/listimagenine.png';
import Projecttable from '../../pages/Project/ProjectTable';
import Bottommenu from '../../pages/BottomMenu/Bottommenu';
import { IoGrid } from "react-icons/io5";
import { MdList } from "react-icons/md";

const Projectdashboard =()=>{

    const [view, setView] = useState('list'); // Default to 'list'

    const toggleView = () => {
      setView(view === 'list' ? 'grid' : 'list');
    };
  



    const projects = [
        { name: 'Clikkle E-Sign', image:Listimageone },
        { name: 'Clikkle HR', image: Listimagetwo },
        { name: 'Web Scrapper', image: Listimagethree},
        { name: 'CMail', image: Listimagefour },
        { name: 'Clikkle launch', image: Listimageeight },
        { name: 'Clikkle Projects', image: Listimagefive },
        { name: 'Clikkle Admin', image: Listimagesix},
        { name: 'Files Project', image: Listimageseven },
        { name: 'Clikkle Campaigns', image: Listimagenine },

        // Add other projects here...
      ];
    
    return (

    <Box sx={{overflow:'scroll',height:'90vh',}}>
         <Grid sx={{padding:'22px' }} container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='gray'>
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
        <Grid 
        container 
        sx={{ 
          padding: '22px', 
          display: 'flex', 
          marginRight: '12px', 
           // Centers content
        }}
      >
        {projects.map((project, index) => (
          <Grid 
            item 
            xs={4} // 4 columns on mobile (12 / 4 = 3 items per row)
            sm={6} // 2 items per row on small screens
            md={1} // 3 items per row on medium screens and up
            key={index}
            sx={{ 
              textAlign: 'center', 
              marginBottom: '16px', // Adds spacing between rows
            }}
          >
            <Avatar 
              src={project.image} 
              alt={project.name} 
              sx={{ 
                 
                height: '86px', 
                width: '88px', 
                borderRadius: '7px', 
                marginRight: 'auto', // Centers the avatar
                marginLeft: 'auto', 
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ 
                fontSize: '13px', 
                marginTop: '8px', 
                fontFamily: 'sans-serif', 
              }}
            >
              {project.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      
      )}

<Box sx={{display:{xs:'block',lg:'none'}}}>
<Bottommenu/>
</Box>
     
    </Box>
    )
};

export default Projectdashboard ;