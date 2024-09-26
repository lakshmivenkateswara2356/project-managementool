import React, { useState } from 'react';
import { Box, Typography, Grid, Paper, IconButton, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import GroupIcon from '@mui/icons-material/Group';
import Navbar from '../components/Navbar';
import profileclikk from '../Assets/profileclikk.jpeg';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import InfoIcon from '@mui/icons-material/Info';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import {
        Avatar, AppBar, Toolbar, InputBase,
    Card, CardContent, Tabs, Tab,  Divider
  } from '@mui/material';

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';

import clikklereport from '../Assets/clikklerepair.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Icon from '../components/Icon'


import './Testing.css'
import { Feedback } from '@mui/icons-material';



const projectTemplates = [
    { title: 'Software Development', description: 'Manage software development life cycles and tasks.' },
    { title: 'Service Management', description: 'Oversee and manage service operations effectively.' },
    { title: 'Work Management', description: 'Track and organize work-related tasks and projects.' },
    { title: 'Product Management', description: 'Plan and manage product development cycles.' },
    { title: 'Marketing', description: 'Coordinate marketing campaigns and initiatives.' },
    { title: 'Human Resources', description: 'Oversee HR processes such as recruiting and payroll.' },
    { title: 'Finance', description: 'Manage financial tasks, reports, and accounts.' },
    { title: 'Design', description: 'Organize and track design projects and tasks.' },
  ];


const Testing = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [newItem, setNewItem] = useState('');

    const handleClickOpen = () => {
        setOpenDialog(true);
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





    return(

       <div>
         <HomeIcon/>
         <WorkIcon/>
         <AssignmentIcon/>
         <MoreVertIcon/>
         <DashboardIcon/>
         <GroupIcon/>
         <AccessTimeOutlinedIcon/>
         <GradeOutlinedIcon/>
         <DeleteOutlinedIcon/>
         <InfoIcon/>
         <FolderOutlinedIcon/>
         <AccountBalanceWalletIcon/>
         <InputBase/>
         <AssignmentTurnedInIcon/>
         <PendingActionsIcon/>
         <ReportProblemIcon/>
         <AddIcon/>


         <div className='structeredicons'><HomeIcon/><AssignmentIcon/><DashboardIcon/><WorkIcon/><GroupIcon/></div>
        
       </div>
    )
}

export default Testing