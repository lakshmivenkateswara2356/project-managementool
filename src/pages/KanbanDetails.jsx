import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Kanbanpng from '../Assets/Kanban.png'; // Ensure paths are correct
import Kanbanto from '../Assets/Kanbanto.png'; // Ensure paths are correct

const KanbanDetails = ({ onClose }) => {
  return (
    <Box
      sx={{
        padding: '24px',
        backgroundColor: '#1E1E1E',
        color: '#fff',
        borderRadius: '12px',
        position: 'relative',
        maxWidth: '100vw',
        height:'100vh',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Add shadow for depth
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          color: '#fff',
        }}
      >
        <CloseIcon />
      </IconButton>

      {/* Title and Template Button */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: '22px', color: '#E1E1E1' }}
        >
          Kanban
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0065ff',
            borderRadius: '24px',
            padding: '6px 16px',
            '&:hover': { backgroundColor: '#0051cc' },
            fontSize: '14px', // Adjust font size to match the button in the image
            textTransform: 'none', // Prevent uppercase transformation
          }}
        >
          Use template
        </Button>
      </Box>

      {/* Main Content */}
      <Typography
        variant="body1"
        sx={{ marginBottom: '16px', color: '#B0B0B0', fontSize: '14px' }}
      >
        Kanban, which means 'visual signal' in Japanese, helps teams see their
        tasks, limit how much they're working on at once, and boost efficiency.
        Use the Kanban template to make planning more flexible, avoid delays,
        and keep everything clear during the development process.
      </Typography>

      {/* Image and Feature Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '16px',
        }}
      >
        <img
          src={Kanbanpng}
          alt="Kanban Board"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }} // Adjust image size to fit the design
        />
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#E1E1E1',
              fontSize: '16px',
            }}
          >
            Track work using a simple board
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#B0B0B0', fontSize: '13px', lineHeight: '1.5' }}
          >
            Work tasks are shown on your Kanban board, making it easy for teams
            to track progress at any time. The columns on the board represent
            each step in your team's process, from start to finish.
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="body2"
        sx={{
          color: '#0065ff',
          cursor: 'pointer',
          marginBottom: '16px',
          fontSize: '13px',
        }}
      >
        Learn more about kanban boards
      </Typography>

      {/* Second Feature Section */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <img
          src={Kanbanto}
          alt="Kanban Details"
          style={{ width: '80px', height: '80px', objectFit: 'cover' }} // Adjust image size
        />
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              marginBottom: '8px',
              color: '#E1E1E1',
              fontSize: '16px',
            }}
          >
            Track work using a simple board
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#B0B0B0', fontSize: '13px', lineHeight: '1.5' }}
          >
            Work tasks are shown on your Kanban board, making it easy for teams
            to track progress at any time. The columns on the board represent
            each step in your team's process, from start to finish.
          </Typography>
        </Box>
      </Box>

      {/* Product Info Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '16px',
        }}
      >
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: '#B0B0B0',
              marginBottom: '8px',
              fontSize: '12px',
            }}
          >
            PRODUCT
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#B0B0B0', fontSize: '13px' }}
          >
            Clikkle Projects
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: '#B0B0B0',
              marginBottom: '8px',
              fontSize: '12px',
            }}
          >
            RECOMMENDED FOR
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: '#B0B0B0', fontSize: '13px' }}
          >
            Teams that manage tasks from a backlog
            <br />
            DevOps teams that need to link their work across different tools
          </Typography>
        </Box>
      </Box>

      {/* Issue Types Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 'bold',
              color: '#B0B0B0',
              marginBottom: '8px',
              fontSize: '12px',
            }}
          >
            ISSUE TYPES
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography
              sx={{
                backgroundColor: '#5E6CFF',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Epic
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#00C875',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Story
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#FF5630',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Bug
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#FFAB00',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Task
            </Typography>
            <Typography
              sx={{
                backgroundColor: '#36B37E',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
              }}
            >
              Sub-task
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default KanbanDetails;
