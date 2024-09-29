import React, { useState } from 'react';
import { Box, Typography, Button, IconButton,Divider } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import CloseIcon from '@mui/icons-material/Close';
import Kanbanpng from '../Assets/Kanban.png';
import Kanbanto from '../Assets/Kanbanto.png'; // Ensure paths are correct
import TemplatePopup from '../Templatepopup/TemplatePopup'; // Popup component import
import Image from '../components/Image';

const KanbanDetails = ({ onClose }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleTodo = () => {
    console.log("Todo button clicked");
    // Your logic for handling Todo
  };
  
  const handleInProgress = () => {
    console.log("In Progress button clicked");
    // Your logic for handling In Progress
  };
  
  const handleDone = () => {
    console.log("Done button clicked");
    // Your logic for handling Done
  };
  

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <Box
      sx={{
        
        
       
        overflow:'scroll',
        borderRadius: '12px',
        position: 'relative',
        maxWidth: '100vw',
        height: '100vh',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          backgroundColor: '#3666b0',
          height: '100px',
          borderTopLeftRadius: '9px',
          borderTopRightRadius: '9px',
          padding: '42px',
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', fontSize: '35px', color: 'black' }}
        >
          Kanban
        </Typography>
        <div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              borderRadius: '8px',
              marginRight: '22px',
              padding: '6px 16px',
              '&:hover': { backgroundColor: '#0051cc' },
              fontSize: '14px',
              textTransform: 'none',
            }}
            onClick={handleOpenPopup} // Opens popup on button click
          >
            Use template
          </Button>
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: '28px',
              right: '16px',
              color: 'black',
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Box>

      {/* Main Content */}
      <Box sx={{}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            padding:'24px'
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginBottom: '16px',
              
              fontSize: '15px',
              width: '650px',
            }}
          >
            Kanban, which means 'visual signal' in Japanese, helps teams see
            their tasks, limit how much they're working on at once, and boost
            efficiency. Use the Kanban template to make planning more flexible,
            avoid delays, and keep everything clear during the development
            process.
          </Typography>

