import React, { useState } from 'react';
import { Card, Typography, Box, TextField, Button, List, Avatar, IconButton, ListItem, ListItemText } from '@mui/material';
import { orange, red } from '@mui/material/colors';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DoneIssuesCard = ({ statusText = "Done", cardStyle = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [newIssue, setNewIssue] = useState('');
  const [issues, setIssues] = useState([]);

  const handleCreateIssue = () => {
    setShowInput(true);
  };

  const handleAddIssue = () => {
    if (newIssue.trim() !== '') {
      setIssues([...issues, newIssue]);
      setNewIssue('');
      setShowInput(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Main Done Card */}
      <Card
        sx={{
          width: '280px',
          height: '145px', // Set default height
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: 'background.default',
          ...cardStyle,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
          }}
        >
          <Typography
            sx={{
              color: '#06D17C',
              fontSize: '13px',
              backgroundColor: '#00361F80',
              border: '1px solid #06D17C',
              padding: '4px 8px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {statusText}
          </Typography>

          <Box
            sx={{
              color: '#06D17C',
              fontSize: '13px',
              backgroundColor: '#00361F80',
              border: '1px solid #06D17C',
              padding: '4px 8px',
              borderRadius: '7px',
              width: '34px',
              height: '27px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {issues.length}
          </Box>
        </Box>

        {isHovered && !showInput && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#171716',
              width: '100%',
              color: 'white',
              textTransform: 'none',
              marginTop: '8px',
              '&:hover': {
                backgroundColor: '#171716',
              },
            }}
            onClick={handleCreateIssue}
          >
            Create Issue
          </Button>
        )}

        {showInput && (
          <>
           <TextField
  fullWidth
  placeholder="Enter issue details"
  value={newIssue}
  onChange={(e) => setNewIssue(e.target.value)}
  sx={{
    '& .MuiOutlinedInput-root': {
      height: '17px', // Adjusts the overall height
      '& fieldset': {
        border: 'none', // Removes the border
      },
      '& input': {
        padding: '4px 8px', // Adjusts internal padding for smaller text area
        fontSize: '14px',
      },
    },
  }}
/>

            <Button
              variant="contained"
              sx={{
                marginTop: '8px',
                backgroundColor: '#3767B1',
                color: 'white',
                height:"29px",
                fontSize:'13px',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#3767B1',
                },
              }}
              onClick={handleAddIssue}
            >
              Create
            </Button>
          </>
        )}
      </Card>

      {/* Conditionally render the Issues Display Box */}
      {issues.length > 0 && (
        <Card
        sx={{
          width: '280px',
          marginTop: '16px',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: '#1e1e1e',
        }}
      >
        <List>
          {issues.map((issue, index) => (
            <ListItem
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderRadius: '8px',
              }}
            >
              {/* Left Section with Red Square Icon and Issue Text */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Box
                  sx={{
                    width: '16px',
                    height: '16px',
                    backgroundColor: red[500],
                    borderRadius: '4px',
                  }}
                />
                <Typography sx={{ color: '#fff', fontSize: '14px' }}>{issue}</Typography>
              </Box>
  
              {/* Right Section with Avatar and Orange Icon */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <IconButton sx={{ color: orange[500], padding: 0 }}>
                  <MoreHorizIcon />
                </IconButton>
                <Avatar
                  src="/path-to-avatar.jpg" // Replace with actual path or image URL
                  sx={{ width: 24, height: 24 }}
                />
              </Box>
            </ListItem>
          ))}
        </List>
      </Card>
      )}
    </Box>
  );
};

export default DoneIssuesCard;
