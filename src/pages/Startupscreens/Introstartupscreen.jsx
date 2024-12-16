import React from 'react';
import { Box, Typography, Button, Divider, IconButton, Avatar,Grid } from '@mui/material';
import { Link } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Image from "../../components/Image";
import CardImtens from "../../pages/Startupscreens/StartupIssueCards";
import Introimage from "../../Assets/profileimages/amico.png";


import FullscreenIcon from '@mui/icons-material/Fullscreen';

const Introstartupscreen = () => {
  const styles = {
    container: {
     
      padding: '20px',
    },
    introduction: {
      backgroundColor: '#2C2C2E',
      borderRadius: '8px',
      padding: '20px',
      marginTop:"35px",
      textAlign:"center",
      marginBottom: '20px',
    },
    title: {
      fontWeight: 'bold',
      textAlign:"center",
      alignItems:"center",
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
    },
    subtitle: {
      color: '#A0A0A0',
    },
    link: {
      color: '#3767B1',
      textDecoration: 'none',
      cursor: 'pointer',
    },
    card: {
      backgroundColor: '#2C2C2E',
      borderRadius: '8px',
      padding: '20px',
      textAlign: 'center',
      color: '#FFFFFF',
      position: 'relative',
    },
    noDataText: {
      marginTop: '10px',
      color: '#A0A0A0',
    },
    iconButton: {
      color: '#A0A0A0',
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
    sectionTitle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    issueIcon: {
      width: '50px',
      height: '50px',
      marginBottom: '10px',
      backgroundColor: '#3767B1',
      borderRadius: '8px',
    },
  };

  return (
    <Box sx={styles.container}>

<Grid sx={{marginTop:'-13px'}} container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='gray'>
                        Dashboard
                    </Typography>
                </Grid>
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                    <IconButton  >
                        
                        <AddIcon sx={{marginTop:'-12px',color:"#3767B1"}} className='iconsize'/>
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
      {/* Introduction Section */}
      <Box sx={{ ...styles.introduction, padding: '20px', backgroundColor: '#1E1E1E', borderRadius: '8px' }}>
  {/* Title */}
  <Typography variant="h6" sx={{ color: 'white', marginBottom: 2,textAlign:"left",fontWeight:"none",fontSize:"15px",marginTop:"-8px" }}>Introduction</Typography>

  {/* Main Content Area */}
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', backgroundColor: '#1E1E1E', borderRadius: '8px' }}>
  {/* Left Side Image */}
  <Box sx={{ flexShrink: 0, marginRight: 2 }}>
    <Image src={Introimage} alt="Introimage" style={{ width: '120px', height: 'auto',marginTop:"-36px" }} />
  </Box>

  {/* Centered Welcome Text */}
  <Box sx={{ textAlign: 'center',marginTop:"-36px" }}>
    <Typography variant="h5" sx={{ color: 'white', fontWeight: 'bold',textAlign:"left",fontSize:"21px" }}>
      Welcome to Clikkle Projects, <span style={{ color: '#3767B1' }}>Rohit!</span>
    </Typography>
    <Typography variant="body2" sx={{  marginTop: 1,fontSize:"12px" }}>
      We're excited to have you here. Start with our <Link sx={styles.link}>Projects 101 guide</Link> or <Link sx={styles.link}>training course</Link> to dive right in.
    </Typography>
    <Typography variant="body2" sx={{  marginTop:"10px",fontSize:"12px" ,textAlign:"left",width:'400px' }}>
      And remember, you can <Link sx={styles.link}>customize this space</Link> anytime in Administration. Welcome aboard!
    </Typography>
  </Box>

  {/* Right Side Icon Button */}
  <Box sx={{ marginLeft: 2 }}>
    <IconButton sx={styles.iconButton}><InfoIcon /></IconButton>
  </Box>
</Box>

</Box>


      {/* Project Status Cards */}
      <Box sx={{ display: 'grid', gap: '20px', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' } }}>
      <CardImtens/>
      </Box>
    </Box>
  );
};

export default Introstartupscreen;
