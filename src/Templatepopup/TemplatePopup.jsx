import React from 'react';
import { Box, Typography, Button,Alert } from '@mui/material';
import { Grid, Paper, List, ListItem, ListItemText } from '@mui/material';
import Teamplan from '../Assets/teampla.png';
import Companypl from '../Assets/compaPl.png';
import ProjectDetailsForm from '../pages/ProjectDetailsForm';
import Company from '../Assets/company.png';
import Team from '../Assets/team.png';

import Kanban from '../Assets/Kanban.png';
import './TemplatePopup.css';

const TemplatePopup = ({ onClose }) => {


  const simplifiedConfig = [
    'Anyone on your team can set up and maintain',
    'Settings do not impact other projects',
    'Easy setup for issue types and custom fields',
    'Simple configuration for multiple workflows',
    'Access level permissions'
  ];

  const expertConfig = [
    'Set up and maintained by your clikkle projects admins',
    'Standardized configuration shared across projects',
    'Complete control over issue types and custom fields',
    'Customizable workflows, statuses and issue transitions',
    'Detailed permission schemes'
  ];


  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark background for popup overlay
        display: 'flex',
        justifyContent: 'center',
        
        
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
        
        }}
      >
        <Box
      sx={{
        backgroundColor: 'background.default', // Dark background color to match design
        borderRadius: '8px',
        padding: '24px',
        height:'95vh',
        overflow:'scroll',
        width: '95vw', // Adjust width to match the dialog in the image
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
         // White text
      }}
    >
      {/* Back navigation */}
      <Typography
        variant="body2"
        sx={{
          display: 'flex',
          alignItems: 'center',
           // Greyish text for back button
          marginBottom: '16px',
           // Function to close the popup
           cursor: 'pointer', 
           position: 'sticky',
           
           width:'100%',
           top: 0,
        }}
        onClick={onClose}
      >
        ← Back to project templates
      </Typography>

      {/* Step 1: Project Template */}
      <Box sx={{display:'flex',}}>

      

      <Typography sx={{fontSize:'22px', backgroundColor:'white',color:'black',height:'32px',width:'32px',textAlign:'center',borderRadius:'22px',marginRight:'12px',}}>1</Typography>
      <Typography variant="h5" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
        
        Project template
      </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px',
          backgroundColor: '#424242',
          borderRadius: '8px',
          marginBottom: '24px',
        }}
      >
        <Box>
          <Box sx={{display:'flex',}}>
          <div>
          <img src={Kanban} className='kanbanimage'/>
          </div>
          <div className='Kanbanminicard'>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: '8px' }}>
            Kanban
          </Typography>
          
          <Typography variant="body2" sx={{ color: '#ffffff80' }}>
            See and move your project forward by managing tasks on an easy-to-use board.
          </Typography>
          </div>
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
           backgroundColor:'gray',
            color: '#fff',
            textTransform: 'none',
            padding: '8px 16px',
          }}
        >
          Choose a project type
        </Button>
      </Box>

      {/* Step 2: Choose a project type */}
      <Box sx={{display:'flex',}}>

      

      <Typography sx={{fontSize:'22px', backgroundColor:'white',color:'black',height:'32px',width:'32px',textAlign:'center',borderRadius:'22px',marginRight:'12px',}}>2</Typography>
      <Typography variant="h5" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>
        
        Project template
      </Typography>
      </Box>

      <Box>
      <Alert severity="warning" sx={{ marginBottom: '16px',height:'73px',width:'88vw',textAlign:'center', }}>
      You'll need to create a new project if you decide to switch project types later.
    </Alert>
      </Box>

      {/* Project type options */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingBottom: '16px',
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold', color: '#ff66d6', marginBottom: '8px',fontSize:'22px' }}
          >
            Team-managed
          </Typography>
          <Box sx={{height:'2px',width:'550px', backgroundColor:'#ff66d6'}}></Box>
          <Typography variant="body2" sx={{ marginTop:'33px',textAlign:'left',fontSize:'18px' }}>
          Set up and maintained by your team.
          </Typography>

          <Typography variant="body2" sx={{ marginTop:'13px',textAlign:'left',fontSize:'14px',width:'450px' }}>
          For teams that want to manage their own work processes in their own space. Choose and combine agile tools to support your team as it grows and becomes more complex.
          </Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="body1"
            sx={{ fontWeight: 'bold',  marginBottom: '8px',fontSize:'22px',color:'#66c1ff' }}
          >
            Company-managed
          </Typography>
          <Box sx={{height:'2px',width:'550px', backgroundColor:'#66c1ff'}}></Box>
          <Typography variant="body2" sx={{marginTop:'33px',textAlign:'left',fontSize:'18px',width:'380px' }}>
          Set up and maintained by your clikkle projects admins.
          </Typography>

          <Typography variant="body2" sx={{ marginTop:'13px',textAlign:'left',fontSize:'14px',width:'450px' }}>
          For teams that want to manage their own work processes in their own space. Choose and combine agile tools to support your team as it grows and becomes more complex.
          </Typography>
        </Box>
      </Box>
      <Grid sx={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
        {/* Simplified Configuration */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#52144c',
          alignItems:'center',
              padding: '20px',
              borderRadius: '8px',
              width:'550px',
              color: '#ffffff'
            }}
          >
           
           
<Typography sx={{textAlign:'center',fontSize:'22px',paddingTop:'42px'}}>Simplified configuration</Typography>

<Box sx={{height:'200px',alignItems:'center',}}>
<img src={Team} className='immages' />

</Box>
<p className='mimnipara'>Get up and running quickly, with simplified configuration.</p>
<div className='containerSubco'>
<div className='Heoolo'>
<h1 className='arrangingsometext'>Anyone on your team can set up and maintain</h1>
</div>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Settings do not impact other projects</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Easy setup for issue types and custom fields</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Simple configuration for multiple workflows</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Access level permissions</h1>
</div>
        
          </Paper>
        </Grid>

        {/* Expert Configuration */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#243c61',
          alignItems:'center',
              padding: '20px',
              borderRadius: '8px',
              width:'550px',
              color: '#ffffff'
            }}
          >
           
           
