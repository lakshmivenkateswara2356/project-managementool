import React, { useState } from "react";
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import Streamlineimg from "../Assets/streamline-emojis_bird-1 (2).png";
import Image from "../components/Image";
import InputAdornment from '@mui/material/InputAdornment';
import Rashid from '../Assets/RASHID AHMED.jpg';
import Yogesh from '../Assets/YOGESH SINGH.jpg';
import Smily from '../Assets/young-pretty-model-is-smiling.jpg';
import Thompson from '../Assets/DANIEL THOMPSON.jpg';
import Header from '../components/Header';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';


const Projects = ({ todoDescription }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);


  const [toDoInput, setToDoInput] = useState('');
  const [toDoItems, setToDoItems] = useState([]);
  const [inProgressItems, setInProgressItems] = useState([]);

  const handleCreateToDo = () => {
    if (toDoInput.trim() !== '') {
      setToDoItems([...toDoItems, toDoInput]);
      setToDoInput(''); // Clear input after adding
    }
  };

  
  // Open/close dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  

  
  // Toggle checkbox
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };
  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const assignees = ['John Doe', 'Jane Smith', 'Create Assignee'];
  const issueTypes = ['Bug', 'Feature', 'Task', 'Create Issue'];

  const [selectedOption, setSelectedOption] = useState('Board');

  // Function to handle click
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const [issueCount, setIssueCount] = useState(0);
  const status = 'To Do'; // Change this to dynamically change status ('To Do', 'In Progress', etc.)

  const handleCreateIssue = () => {
    setIssueCount(issueCount + 1);
  };

  const [assigneeDialogOpen, setAssigneeDialogOpen] = useState(false);
  const [issueTypeDialogOpen, setIssueTypeDialogOpen] = useState(false);
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('');
  const [selectedIssueType, setSelectedIssueType] = useState('');
  
  // Handle Dialogs
  const handleOpenAssigneeDialog = () => setAssigneeDialogOpen(true);
  const handleCloseAssigneeDialog = () => setAssigneeDialogOpen(false);
  const handleOpenIssueTypeDialog = () => setIssueTypeDialogOpen(true);
  const handleCloseIssueTypeDialog = () => setIssueTypeDialogOpen(false);

  return (
   
    <Box
      sx={{
        flexGrow: 1,
        padding: "20px",
        height: { xs: "75vh", lg: "80vh" },
       
         // For dark background
      }}
    >
      {/* Header with project name and icon */}
      <Grid container alignItems="center">
        <Grid item xs>
          <Box display="flex" alignItems="center">
            {/* Icon box */}
            <Box
              sx={{
                backgroundColor: "#E367D7",
                height: "40px",
                width: "40px",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                borderRadius: "8px",
                marginRight: "11px",
              }}
            >
              <Image
                sx={{ height: "32px", alignItems: "center" }}
                src={Streamlineimg}
              />
            </Box>
            {/* Project name */}
            <Box sx={{}}>
            <Typography
              sx={{ marginTop: "4px" }}
              variant="h5"
              color="text.primary"
            >
              Clikkle E-Sign
            </Typography>
            <Typography sx={{fontSize:'12px',color:'gray',marginTop:'-5px',}}>Beta</Typography>
            </Box>
          
          </Box>
        </Grid>
        {/* Add button */}
        
        <Grid item>
          <IconButton
            sx={{ fontSize: "33px", color:'blue' }}
            onClick={handleClickOpen}
          >
            <AddIcon sx={{ color: "blue" }} />
          </IconButton>
        </Grid>

      </Grid>

      {/* Divider */}
     

<Box >
      {/* Options Bar */}
      <Box
        sx={{
          display: 'flex',
          marginTop:'55px',
          marginBottom: '20px',
          borderBottom: '2px solid #2E2E2E', // Add a bottom border for styling
        }}
      >
        {/* Board Option */}
        <Button
          onClick={() => handleOptionClick('Board')}
          sx={{width:'50px',
            color: selectedOption === 'Board' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'Board' ? '3px solid blue' : 'none',
            paddingBottom: '10px',
          }}
        >
          Board
        </Button>

        {/* List Option */}
        <Button
          onClick={() => handleOptionClick('List')}
          sx={{
            color: selectedOption === 'List' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'List' ? '3px solid blue' : 'none',
            paddingBottom: '10px',
          }}
        >
          List
        </Button>

        {/* Project Settings Option */}
        <Button
          onClick={() => handleOptionClick('Project Settings')}
          sx={{
            color: selectedOption === 'Project Settings' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'Project Settings' ? '3px solid blue' : 'none',
            paddingBottom: '10px',
          }}
        >
          Project Settings
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderRadius: '8px' }}>
    
    {/* Search Field */}
    <Box sx={{ flexGrow: 1, maxWidth: '450px' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search this board"
        InputProps={{
          style: {
            borderRadius: '4px',
            backgroundColor: '#333333',
            color: 'white',
            height:'38px'
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
            color: 'white',
          },
        }}
      />
    </Box>

    {/* Avatars Section */}
    <Box sx={{ display: 'flex', gap: 'px', alignItems: 'center', marginLeft: '-209px',marginTop:'-18px', }}>
      {/* Assuming you map avatar images here */}
      {[Rashid, Yogesh, Smily, Thompson, Rashid].map((avatar, index) => (
        <img key={index} src={avatar} alt={`Avatar ${index}`} style={{ width: '39px', height: '35px', borderRadius: '50%', border: '2px solid white' }} />
      ))}
      <Box sx={{ backgroundColor: '#4D4D4D', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        +2
      </Box>
    </Box>

    {/* Assignee Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'32px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
            color:'white',
           marginLeft:'250px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '13px',
          }}
        >
          <option>Asignee</option>
        </select>

    {/* Priority Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'31px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
            color:'white',
            marginLeft:'-45px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '13px',
          }}
        >
          <option>Priority</option>
        </select>

    {/* Issue Type Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'31px',
            borderRadius:'18px',
            width:'7vw',
            borderWidth:'1px',

            borderStyle:'solid',
            color:'white',
           marginLeft:'-45px',
            padding: '5px 10px',
            borderRadius: '5px',
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

      {/* Content Based on Selected Option */}
      <Box sx={{ padding: '20px',  color: 'white' }}>
      {selectedOption === 'List' && (
        <Box>
          {/* List View */}
          <Table sx={{ minWidth: 650 ,}} aria-label="simple table">
            <TableHead sx={{backgroundColor:'#191a19'}}>
              <TableRow>
                <TableCell sx={{ color: 'white' }}>Type</TableCell>
                <TableCell sx={{ color: 'white' }}>Keys</TableCell>
                <TableCell sx={{ color: 'white' }}>Summary</TableCell>
                <TableCell sx={{ color: 'white' }}>Status</TableCell>
                <TableCell sx={{ color: 'white' }}>Assignee</TableCell>
                <TableCell sx={{ color: 'white' }}>Priority</TableCell>
                <TableCell sx={{ color: 'white' }}>Created At</TableCell>
                <TableCell sx={{ color: 'white' }}>Updated At</TableCell>
                <TableCell sx={{ color: 'white' }}>Reporter</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell colSpan={9}>
                  <Button sx={{ color: 'white' }} variant="outlined">+ Create</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      )}

      {selectedOption === 'Board' && (
        <Box>
          {/* Board View */}
          <div style={{ display: 'flex', gap: '20px', padding: '20px',  }}>
      
      {/* To Do Section */}
      <Card
        sx={{
          width: '270px',
          height:'185px',
          padding: '16px',
          backgroundColor: '#141414',  // Transparent background for To Do card
          color: 'white',
          borderRadius: '8px',
          border: '1px solid #4D4D4D',  // Border to differentiate section
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between',  alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: '#FF4D4D',  // Red text color
    fontSize: '14px', 
    backgroundColor: 'rgba(255, 77, 77, 0.2)',  // Transparent red background
    border: '1px solid #FF4D4D',  // Solid red border
    padding: '4px 8px',  // Padding to make the text stand out inside the border
    borderRadius: '9px',  // Optional: rounded corners
  }}
>
  To Do
</Typography>

          <div
            style={{
              backgroundColor: 'rgba(255, 77, 77, 0.2)',  // Transparent red background
              border: '1px solid #FF4D4D',  // Solid red border
              padding: '4px 8px',  // Padding to make the text stand out inside the border
              borderRadius: '9px',
              width: '34px',
              height: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FF4D4D',
              fontSize: '13px',
            }}
          >
            {toDoItems.length}
          </div>
        </div>
        <Box sx={{backgroundColor:'black',borderRadius:'9px',}}>
        <TextField
          fullWidth
          variant="filled"
          value={toDoInput}
          onChange={(e) => setToDoInput(e.target.value)}
          placeholder="What needs to be done?"
          InputProps={{
            disableUnderline: true,
            sx: {
              width:'215px',
              backgroundColor:'black',
              color: 'white',
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
              backgroundColor: toDoInput.trim() ? '#4D4DFF' : '#191a19',
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
      <Card sx={{ width: '250px', padding: '16px', backgroundColor: '#141414', color: 'white', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: '#4D4DFF',  // Blue text color
    fontSize: '13px',
    backgroundColor: 'rgba(77, 77, 255, 0.2)',  // Transparent blue background
    border: '1px solid #4D4DFF',  // Solid blue border
    padding: '4px 8px',  // Padding for better spacing
    borderRadius: '8px',  // Optional: rounded corners
  }}
>
  In Progress
</Typography>

          <div
            style={{
              color: '#4D4DFF',  // Blue text color
    fontSize: '13px',
    backgroundColor: 'rgba(77, 77, 255, 0.2)',  // Transparent blue background
    border: '1px solid #4D4DFF',  // Solid blue border
    padding: '4px 8px',  // Padding for better spacing
    borderRadius: '7px',  // O
              width: '34px',
              height: '27px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          
              fontSize: '13px',
            }}
          >
            {inProgressItems.length}
          </div>
        </div>
        <Button
          sx={{
            backgroundColor: 'black',
            color: '#A0A0A0',
            textTransform: 'none',
            width: '100%',
            padding: '12px',
            justifyContent: 'flex-start',
          }}
          onClick={() => {
            // Logic for creating a new issue in progress (e.g., open modal)
          }}
        >
          + Create Issue
        </Button>
        {inProgressItems.map((item, index) => (
          <Typography key={index} sx={{ marginTop: '8px', color: '#A0A0A0' }}>{item}</Typography>
        ))}
      </Card>

      <Card sx={{ width: '250px', padding: '16px', backgroundColor: '#141414', color: 'white', borderRadius: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: '#4DFF4D',  // Green text color
    fontSize: '13px',
    backgroundColor: 'rgba(77, 255, 77, 0.2)',  // Transparent green background
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
    backgroundColor: 'rgba(77, 255, 77, 0.2)',  // Transparent green background
    border: '1px solid #4DFF4D',  // Solid green border
    padding: '4px 8px',  // Padding for spacing
 
    borderRadius: '7px',  // O
              width: '34px',
              height: '27px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
          
              fontSize: '13px',
            }}
          >
            {inProgressItems.length}
          </div>
        </div>
     
        
      </Card>
    </div>
        </Box>
      )}

      {selectedOption === 'Project Settings' && (
        <Typography variant="h6" sx={{ color: 'white' }}>
          These are the Project Settings.
        </Typography>
      )}
    </Box>
    </Box>
    
      </Box>

  
   
  );
};

export default Projects;
