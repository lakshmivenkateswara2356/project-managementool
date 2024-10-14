import React from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import ProjectHeader from './ProjectHeader';
import Image from '../../components/Image';
import Streamlineimg from "../../Assets/streamline-emojis_bird-1 (2).png";

const ProjectForm = () => {
  return (
    <Box 
      sx={{marginTop:'-33px',
        
      }}
    >


        
      {/* Change Icon Section */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}
      >
        <Box 
          sx={{
           
          }}
        >
          {/* Placeholder for the Icon */}
          <Box sx={{ backgroundColor:'#E367D7',alignItems:'center',textAlign:'center',height:'40px',width:'40px',marginBottom:"12px",borderRadius:"8px",}}>
          <Image sx={{width: '32px', borderRadius: '5%',height:'32px',marginTop:'5px'}}
            src={Streamlineimg}
            alt="Icon" 

          />

</Box>
        </Box>
        <Button 
          variant="contained" 
          sx={{ backgroundColor: '#1976d2', color: '#fff',fontSize:'12px', }}
        >
          Change Icon
        </Button>
      </Box>

      {/* Form Fields */}
      <Box sx={{alignItems:'center',textAlign:'center',display:'flex',flexDirection:'column',}} component="form" noValidate autoComplete="off" >
      <TextField 
  fullWidth 
  label="Name" 
  variant="outlined" 
  sx={{ 
    marginBottom: '15px', 
    
    borderRadius: '4px',
    width: '550px', // Adjusts the width of the field
    '& .MuiInputBase-root': { // Adjusts the input base root to control height
      height: '45px', // Desired height of the input box
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ccc' // Color for the outline
    },
    input: { 
       // Input text color
      padding: '10px', // Adjusts padding inside the input
    },
    label: { 
      color: '#ccc', // Label color
    }
  }} 
  InputLabelProps={{ 
    style: { 
      color: '#999' // Color for the label when floating
    } 
  }} 
  placeholder="Enter project name"
/>

        
        <TextField 
          fullWidth 
          label="Key" 
          variant="outlined" 
          sx={{ 
            marginBottom: '15px', 
             
            borderRadius: '4px',
            input: {  },
            label: { color: '#ccc' },
            width: '550px',
            '& .MuiInputBase-root': { // Adjusts the input base root to control height
                height: '45px', // Desired height of the input box
              },
            
          }} 
          InputLabelProps={{ style: { color: '#999' } }} 
          placeholder="Enter key"
        />

        <TextField
          fullWidth
          select
          label="Category"
          variant="outlined"
          sx={{ 
            marginBottom: '15px', 
           
            borderRadius: '4px',
            input: {  },
            label: { color: '#ccc' },
            width: '550px',
            '& .MuiInputBase-root': { // Adjusts the input base root to control height
                height: '45px', // Desired height of the input box
              },
          }}
          InputLabelProps={{ style: { color: '#999' } }}
        >
          <MenuItem value="Category 1">Category 1</MenuItem>
          <MenuItem value="Category 2">Category 2</MenuItem>
          <MenuItem value="Category 3">Category 3</MenuItem>
        </TextField>

        <TextField
          fullWidth
          select
          label="Project Lead"
          variant="outlined"
          sx={{ 
            marginBottom: '5px', 
            
            borderRadius: '4px',
            input: {  },
            label: { color: '#ccc' },
            width: '550px',
            '& .MuiInputBase-root': { // Adjusts the input base root to control height
                height: '45px', // Desired height of the input box
              },
          }}
          InputLabelProps={{ style: { color: '#999' } }}
        >
          <MenuItem value="Lead 1">Lead 1</MenuItem>
          <MenuItem value="Lead 2">Lead 2</MenuItem>
          <MenuItem value="Lead 3">Lead 3</MenuItem>
        </TextField>
        <Typography 
          sx={{ 
            color: '#999', 
            marginBottom: '15px', 
            fontSize: '12px' 
          }}
        >
          Make sure your project lead has access to issues in this project.
        </Typography>

        <TextField
          fullWidth
          select
          label="Default Assignee"
          variant="outlined"
          sx={{ 
            marginBottom: '20px', 
         
            borderRadius: '4px',
            input: {  },
            label: { color: '#ccc' },
            width: '550px',
            '& .MuiInputBase-root': { // Adjusts the input base root to control height
                height: '45px', // Desired height of the input box
              },
          }}
          InputLabelProps={{ style: { color: '#999' } }}
        >
          <MenuItem value="Unassigned">Unassigned</MenuItem>
          <MenuItem value="Assignee 1">Assignee 1</MenuItem>
          <MenuItem value="Assignee 2">Assignee 2</MenuItem>
        </TextField>

<Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',}}>
        <Button 
          variant="contained" 
          sx={{ 
            
            backgroundColor: '#1976d2', 
            color: '#fff', 
            padding: '10px',
            borderRadius: '4px', 
            width: '140px',
            height:'35px',
            marginRight:'-280px', // Desired height of the input box
              
          }}
        >
          Save
        </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectForm;