<Typography sx={{textAlign:'center',fontSize:'22px',paddingTop:'42px'}}>Expert configuration</Typography>

<Box sx={{height:'200px',alignItems:'center',}}>
<img src={Company} className='immages' />

</Box>
<p className='mimnipara'>Benefit from complete control with expert configuration, customization and flexibility.</p>
<div className='containerSubco'>
<div className='Heoolo'>
<h1 className='arrangingsometext'>Set up and maintained by your clikkle projects admins</h1>
</div>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Standardized configuration shared across projects</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Complete control over issue types and custom fields</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Customizable workflows, statuses and issue transitions</h1>
<div className='lineTeamSeperation'></div>
<h1 className='arrangingsometext'>Detailed permission schemes</h1>
</div>
        
          </Paper>
        </Grid>
      </Grid>


      <Box>

         
<div className='SmallAbouyFlex'>

<div className='smallAboutTeam'>
<h1 className='simpleconfigu'>Essential features</h1>
<img src={Teamplan} className='TeamFe'/>
<p className='modernclassClikk'>A modern Clikkle Projects experience for teams who don’t need advanced features.</p>

<div className='AccessPermission'>
<h1 className='arrangingsometext'>Only show your project’s issues on your board</h1>
<div className='lineTeamSeperationee'></div>
<h1 className='arrangingsometext'>Essential agile reporting</h1>
</div>
</div>

<div className='smallAboutComp'>
<h1 className='simpleconfigu'>Advanced features</h1>
<img src={Companypl} className='TeamFe'/>
<p className='modernclassClikk'>All the power and features that Clikkle Projects is known for.</p>

<div className='AccessPermission'>
<h1 className='arrangingsometext'>Pull in issues from other projects on your board</h1>
<div className='lineTeamSeperationee'></div>
<h1 className='arrangingsometext'>Comprehensive agile reporting</h1>
</div>
</div>

</div>

<div>

<div className='linesepetgerKan'></div>

<div className='buttondisplay'>
<button  onClick={onClose} className='Buttomele'>Select a team-managed project</button>
<button className='Buttomeleee'>Select a company-managed project</button>
</div>
</div>

      </Box>

      <Box>
      <ProjectDetailsForm/>
      </Box>
    </Box>
    
      </Box>

    
    </Box>
  );
};

export default TemplatePopup;
