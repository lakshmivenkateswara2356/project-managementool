

import { Box, IconButton, Typography, Stack, Avatar, Dialog, DialogActions,useMediaQuery, Grid,  Divider, Alert, DialogContent, DialogContentText, DialogTitle, TextField, Button, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/Home';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import SoftwareDevelopment from './SoftwareDevelopment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Teamplan from '../Assets/teampla.png';
import Companypl from '../Assets/compaPl.png';
import Header from '../components/Header';
import Kanbanim from '../Assets/Kanban.png'

import Kanbathree from '../Assets/Kanbathree.png'
import ProjectDetailsForm from './ProjectDetailsForm';
import Team from '../Assets/team.png';
import Company from '../Assets/company.png'
import Kanbanto from '../Assets/Kanbanto.png'
import clikklereport from '../Assets/clikklerepair.png'
import Card from '@mui/material/Card';
import Scrum from '../Assets/scrum.png'
import CardContent from '@mui/material/CardContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // For navigation arrow
import { useTheme } from '@mui/material/styles';

import image from './dahboardimg.png';
import ActionIcon from '../components/ActionIcon';
import Icon from '../components/Icon';
import CloseIcon from '@mui/icons-material/Close';



import BoltIcon from '@mui/icons-material/Bolt';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CircleIcon from '@mui/icons-material/Circle';
import CheckIcon from '@mui/icons-material/Check';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import './Home.css'
import { Feedback } from '@mui/icons-material';
import { GoTypography } from 'react-icons/go';



const projectTemplates = [
    { title: 'Software Development', description: 'Manage software development life cycles and tasks.' },
    { title: 'Service Management', description: 'Oversee and manage service operations effectively.' },
    { title: 'Work Management', description: 'Track and organize work-related tasks and projects.' },
    { title: 'Product Management', description: 'Plan and manage product development cycles.' },
    { title: 'Marketing', description: 'Coordinate marketing campaigns and initiatives.' },
    { title: 'Human Resources', description: 'Oversee HR processes such as recruiting and payroll.' },
    { title: 'Finance', description: 'Manage financial tasks, reports, and accounts.' },
    { title: 'Design', description: 'Organize and track design projects and tasks.' },
    { title: 'Personal', description: 'Organize and track design projects and tasks.' },
    { title: 'Operations', description: 'Organize and track design projects and tasks.' },
    { title: 'Legal', description: 'Organize and track design projects and tasks.' },
    { title: 'Sales', description: 'Organize and track design projects and tasks.' },
    { title: 'Analytics', description: 'Organize and track design projects and tasks.' },
    { title: 'IT', description: 'Organize and track design projects and tasks.' },
    { title: 'Facilities', description: 'Organize and track design projects and tasks.' },
    { title: 'Non-Profit', description: 'Organize and track design projects and tasks.' },
  ];



  const templateContent = {
    'Software Development': <div> <SoftwareDevelopment/> </div>,
    'Service Management': <h1>Service Management</h1>,
    'Work Management': <h1>Work Management</h1>,
    'Product Management': <h1>Product Management</h1>,
    'Marketing': <h1>Marketing</h1>,
    'Human Resources': <h1>Human Resources</h1>,
    'Finance': <h1>Finance</h1>,
    'Design': <h1>Design</h1>,
    'Personal': <h1>Design</h1>,
    'Operations': <h1>Design</h1>,
    'Legal': <h1>Design</h1>,
    'Sales': <h1>Design</h1>,
    'Analytics': <h1>Design</h1>,
    'Facilities': <h1>Design</h1>,
    'Non-Profit': <h1>Design</h1>,
 
};


const Home = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newItem, setNewItem] = useState('');

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isExpanded, setIsExpanded] = useState(false);
    const [openTemplateDialog, setOpenTemplateDialog] = useState(false); // State to control dialog visibility


    const handleExpand = () => {
      setIsExpanded(true);
    };
  
    const handleCollapse = () => {
      setIsExpanded(false);
    };

    const handleUseTemplate = () => {
      setOpenTemplateDialog(true); // Open the dialog on click
    };
  
    const handleCloseDialog = () => {
      setOpenTemplateDialog(false); // Close the dialog when needed
    };
  
    const handleTodo = () => {
      console.log("Todo Button Clicked");
    };
  
    const handleInProgress = () => {
      console.log("In Progress Button Clicked");
    };
  
    const handleDone = () => {
      console.log("Done Button Clicked");
    };
     
    const [selectedSection, setSelectedSection] = useState('Dashboard');
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    const [activeButton, setActiveButton] = useState('Dashboard'); // Set 'Dashboard' as the default active button

    const handleButtonClick = (button) => {
        setActiveButton(button); // Update the active button when a button is clicked
    };

    const [selectedTemplate, setSelectedTemplate] = useState(null);

