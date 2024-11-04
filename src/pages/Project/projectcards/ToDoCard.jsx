import React, { useState } from 'react';
import { Card, Typography, Box, TextField, Checkbox, Avatar, IconButton, Button } from '@mui/material';
import Image from "../../../components/Image";
import Tickicon from "../../../Assets/Personsimages/twemoji_check-mark-button.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { orange, red } from '@mui/material/colors';
import { FaEquals } from "react-icons/fa6";

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

        <Box sx={{ backgroundColor: "background.default" }}>
          {/* Conditional rendering for text area or created todo item */}
          {toDoItems.length === 0 ? (
            <>
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
                    padding: '2px 8px',
                    fontSize: '14px',
                    height: "0px",
                    lineHeight: '1.2',
                    minHeight: '12px',
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
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '12px',
                    width: '55px',
                    height: '22px',
                    marginRight:"12px",
                  }}
                >
                  Create
                </Button>
              </Box>
            </>
          ) : (
            <Card
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                
                
                padding: '12px 16px',
                borderRadius: '8px',
              }}
            >
              <Box>
              <Box>
               <Typography sx={{ fontSize: '14px' }}>{toDoItems[0]}</Typography>
               </Box>
            
            
              {/* Left Section with Checkbox and Text */}
             
             <Box sx={{display:"flex",flexDirection:"row"}}>
              <Box sx={{ display: 'flex',flexDirection:"row", alignItems: 'center', gap: '8px' }}>
               <Image sx={{height:"22px",mr:"130px"}} src={Tickicon} alt="Tickicon"/>
               
              </Box>

              {/* Right Section with Avatar and Icon */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton sx={{ color: orange[500], padding: 0 }}>
                    <FaEquals sx={{height:"12px"}} />


                    </IconButton>
                <Avatar
                  src="/path-to-avatar.jpg" // Replace with actual path or image URL
                  sx={{ width: 24, height: 24 }}
                />
              </Box>

              </Box>
              </Box>
            </Card>
          )}
        </Box>
      </Card>
    </Box>
  );
};

export default ToDoCard;
