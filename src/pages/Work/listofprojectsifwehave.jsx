// listofprojectsifwehave.jsx

import React from 'react';
import Image from '../../components/Image';
import Streamline from '../../Assets/streamline-emojis_bird-1 (2).png';
import Robo from '../../Assets/Robo.png';
import { Box, Typography, Card, CardContent, Grid, Avatar } from '@mui/material';

const ProjectCard = ({ project }) => (
  <Card sx={{ color: 'white', display: 'flex', p: 2, minWidth: 200,height:'120px' }}>
    <Box
      sx={{
        width: '30px',
        height:'125px',
        marginLeft:'-16px',
        marginTop:'-33px',
        backgroundColor: '#2A4B84',
        borderRadius: '4px',
        
      }}
    />
    <Avatar sx={{ bgcolor: project.avatarColor, marginRight: 2,borderRadius:'9px',height:'30px',width:'30px',marginLeft:'-12px', }}>  <img
          src={project.Image}
          alt={`${project.name} avatar`}
          style={{ height: '70%', width: '70%', borderRadius: '9px' }}
        /></Avatar>
    <CardContent sx={{ padding: '0', flexGrow: 1 }}>
      <Typography sx={{fontSize:'12px',}} variant="h6">{project.name}</Typography>
      <Typography sx={{fontSize:'8px'}} variant="body2" color="gray" gutterBottom>
        {project.description}
      </Typography>
      <Typography sx={{fontSize:'10px'}} variant="body2">Issues details</Typography>
      <Typography sx={{fontSize:'9px'}} variant="body2" color="gray">
        Open issues: {project.openIssues}
      </Typography>
      <Typography sx={{fontSize:'9px'}} variant="body2" color="gray">
        Done: {project.done}
      </Typography>
    </CardContent>
  </Card>
);

const ListOfProjectsIfWeHave = () => {
  const projects = [
    {
      name: 'Clikkle HR',
      description: 'Team-managed business',
      avatarColor: '#00C853',
      Image :Robo ,
      openIssues: 0,
      done: 1,
    },
    {
      name: 'Clikkle E-Sign',
      description: 'Team-managed business',
      avatarColor: '#E367D7',
      Image:Streamline,
      openIssues: 3,
      done: 1,
    },
  ];

  return (
    <Box sx={{ color: 'white', height: '20vh', p: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
      
    
      </Box>
      
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListOfProjectsIfWeHave;
