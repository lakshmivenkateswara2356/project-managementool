import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Amco from '../../Assets/amico.png';
import Hand from '../../Assets/pana.png';
import Hedi from '../../Assets/hedi.png';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Sample template data with images and labels
const templates = [
  {
    id: 1,
    image: Hedi,
    label: 'Unlimited Users',
  },
  {
    id: 2,
    image: Hand,
    label: 'Advanced Reporting',
  },
  {
    id: 3,
    image: Amco,
    label: 'Priority Support',
  },

  {
    id: 4,
    image: '/path-to-image3.png',
    label: 'Priority Support',
  },
];

const StandardFeatures = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);

  // Handle left arrow click
  const handlePrevious = () => {
    setCurrentTemplate((prev) =>
      prev === 0 ? templates.length - 1 : prev - 1
    );
  };

  // Handle right arrow click
  const handleNext = () => {
    setCurrentTemplate((prev) =>
      prev === templates.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      
        padding: '24px',
        borderRadius: '12px',
        width: '400px', // Customize width
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{ color: '#fff', marginBottom: '56px', textAlign: 'center',fontSize:'15px',marginTop:'-55px', }}
      >
        Standard includes advanced features like:
      </Typography>

      {/* Image and arrows */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Left arrow */}
      

        {/* Image */}
        <Box
          component="img"
          src={templates[currentTemplate].image}
          alt={templates[currentTemplate].label}
          sx={{
            width: '250px',
            height: '250px',
            marginX: '16px',
            marginBottom:'22px'
          }}
        />

        {/* Right arrow */}

        
      </Box>

      

      {/* Label under image */}
      <Typography sx={{ color: '#fff', marginTop: '16px', textAlign: 'center' }}>
        {templates[currentTemplate].label}
      </Typography>

      {/* Dots for navigation */}

      
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
      <IconButton
          onClick={handlePrevious}
          sx={{
            color: '#fff',marginTop:'-9px',
          }}
        >
          <ArrowBackIos  sx={{height:'12px'}}/>
        </IconButton>
        {templates.map((_, index) => (
            
          <Box
            key={index}
            onClick={() => setCurrentTemplate(index)}
            sx={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: currentTemplate === index ? '#0059ff' : 'gray',
              margin: '0 4px',
              cursor: 'pointer',
            }}
          />
        ))}
<IconButton
          onClick={handleNext}
          sx={{
            color: '#fff',marginTop:'-10px',
          }}
        >
         <ArrowForwardIos sx={{height:'12px'}} />
        </IconButton>

      </Box>
    </Box>
  );
};

export default StandardFeatures;
