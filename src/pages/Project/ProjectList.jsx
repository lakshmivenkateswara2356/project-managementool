import React, { useState } from "react";
import Projectheader from './ProjectHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { EmojiEmotions, AttachFile, Link, MoreVert, FilterList, Create } from '@mui/icons-material';
import Dotele from '../../Assets/dot.png';
import Tick from '../../Assets/tick.png';
import Image from '../../components/Image';
import ShareIcon from '@mui/icons-material/Share';
import FilterListIcon from '@mui/icons-material/FilterList';

import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography, Table, TableBody, IconButton, Menu, Tabs,
  Tab,
  Select,
  FormControl,
  InputLabel, Checkbox, Avatar, Dialog,  InputAdornment, DialogActions, DialogContent, DialogTitle, TableCell, TextField, MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

const ProjectList = () => {

  const [tab, setTab] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  const [anchorElActions, setAnchorElActions] = useState(null);
  const openActions = Boolean(anchorElActions);

  const handleActionsClick = (event) => {
    setAnchorElActions(event.currentTarget);
  };

  const handleActionsClose = () => {
    setAnchorElActions(null);
  };


  const getStatusStyles = (status) => {
    switch (status) {
      case 'Review':
        return {
          textColor: 'orange',
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 140, 0, 0.14)!important' ,// Deep Orange with 30% opacity
 // Optional hover effect
        };
      case 'Backlogs':
        return {
          textColor: 'pink',
          borderColor: 'pink',
          backgroundColor: 'rgba(255, 20, 147, 0.14)', // Optional hover effect
        };
      case 'In Progress':
        return {
          textColor: 'blue',
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)', // Optional hover effect
        };
      default:
        return {
          textColor: 'gray',
          borderColor: 'gray',
          hoverBackground: 'transparent',
        };
    }
  };
  

  const dummyData = [
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Review',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Review',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Backlogs',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
  ];

  const handleClickOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };


  const [filter, setFilter] = useState('Newest first');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  

  return (
    <Box>
      <Projectheader />
      <Box>
        {/* List View */}
        <Table sx={{width:'105%',marginLeft:'-33px' }} aria-label="simple table">
          <TableHead sx={{backgroundColor:'background.default',height: '50px',width:'200px',fontSize:'12px', width: '100%', '& th': { // Adjust individual table header cells
      fontSize: '14px', 
      padding: '8px', 
      width: '200px', // Adjust width of each <th>
    },}} >
            <TableRow >
              <TableCell>Type</TableCell>
              <TableCell>Keys</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Reporter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{width:'100px'}}> 
            {dummyData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ 
                  borderBottom: '1px solid #1a1919', // Adds border between rows
                  '& td': { border: '1px solid #1a1919' }, // Adds border to each cell
                  cursor: 'pointer' 
                }}
                onClick={() => handleClickOpen(data)} // Open dialog on row click
              >
                <TableCell>
                  <Image sx={{height:'22px'}} src={data.avatar}/>
                </TableCell>
                <TableCell sx={{ color: '#00ab55', fontSize: '12px',width:'20px' }}>{data.id}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '900px' }}>{data.description}</TableCell>
                <TableCell 
  sx={{ 
    fontSize: '12px', 
    width: '150px', 
    padding: '4px', // Optional: Adjust padding
  }}
>
<Button
  variant="outlined"
  sx={{
    textTransform: 'none', // Prevent text transformation to uppercase
    borderColor: getStatusStyles(data.status).borderColor,
    color: getStatusStyles(data.status).textColor,
    backgroundColor: getStatusStyles(data.status).backgroundColor, // Set background based on status
    fontSize: '12px',
    width: '80%', // Button fits the table cell
    padding: '4px', // Optional: Adjust padding
  }}
>
  {data.status}
</Button>

