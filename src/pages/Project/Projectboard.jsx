import React, { useState } from "react";
import Board from './ProjectHeader';
import Projectcard from '../../pages/Project/projectcards/Projectinprogress';
import Createproject from '../Project/projectcards/Createproject';

import { Box, Typography, Checkbox,  TextField, Button, Card,  } from '@mui/material';


const Projectboard =() => {
   
  
  
    const [toDoInput, setToDoInput] = useState('');
    const [toDoItems, setToDoItems] = useState([]);
    const [inProgressItems] = useState([]);
  
  
  
  
    
    // Open/close dropdown
   
  
    

  

  // Function to create a new Backlog item


  
    
  
  
 
  
  
   
  
   
    const [showReview] = useState(false); // State for showing the Review section
    const [showBacklog] = useState(false); // State for showing the Backlog section



  
    const handleCreateToDo = () => {
      if (toDoInput.trim() !== '') {
        setToDoItems([...toDoItems, toDoInput]);
        setToDoInput(''); // Clear input after adding
      }
    };



  
    return (
      
    
      
<Box>
<Box>
    <Board/>
          {/* Board View */}
          <div style={{ display: 'flex', gap: '20px', padding: '20px',marginLeft:'-45px',  }}>
      
      {/* To Do Section */}
      <Card
        sx={{
          width: '270px',
          height:'145px',
          padding: '16px',
         backgroundColor:'background.default',
          borderRadius: '8px',
           // Border to differentiate section
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: 'red',  // Red text color
    fontSize: '14px', 
    backgroundColor: 'rgba(255, 0, 0, 0.2)',
  // Transparent red background
    border: '1px solid red',  // Solid red border
    padding: '4px 8px',  // Padding to make the text stand out inside the border
    borderRadius: '9px',  // Optional: rounded corners
  }}
>
  To Do
</Typography>

          <div
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              // Transparent red background
              border: '1px solid red',  // Solid red border
              padding: '4px 8px',  // Padding to make the text stand out inside the border
              borderRadius: '9px',
              width: '34px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'red',
              fontSize: '13px',
            }}
          >
            {toDoItems.length}
          </div>
        </div>
        <Box sx={{borderRadius:'9px',height:'85px',marginTop:'-10px',width:'100%'}}>
        <TextField
          fullWidth
          variant="filled"
          value={toDoInput}
          onChange={(e) => setToDoInput(e.target.value)}
          placeholder="What needs to be done?"
          InputProps={{
            disableUnderline: true,
            sx: {
              
              width:'215px',height:'0px',
              
              
              borderRadius: '4px',
              '&::placeholder': {
                color: '#A0A0A0',
              },
            },
          }}
          sx={{
            marginBottom: '16px',
          }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Checkbox sx={{ color: '#A0A0A0' }} />
          <Button
            onClick={handleCreateToDo}
            disabled={!toDoInput.trim()}
            sx={{
              backgroundColor: toDoInput.trim() ? '#4D4DFF' : '',
              color: '#191a19',
              textTransform: 'none',
              marginRight:'8px',
              width: '75px',
              height:'32px',
            }}
          >
            Create
          </Button>

        
          
        </div>
        </Box>
        {toDoItems.map((item, index) => (
          <Typography key={index} sx={{ marginTop: '8px', color: '#A0A0A0' }}>{item}</Typography>
        ))}
      </Card>

      {/* In Progress Section */}
      <Projectcard />

      <Card sx={{ width: '250px', padding: '16px', borderRadius: '8px',backgroundColor:'background.default' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: '#4DFF4D',  // Green text color
    fontSize: '13px',
    backgroundColor: 'rgba(0, 128, 0, 0.2)',
    // Transparent green background
    border: '1px solid #4DFF4D',  // Solid green border
    padding: '4px 8px',  // Padding for spacing
    borderRadius: '8px',  // Optional: rounded corners
  }}
>
  Done
</Typography>


          <div
            style={{
              color: '#4DFF4D',  // Green text color
    fontSize: '13px',
   backgroundColor: 'rgba(0, 128, 0, 0.2)',
 // Transparent green background
    border: '1px solid #4DFF4D',  // Solid green border
    padding: '4px 8px',  // Padding for spacing
 
    borderRadius: '7px',  // O
              width: '34px',
              height: '27px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          
            }}
          >
            {inProgressItems.length}
          </div>
        </div>
     
        
      </Card>

      {showReview && (
                <Card sx={{ width: '250px', padding: '16px', borderRadius: '8px', backgroundColor: 'background.default', marginTop: '20px' }}>
                    <Typography sx={{ color: '#FF9800', fontSize: '13px' }}>
                        Review
                    </Typography>
                    {/* Add Review items functionality here */}
                </Card>
            )}

            {/* Backlog Section */}
            {showBacklog && (
                <Card sx={{ width: '250px', padding: '16px', borderRadius: '8px', backgroundColor: 'background.default', marginTop: '20px' }}>
                    <Typography sx={{ color: '#FF5722', fontSize: '13px' }}>
                        Backlog
                    </Typography>
                    {/* Add Backlog items functionality here */}
                </Card>
            )}
      


       {/* Plus Icon to Create New Task */}
       <Createproject/>
    </div>

   

    
        </Box>

</Box>

    )
};
export default Projectboard;