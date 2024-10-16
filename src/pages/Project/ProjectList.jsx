import React, { useState } from "react";
import Projectheader from './ProjectHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { EmojiEmotions, AttachFile, Link, MoreVert, FilterList, Create } from '@mui/icons-material';
import Dotele from '../../Assets/dot.png';
import Tick from '../../Assets/tick.png';
import Image from '../../components/Image';
import ShareIcon from '@mui/icons-material/Share';
import FilterListIcon from '@mui/icons-material/FilterList';

import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography, Table, TableBody, IconButton, Menu, Tabs,
  Tab,
  Select,
  FormControl,
  InputLabel, Checkbox, Avatar, Dialog,  InputAdornment, DialogActions, DialogContent, DialogTitle, TableCell, TextField, MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

const ProjectList = () => {

  const [tab, setTab] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  const [anchorElActions, setAnchorElActions] = useState(null);
  const openActions = Boolean(anchorElActions);

  const handleActionsClick = (event) => {
    setAnchorElActions(event.currentTarget);
  };

  const handleActionsClose = () => {
    setAnchorElActions(null);
  };


  const getStatusStyles = (status) => {
    switch (status) {
      case 'Review':
        return {
          textColor: 'orange',
          borderColor: 'orange',
          backgroundColor: 'rgba(255, 140, 0, 0.14)!important' ,// Deep Orange with 30% opacity
 // Optional hover effect
        };
      case 'Backlogs':
        return {
          textColor: 'pink',
          borderColor: 'pink',
          backgroundColor: 'rgba(255, 20, 147, 0.14)', // Optional hover effect
        };
      case 'In Progress':
        return {
          textColor: 'blue',
          borderColor: 'blue',
          backgroundColor: 'rgba(0,0,255,0.1)', // Optional hover effect
        };
      default:
        return {
          textColor: 'gray',
          borderColor: 'gray',
          hoverBackground: 'transparent',
        };
    }
  };
  

  const dummyData = [
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Review',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Dotele,
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'Review',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: false,
    },
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Review',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
    {
      avatar:Tick,
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Backlogs',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: { namee: 'Alice Johnson', avatare: 'https://i.pravatar.cc/150?img=4' },
      isChecked: true,
    },
  ];

  const handleClickOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };


  const [filter, setFilter] = useState('Newest first');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  

  return (
    <Box>
      <Projectheader />
      <Box>
        {/* List View */}
        <Table sx={{width:'105%',marginLeft:'-33px' }} aria-label="simple table">
          <TableHead sx={{backgroundColor:'background.default',height: '50px',width:'200px',fontSize:'12px', width: '100%', '& th': { // Adjust individual table header cells
      fontSize: '14px', 
      padding: '8px', 
      width: '200px', // Adjust width of each <th>
    },}} >
            <TableRow >
              <TableCell>Type</TableCell>
              <TableCell>Keys</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell >Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Reporter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{width:'100px'}}> 
            {dummyData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ 
                  borderBottom: '1px solid #1a1919', // Adds border between rows
                  '& td': { border: '1px solid #1a1919' }, // Adds border to each cell
                  cursor: 'pointer' 
                }}
                onClick={() => handleClickOpen(data)} // Open dialog on row click
              >
                <TableCell>
                  <Image sx={{height:'22px'}} src={data.avatar}/>
                </TableCell>
                <TableCell sx={{ color: '#00ab55', fontSize: '12px',width:'20px' }}>{data.id}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '900px' }}>{data.description}</TableCell>
                <TableCell 
  sx={{ 
    fontSize: '12px', 
    width: '150px', 
    padding: '4px', // Optional: Adjust padding
  }}
>
<Button
  variant="outlined"
  sx={{
    textTransform: 'none', // Prevent text transformation to uppercase
    borderColor: getStatusStyles(data.status).borderColor,
    color: getStatusStyles(data.status).textColor,
    backgroundColor: getStatusStyles(data.status).backgroundColor, // Set background based on status
    fontSize: '12px',
    width: '80%', // Button fits the table cell
    padding: '4px', // Optional: Adjust padding
  }}
>
  {data.status}
</Button>

</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <Avatar src={data.assignee.avatar} sx={{ width: 20, height: 20}} />
                  <Typography
                    sx={{ color: '#ffffff', display: 'inline-block', marginLeft: '8px', fontSize: '12px', width: '100px' }}
                  >
                    {data.assignee.name}
                  </Typography>
                </TableCell>
                <TableCell>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Upper bar */}
        <Box sx={{
          width: '27px',  // Adjust width to match the image
          height: '4px',   // Height of the bar
          backgroundColor: orange[500], // Orange color
          marginBottom: '4px',  // Space between the bars
        }} />
        
        {/* Lower bar */}
        <Box sx={{
          width: '27px',
          height: '4px',
          backgroundColor: orange[500], 
        }} />
      </Box>
    </TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.startDate}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.dueDate}</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <Avatar src={data.reviewer.avatare} sx={{ width: 20, height: 20}} />
                  <Typography
                    sx={{ color: '#ffffff', display: 'inline-block', marginLeft: '8px', fontSize: '12px', width: '100px' }}
                  >
                    {data.reviewer.namee}
                  </Typography>
                </TableCell>              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* {selectedData?.description} */}
      <Dialog sx={{}} open={open} onClose={handleClose} fullWidth maxWidth="lg" PaperProps={{ sx: { color: '#ffffff', borderRadius: '8px', height: '100vh',} }}>
 

  
</Dialog>

    </Box>
  );
};

export default ProjectList;
