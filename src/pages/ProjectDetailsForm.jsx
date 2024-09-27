import React from 'react';
import { Box, Button, Typography, TextField, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Kanbanimg from '../Assets/Kanban.png';
import Teampng from '../Assets/team.png';

const ProjectDetailsForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        padding: '40px',
        borderRadius: '12px',
        maxWidth: '100vw',
        height: '100vh',
        margin: 'auto',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // Adjusts content positioning
      }}
    >
      {/* Main content: flex container for section 1 and section 2 */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row', // Row layout for section 1 and 2
          gap: '20px', // Spacing between the two sections
        }}
      >
        {/* SECTION 1: Add Project Details Form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '24px', // Spacing between elements in section 1
          }}
        >
         

          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '28px', color: '#172b4d', marginBottom: '8px' }}>
              Add project details
            </Typography>
            <Typography variant="body1" sx={{ color: '#5e6c84', marginBottom: '16px', maxWidth: '600px' }}>
              Let your team achieve more. You can update project details anytime in the project settings.
            </Typography>
            <Typography variant="body2" sx={{ color: '#5e6c84', fontWeight: 'bold' }}>
              Required fields are marked with an asterisk *
            </Typography>
          </Box>

          {/* Input Fields */}
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#172b4d', fontWeight: 'bold' }}>Project Name *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter project name"
              sx={{
                backgroundColor: 'background.default',
                borderRadius: '8px',
                marginTop: '8px',
              }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#172b4d', fontWeight: 'bold' }}>Access Level</Typography>
            <Typography variant="body2" sx={{ color: '#5e6c84', marginTop: '8px' }}>
              Access allows everyone in your organization to view this project. Customize access in project settings.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{ color: '#172b4d', fontWeight: 'bold' }}>Project Key *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter project key"
              sx={{
                backgroundColor: '#background.default',
                borderRadius: '8px',
                marginTop: '8px',
              }}
            />
          </Box>
        </Box>

        {/* SECTION 2: Template and Type Cards */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            gap: '24px', // Spacing between cards in section 2
          }}
        >
          {/* Template Section */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <Typography variant="h6" sx={{ color: '#172b4d', fontWeight: 'bold' }}>
                Template
              </Typography>
              <Button
                sx={{
                  color: '#0065ff',
                  textTransform: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Change template <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: 'background.default',
                border: '1px solid #dfe1e6',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={Kanbanimg}
                alt="Kanban"
                style={{
                  marginRight: '16px',
                  width: '50px',
                  height: '50px',
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#172b4d' }}>
                  Kanban
                </Typography>
                <Typography variant="body2" sx={{ color: '#5e6c84' }}>
                  Manage tasks on a simple, visual board.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Project Type Section */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <Typography variant="h6" sx={{ color: '#172b4d', fontWeight: 'bold' }}>
                Project Type
              </Typography>
              <Button
                sx={{
                  color: '#0065ff',
                  textTransform: 'none',
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Change type <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: 'background.default',
                border: '1px solid #dfe1e6',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={Teampng}
                alt="Team-managed"
                style={{
                  marginRight: '16px',
                  width: '50px',
                  height: '50px',
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#172b4d' }}>
                  Team-managed
                </Typography>
                <Typography variant="body2" sx={{ color: '#5e6c84' }}>
                  Simplified project management with team settings.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Divider and Buttons */}
      <Box>
        <Divider sx={{ marginBottom: '24px' }} />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{
              textTransform: 'none',
              backgroundColor:'gray',
              marginRight:'12px',
              color: 'white',
            
              '&:hover': {  backgroundColor: 'rgba(0, 101, 255, 0.04)' },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: 'none',color:'black',
              backgroundColor: '#0065ff',
              '&:hover': { backgroundColor: '#0052cc' },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsForm;
