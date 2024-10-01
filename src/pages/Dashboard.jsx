import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Paper, Button, Divider, Tabs, Tab, Avatar 
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import Bottommenu from '../pages/BottomMenu/Bottommenu'
import Icon from '../components/Icon';
import Actionicon from '../components/ActionIcon';
import profileclikk from '../Assets/profileclikk.jpeg'; // Update the path accordingly
import ActionIcon from '../components/ActionIcon';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/issue-updates');
  };

  const handleActiveissues=() => {
    navigate('active-issues')
  }

  const Issuesow  =()=>{
    navigate ('issues-show')
  }
  const [activeSection, setActiveSection] = useState('dashboard');
  const [activeTab, setActiveTab] = useState(3); // Controls the selected tab in 'Issues' section

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div>
   <Box sx={{ flexGrow: 1, padding: '20px',overflow:'scroll',height:{xs: '75vh',  // for small screens
      lg: '74vh' } }}
>
   {/* Task Overview Section */}
<Grid container spacing={2}>
{/* To Do */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">To Do</Typography>
   <Typography variant="h4" sx={{ color: '#FF6347' }}>0</Typography>
 </Box>
 <FolderOutlinedIcon sx={styles.iconStyle('#FF6347')} />
</Paper>
</Grid>

{/* In Progress */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">In Progress</Typography>
   <Typography variant="h4" sx={{ color: '#1E90FF' }}>0</Typography>
 </Box>
 <AccessTimeOutlinedIcon sx={styles.iconStyle('#1E90FF')} />
</Paper>
</Grid>

{/* Review */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">Review</Typography>
   <Typography variant="h4" sx={{ color: '#FFD700' }}>0</Typography>
 </Box>
 <GradeOutlinedIcon sx={styles.iconStyle('#FFD700')} />
</Paper>
</Grid>

{/* Done */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">Done</Typography>
   <Typography variant="h4" sx={{ color: '#32CD32' }}>2</Typography>
 </Box>
 <DeleteOutlinedIcon sx={styles.iconStyle('#32CD32')} />
</Paper>
</Grid>
</Grid>
<Box sx={{flexDirection:'row', display:'flex', justifyContent:'space-between'}} >
<Typography variant="h6">Issues Updates</Typography>
<Button sx={{backgroundColor:'#292828', color:'white'}} onClick={handleViewAll} >
view all
</Button>
</Box>
 {/* Issues Updates Section */}
 <Box  sx={{ display: 'flex', flexDirection:{ xs: 'column', sm: 'row' }, justifyContent: 'space-between', padding: 2, gap: 2 }} >
 

 <Paper sx={styles.activitySection}>
<Box sx={styles.sectionHeader}>

<Typography variant="h6" sx={{ fontWeight:'bold'}}>Activity</Typography>
<Button sx={styles.viewAllButton('contained')} onClick={handleActiveissues}>View All</Button>
</Box>

<Divider sx={styles.divider} />

<Box sx={{ paddingY: 2 }}>
{[...Array(5)].map((_, index) => (
<Box key={index} sx={styles.activityItem}>
 <Avatar src={profileclikk} alt="Daniel Thompson" sx={styles.avatarStyle} />
 <Box sx={{ flex: 1 }}>
   <Typography variant="body1" sx={styles.activityText(index)}>
     {index === 2
       ? 'New Add list permission on the member list issue'
       : index < 2
         ? 'Add list permission on the member list issue'
         : 'Work progress % calculation issue'}
   </Typography>
   <Typography variant="body2" sx={{ marginLeft:"-8px"}}>
     Daniel Thompson 
   </Typography>
 </Box>
 <Button  variant="outlined"  sx={styles.issueButton}>Issue</Button>
 <Typography variant="body2" sx={{  fontSize:'7px',fontWeight:'light',margin:{xs:'1px',sm:"13px" },width:"500px" }}>
   {index * 2 + 38} minutes ago
 </Typography>
</Box>
))}
</Box>
</Paper>

{/* Issues Section */}
<Paper sx={styles.issuesSection}>
<Box sx={styles.sectionHeader}>
<Typography variant="h6" sx={{ fontWeight: 600 }}>Issues</Typography>
<Button variant="contained" sx={styles.viewAllButton('contained')} onClick={Issuesow}>View All</Button>
</Box>

<Tabs value={activeTab} onChange={handleTabChange} textColor="inherit" indicatorColor="primary" sx={{ marginBottom: 1 }}>
<Tab label="Today Issues" sx={styles.tabStyle} />
<Tab label="Pending Issues" sx={styles.tabStyle} />
<Tab label="Review Issues" sx={styles.tabStyle} />
<Tab label="Completed Issues" sx={styles.tabStyle} />
</Tabs>

<Divider sx={styles.divider} />

<Box sx={{ paddingY: 2,marginRight:'3px' }}>
{[{ label: 'Show employee attendance record in attendance view page', done: true },
{ label: 'There should be show file successfully uploaded instead of...', done: true }].map((issue, index) => (
<Box key={index} sx={styles.issueItem}>
 <Box sx={styles.issueIcon(issue.done)} />
 <Box sx={{ flexGrow: 1 }}>
   <Typography variant="body1" sx={styles.issueText}>{issue.label}</Typography>
   <Typography variant="body2" sx={{ }}>
     {index === 0 ? 'CHR-17 • Clikkle HR' : 'ES-18 • Clikkle E-sign'}
   </Typography>
 </Box>
 <Button size="small" variant="outlined" sx={styles.doneButton(issue.done)}>
   {issue.done ? 'Done' : 'Pending'}
 </Button>
</Box>
))}
</Box>
</Paper>
 </Box>

<Box sx={{display:{xs:'block',lg:'none'}}}>
  <Bottommenu/>
</Box>


</Box>

    </div>
  );
};

// Styles used in the components
const styles = {
  paperContainer: {
    backgroundColor: 'background.default',
    padding: '8px',
    borderRadius: '7px',
    
    mb:3,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-evenly',
    
   
    justifyContent: 'space-between',


    '@media (max-width: 600px)': {
      flexDirection: 'row',
     
      justifyContent: 'space-between',
     
      display:'flex',
padding:4,
height:'102px',
borderRadius:'17px',
    width:'111%',
      ml:-2,
     mt:-3,
    },

   
  },

 

  iconStyle: (color) => ({
    fontSize: 40,
    color: color,
  }),
  activitySection: {
    backgroundColor: 'background.default',
    padding: 2,
   
    borderRadius: '10px',
    width: '60%',
    overflow: 'scroll',
    ml:-4,
    height: '40vh',

    '@media (max-width:600px)':{

      width:"87vw",
      height:"45vh",
      ml:-4.2,
    }
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 2,
  },
  viewAllButton: (variant = 'text') => ({
    color: variant === 'text' ? '#0A84FF' : '#fff',
    backgroundColor: variant === 'contained' ? '#0A84FF' : 'none',
    textTransform: 'none',
  }),
  divider: {
    backgroundColor: '#333',
  },
  activityItem: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  avatarStyle: {
    width: 40,
    height: 40,
    marginRight: 2,
    borderRadius: '8px',
  },
  activityText: (index) => ({
   
    fontWeight: 500,
    mb: 0.5,
    width: '296px',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',

    '@media (max-width :600px)':{
width:'120px',
ml:'-5px'
    }
   
  }),
  issueButton: {
    color: '#00C853',
    borderColor: '#00C853',
    textTransform: 'none',
    padding: '2px 8px',
    fontSize: '12px',
    backgroundColor: 'rgba(0, 200, 83, 0.1)',

    '@media(max-width:600px)': {
      width:"10px",
      margin:'5px',
      
      

    }
  },
  issuesSection: {
    backgroundColor: 'background.default',
    width: '60%',
    
    padding: 2,
    mr:-4,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',

    '@media(max-width: 600px)':{
      width:'87vw',
      ml:-4,

    }
  },
  tabStyle: {
    textTransform: 'none',
   
    fontWeight: 500,
  },
  issueItem: {
    display: 'flex',
    alignItems: 'center',
    mb: 2,
  },
  issueIcon: (done) => ({
    width: 12,
    height: 12,
    borderRadius: '50%',
    backgroundColor: done ? '#00C853' : '#bbb',
    marginRight: 2,
  }),
  issueText: {
   
    fontWeight: 500,
  },
  doneButton: (done) => ({
    color: done ? '#00C853' : '#bbb',
    textTransform: 'none',
    width:{sm:'10px',}
  }),
};

export default Dashboard;
