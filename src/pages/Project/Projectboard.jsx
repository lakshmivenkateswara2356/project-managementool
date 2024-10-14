import React, { useState } from "react";
import Board from './ProjectHeader';
import { HiOutlinePlus } from "react-icons/hi";

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';


const Projectboard =() => {
    const [openDialog, setOpenDialog] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [checked, setChecked] = useState(false);
  
  
    const [toDoInput, setToDoInput] = useState('');
    const [toDoItems, setToDoItems] = useState([]);
    const [inProgressItems, setInProgressItems] = useState([]);
    const [reviewItems, setReviewItems] = useState([]); // State for Review section
    const [backlogItems, setBacklogItems] = useState([]); // State for Backlogs section
  
  
  
    
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


    const handleCreateReview = () => {
      const reviewInput = prompt("Enter review item:");
      if (reviewInput) {
          setReviewItems([...reviewItems, reviewInput]);
      }
  };

  // Function to create a new Backlog item
  const handleCreateBacklog = () => {
      const backlogInput = prompt("Enter backlog item:");
      if (backlogInput) {
          setBacklogItems([...backlogItems, backlogInput]);
      }
  };
  
  
    const activeCellStyles = {
     
      color: '#fff',
      textAlign: 'center',
      
      borderRadius: '50%',
    };
    
    const inactiveCellStyles = {
      color: '#757575',
      textAlign: 'center',
      padding: '15px',
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
    const [showReview, setShowReview] = useState(false); // State for showing the Review section
    const [showBacklog, setShowBacklog] = useState(false); // State for showing the Backlog section


    const handleAddClick = () => {
      setShowReview(true); // Show Review section
      setShowBacklog(true); // Show Backlog section
  };

  
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
        <Box sx={{borderRadius:'9px',backgroundColor:'#171716',height:'85px',marginTop:'-10px',width:'100%'}}>
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
      <Card sx={{ width: '270px',
          height:'145px', padding: '16px', borderRadius: '8px',backgroundColor:'background.default' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <Typography
  sx={{
    color: '#1976d2',  // Blue text color
    fontSize: '13px',
    backgroundColor: 'rgba(0, 0, 139, 0.2)',
  // Transparent blue background
    border: '1px solid #1976d2',  // Solid blue border
    padding: '4px 8px',  // Padding for better spacing
    borderRadius: '8px',  // Optional: rounded corners
  }}
>
  In Progress
</Typography>

          <div
            style={{
              color: '#1976d2',  // Blue text color
    fontSize: '13px',
    backgroundColor: 'rgba(0, 0, 139, 0.2)',
  // Transparent blue background
    border: '1px solid #1976d2',  // Solid blue border
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
            
            textTransform: 'none',
            width: '100%',
            height:'35px',
            padding: '12px',
            color:'white',
            justifyContent: 'flex-start',
            backgroundColor:'#171716',
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
          
              fontSize: '13px',
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
       {!showReview && !showBacklog && (
                    <IconButton onClick={handleAddClick} sx={{backgroundColor:'background.default',borderRadius:'5px',height:'30px',width:'30px', }}>
                        <HiOutlinePlus sx={{height:'20px',width:'20px',}}/>
                    </IconButton>
                )}
    </div>

    
        </Box>

</Box>

    )
};
export default Projectboard;