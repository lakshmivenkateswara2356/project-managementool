import React from 'react';
import { Box, Button, Typography, TextField, Divider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Kanbanimg from '../Assets/Kanban.png';
import Teampng from '../Assets/team.png';
import { useNavigate } from 'react-router-dom';


import Image from '../components/Image';

const ProjectDetailsForm = () => {
  const navigate = useNavigate();


  const gotoNxtstep =()=>{
    navigate('/Projects')
  }
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
            <Typography variant="h4" sx={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '8px' }}>
              Add project details
            </Typography>
            <Typography variant="body1" sx={{  marginBottom: '16px', maxWidth: '600px' }}>
            See what you can achieve by working with your team. You can update project details anytime in the project settings.
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: 'bold',fontSize:'16px' }}>
              Required fields are marked with an asterisk *
            </Typography>
          </Box>

          {/* Input Fields */}
          <Box>
            <Typography variant="subtitle2" sx={{  fontWeight: 'bold' }}>Project Name *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter project name"
              sx={{
                backgroundColor: 'background.default',
                borderRadius: '8px',
                marginTop: '8px',
                width:'80%',
              }}
            />
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{  fontWeight: 'bold' }}>Access Level</Typography>
            <Typography variant="body2" sx={{ marginTop: '8px',width:'450px',fontSize:'16px' }}>
            Access Anyone with access to your organization can access and administer this project. Upgrade your plan to customize project permissions.
            </Typography>
          </Box>
          <Box>
            <Typography variant="subtitle2" sx={{  fontWeight: 'bold',fontSize:"16px" }}> Key *</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter project key"
              sx={{
                backgroundColor: '#background.default',
                borderRadius: '8px',
                width:"80%",
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
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Template
              </Typography>
              <Button
                sx={{
                 color:'gray',
                  textTransform: 'none',
                  fontSize: '18px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Change template <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: '#444445',
                
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
                  width: '150px',
                  height: '110px',
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color:'white' }}>
                  Kanban
                </Typography>

                <Image cdn='projects/logo/2023/projects-text.png' sx={{ height: '20px', }} />
                <Typography variant="body2" sx={{width:'350px',color:'white'  }}>
                See and move your project forward by managing tasks on an easy-to-use board.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Project Type Section */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' ,}}>
              <Typography variant="h6" sx={{  fontWeight: 'bold' }}>
                Project Type
              </Typography>
              <Button
                sx={{
                  color: 'gray',
                  textTransform: 'none',
                  fontSize: '19px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Change type <ArrowForwardIosIcon fontSize="small" />
              </Button>
            </Box>
            <Box
              sx={{
                backgroundColor: '#444445',
                
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
                  width: '150px',
                  height: '100px',
                }}
              />
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color:'white'}}>
                  Team-managed
                </Typography>
                <Image cdn='projects/logo/2023/projects-text.png' sx={{ height: '20px', }} />
                <Typography variant="body2" sx={{ color:'white' }}>
                Get up and running quickly, with simplified configuration.
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
          textTransform: 'none',
          color: 'black',
          backgroundColor: '#3666b0',
          width: '100px',
          '&:hover': { backgroundColor: '#3666b0' },
        }}
        onClick={gotoNxtstep}
      >
        Next
      </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectDetailsForm;
