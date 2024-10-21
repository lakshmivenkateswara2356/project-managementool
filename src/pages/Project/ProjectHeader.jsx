

import React, { useState } from "react";
import { Box,IconButton,  Dialog, DialogActions, DialogContent, DialogTitle,TextField, Button, } from '@mui/material';

import Image from "../../components/Image";
import Rashid from '../../Assets/Ellipse 68.png';
import Yogesh from '../../Assets/Ellipse 47.png';
import Smily from '../../Assets/Ellipse 48.png';
import Thompson from '../../Assets/Ellipse 54.png';
import lastimage from '../../Assets/Ellipse 61.png';


import Addpersons from '../../Assets/addperson.png';



const ProjectHeader =()=> {

  const [ setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


    const handleCloseAssigneeDialog = () => setAssigneeDialogOpen(false);
    const [assigneeDialogOpen, setAssigneeDialogOpen] = useState(false);
    const handleCloseIssueTypeDialog = () => setIssueTypeDialogOpen(false);
    const [issueTypeDialogOpen, setIssueTypeDialogOpen] = useState(false);

    return (
<Box>
<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderRadius: '8px',marginTop:'-35px', }}>
    
    {/* Search Field */}
    <Box sx={{ flexGrow: 1, maxWidth: '450px' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search this board"
        InputProps={{
          style: {
            borderRadius: '4px',
            
            
            height:'38px',
            marginRight:'18px',
          },
        }}
        sx={{
          
          width: '65%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4D4D4D',
            },
            '&:hover fieldset': {
              borderColor: '#FFFFFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFFFF',
            },
          },
          input: {
       
          },
        }}
      />
    </Box>

    {/* Avatars Section */}
    <Box sx={{ display: 'flex', gap: 'px', alignItems: 'center', marginLeft: '-209px',marginTop:'-18px', }}>
      {/* Assuming you map avatar images here */}
      {[Rashid, Yogesh, Smily, Thompson, lastimage].map((avatar, index) => (
        <img key={index} src={avatar} alt={`Avatar ${index}`} style={{ width: '39px', height: '35px', borderRadius: '50%', border: '2px solid white' }} />
      ))}
      <Box sx={{ backgroundColor: '#4D4D4D', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        +2
      </Box>

      <IconButton

onClick={handleClickOpen}
      sx={{
       
        backgroundColor: '#171717', // Dark transparent background
        color: 'gray', // Gray icon color
        borderRadius: '50%', // Circular button
        width: '35px',
        height: '35px',
        marginLeft:'12px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker on hover
        },
      }}
    >
      <Image src={Addpersons}/>
    </IconButton>
    </Box>

    {/* Assignee Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            height:'32px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
           color:'gray',
           marginLeft:'200px',
            padding: '5px 10px',
            fontSize: '13px',
          }}
        >
          <option>Asignee</option>
        </select>

    {/* Priority Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            height:'31px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
            color:'gray',
            marginLeft:'-45px',
            padding: '5px 10px',
            fontSize: '13px',
          }}
        >
          <option>Priority</option>
        </select>

    {/* Issue Type Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            height:'31px',
            borderRadius:'18px',
            width:'7vw',
            borderWidth:'1px',
            color:'gray',
            borderStyle:'solid',
          
           marginLeft:'-45px',
            padding: '5px 10px',
            fontSize: '13px',
          }}
        >
          <option>Issue Type</option>
        </select>

    {/* Assignee Dialog */}
    <Dialog open={assigneeDialogOpen} onClose={handleCloseAssigneeDialog}>
      <DialogTitle sx={{ color: 'white', backgroundColor: '#333333' }}>
        Create Assignee
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#333333' }}>
        <TextField
          label="Assignee Name"
          fullWidth
          sx={{
            '& .MuiInputLabel-root': { color: '#A0A0A0' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#4D4D4D',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#333333' }}>
        <Button onClick={handleCloseAssigneeDialog} sx={{ color: 'white' }}>
          Cancel
        </Button>
        <Button onClick={handleCloseAssigneeDialog} sx={{ color: 'white' }}>
          Create
        </Button>
      </DialogActions>
    </Dialog>

    {/* Issue Type Dialog */}
    <Dialog open={issueTypeDialogOpen} onClose={handleCloseIssueTypeDialog}>
      <DialogTitle sx={{ color: 'white', backgroundColor: '#333333' }}>
        Create Issue
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#333333' }}>
        <TextField
          label="Issue Title"
          fullWidth
          sx={{
            '& .MuiInputLabel-root': { color: '#A0A0A0' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#4D4D4D',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#333333' }}>
        <Button onClick={handleCloseIssueTypeDialog} sx={{ color: 'white' }}>
          Cancel
        </Button>
        <Button onClick={handleCloseIssueTypeDialog} sx={{ color: 'white' }}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </Box>

  {/* Popup (Dialog) */}
 
</Box>

    )
};

export default ProjectHeader