<Box sx={{marginLeft:'9%'}}>

          <Typography>Products</Typography>
          <Image cdn='projects/logo/2023/projects-text.png' sx={{ height: '27px' }} />
          </Box>
        </Box>

        {/* Image and Feature Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl:'24px',
            pr:'42px',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <img
            src={Kanbanpng}
            alt="Kanban Board"
            style={{ width: '240px', height: '140px', objectFit: 'cover' }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginBottom: '8px',
                
                fontSize: '17px',
              }}
            >
              Track work using a simple board
            </Typography>
            <Typography
              variant="body2"
              sx={{  fontSize: '15px', lineHeight: '1.5',width:'400px' }}
            >
              Work tasks are shown on your Kanban board, making it easy for
              teams to track progress at any time. The columns on the board
              represent each step in your team's process, from start to finish.

              <Typography
          variant="body2"
          sx={{
            
            cursor: 'pointer',
            marginBottom: '16px',
            fontSize: '13px',
            marginTop:'22px'
          }}
        >
          Learn more about kanban boards
        </Typography>
            </Typography>
          </Box>
          

          <Typography
              variant="body2"
              sx={{  fontSize: '15px', lineHeight: '1.5',width:'250px',marginLeft:'4%' }}
            >
              <Typography>RECOMMENDED FOR</Typography>
              Teams that manage tasks from 
a backlog  
DevOps teams that need to link 
their work across different tools


            </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl:'24px',
            pr:'42px',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginBottom: '8px',
                
                fontSize: '18px',
              }}
            >
              Track work using a simple board
            </Typography>
            <Typography
              variant="body2"
              sx={{  fontSize: '15px', lineHeight: '1.5',width:'400px' }}
            >
              Work tasks are shown on your Kanban board, making it easy for
              teams to track progress at any time. The columns on the board
              represent each step in your team's process, from start to finish.

              <Typography
          variant="body2"
          sx={{
            
            cursor: 'pointer',
            marginBottom: '16px',
            fontSize: '14px',
            marginTop:'22px'
          }}
        >
          Learn more about kanban boards
        </Typography>
            </Typography>
          </Box>
          <img
            src={Kanbanto}
            alt="Kanban Board"
            style={{ width: '330px', height: '140px', objectFit: 'cover',marginLeft:'-12px', }}
          />

          <Typography
              variant="body2"
              sx={{  fontSize: '13px', lineHeight: '1.5',width:'250px',marginLeft:'-3%' }}
            >
              <Typography>ISSUE TYPES</Typography>
              <ul>
      <li> <BoltIcon style={{ color: 'purple' }} />Epic</li>
      <li>  <BookmarkIcon style={{ color: 'green' }} />Story</li>
      <li> <CircleIcon style={{ color: 'red' }} />Bug</li>
      <li> <CheckIcon style={{ color: 'blue' }} />Task</li>
      <li> <ChatBubbleIcon style={{ color: 'orange' }} />Sub-task</li>
    </ul>

            </Typography>
        </Box>


        {/* Other sections like Second Feature, Product Info, and Issue Types */}

        {/* Popup Modal for Template */}
        {isPopupOpen && <TemplatePopup onClose={handleClosePopup} />}
      </Box>
      <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl:'24px',
            pr:'42px',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <img
            src={Kanbanpng}
            alt="Kanban Board"
            style={{ width: '240px', height: '140px', objectFit: 'cover' }}
          />
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                marginBottom: '8px',
                
                fontSize: '18px',
              }}
            >
              'Continuously improve with agile reports'
            </Typography>
            <Typography
              variant="body2"
              sx={{  fontSize: '15px', lineHeight: '1.5',width:'370px', marginLeft:'12px', }}
            >
              Kanban focuses on improving workflow for steady delivery. Agile reports, like the cumulative flow diagram, help your team consistently deliver the most value to your business.

              <Typography
          variant="body2"
          sx={{
            
            cursor: 'pointer',
            marginBottom: '16px',
            fontSize: '13px',
            marginTop:'22px'
          }}
        >
          Learn more about kanban boards
        </Typography>
            </Typography>
          </Box>
          

       
<div className='butondispl'>

  <Box sx={{display:'flex',
    flexDirection:'column',
    marginLeft:'26px',
  }}>
<Button
className='todobutton'
variant="contained"
onClick={handleTodo}
sx={{
  
backgroundColor: '#808080', // Dark blue background
color: '#333', // Light blue text
fontWeight: 'bold',
'&:hover': {
backgroundColor: '#1c3a6e', // Slightly lighter on hover
},
}}
>
Todo
</Button>
  <Button
className='todobutton'
variant="contained"
onClick={handleInProgress}
sx={{
 
backgroundColor: '#10224a', // Dark blue background
color: '#4d6adf', // Light blue text
fontWeight: 'bold',
'&:hover': {
backgroundColor: '#1c3a6e', // Slightly lighter on hover
},
}}
>
In Progress
</Button>
<Button
className='todobutton'
variant="contained"
onClick={handleDone}
sx={{
backgroundColor: '#10381e', // Dark green background
color: '#2aff7c', // Bright green text
fontWeight: 'bold',
'&:hover': {
backgroundColor: '#1f5b36', // Slightly lighter on hover
},
}}
>
Done
</Button>
</Box>
</div>


        </Box>

        <Divider sx={{height:'1px',width:'100%',backgroundColor:'gray',mt:'20px'}}/>


    <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:'22px'}}>  
<div>
<h1 className='KanbanNext'>Next: Select a project type</h1>
</div>
<div>   <Button className='Kanbantemplate'
    variant="contained"
    
    onClick={handleOpenPopup}
  
  >
    Use Template
  </Button></div>
  </Box> 
    </Box>
  );
};

export default KanbanDetails;
