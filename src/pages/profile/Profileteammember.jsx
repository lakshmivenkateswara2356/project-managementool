import React from 'react';
import { Box, Typography, Button, Avatar,  Link } from '@mui/material';
import Clikklebrand from '../../Assets/clikkleprobrand.png';
import tickicon from '../../Assets/tick.png';
import bader from '../../Assets/profileimages/Group 1032.png';
import Image from '../../components/Image';
import accountone from '../../Assets/profileimages/Group (5).png';
import accounttwo from '../../Assets/profileimages/Group (6).png';
import accountthr from '../../Assets/profileimages/Group (7).png';
import Rashid from '../../Assets/RASHID AHMED.jpg';
import duckemoj from '../../Assets/profileimages/Group 761 (1).png';
import Robo from '../../Assets/profileimages/Group 760 (1).png';

import Groupimage from '../../Assets/profileimages/Group 764 (1).png';
import Yogesh from '../../Assets/YOGESH SINGH.jpg';
import Amena  from '../../Assets/Ellipse 68.png';


const Profileteammember = () => {


    const collaborators = [
        { name: 'Yogesh Singh', title: 'Development Manager', avatar: Yogesh },
        { name: 'Amina Kumar', avatar: Amena  },
       
      ];
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', minHeight: '70vh' }}>
      {/* Header Section */}
      <Box sx={{  alignItems: 'center', backgroundColor: '#6EBEDA',  borderRadius: '10px 10px 0 0',height:'95px', }}>

      </Box>
        <Avatar src={Rashid} alt="Rohit Anderson" sx={{ width: 100, height: 100,marginTop:'-53px',marginLeft:'59px' ,borderStyle:'solid',borderWidth:'1px',borderColor:'white',}} />
        <Typography variant="h4" sx={{ fontFamily:'sans-serif',fontSize:'20px',fontWeight:'bold',marginLeft:'32px',marginTop:'12px',marginBottom:"33px" }}>
        Rashid Ahmed
        </Typography>
     <Box sx={{display:'flex',}}>
<Box sx={{width:'25vw',alignItems:'center'}}>
      {/* Manage Account Button */}
      
         <Box sx={{backgroundColor:'background.default',width:'25vw',alignItems:'center',paddingTop:'22px',borderRadius:'8px',marginLeft:'22px'}}>
      {/* About Section */}
      <Box sx={{ padding: '0 20px' }}>
        <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '10px',fontFamily:'sans-serif',fontSize:'17px',color
            :'#A5A5A5'
         }}>
          About
        </Typography>
        <Typography sx={{fontSize:'16px',color:'gray',fontFamily:"sans-serif",}}><Image src={accountone} sx={{height:"15px",marginRight:"12px"}} />05:40pm (GMT + 05:30)</Typography>
      </Box>

      {/* Contact Section */}
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: '600', marginBottom: '10px' ,fontFamily:'sans-serif',fontSize:'18px',color:'#A5A5A5'}}>
          Contact
        </Typography>
        <Typography  sx={{fontSize:'16px',color:'gray',fontFamily:"sans-serif",marginTop:'22px'}}><Image src= {accounttwo} sx={{height:"15px",marginRight:"12px"}}/>rashidahmed@clikkle.com</Typography>
      </Box>

      {/* Teams Section */}
      <Box sx={{ padding: '20px' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px',fontFamily:'sans-serif',fontSize:'18px',color:'#A5A5A5',marginTop:'-12px' }}>
          Teams
        </Typography>
        <Button variant="text" sx={{ color: '#fff' }}>
        <Image src= {accountthr} sx={{height:"15px",marginRight:"10px"}}/> <Typography sx={{fontSize:'16px',color:'gray',fontFamily:"sans-serif"}}> Create a team</Typography>
        </Button>
      </Box>
      </Box>
      </Box>
      

      {/* Worked On Section */}
      <Box sx={{ padding: '20px',width:'50vw',marginLeft:'22px',marginTop:'-55px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ fontFamily:'sans-serif',fontSize:'18px',color:'gray',fontWeight:'600',marginTop:'-55px', }}>
            Worked On
          </Typography>
          <Link href="#" sx={{ color: '#3767B1', textDecoration: 'none',marginTop:'-55px', }}>
            View all
          </Link>
        </Box>

        {/* Task Items */}
        <Box sx={{backgroundColor:'background.default',borderRadius:'8px'}}>
        <Box sx={{ paddingLeft: '20px',paddingTop:'25px', borderRadius: '10px', marginBottom: '10px' }}>
<Box sx={{display:'flex'}}>
<Image src={tickicon} sx={{height:'29px',marginRight:'12px',marginTop:'14px'}}/>

<Box>
          <Typography sx={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '5px',fontSize:'20px',fontFamily:'sans-serif' }}>
           
            Employee section in Clikkle HR Dashboard
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray',fontFamily:'sans-serif' }}>
            Clikkle Projects · You updated this on October 8, 2024
          </Typography>
          </Box>
          </Box>
        </Box>

        <Box sx={{display:'flex'}}>
<Image src={bader} sx={{height:'30px',marginTop:'11px',marginRight:'-8px',marginLeft:'22px'}}/>


        <Box sx={{  paddingLeft: '20px', borderRadius: '10px', marginBottom: '10px' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center',color: 'white', marginBottom: '5px',fontSize:'20px',fontFamily:'sans-serif'}}>
           
            Design UI Project
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray',fontFamily:'sans-serif'  }}>
            Clikkle Projects · You commented here on October 8, 2024
          </Typography>
        </Box>
        </Box>


<Box sx={{display:'flex'}}>
    <Image src={tickicon} sx={{height:'30px',marginTop:'11px',marginRight:'-8px',marginLeft:'22px'}}/>

        <Box sx={{ paddingLeft: '20px', borderRadius: '10px', marginBottom: '10px' }}>
          <Typography sx={{ display: 'flex', alignItems: 'center',color: 'white', marginBottom: '5px',fontSize:'20px',fontFamily:'sans-serif' }}>
           
            Run prototypes
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray',fontFamily:'sans-serif'  }}>
            Clikkle Projects · You and Rashid Ahmed have both worked on this
          </Typography>
        </Box>

        </Box>
<Box sx={{marginBottom:'122px' }}>
        <Link href="#" sx={{  paddingLeft:"20px",color: '#89CFF0', textDecoration: 'none',}}>
          Show more
        </Link>
        </Box>
      </Box>





{/* Places Section */}
<Box sx={{ padding: '20px',marginTop:'-100px',width:'50vw',marginLeft:'-15px'}}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px',fontFamily:"sans-serif",color:"gray" }}>
          Places they work in
        </Typography>
        <Box sx={{  gap: '10px',backgroundColor:'background.default',height:'144px'  }}>
          <Box sx={{  padding: '2px', borderRadius: '10px',paddingTop:'27px' ,paddingLeft:'32px'}}>
            <Image src={Clikklebrand } sx={{height:'20px'}}/>
          </Box>
          <Box sx={{ display:"flex", padding: '10px', borderRadius: '10px' }}>
            <Image src={Groupimage} sx={{marginRight:'12px',height:'42px',marginLeft:'24px'
            }}/>
            <Typography sx={{fontFamily:'sans-serif',fontSize:'25px',marginTop:'2px'}}> Clikkle Projects</Typography>
          </Box>
        </Box>

      
       
      </Box>
      <Box sx={{  gap: '10px',backgroundColor:'background.default',height:'144px'  }}>
          <Box sx={{  padding: '2px', borderRadius: '10px',paddingTop:'27px' ,paddingLeft:'32px'}}>
            <Image src={Clikklebrand } sx={{height:'20px'}}/>
          </Box>
          <Box sx={{ display:"flex", padding: '10px', borderRadius: '10px' }}>
            <Image src={Robo} sx={{marginRight:'12px',height:'42px',marginLeft:'24px'
            }}/>
            <Typography sx={{fontFamily:'sans-serif',fontSize:'25px',marginTop:'2px'}}> Clikkle E-Sign</Typography>
          </Box>
        </Box>

        <Box sx={{  gap: '10px',backgroundColor:'background.default',height:'144px' ,marginTop:'22px' }}>
          <Box sx={{  padding: '2px', borderRadius: '10px',paddingTop:'27px' ,paddingLeft:'32px'}}>
            <Image src={Clikklebrand } sx={{height:'20px'}}/>
          </Box>
          <Box sx={{ display:"flex", padding: '10px', borderRadius: '10px' }}>
            <Image src={duckemoj} sx={{marginRight:'12px',height:'42px',marginLeft:'24px'
            }}/>
            <Typography sx={{fontFamily:'sans-serif',fontSize:'25px',marginTop:'2px'}}> Clikkle HR</Typography>
          </Box>
        </Box>

        <Typography variant="h6" sx={{ fontFamily:'sans-serif',fontSize:'20px',color:'gray',fontWeight:'600',marginTop:'12px' }}>
        Works with
          </Typography>
       <Box sx={{ backgroundColor: '#1a1a1a', borderRadius: '10px', padding: '20px', marginTop: '13px' }}>
      {/* Collaborators Title */}
      <Typography sx={{ color: '#fff', fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>
        Collaborators
      </Typography>
      <Typography sx={{ color: 'gray', marginBottom: '20px' }}>
        Based on their interactions with others inside Clikkle products
      </Typography>

      {/* Collaborators List */}
      <Box sx={{ display: 'flex',flexWrap: 'wrap', gap: '8px' }}>
  {collaborators.map((collaborator, index) => (
    <Box
      key={index}
      sx={{
      display:'flex',
        alignItems: 'center',
        width: '40%', // Ensure two collaborators per row
        marginBottom: '10px',
      }}
    >
      <Avatar
        src={collaborator.avatar}
        alt={collaborator.name}
        sx={{ width: 50, height: 50, marginRight: '10px' }}
      />
      <Box>
        <Typography sx={{ color: '#fff', fontSize: '20px', fontFamily:"sans-serif", }}>
          {collaborator.name}
        </Typography>
        {collaborator.title && (
          <Typography sx={{ color: 'gray', fontSize: '14px' }}>
            {collaborator.title}
          </Typography>
        )}
      </Box>
    </Box>
  ))}
</Box>



    </Box>





      </Box>
      </Box>

      
    </Box>
  );
};

export default Profileteammember;
