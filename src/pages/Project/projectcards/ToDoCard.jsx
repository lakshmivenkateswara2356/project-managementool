import React, { useState } from 'react';
import { Card, Typography, Box, TextField, Checkbox, Avatar, IconButton, Button } from '@mui/material';
import { orange } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ToDoCard = ({ isMobile }) => {
  const [toDoInput, setToDoInput] = useState('');
  const [toDoItems, setToDoItems] = useState([]);

  const handleCreateToDo = () => {
    if (toDoInput.trim()) {
      setToDoItems([...toDoItems, toDoInput]);
      setToDoInput('');
    }
  };

  return (

    <Box>
    <Card
      sx={{
        width: isMobile ? '100%' : '270px',
        height:"145px",
        padding: '16px',
        backgroundColor: 'background.default',
        borderRadius: '8px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography
          sx={{
            color: '#FF3D3D',
            fontSize: '14px',
            backgroundColor: '#36000080',
            border: '1px solid #FF3D3D',
            padding: '4px 8px',
            borderRadius: '9px',
          }}
        >
          To Do
        </Typography>
        <Box
          sx={{
            backgroundColor: '#36000080',
            border: '1px solid #FF3D3D',
            padding: '4px 8px',
            borderRadius: '9px',
            width: '34px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FF3D3D',
            fontSize: '13px',
          }}
        >
          {toDoItems.length}
        </Box>
      </Box>
      <Box sx={{backgroundColor:"background.default"}}>
      <TextField
  fullWidth
  variant="filled"
  value={toDoInput}
  onChange={(e) => setToDoInput(e.target.value)}
  placeholder="What needs to be done?"
  InputProps={{
    disableUnderline: true,
    sx: {
      borderRadius: '4px',
      backgroundColor: 'background.default',
      padding: '2px 8px',  // Reduces vertical padding
      fontSize: '14px',
      height:"0px",
      lineHeight: '1.2',   // Compacts line height
      minHeight: '12px',  // Removes any minimum height constraint
      '&::placeholder': {
        color: '#A0A0A0',
      },
    },
  }}
  sx={{
    marginBottom: '16px',
  }}
/>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '8px',
          }}
        >
          <Checkbox sx={{ color: '#A0A0A0' }} />
          <Button
            onClick={handleCreateToDo}
            disabled={!toDoInput.trim()}
            sx={{
              backgroundColor: toDoInput.trim() ? '#3767B1' : '',
              color: '#191a19',
              textTransform: 'none',
              fontSize: '12px',
              width: '35px',
              height: '22px',
            }}
          >
            Create
          </Button>
        </Box>
      </Box>

      {/* Display each to-do item as a separate card */}
      
    </Card>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px',backgroundColor:'background.default' }}>
        {toDoItems.map((item, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#1e1e1e',
              color: '#fff',
              padding: '12px 16px',
              borderRadius: '8px',
            }}
          >
            {/* Left Section with Checkbox and Text */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Checkbox
                sx={{
                  color: '#4DFF4D',
                  '&.Mui-checked': {
                    color: '#4DFF4D',
                  },
                }}
              />
              <Typography sx={{ fontSize: '14px' }}>{item}</Typography>
            </Box>

            {/* Right Section with Avatar and Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton sx={{ color: orange[500] }}>
                <MoreHorizIcon />
              </IconButton>
              <Avatar
                src="/path-to-avatar.jpg" // Replace with actual path or image URL
                sx={{ width: 24, height: 24 }}
              />
            </Box>
          </Card>
        ))}
      </Box>

    </Box>
  );
};

export default ToDoCard;
