import React, { useState } from 'react';
import {
  Box, Typography, Card, TextField, Button,Checkbox, Tabs,FormControl, Avatar,  Select, InputAdornment,
  Tab, IconButton, Menu, MenuItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { EmojiEmotions, AttachFile, Link, MoreVert, FilterList, Create } from '@mui/icons-material';
import FilterListIcon from '@mui/icons-material/FilterList';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import SettingsIcon from '@mui/icons-material/Settings';


import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';

const Projectinprogress = () => {

  const [tab, setTab] = useState(0);
  const [anchorElActions, setAnchorElActions] = useState(null);
  const openActions = Boolean(anchorElActions);


  const [isHovered, setIsHovered] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [newIssue, setNewIssue] = useState('');
  const [inProgressItems, setInProgressItems] = useState([]); // Initialize with zero issues
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);

  const [filter, setFilter] = useState('Newest first');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const [comment, setComment] = useState('');


  const handleCommentChange = (e) => setComment(e.target.value);


  const handleActionsClick = (event) => {
    setAnchorElActions(event.currentTarget);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  const handleActionsClose = () => {
    setAnchorElActions(null);
  };


  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleCreateClick = () => setShowTextArea(true);

  const handleSaveIssue = () => {
    if (newIssue.trim()) {
      const newIssueCode = `CHR-${inProgressItems.length + 26}`;
      setInProgressItems([...inProgressItems, { code: newIssueCode, description: newIssue }]);
      setNewIssue('');
      setShowTextArea(false);
    }
  };

  const openMenu = Boolean(anchorEl);


  const [open, setOpen] = useState(false);


  const [selectedData, setSelectedData] = useState(null);
  const handleClickOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  const handleOpenDialog = (issue) => {
    setSelectedIssue(issue);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedIssue(null);
  };

  return (
    <Box>
      <Card
        sx={{
          width: '280px',
          height: '145px',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#1C1C1C',
          position: 'relative',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#3767B1',
              border: '1px solid #878ECE',
              backgroundColor: '#02163580',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            In Progress
          </Typography>

          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: '500',
              color: '#3767B1',
              border: '1px solid #878ECE',
              backgroundColor: '#02163580',
              padding: '4px 8px',
              borderRadius: '4px',
            }}
          >
            {inProgressItems.length} {/* Show issue count */}
          </Typography>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{ style: { maxHeight: 200, width: '20ch' } }}
          >
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Move to" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Copy issue link" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Copy issue key" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Add flag" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Add label" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemText primary="Link issue" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: 'red' }}>
              <ListItemText primary="Delete" />
            </MenuItem>
          </Menu>
        </div>

        {isHovered && !showTextArea && (
          <Button
            sx={{
              textTransform: 'none',
              width: '100%',
              height: '35px',
              padding: '12px',
              color: 'white',
              justifyContent: 'flex-start',
              backgroundColor: '#171716',
              marginTop: '12px',
            }}
            onClick={handleCreateClick}
          >
            + Create Issue
          </Button>
        )}

        {showTextArea && (
          <>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="What needs to be done?"
              value={newIssue}
              onChange={(e) => setNewIssue(e.target.value)}
              sx={{ marginTop: '8px' }}
            />
            <Button
              sx={{
                marginTop: '8px',
                backgroundColor: '#1976d2',
                color: 'white',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#1565c0' },
              }}
              onClick={handleSaveIssue}
            >
              Save Issue
            </Button>
          </>
        )}

        {!showTextArea && inProgressItems.length === 0 && (
          <Typography
            sx={{
              marginTop: '16px',
              color: '#aaa',
              textAlign: 'center',
              fontStyle: 'italic',
            }}
          >
           
          </Typography>
        )}

        {!showTextArea &&
          inProgressItems.map((item, index) => (
            <div
              key={index}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleOpenDialog(item)}>
                <CheckCircleIcon
                  sx={{ fontSize: '24px', color: '#4FC3F7', marginRight: '8px' }}
                />
                <Typography sx={{ fontSize: '14px', color: 'white', cursor: 'pointer' }}>
                  {item.code}
                </Typography>
              </div>
              <PersonIcon sx={{ fontSize: '28px', color: '#666' }} />
            </div>
          ))}


<Dialog sx={{}} open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="lg" PaperProps={{ sx: { color: '#ffffff', borderRadius: '8px', height: '100vh',} }}>
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

      
      </Card>
    </Box>
  );
};

export default Projectinprogress;