</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <Avatar src={data.assignee.avatar} sx={{ width: 20, height: 20}} />
                  <Typography
                    sx={{ color: '#ffffff', display: 'inline-block', marginLeft: '8px', fontSize: '12px', width: '100px' }}
                  >
                    {data.assignee.name}
                  </Typography>
                </TableCell>
                <TableCell>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Upper bar */}
        <Box sx={{
          width: '27px',  // Adjust width to match the image
          height: '4px',   // Height of the bar
          backgroundColor: orange[500], // Orange color
          marginBottom: '4px',  // Space between the bars
        }} />
        
        {/* Lower bar */}
        <Box sx={{
          width: '27px',
          height: '4px',
          backgroundColor: orange[500], 
        }} />
      </Box>
    </TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.startDate}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.dueDate}</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <Avatar src={data.reviewer.avatare} sx={{ width: 20, height: 20}} />
                  <Typography
                    sx={{ color: '#ffffff', display: 'inline-block', marginLeft: '8px', fontSize: '12px', width: '100px' }}
                  >
                    {data.reviewer.namee}
                  </Typography>
                </TableCell>              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* {selectedData?.description} */}
      <Dialog sx={{}} open={open} onClose={handleClose} fullWidth maxWidth="lg" PaperProps={{ sx: { color: '#ffffff', borderRadius: '8px', height: '100vh',} }}>
  <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'background.default', }}>
    <Box sx={{ display: 'flex', alignItems: 'center',backgroundColor:'background.default' }}>
      <Checkbox checked={selectedData?.isChecked} sx={{ color: '#00ab55' }} />
      <Typography variant="h6" sx={{ marginLeft: '10px', color: '#ffffff' }}>{selectedData?.id} </Typography>
      
    </Box>
    <Box>                                                                     
      
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {  color: '#ffffff' }
        }}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </Box>
  </DialogTitle>

  <DialogContent sx={{ display: 'flex', padding: '24px', gap: '24px',backgroundColor:'background.default' }}>
    {/* Main Content */}
    <Box sx={{ flex: 2, padding: '24px', color: '#ffffff',backgroundColor:'background.default' }}>
      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: '16px', }}>
        <Button
          startIcon={<AttachFile />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
        >
          Attach
        </Button>
        <Button
          startIcon={<Link />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
        >
          Link Issue
        </Button>
        <Button
          endIcon={<MoreVert />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
          onClick={handleMenuClick}
        >
          Create
        </Button>

        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Sub-task</MenuItem>
          <MenuItem onClick={handleMenuClose}>Story</MenuItem>
        </Menu>
      </Box>

      {/* Description Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ffffff' }}>
        Description
      </Typography>
      <TextField
  placeholder="Add a description..."
  multiline
  rows={3}
  fullWidth
  variant="outlined"
  sx={{
    marginLeft:'-14px',
    marginBottom: '20px',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none', // Remove the border
      },
      color: '#ffffff', // Text color inside input
    },
    '& .MuiInputBase-input': {
      color: '#ffffff', // Input text color
    },
  }}
/>


      {/* Activity Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ffffff' }}>
        Activity
      </Typography>
<Box sx={{display:'flex',justifyContent:'space-between',}}>
  <Typography sx={{marginRight:'-235px',marginTop:'13px',}}>Show :</Typography>
      {/* Tabs for All / Comments / History */}
      <Tabs
      value={tab}
      onChange={handleTabChange}
      TabIndicatorProps={{ style: { display: 'none' } }} // Hide default indicator
      sx={{
        display: 'flex', // Allows horizontal arrangement
        justifyContent: 'space-around', // Distribute evenly
        marginBottom: '10px',
        '& .MuiTab-root': {
          flex: 1, // Makes each tab grow evenly (optional)
          // Minimum width for the tabs
          height: '10px', // Adjustable height
          width:'12px', // Optional maximum width constraint
          
          margin: '0 5px', // Add spacing between tabs
          borderRadius: '8px',
          backgroundColor: '#1f1f1f', // Default background color
          color: '#fff',
          textTransform: 'none', // Prevents all-uppercase text
          fontSize: '13px',
          transition: 'all 0.3s ease', // Smooth transition for hover effects
        },
        '& .Mui-selected': {
          backgroundColor: '#2279FF1A', // Transparent blue background
          color: '#2279FF', // Blue text color for the selected tab
        },
        '& .MuiTab-root:hover': {
          backgroundColor: '#333', // Optional hover effect
        },
      }}
    >
      <Tab sx={{height:'12px',}} label="All" />
      <Tab label="Comments" />
      <Tab label="History" />
    </Tabs>

      {/* Filter Dropdown */}
      <Box 
      sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: 1, 
        cursor: 'pointer' 
      }}
    >
      <Typography sx={{ color: '#ffffff', fontSize: '16px' }}>
        {filter}
      </Typography>
      <FilterListIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />

      {/* Hidden Dropdown */}
      <FormControl sx={{ display: 'none' }}>
        <Select
          value={filter}
          onChange={handleChange}
          sx={{ 
            color: '#ffffff', 
            backgroundColor: '#3e3e3e',
          }}
        >
          <MenuItem value="Newest first">Newest first</MenuItem>
          <MenuItem value="Oldest first">Oldest first</MenuItem>
        </Select>
      </FormControl>
    </Box>


      </Box>

      {/* Comment Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px',marginLeft:"33px" }}>
        <Avatar src={selectedData?.assignee.avatar} sx={{ width: 36, height: 36 }} />
        <TextField
  placeholder="Add a comment..."
  value={comment}
  onChange={handleCommentChange}
  fullWidth
  variant="outlined"
  sx={{
    marginLeft: '10px',
    backgroundColor: 'background.default',
    borderRadius: '8px', // Optional: Rounded corners
    width: '160%', // Adjust width to fit container or customize
    maxWidth: '600px', // Adjust as needed for your layout
  }}
  InputProps={{
    style: {
      height: '38px', // Control height of the TextField
      padding: '0 14px', // Adjust internal padding
  marginTop:'22px',
    },
    endAdornment: (
      <InputAdornment position="end">
        {/* Add any icon or action here if needed */}
      </InputAdornment>
    ),
  }}
