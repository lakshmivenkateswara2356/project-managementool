import React, { useState } from 'react';
import {
  Box, Typography, Card, TextField, Button, IconButton, Menu, MenuItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';

const Projectinprogress = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [newIssue, setNewIssue] = useState('');
  const [inProgressItems, setInProgressItems] = useState([{ code: 'CHR-26', description: 'Initial issue' }]); // Initial issue
  const [anchorEl, setAnchorEl] = useState(null); // State for menu
  const [dialogOpen, setDialogOpen] = useState(false); // State for dialog
  const [selectedIssue, setSelectedIssue] = useState(null); // State for selected issue

  // Menu Handlers
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleCreateClick = () => setShowTextArea(true);

  const handleSaveIssue = () => {
    if (newIssue.trim()) {
      const newIssueCode = `CHR-${inProgressItems.length + 26}`; // Generate new issue code
      setInProgressItems([...inProgressItems, { code: newIssueCode, description: newIssue }]); // Add new issue
      setNewIssue('');
      setShowTextArea(false);
    }
  };

  // Dialog Handlers
  const handleOpenDialog = (issue) => {
    setSelectedIssue(issue); // Set selected issue details
    setDialogOpen(true); // Open the dialog
  };

  const handleCloseDialog = () => {
    setDialogOpen(false); // Close the dialog
    setSelectedIssue(null); // Clear selected issue
  };

  return (
    <Box>
      <Card
        sx={{
          width: '300px',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#1C1C1C',
          position: 'relative',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography
  sx={{
    fontSize: '14px',
    fontWeight: '500',
    color: '#3767B1', // Set the text color
    border: '1px solid #878ECE', // Add border with same color as text
    backgroundColor: '#02163580', // Set the transparent background color
    padding: '4px 8px', // Add some padding for better appearance
    borderRadius: '4px', // Optional: rounded corners for a smoother look
  }}
>
  In Progress 
</Typography>


<Typography  sx={{
    fontSize: '15px',
    fontWeight: '500',
    
    color: '#3767B1', // Set the text color
    border: '1px solid #878ECE', // Add border with same color as text
    backgroundColor: '#02163580', // Set the transparent background color
    padding: '4px 8px', // Add some padding for better appearance
    borderRadius: '4px', // Optional: rounded corners for a smoother look
  }}>{inProgressItems.length} {/* Shows the count */}</Typography>

          
          {/* More (Three Dots) Button    <IconButton size="small" onClick={handleMenuOpen}>
            <MoreHorizIcon sx={{ color: 'white' }} />
          </IconButton> */}
          {/* More (Three Dots) Button */}
         
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            PaperProps={{
              style: {
                maxHeight: 200,
                width: '20ch',
              },
            }}
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

        {/* Initially only show In Progress count, but on hover show Create Issue */}
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

        {/* Text Area for Creating New Issue */}
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

        {/* Display In Progress items */}
        {!showTextArea && inProgressItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleOpenDialog(item)}>
              <CheckCircleIcon
                sx={{
                  fontSize: '24px',
                  color: '#4FC3F7',
                  marginRight: '8px',
                }}
              />
              <Typography
                sx={{
                  fontSize: '14px',
                  color: 'white',
                  cursor: 'pointer', // Change cursor to pointer
                }}
              >
                {item.code}
              </Typography>
            </div>
            <PersonIcon
              sx={{
                fontSize: '28px',
                color: '#666',
              }}
            />
          </div>
        ))}

        {/* Dialog for Issue Details */}
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Issue Details</DialogTitle>
          <DialogContent>
            <Typography variant="body1">
              <strong>Code:</strong> {selectedIssue?.code}
            </Typography>
            <Typography variant="body1">
              <strong>Description:</strong> {selectedIssue?.description}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Card>
    </Box>
  );
};

export default Projectinprogress;
