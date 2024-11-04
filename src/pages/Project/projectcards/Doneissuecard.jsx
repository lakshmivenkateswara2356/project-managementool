import React, { useState } from 'react';
import { Card, Typography, Box, TextField, Button,Divider , List, Avatar, IconButton, ListItem } from '@mui/material';
import { orange } from '@mui/material/colors';
import { FaEquals } from "react-icons/fa6";
import Image from "../../../components/Image";
import Bigcircle from "../../../Assets/Personsimages/Big fix.png";

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
          minHeight: '160px',
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: 'background.default',
          overflow: 'visible',
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

        {showInput && (
          <Box>
            <TextField
              fullWidth
              placeholder="Enter issue details"
              value={newIssue}
              onChange={(e) => setNewIssue(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  height: '17px',
                  '& fieldset': {
                    border: 'none',
                  },
                  '& input': {
                    padding: '4px 8px',
                    fontSize: '14px',
                  },
                },
              }}
            />
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  marginTop: '8px',
                  backgroundColor: '#3767B1',
                  width: "55px",
                  color: 'white',
                  height: '29px',
                  fontSize: '12px',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#3767B1',
                  },
                }}
                onClick={handleAddIssue}
              >
                Create
              </Button>
            </Box>
          </Box>
        )}

        {/* Conditionally render the Issues Display Box */}
        {issues.length > 0 && (

          <Box >
          <Card
            sx={{
              marginTop: '16px',
              
              padding: '16px',
              borderRadius: '8px',
             
              
            }}
          >
            <Box>
              {issues.map((issue, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0',
                    borderRadius: '8px',
                  }}
                >
                  {/* Left Section with Issue Text */}
                  <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: '8px' }}>
                    <Typography sx={{ color: '#fff', fontSize: '14px', marginBottom: "20px" }}>{issue}</Typography>
                    <Image sx={{ height: "16px" }} src={Bigcircle} alt="bigcircle" />
                  </Box>

                  {/* Right Section with Avatar and Orange Icon */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px',marginTop:"38px" }}>
                    <IconButton sx={{ color: orange[500], padding: 0 }}>
                      <FaEquals />
                    </IconButton>
                    <Avatar
                      src="/path-to-avatar.jpg" // Replace with actual path or image URL
                      sx={{ width: 24, height: 24 }}
                    />
                    
                  </Box>
                 
                 
                </Box>
               
              ))}
               
            </Box>
          </Card>
          </Box>
        )}

        {/* Show the Create Issue button if hovered and there are issues */}
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
      </Card>
    </Box>
  );
};

export default DoneIssuesCard;
