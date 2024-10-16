import React, { useState } from 'react';
import {
  Box, Typography, Card, TextField, Button, IconButton, ListItemText,
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import { HiOutlinePlus } from 'react-icons/hi'; // Import the Plus icon

const ProjectInProgress = () => {
  const [showTextArea, setShowTextArea] = useState(false); // Controls when to show the text area
  const [newIssue, setNewIssue] = useState('');
  const [inProgressItems, setInProgressItems] = useState([]); // Initial empty state for issues

  const handlePlusClick = () => setShowTextArea(true);

  const handleSaveIssue = () => {
    if (newIssue.trim()) {
      setInProgressItems([...inProgressItems, newIssue]); // Save the entered text as new issue
      setNewIssue(''); // Reset the input field
      setShowTextArea(false); // Hide the text area after creation
    }
  };

  return (
    <Box>
      <Card
        sx={{
          width: '300px',
          padding: '16px',
          borderRadius: '8px',
           // Adjust background color to match design
          position: 'relative',
        }}
      >
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          
        </div>

        {/* Plus Icon to Create Issue */}
        {!showTextArea && (
          <IconButton
            sx={{
              backgroundColor: 'background.default',
              borderRadius: '5px',
              height: '30px',
              width: '30px',
              marginTop: '12px',
            }}
            onClick={handlePlusClick} // Show text area on click
          >
            <HiOutlinePlus style={{ height: '20px', width: '20px', color: 'white' }} />
          </IconButton>
        )}

        {/* Text Area for Creating New Issue */}
        {showTextArea && (
          <>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="Enter issue heading"
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
              Create
            </Button>
          </>
        )}

        {/* Display Created Issues */}
        {!showTextArea && inProgressItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
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
                }}
              >
                {item} {/* Display entered text as the issue heading */}
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
      </Card>
    </Box>
  );
};

export default ProjectInProgress;
