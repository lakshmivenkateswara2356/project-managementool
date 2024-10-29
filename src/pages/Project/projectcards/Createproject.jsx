import React, { useState } from 'react';
import {
  Box, Typography, Card, TextField, Button, IconButton,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';
import { HiOutlinePlus } from 'react-icons/hi'; // Import Plus icon

const ProjectInProgress = () => {
  const [cards, setCards] = useState([]); // Stores multiple cards with issues

  const handleAddCard = () => {
    const newCard = { issues: [], newIssue: '', showTextArea: false };
    setCards([...cards, newCard]); // Add a new card to the list
  };

  const handleIssueChange = (index, value) => {
    const updatedCards = [...cards];
    updatedCards[index].newIssue = value; // Update the new issue input for the specific card
    setCards(updatedCards);
  };

  const handleSaveIssue = (index) => {
    const updatedCards = [...cards];
    const { newIssue, issues } = updatedCards[index];

    if (newIssue.trim()) {
      updatedCards[index].issues = [...issues, newIssue]; // Save the issue in the specific card
      updatedCards[index].newIssue = ''; // Reset the input field
      updatedCards[index].showTextArea = false; // Hide the text area
      setCards(updatedCards);
    }
  };

  const toggleTextArea = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].showTextArea = true; // Show text area for the specific card
    setCards(updatedCards);
  };

  return (
    <Box sx={{ padding: '20px', display: 'flex', alignItems: 'flex-start' }}>
      {/* Render All Cards Dynamically */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Ensure row layout
          flexWrap: 'nowrap', // Prevent wrapping
          gap: '16px', // Space between cards
          overflowX: 'auto', // Enable horizontal scrolling
          paddingBottom: '10px', // Add padding for better scroll appearance
        }}
      >
        {cards.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            sx={{
              width: '270px',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: '#1e1e1e', // Dark background for better contrast
              color: 'white',
              position: 'relative',
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: '12px' }}>
              Card {cardIndex + 1}
            </Typography>

            {/* Plus Icon to Show Text Area */}
            {!card.showTextArea && (
              <IconButton
                sx={{
                  backgroundColor: 'background.default',
                  borderRadius: '5px',
                  height: '30px',
                  width: '30px',
                  marginBottom: '12px',
                }}
                onClick={() => toggleTextArea(cardIndex)} // Show text area for this card
              >
                <HiOutlinePlus style={{ height: '20px', width: '20px', color: 'white' }} />
              </IconButton>
            )}

            {/* Text Area to Add New Issue */}
            {card.showTextArea && (
              <>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  placeholder="Enter issue heading"
                  value={card.newIssue}
                  onChange={(e) => handleIssueChange(cardIndex, e.target.value)}
                  sx={{ marginTop: '8px', backgroundColor: 'white', color: 'black' }}
                />
                <Button
                  sx={{
                    marginTop: '8px',
                    backgroundColor: '#1976d2',
                    color: 'white',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: '#1565c0' },
                  }}
                  onClick={() => handleSaveIssue(cardIndex)} // Save issue for this card
                >
                  Create
                </Button>
              </>
            )}

            {/* Display Created Issues for This Card */}
            {card.issues.map((issue, issueIndex) => (
              <Box
                key={issueIndex}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '12px',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleIcon
                    sx={{
                      fontSize: '24px',
                      color: '#4FC3F7',
                      marginRight: '8px',
                    }}
                  />
                  <Typography sx={{ fontSize: '14px', color: 'white' }}>
                    {issue}
                  </Typography>
                </Box>
                <PersonIcon sx={{ fontSize: '28px', color: '#666' }} />
              </Box>
            ))}
          </Card>
        ))}
      </Box>

      {/* Render Plus Icon to Add New Cards */}
      <IconButton
        sx={{
          backgroundColor: 'background.default',
          borderRadius: '5px',
          height: '32px',
          width: '32px',
          marginLeft: '0px', // Add some space between cards and the plus icon
          color: 'white',
        }}
        onClick={handleAddCard} // Create a new card on click
      >
        <HiOutlinePlus style={{ height: '24px', width: '24px' }} />
      </IconButton>
    </Box>
  );
};

export default ProjectInProgress;
