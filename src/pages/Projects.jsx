import React, { useState } from "react";
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import Streamlineimg from "../Assets/streamline-emojis_bird-1 (2).png";
import Image from "../components/Image";
import InputAdornment from '@mui/material/InputAdornment';
import Rashid from '../Assets/RASHID AHMED.jpg';
import Yogesh from '../Assets/YOGESH SINGH.jpg';
import Smily from '../Assets/young-pretty-model-is-smiling.jpg';
import Projectform from '../pages/Project/ProjectForm';
import Projectlist from '../pages/Project/ProjectList';
import Thompson from '../Assets/DANIEL THOMPSON.jpg';
import Projectboard from '../pages/Project/Projectboard';
import Projectcalander from '../pages/Project/Projectcalander';
import Header from '../components/Header';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useParams } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';


const Projects = ({ todoDescription }) => {

  const { id } = useParams();
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
        height: { xs: "75vh", lg: "80vh" ,},
       
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
          marginTop:'5px',
          marginBottom: '20px',
          borderBottom: '2px solid #2E2E2E', // Add a bottom border for styling
        }}
      >
        {/* Board Option */}
        <Button
          onClick={() => handleOptionClick('Board')}
          sx={{width:'50px',
            color: selectedOption === 'Board' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'Board' ? '3px solid #1976d2' : 'none',
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
            borderBottom: selectedOption === 'List' ? '3px solid #1976d2' : 'none',
            paddingBottom: '10px',
          }}
        >
          List
        </Button>

        {/* calander Option */}
        <Button
          onClick={() => handleOptionClick('calander')}
          sx={{
            color: selectedOption === 'calander' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'calander' ? '3px solid #1976d2' : 'none',
            paddingBottom: '10px',
          }}
        >
          Calander
        </Button>

        {/* Project Settings Option */}
        <Button
          onClick={() => handleOptionClick('Project Settings')}
          sx={{
            color: selectedOption === 'Project Settings' ? '#A9A9A9' : '#A9A9A9',
            borderBottom: selectedOption === 'Project Settings' ? '3px solid #1976d2' : 'none',
            paddingBottom: '10px',
          }}
        >
          Project Settings
        </Button>


      </Box>

     

      {/* Content Based on Selected Option */}
      <Box sx={{ padding: '20px',  color: 'white' }}>
      {selectedOption === 'List' && (
       <Projectlist/>
      )}

      {selectedOption === 'Board' && (
       <Box>

        <Projectboard/>
       </Box>
      )}

      {selectedOption === 'Project Settings' && (
        <Typography variant="h6" sx={{ color: 'white' }}>
          <Projectform/>
        </Typography>
      )}

{selectedOption === 'calander' && (

<Projectcalander/>

      )}
    </Box>
    </Box>
    
      </Box>

  
   
  );
};

export default Projects;
