import React, { useState } from 'react';
import { 
  Box, Typography, Grid, Paper, Button, Divider, Tabs, Tab, Avatar , List, ListItem, Dialog,useMediaQuery, ListItemText ,IconButton, DialogContent, DialogTitle,
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

import Vector from '../Assets/Vector (2).png';
import Image from '../components/Image';

import Bottommenu from '../pages/BottomMenu/Bottommenu';
import Groupicon from '../Assets/Group 1745 (1).png';
import Groupicon2 from '../Assets/Group 174 (1).png';

import Groupicon3 from '../Assets/Group 179.png';
import Groupicon4 from '../Assets/Group 1744.png';

import profileclikk from '../Assets/profileclikk.jpeg'; // Update the path accordingly

















import InfoIcon from '@mui/icons-material/InfoOutlined';

import AddIcon from '@mui/icons-material/Add';
import SoftwareDevelopment from './SoftwareDevelopment';




import { useTheme } from '@mui/material/styles';

import CloseIcon from '@mui/icons-material/Close';





import './Home.css'




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

const Dashboard = () => {


  const [openDialog, setOpenDialog] = React.useState(false);


    

    const handleClickOpen = () => setOpenDialog(true);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  


   
  
    

 
  

     
  


 

    const [selectedTemplate, setSelectedTemplate] = useState(null);

const handleTemplateSelect = (template) => {
  setSelectedTemplate(template.title);
  setTemplateInfo(template.description); // Update the template info dynamically
};
const [ setTemplateInfo] = useState('');
    const handleClose = () => {
        setOpenDialog(false);
    };

  





  
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/issue-updates');
  };

  const handleActiveissues=() => {
    navigate('/active-issues')
  }

  const Issuesow  =()=>{
    navigate ('/issues-show')
  }
  const [activeTab, setActiveTab] = useState(3); // Controls the selected tab in 'Issues' section

  // Function to handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

 

  


  

  return (
    <div>
  <Box
  sx={{
    flexGrow: 1,
    padding: '20px',
    overflow: 'scroll',
    height: { xs: '85vh', lg: '84vh' },
    '&::-webkit-scrollbar': { display: 'none' }, // Hides scrollbar in Chrome, Safari
    '-ms-overflow-style': 'none', // Hides scrollbar in Internet Explorer and Edge
    'scrollbar-width': 'none', // Hides scrollbar in Firefox
  }}
>

<Grid sx={{marginTop:'-33px'}} container alignItems='center'  >
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
                <div className='diveder'></div>
            </Grid>
            
        


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





  
   {/* Task Overview Section */}
<Grid container spacing={2}>
{/* To Do */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">To Do</Typography>
   <Typography variant="h4" sx={{ color: '#FF6347' }}>0</Typography>
 </Box>
 <img style={{height:'56px',}} src={Groupicon2} alt="group"/>
 
</Paper>
</Grid>

{/* In Progress */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">In Progress</Typography>
   <Typography variant="h4" sx={{ color: '#1E90FF' }}>0</Typography>
 </Box>
 <img style={{height:'56px',}} src={Groupicon3} alt="grop3" />
</Paper>
</Grid>

{/* Review */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">Review</Typography>
   <Typography variant="h4" sx={{ color: '#FFD700' }}>0</Typography>
 </Box>
 <img style={{height:'56px',}} src={Groupicon4} alt="group4" />
</Paper>
</Grid>

{/* Done */}
<Grid item xs={12} sm={6} md={3}>
<Paper sx={styles.paperContainer}>
 <Box>
   <Typography variant="h6">Done</Typography>
   <Typography variant="h4" sx={{ color: '#32CD32' }}>2</Typography>
 </Box>
 <img style={{height:'56px',}}  src={Groupicon} alt="grp5" />
</Paper>
</Grid>
</Grid>
<Box sx={{flexDirection:'row', display:'flex', justifyContent:'space-between'}} >
<Typography variant="h6">Issues Updates</Typography>
<Button sx={{backgroundColor:'#292828', color:'white',width:'96px'}} onClick={handleViewAll} >
View All
</Button>
</Box>
 {/* Issues Updates Section */}
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
   <Typography variant="body2" sx={{ marginLeft:"1px"}}>
     Daniel Thompson 
   </Typography>
 </Box>
 <Button  variant="outlined"  sx={styles.issueButton}>Issue</Button>
 <Typography variant="body2" sx={{  fontSize:'12px',fontWeight:'light',margin:{xs:'1px',sm:"13px" },width:"500px" }}>
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
  
{[{ label: 'Show employee attendance record in attendance view page', done: true},
{ label: 'There should be show file successfully uploaded instead of...', done: true }].map((issue, index) => (
<Box key={index} sx={styles.issueItem}>
 <Box sx={{}} />
 
 <Image src={Vector} alt="vector" sx={{ width: '28px', height: '28px', marginRight: '10px',backgroundColor:'#3767B1',padding:'7px' ,borderRadius:'7px'}} />


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
    height: '42vh',

    '&::-webkit-scrollbar': { display: 'none' }, // Chrome, Safari
    '-ms-overflow-style': 'none', // IE, Edge
    'scrollbar-width': 'none', // Firefox
  

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
    width:'95px',
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
