import React, { useState } from "react";
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import Streamlineimg from "../Assets/streamline-emojis_bird-1 (2).png";
import Image from "../components/Image";
import InputAdornment from '@mui/material/InputAdornment';
import Header from '../components/Header';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';


const Projects = ({ todoDescription }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [checked, setChecked] = useState(false);
  
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
    <Header>
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

      <Box sx={{display:'flex',justifyContent:'space-between'}}>
<Box>
      <TextField
          variant="outlined"
          size="small"
          placeholder="Search this board"
          sx={{
            
            width: "160%",
            borderRadius: "4px",
            input: { }, // Text color
          }}
          InputProps={{
            style: {
             
              borderRadius: "4px",
            },
          }}
        />
        </Box>
        <Box>
        <Box display="flex" gap="10px">
  {/* Assignee Dropdown */}
  <TextField
    select
    size="small"
    variant="outlined"
    value={selectedAssignee}
    onChange={(e) => {
      const value = e.target.value;
      if (value === 'Create Assignee') {
        handleOpenAssigneeDialog();
      } else {
        setSelectedAssignee(value);
      }
    }}
    displayEmpty
    renderValue={(selected) => {
      if (!selected) {
        return <span style={{ color: 'grey' }}>Assignee</span>;
      }
      return selected;
    }}
    sx={{
      width: '150px',
      '& .MuiOutlinedInput-root': {
        
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
      },
    }}
  >
    <MenuItem value="" disabled>
      Assignee
    </MenuItem>
    {assignees.map((assignee) => (
      <MenuItem key={assignee} value={assignee}>
        {assignee}
      </MenuItem>
    ))}
    <MenuItem value="Create Assignee">+ Create Assignee</MenuItem>
  </TextField>

  {/* Priority Dropdown */}
  <TextField
    select
    size="small"
    variant="outlined"
    value={selectedPriority}
    onChange={(e) => setSelectedPriority(e.target.value)}
    displayEmpty
    renderValue={(selected) => {
      if (!selected) {
        return <span style={{ color: 'grey' }}>Priority</span>;
      }
      return selected;
    }}
    sx={{
      width: '150px',
      '& .MuiOutlinedInput-root': {
       
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
      },
    }}
  >
    <MenuItem value="" disabled>
      Priority
    </MenuItem>
    <MenuItem value="High">High</MenuItem>
    <MenuItem value="Medium">Medium</MenuItem>
    <MenuItem value="Low">Low</MenuItem>
  </TextField>

  {/* Issue Type Dropdown */}
  <TextField
    select
    size="small"
    variant="outlined"
    value={selectedIssueType}
    onChange={(e) => {
      const value = e.target.value;
      if (value === 'Create Issue') {
        handleOpenIssueTypeDialog();
      } else {
        setSelectedIssueType(value);
      }
    }}
    displayEmpty
    renderValue={(selected) => {
      if (!selected) {
        return <span style={{ color: 'red' }}>Issue Type</span>;
      }
      return selected;
    }}
    sx={{
      width: '150px',
      '& .MuiOutlinedInput-root': {
       
        '& fieldset': {
          borderColor: 'white',
        },
        '&:hover fieldset': {
          borderColor: 'white',
        },
      },
    }}
  >
    <MenuItem value="" disabled>
      Issue Type
    </MenuItem>
    {issueTypes.map((type) => (
      <MenuItem key={type} value={type}>
        {type}
      </MenuItem>
    ))}
    
  </TextField>

  {/* Assignee Creation Dialog */}
  <Dialog open={assigneeDialogOpen} onClose={handleCloseAssigneeDialog}>
    <DialogTitle>Create Assignee</DialogTitle>
    <DialogContent>
      {/* Assignee Creation Form */}
      <TextField label="Assignee Name" fullWidth />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseAssigneeDialog}>Cancel</Button>
      <Button onClick={handleCloseAssigneeDialog}>Create</Button>
    </DialogActions>
  </Dialog>

  {/* Issue Type Creation Dialog */}
  <Dialog open={issueTypeDialogOpen} onClose={handleCloseIssueTypeDialog}>
    <DialogTitle>Create Issue</DialogTitle>
    <DialogContent>
      {/* Issue Creation Form */}
      <TextField label="Issue Title" fullWidth />
    </DialogContent>
    <DialogActions>
      <Button onClick={handleCloseIssueTypeDialog}>Cancel</Button>
      <Button onClick={handleCloseIssueTypeDialog}>Create</Button>
    </DialogActions>
  </Dialog>