/>

      </Box>

      {/* Existing Comment */}
      <Box sx={{ marginLeft: '44px', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
          <Avatar src="https://i.pravatar.cc/150?img=1" sx={{ width: 24, height: 24 }} />
          <Typography sx={{ marginLeft: '10px', color: '#ffffff' }}>
            Daniel Thompson <span style={{ color: '#888888' }}>3 minutes ago</span>
          </Typography>
        </Box>
        <Typography sx={{ marginLeft: '34px', color: '#ffffff', fontSize: '14px',color:'gray', }}>
          Icon updated to match the design for E-sign.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginLeft: '34px', marginTop: '4px' }}>
          <Button size="small" sx={{ color: '#888888' }}>
            Edit
          </Button>
          <Button size="small" sx={{ color: '#888888' }}>
            Delete
          </Button>
          <IconButton size="small" sx={{ color: '#888888' }}>
            <EmojiEmotions />
          </IconButton>
        </Box>
      </Box>
    </Box>

    {/* Right Panel (Details) */}
    <Box sx={{ flex: 1, padding: '24px', color: '#ffffff', backgroundColor:'background.default' }}>
      {/* Top Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <IconButton sx={{ color: '#ffffff' }}>
          <VisibilityIcon />
        </IconButton>
        <IconButton sx={{ color: '#ffffff' }}>
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton sx={{ color: '#ffffff' }}>
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleActionsClick}
          sx={{ color: '#ffffff' }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Dropdown Menu for Actions */}
      <Menu
        anchorEl={anchorElActions}
        open={openActions}
        onClose={handleActionsClose}
        PaperProps={{ style: { backgroundColor: '#2b2b2b', color: '#ffffff' } }}
      >
        <MenuItem onClick={handleActionsClose}>Action 1</MenuItem>
        <MenuItem onClick={handleActionsClose}>Action 2</MenuItem>
      </Menu>

      {/* ToDo and Actions Dropdowns */}
      <Box sx={{ display: 'flex', marginBottom: '16px' }}>
        <Typography variant="button" sx={{ color: '#888888',marginRight:'12px', }}>To Do</Typography>
        <Typography variant="button" sx={{ color: '#888888' }}>Actions</Typography>
      </Box>

      {/* Details Section */}
      <Box sx={{ border: '1px solid #444444', borderRadius: '8px', padding: '16px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px',backgroundColor:'#313131',width:'110%',padding:'8px',marginLeft:'-15px',marginTop:"-15px" }}>Details</Typography>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Assignee</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={selectedData?.assignee.avatar} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ marginLeft: '10px' }}>{selectedData?.assignee.name}</Typography>
          </Box>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Labels</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Parent</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Team</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Reporter</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="https://i.pravatar.cc/150?img=1" sx={{ width: 24, height: 24 }} />
            <Typography sx={{ marginLeft: '10px' }}>Daniel Thompson</Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{ display:'flex',justifyContent:'space-between', marginTop: '16px', color: '#888888' }}>

        <Box>
        <Typography sx={{fontFamily:"sans-serif",fontSize:"13px"}}>Created 3 days ago</Typography>
        <Typography sx={{fontFamily:"sans-serif",fontSize:"13px"}}>Updated 3 days ago</Typography>

        </Box>
        <Box>
        <IconButton sx={{ color: '#888888' }}>
          <SettingsIcon sx={{height:'15px'}} />
          <Typography sx={{fontSize:'12px',fontFamily:'sans-serif'}}>Configure</Typography>
        </IconButton>
        </Box>
      </Box>
    </Box>
  </DialogContent>

  
</Dialog>

    </Box>
  );
};

export default ProjectList;
