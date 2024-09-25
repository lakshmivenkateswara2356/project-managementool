import { Box, IconButton, Typography, Stack, Avatar, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, MenuItem, List, ListItem, ListItemText } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GroupIcon from '@mui/icons-material/Group';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React, { useState } from 'react';
import Navbar from '../components/Navbar'
import clikklereport from '../Assets/clikklerepair.png'
import Card from '@mui/material/Card';
import Scrum from '../Assets/scrum.png'
import CardContent from '@mui/material/CardContent';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // For navigation arrow


import image from './dahboardimg.png';
import ActionIcon from '../components/ActionIcon';
import Icon from '../components/Icon';


import './Home.css'
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


const Home = () => {
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

    return (
       <div >
        
        <Navbar/>
        
        <div className='dashboardarrange'>
        <Box

            p={2}
            sx={{
                backgroundColor: '#f7f9fc', // Black background
                height: '100vh',
                color: '#000000',
            }}
        >
            
            {/* Sidebar */}
            <Box className="sidebarrespo"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '250px',
                    height: '100vh',
                    color: '#1a1a1a',
                    backgroundColor: '#f7f9fc',
                    padding: '20px',
                }}
            >
                <Typography variant="h6" color="text.primary" sx={{ color: '#1a1a1a' }}>
                    Clikkle Project
                </Typography>


                <Stack mt={2} spacing={2}>
                    <div className='alighite'>
                    <img src={clikklereport} alt="clikklerep" className='cikklerepair'/>
                    <h1 className='clikkletechnologies'>Clikkle Technologies</h1>
                    
                    </div>
                    <Box display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Dashboard' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Dashboard' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Dashboard')}
                            >
                        <HomeIcon sx={{  marginRight: 1 }} />
                        <Typography variant="body1" >
                            Dashboard
                        </Typography>
                    </Box>
                    <Box display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Projects' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Projects' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Projects')}>
                        <AssignmentIcon sx={{ color: '#666665', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#666665' }}>
                            Projects
                        </Typography>
                    </Box>
                    <Box   display="flex"
                alignItems="center"
                sx={{
                    backgroundColor: activeButton === 'Your Work' ? '#3b84d9' : 'transparent',
                    color: activeButton === 'Your Work' ? '#fff' : '#666665',
                    borderRadius: '5px',
                    padding: '10px',
                    cursor: 'pointer',
                    '&:hover': { backgroundColor: '#3b84d9', color: '#fff' },
                }}
                onClick={() => handleButtonClick('Your Work')}>
                        
                        <AccountBalanceWalletIcon sx={{ color: '#666665', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#666665' }}>
                            Your Work
                        </Typography>
                    </Box>
                    <div className='dividingline'></div>
                    <p1 className="yourworj">Your work</p1>
                    <Box display="flex" alignItems="center">
                        <GroupIcon sx={{ color: '#666665', marginRight: 1 }} />
                        <Typography variant="body1" sx={{ color: '#666665' }}>
                            Team
                        </Typography>
                    </Box>

                    
                </Stack>
                <IconButton sx={{ color: '#fff' }}>
                           
                          
                        </IconButton>
                        <IconButton sx={{ color: '#fff' }}>
                            <MoreVertIcon />
                        </IconButton>
                    

                <Box sx={{ position: 'absolute', bottom: 20, width: '100%' }}>
                <div className='sectionseperation'></div>
                    <Typography className='marginbottom' variant="body2" sx={{ color: '#000000' }}>
                        Storage
                    </Typography>
                    <div className='storagetracj'></div>
                    <Typography variant="caption" sx={{ color: '#3d83d5' }}>
                        1 GB used of 5 GB
                    </Typography>
                    <button className='buttonelement'>Upgrade Storege</button>
                    <div>
                    <a className='anchoreele' href="/Feedback.jsx">Give feedback</a>
                    <Feedback/>
            </div>
                </Box>
                
            </Box>
            

            {/* Main content area */}
            <Box  className="responsive"
               sx={{
                backgroundColor:'background.default',
               }}
               
            >
               
<div className='flexingitems'>
    
    <h1 className='normal'>Dashboard</h1>

    <Box className="dashboardele" sx={{ display: 'flex',direction: 'row',  alignItems: 'start',mr: '5px' }}>
                        <IconButton onClick={handleClickOpen} sx={{ color: '#000000' }}>
                        <AddIcon className='iconsizee'/>
                        <button className='buttonelementee'>  <AddIcon className='iconsize'/>Create new Project</button>
                        </IconButton>
                        <IconButton sx={{ color: '#000000' }}>
                            <MoreVertIcon />
                        </IconButton>
                        
                    </Box>
                    
                    <Dialog className='dialogboxopening' open={openDialog} onClose={handleClose} maxWidth="l" fullWidth>
  <DialogTitle>
    <Typography variant="h5" sx={{ color: '#1a1a1a', fontWeight: 'bold', textAlign: 'center' }}>
      Software development
    </Typography>
    <Typography variant="subtitle1" sx={{ textAlign: 'center', color: '#666665', fontSize: '1rem', marginTop: '8px' }}>
      Organize, track, and launch great software. Quickly get started with templates that fit your team's style of work.
    </Typography>
  </DialogTitle>

  <DialogContent sx={{ display: 'flex', padding: '20px' }}>
    {/* Left side: List of templates */}
    <Box sx={{ width: '20%', borderRight: '1px solid #ccc', paddingRight: '16px' }}>
      <Typography variant="h6" sx={{ marginBottom: '16px', fontWeight: 'bold' }}>Project templates</Typography>
      <List>
        {projectTemplates.map((template) => (
          <ListItem 
            button 
            key={template.title} 
            onClick={() => handleTemplateSelect(template)} 
            sx={{
              padding: '10px', 
              borderRadius: '8px', 
              backgroundColor: selectedTemplate === template.title ? '#3767b1' : 'transparent',
              transition: 'background-color 0.2s ease-in-out',
              '&:hover': {
                backgroundColor: '#3767b1',
                color:'white',
              },
            }}
          >
            <ListItemText primary={template.title} />
          </ListItem>
        ))}
      </List>
    
    </Box>

    {/* Right side: Display information */}
    <Box className="assaigning" sx={{ width: '80%', overflow:'scroll', paddingLeft: '24px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      {selectedTemplate ? (
        <>
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a1a1a' }}>{selectedTemplate}</Typography>
          {selectedTemplate === 'Software Development' && (
            <Box sx={{ display: 'flex', flexDirection:'column', gap: '20px', marginTop: '16px' }}>
              {/* Card for Kanban */}
              <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Kanban</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

              {/* Card for Scrum */}
              <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

              {/* Card for Top-Level Planning */}
              <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

 {/* Card for Top-Level Planning */}
 <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

               {/* Card for Top-Level Planning */}
               <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

               {/* Card for Top-Level Planning */}
               <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

               {/* Card for Top-Level Planning */}
               <Card sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#fff', borderRadius: '12px', padding: '16px', color: 'black', height: '160px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', width: '100%' }}>
      
      {/* Image Section */}
      <Box sx={{ width: '110px', height: '60px', marginRight: '86px',marginLeft:'-40px',marginTop:'-95px' }}>
        <img src={Scrum} alt="Scrum" style={{ width: '230px', height: '150px', borderRadius: '8px' }} />
      </Box>

      {/* Text Content */}
      <CardContent sx={{ flex: '1', padding: '0' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '4px' }}>Scrum</Typography>
        <Typography variant="body2" sx={{ color: 'black', marginBottom: '8px' }}>Clikkle Projects</Typography>
        <Typography variant="body2" sx={{ color: 'black' }}>
          An agile framework for delivering projects incrementally.
        </Typography>
      </CardContent>

      {/* Navigation Arrow */}
      <IconButton sx={{ color: 'black' }} onClick={() => console.log('Navigate to Scrum details')}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Card>

              
              
            </Box>
          )}

          <Typography variant="body1" sx={{ marginTop: '16px', color: '#666665' }}>
            {templateInfo}
          </Typography>
        </>
      ) : (
        <Typography variant="body1" sx={{ color: '#666665' }}>
          Select a project template to see details.
        </Typography>
      )}
    </Box>
  </DialogContent>

  <DialogActions sx={{ justifyContent: 'center', paddingBottom: '16px' }}>
    <Button onClick={handleClose} variant="contained" sx={{ backgroundColor: '#d3d3d3', color: '#000', marginRight: '8px' }}>
      Cancel
    </Button>
    <Button onClick={handleClose} variant="contained" color="primary" disabled={!selectedTemplate}>
      Create Project
    </Button>
  </DialogActions>
</Dialog>


</div>




                <Box
                    sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Typography className='dashboardalignment' variant="h5" color="text.primary" sx={{ color: '#bbb', marginRight: 2,backgroundColor:'background.default' }}>
                        Dashboard
                    </Typography>
                    
                    <IconButton onClick={handleClickOpen}>
                        <AddIcon sx={{ color: '#0000FF' }} />
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon sx={{ color: '#fff' }} />
                    </IconButton>
                </Box>
                <h1 className='margintoplev'></h1>
                {/* Center content */}
                
                <Box className="dahresponsi"  textAlign="center"
                sx={{
                    backgroundColor:'background.default'
                }}>
                    <Avatar
                        alt="No activity"
                        className='imagedashboard'
                        src={image}
                        sx={{ width: 150, height: 150, marginBottom: 2 }}
                    />
                    
                    <Typography className='correctiong' variant="h5" sx={{ backgroundColor:'background.default',color: '#bbb' }}>
                    No current activity!
                    </Typography>
                    <Typography className='projectpara' variant="body2" color="text.secondary" sx={{textAlign:'center', color: '#bbb' }}>
                        When you create projects or projects are assigned to you, all progress
                        updates will be seen here.
                    </Typography>
                </Box>
            </Box>
            
            {/* Right toolbar */}
            <Box className="righttoolbarres"
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    width: '60px',
                    height: '100vh',
                    backgroundColor: 'background.default',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    paddingTop: '10px',
                }}
            >
               
                <IconButton>
                    <InfoIcon sx={{ color: '#fff' }} />
                </IconButton>
                <Icon/>
            </Box>
            
            {/* Dialog for adding new item */}
            
        </Box>
        

        </div>
       </div>
       
    );
};

export default Home;
