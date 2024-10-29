import React from 'react';
import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import Image from '../../components/Image';
import Streamlineimg from "../../Assets/streamline-emojis_bird-1 (2).png";
import Bottommenu from "../../pages/BottomMenu/Bottommenu";

const ProjectForm = () => {
  return (
    <>
    <Box 
      sx={{
        marginTop: '-33px',
        padding: { xs: '20px', sm: '40px' }, // Padding for mobile view
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
            // Placeholder for the Icon
          }}
        >
          <Box sx={{ 
            backgroundColor: '#E367D7', 
            alignItems: 'center', 
            textAlign: 'center', 
            height: '40px', 
            width: '40px', 
            marginBottom: "12px", 
            borderRadius: "8px",
          }}>
            <Image 
              sx={{ width: '32px', borderRadius: '5%', height: '32px', marginTop: '5px' }}
              src={Streamlineimg}
              alt="Icon" 
            />
          </Box>
        </Box>
        <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#1976d2', 
            color: '#fff', 
            fontSize: '12px' 
          }}
        >
          Change Icon
        </Button>
      </Box>

      {/* Form Fields */}
      <Box 
        sx={{ 
          alignItems: 'center', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
        }} 
        component="form" 
        noValidate 
        autoComplete="off"
      >
        {['Name', 'Key'].map((label, index) => (
          <TextField 
            key={label}
            fullWidth 
            label={label} 
            variant="outlined" 
            sx={{ 
              marginBottom: '15px',
              borderRadius: '4px',
              width: { xs: '100%', sm: '550px' }, // Responsive width
              '& .MuiInputBase-root': {
                height: '45px',
              },
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: '#ccc'
              },
              input: { 
                padding: '10px',
              },
              label: { 
                color: '#ccc',
              }
            }} 
            InputLabelProps={{ 
              style: { 
                color: '#999'
              } 
            }} 
            placeholder={`Enter ${label.toLowerCase()}`}
          />
        ))}

        {['Category', 'Project Lead', 'Default Assignee'].map((label) => (
          <TextField
            key={label}
            fullWidth
            select
            label={label}
            variant="outlined"
            sx={{ 
              marginBottom: '15px', 
              borderRadius: '4px',
              width: { xs: '100%', sm: '550px' }, // Responsive width
              '& .MuiInputBase-root': {
                height: '45px',
              },
            }}
            InputLabelProps={{ style: { color: '#999' } }}
          >
            <MenuItem value="Option 1">Option 1</MenuItem>
            <MenuItem value="Option 2">Option 2</MenuItem>
            <MenuItem value="Option 3">Option 3</MenuItem>
          </TextField>
        ))}

        <Typography 
          sx={{ 
            color: '#999', 
            marginBottom: '15px', 
            fontSize: '12px' 
          }}
        >
          Make sure your project lead has access to issues in this project.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%' }}>
          <Button 
            variant="contained" 
            sx={{ 
              backgroundColor: '#1976d2', 
              color: '#fff', 
              padding: '10px',
              borderRadius: '4px', 
              width: { xs: '100%', sm: '140px' }, // Responsive width
              height: '35px',
              marginRight: '0', // Adjust margins for mobile
            }}
          >
            Save
          </Button>
        </Box>
        
      </Box>
      
    </Box>
    <Box sx={{display:{xs:'block',lg:'none'}}}>
<Bottommenu/>
</Box>
    </>
  );
};

export default ProjectForm;