</Box>


    </Box>
      </Box>

      {/* Content Based on Selected Option */}
      <Box sx={{ padding: '20px',  color: 'white' }}>
      {selectedOption === 'List' && (
        <Box>
          {/* List View */}
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
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
          <Grid sx={{display:'flex',}}>
            {['To Do', 'In Progress', 'Done'].map((status) => (
              <Grid  key={status}>
                <Card sx={{width:'270px',marginRight:'12px' }}>
      <CardContent>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '100px',
        position: 'relative',
        '&:hover .hover-content': {
          display: 'block', // Show hover content on hover
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: status === 'To Do' ? 'red' : status === 'In Progress' ? 'blue' : 'green',
          borderColor: status === 'To Do' ? 'red' : status === 'In Progress' ? 'blue' : 'green',
          borderWidth: '1px',
          borderStyle: 'solid',
          height: '30px',
          width: '60px',
          fontSize: '10px',
          borderRadius: '9px',
          textAlign: 'center',
          lineHeight: '30px',
          backgroundColor: status === 'To Do'
            ? 'rgba(255, 0, 0, 0.2)'
            : status === 'In Progress'
            ? 'rgba(0, 0, 255, 0.2)'
            : 'rgba(0, 128, 0, 0.2)',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        {status}
        <IconButton size="small" sx={{ padding: '0', marginLeft: '5px' }}>
          <ArrowDropDownIcon />
        </IconButton>
      </Typography>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem>
          <Checkbox checked={checked} onChange={handleCheck} />
          Mark as done
        </MenuItem>
      </Menu>

      <Typography
        variant="body1"
        sx={{
          color: status === 'To Do' ? 'red' : status === 'In Progress' ? 'blue' : 'green',
          borderColor: status === 'To Do' ? 'red' : status === 'In Progress' ? 'blue' : 'green',
          borderWidth: '1px',
          borderStyle: 'solid',
          height: '30px',
          width: '40px',
          fontSize: '16px',
          borderRadius: '9px',
          textAlign: 'center',
          lineHeight: '30px',
          backgroundColor: status === 'To Do'
            ? 'rgba(255, 0, 0, 0.2)'
            : status === 'In Progress'
            ? 'rgba(0, 0, 255, 0.2)'
            : 'rgba(0, 128, 0, 0.2)',
        }}
      >
        {issueCount}
      </Typography>

      {/* Hover Content */}
      <Box
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    height: '100px',
    position: 'relative',
    '&:hover .hover-content': {
      display: 'block', // Show hover content on hover
    },
  }}
>
  

  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
    <MenuItem>
      <Checkbox checked={checked} onChange={handleCheck} />
      Mark as done
    </MenuItem>
  </Menu>

  

  {/* Hover Content */}
  <Box
    className="hover-content"
    sx={{
      display: 'none', // Initially hidden
      position: 'absolute',
      top: '100px', // Positioned below the status box
      left: '0',
      backgroundColor: 'gray',
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '10px',
      height: '65px',
      width: '200px',
      zIndex: 1,
    }}
  >
    <Typography variant="body2">{todoDescription}</Typography>
  </Box>
</Box>

    </Box>

        <Button
          sx={{ color: 'gray', borderWidth: '0px', backgroundColor: 'background.default', marginTop: '-84px', height: '42px' }}
          variant="outlined"
          fullWidth
          onClick={handleCreateIssue}
        >
          + Create issue
        </Button>
      </CardContent>
      
    </Card>
    
              </Grid>
            ))}
            <Grid item xs={4}>
              <Button sx={{  }} variant="outlined" >
                + 
              </Button>
            </Grid>
          </Grid>
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

      </Header>
   
  );
};

export default Projects;