const handleTemplateSelect = (template) => {
  setSelectedTemplate(template.title);
  setTemplateInfo(template.description); // Update the template info dynamically
};
const [templateInfo, setTemplateInfo] = useState('');
    const handleClose = () => {
        setOpenDialog(false);
    };

    const handleSave = () => {
        console.log('New item added:', newItem);
        setOpenDialog(false);
        setNewItem('');
    };

    return (

      <Header>
        <Box container p={2}  marginTop="-8px"  >
            <Grid container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                    <IconButton onClick={handleClickOpen} >
                        
                        <AddIcon className='iconsize'/>
                        </IconButton>
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                
            </Grid>
            <div className='diveder'></div>
            <Box>

            <Dashboard/>

            </Box>
            

          

                <Dialog
      
      open={openDialog}
      onClose={handleClose}
      maxWidth="xl"
      fullWidth
     
    >
      <DialogTitle sx={{ backgroundColor:'background.default' }}> {/* Dark background for header */}
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: '1.25rem',
            textAlign: isMobile ? 'center' : 'left',
              // White text for the header
            marginTop: '8px',
          
          }}
        >
          
        
<IconButton
      onClick={handleClose}
      variant="contained"
      sx={{  marginRight: '8px' }}
>
  <CloseIcon />
</IconButton>
        </Typography>
      </DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', padding: '20px', backgroundColor: 'background.default' }}>
        {/* Left side: List of templates */}
        {!isMobile || !selectedTemplate ? (
          <Box
            sx={{
              
              width: isMobile ? '100%' : '20%',
              borderRight: isMobile ? 'none' : '1px solid #ccc',
              paddingRight: isMobile ? '0px' : '16px',
              marginBottom: isMobile ? '16px' : '0',
              backgroundColor:'background.default' , // Same background as the screenshot
          
            }}
          >
            <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold',}}>
              Project templates
            </Typography>
            <List>
              {projectTemplates.map((template) => (
                <ListItem
                
                  button
                  key={template.title}
                  onClick={() => handleTemplateSelect(template)}
                  sx={{
                    padding: '10px',
                    borderRadius: '8px',
                    height:'39px',
                    
                   
                    marginTop:'-6px',
                    backgroundColor: selectedTemplate === template.title ? '#3767b1' : 'transparent',
                    transition: 'background-color 0.2s ease-in-out',
                    color: selectedTemplate === template.title ? '#ffffff' : '', // White text for selected item
                    '&:hover': {
                      
                    },
                  }}
                >
                  <ListItemText primary={template.title} />
                </ListItem>
              ))}
            </List>
          </Box>
        ) : null}

        {/* Right side: Display information */}
        {(!isMobile || selectedTemplate) && (
          <Box
            className="assigning"
            sx={{
              width: isMobile ? '100%' : '80%',
              paddingLeft: isMobile ? '0px' : '24px',
              backgroundColor: 'background.default',
              borderRadius: '8px',
              overflowY: 'auto',
            }}
          >
            {selectedTemplate ? (
              <>
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px', fontSize: '16px' }}>
            <Box sx={{display:'flex',}}>    <h1 style={{fontSize:'16px',marginRight:'12px'}}>Template /</h1>  {selectedTemplate}</Box>
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '16px', color: '#666665' }}>
                  {templateContent[selectedTemplate]}
                </Typography>
              </>
            ) : (
              <Typography variant="body1" sx={{ color: '#666665' }}>
                Select a project template to see details.
              </Typography>
            )}
          </Box>
        )}
      </DialogContent>

     
    </Dialog>
        </Box>

        </Header>
    );
};
export default Home;