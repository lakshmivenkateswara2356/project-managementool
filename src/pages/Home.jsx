

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
  const [openDialog, setOpenDialog] = React.useState(false);

    const [newItem, setNewItem] = useState('');

    

    const handleClickOpen = () => setOpenDialog(true);

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
            
            
            <Box>

            <Dashboard/>

            </Box>
            

       
    
        </Box>

        </Header>
    );
};
export default Home;