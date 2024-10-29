import React, { useState } from "react";
import Board from './ProjectHeader';
import Projectcard from '../../pages/Project/projectcards/Projectinprogress';
import Createproject from '../Project/projectcards/Createproject';
import Doneissuecard from "../../pages/Project/projectcards/Doneissuecard";
import Todocard from "../../pages/Project/projectcards/ToDoCard";
import Bottommenu from "../../pages/BottomMenu/Bottommenu";
import { Box, Typography, Card } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const Projectboard = () => {
  const [toDoInput, setToDoInput] = useState('');
  const [toDoItems, setToDoItems] = useState([]);
  const [inProgressItems] = useState([]);
  const [showReview] = useState(false);
  const [showBacklog] = useState(false);

  const handleCreateToDo = () => {
    if (toDoInput.trim() !== '') {
      setToDoItems([...toDoItems, toDoInput]);
      setToDoInput('');
    }
  };

  // Use media query to determine if the viewport is small
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <Box>
      <Board />
      {/* Board View */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'row' : 'row', // Align in row for both but enable scroll for mobile
          gap: '20px',
          padding: '20px',
          marginLeft: isMobile ? '0' : '-45px',
          overflowX: isMobile ? 'auto' : 'visible', // Enable horizontal scroll on mobile
          whiteSpace: isMobile ? 'nowrap' : 'normal', // Prevent wrapping on mobile
          scrollbarWidth: 'thin', // Adjust scrollbar size on mobile for better UX
        }}
      >
        {/* To Do Section */}
        <Box sx={{ minWidth: isMobile ? '250px' : 'auto' }}>
          <Todocard />
        </Box>

        {/* In Progress Section */}
        <Box sx={{ minWidth: isMobile ? '250px' : 'auto',marginRight:{xs:"30px",lg:"0px"} }}>
          <Projectcard />
        </Box>

        {/* Done Section */}
        <Box sx={{ minWidth: isMobile ? '250px' : 'auto' }}>
          <Doneissuecard />
        </Box>

        {/* Review Section */}
        {showReview && (
          <Card sx={{ minWidth: isMobile ? '250px' : 'auto', padding: '16px', borderRadius: '8px', backgroundColor: 'background.default', marginTop: '20px' }}>
            <Typography sx={{ color: '#FF9800', fontSize: '13px' }}>
              Review
            </Typography>
            {/* Add Review items functionality here */}
          </Card>
        )}

        {/* Backlog Section */}
        {showBacklog && (
          <Card sx={{ minWidth: isMobile ? '250px' : 'auto', padding: '16px', borderRadius: '8px', backgroundColor: 'background.default', marginTop: '20px' }}>
            <Typography sx={{ color: '#FF5722', fontSize: '13px' }}>
              Backlog
            </Typography>
            {/* Add Backlog items functionality here */}
          </Card>
        )}

        {/* Plus Icon to Create New Task */}
        <Box sx={{ minWidth: isMobile ? '250px' : 'auto' }}>
          <Createproject />
        </Box>
      </Box>
      <Box sx={{display:{xs:'block',lg:'none'}}}>
<Bottommenu/>
</Box>
    </Box>
  );
};

export default Projectboard;
