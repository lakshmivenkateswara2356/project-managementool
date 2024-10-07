import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import slideone from '../Assets/slideeon.svg';
import Navbar from '../components/Navbar';
import slidetwo from '../Assets/slidetwo.png';
import slidethree from '../Assets/slidethree.png';
import slidefour from '../Assets/slidefour.png';

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hasOrganization, setHasOrganization] = useState(false); // Tracks if user has an organization
  const navigate = useNavigate();

  useEffect(() => {
    const userHasOrganization = localStorage.getItem('hasOrganization'); // Example from localStorage
    setHasOrganization(userHasOrganization === 'true');
  }, []);

  const handleGetStarted = () => {
    if (hasOrganization) {
      navigate('/organizationlist');
    } else {
      navigate('/neworganisation');
    }
  };

  const slides = [
    {
      id: 1,
      title: "Smarter Task Management with AI Precision",
      description: "Manage tasks and collaborate in real-time with AI that keeps your projects moving efficiently.",
      image: slideone,
    },
    {
      id: 2,
      title: "AI-Driven Project Planning & Real-Time Tracking",
      description: "Plan smarter and track progress effortlessly with interactive Gantt charts and AI-enhanced Kanban boards.",
      image: slidetwo,
    },
    {
      id: 3,
      title: "Agile Made Easy with Predictive AI Insights",
      description: "Adapt fast with AI-automated workflows and predictive analytics for optimal team performance.",
      image: slidethree,
    },
    {
      id: 4,
      title: "Streamlined Issue & Bug Management",
      description: "Track, resolve, and automate issue management with AI-powered workflows for faster resolutions.",
      image: slidefour,
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const handlePrev = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleSkip = () => {
    setCurrentSlide(slides.length - 1);
  };

  return (
<>

    <Box
      sx={{
        width: "95vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "#f9f9f9",
        '@media(max-width:600px)':{
          
          height:'100vh',
          width:'100vw',
        }
      }}
    >

{currentSlide < slides.length - 1 && (
          <Box
            sx={{
              color: "#007bff",
              cursor: "pointer",
              fontWeight: 'bold',
              fontFamily: 'sans-serif',
              position: 'absolute',
              top: '25px',
              right: '12px',
              '@media (max-width: 600px)': {
                marginTop:'55px',
                marginRight:'27px',
               
              }
            }}
            onClick={handleSkip}
          >
            Skip
          </Box>
        )}
      
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            display: currentSlide === index ? "flex" : "none",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
            width: "80%",
            height: "80%",
            '@media (max-width: 600px)': { // Media queries for mobile view
              width: '100%', // Full width on mobile
              padding: '0 20px', // Padding for better spacing
            }
          }}
        >
          <Box sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: 'column', lg: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            '@media (max-width: 600px)': {
              flexDirection: 'column', // Stack content vertically on mobile
              alignItems: 'center',
            }
          }}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: "space-between",
              maxWidth: '600px',
              textAlign: 'left',
              paddingRight: '5px',
              '@media (max-width: 600px)': {
                textAlign: 'center', // Center text on mobile
                paddingRight: '0',
                width: '100%',
                
                marginTop:'100px',
                
                
              }
            }}>

<Box sx={{display:'none','@media(max-width:600px)':{display:'block',marginBottom:'44px',marginTop:'107px'} }}>
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{ width: "95%", height: "100%", objectFit: 'contain',}}
                />
              )}
            </Box>
             

              <Typography
                sx={{display:'none',"@media(max-width:600px)":{display:'block',fontSize:'24px'} }}
                variant="h4"
                gutterBottom
              >
                {slide.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ display:'none',"@media(max-width:600px)":{colour:'gray',display:'block'}}}
              >
                {slide.description}
              </Typography>
              {index === 3 && (
                <Button
                  variant="contained"
                  sx={{display:'none', "@media(max-width:600px)":{display:'block',height:'47px',marginTop:'22px',} }}
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              )}

              <Typography
                sx={{width:'550px', fontFamily:'sans-serif', fontWeight:'800px', fontSize:'45px', marginLeft:'-80px',"@media(max-width:600px)":{display:'none'} }}
                variant="h4"
                gutterBottom
              >
                {slide.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{ marginBottom: "20px", fontSize: { lg: '19px', xs: '16px' }, color: 'gray', fontFamily: 'sans-serif', marginLeft:'-80px', width: { lg: '430px', xs: '110%' },display:{lg:'block',xs:'none'} }}
              >
                {slide.description}
              </Typography>

            

              {index === 3 && (
                <Button
                  variant="contained"
                  sx={{
                    marginTop: "20px",
                    padding: { lg: "10px 20px", xs: "8px 16px" },
                    width: { lg: "222px", xs: '105%' },
                    height: { lg: "48px", xs: '8%' },
                    fontSize: { lg: '12px', xs: '14px' },
                    fontFamily:'sans-serif',
                    fontWeight:'bold',
                    marginLeft:'-77px',
                    
                    borderRadius:'11px',
                display:{lg:'block',xs:'none'}

                    
                  }}
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              )}















<Box
  sx={{
    display: "flex",
    justifyContent: "flex-start",
    marginTop: '30px',
    
    '@media (max-width: 600px)': {
      justifyContent: 'center', // Center buttons on mobile
      marginTop: '50px',
      display:'none',
      marginRight: '-229px',
    },
  }}
>
  <Button
    variant="text"
    disabled={currentSlide === 0}
    onClick={handlePrev}
    sx={{
      height: '40px',
      width: '40px',
      borderRadius: "50%",
      marginRight: "10px",
      minWidth: "auto",
      marginLeft: '-80px',
      padding: 0,
      borderStyle:'solid',
      borderWidth:'1px',
      
      borderColor:'gray',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      '&:disabled': {
        opacity: 0.5, // Make the arrow icon appear shaded when disabled
      },
      '@media (max-width: 600px)': {
        height: '45px',
        width: '45px',
      },
    }}
  >
    <ArrowBackIosNewIcon 
      sx={{ 
        fontSize: { lg: "27px", xs: "14px" }, 
        color: currentSlide === 0 ? "gray" : "#007bff"  // Change arrow color based on currentSlide
      }} 
    />
  </Button>

  <Button
    variant="text"
    disabled={currentSlide === slides.length - 1}
    onClick={handleNext}
    sx={{
      height: '40px',
      width: '40px',
      borderRadius: "50%",
      minWidth: "auto",
      padding: 0,
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'gray',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      '&:disabled': {
        opacity: 0.5, // Shade the arrow icon when disabled
      },
      '@media (max-width: 600px)': {
        height: '45px',
        width: '45px',
      },
    }}
  >
    <ArrowForwardIosIcon 
      sx={{ 
        fontSize: { lg: "27px", xs: "14px" }, 
        color: currentSlide === slides.length - 1 ? "gray" : "#007bff"  // Change arrow color based on currentSlide
      }} 
    />
  </Button>
</Box>

            </Box>

            <Box sx={{marginRight:'-110px', height: { lg: '480px', xs: '300px' }, marginTop: { xs: '20px', lg: '0' },display:{xs:'none',lg:'block'} }}>
              {slide.image && (
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{ width: "95%", height: "100%", objectFit: 'contain',}}
                />
              )}
            </Box>

          </Box>
        </Box>
      ))}

      {/* Skip and Dots */}
      <Box sx={{
        position: "absolute",
        bottom: "30px",
        width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        padding: "0 30px",
        '@media (max-width: 600px)': {
          padding: '0 20px',marginBottom:'26px',marginLeft:"-3px"
        }
      }}>

        <Box sx={{
          display: "flex",
          justifyContent: "center",
          padding: '12px',
          marginLeft:'33px',
          '@media (max-width: 600px)': {
            marginLeft: '0',
          }
        }}>
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              sx={{
                borderRadius: currentSlide === index ? '15px' : "50%",
                height: "10px",
                width: currentSlide === index ? "36px" : "10px",
                backgroundColor: currentSlide === index ? "#007bff" : "#ccc",
                display: "inline-block",
                margin: "0 5px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            ></Box>
          ))}
        </Box>

       
      </Box>
      

      <Box
  sx={{
   
       display:'none',
    '@media (max-width: 600px)': {
      display: "flex",
      justifyContent: "flex-start",
      marginTop: '30px', // Center buttons on mobile
      marginTop: '50px',
      
      marginRight: '-289px',
    },
  }}
>
  <Button
    variant="text"
    disabled={currentSlide === 0}
    onClick={handlePrev}
    sx={{
      height: '40px',
      width: '40px',
      borderRadius: "50%",
      marginRight: "10px",
      minWidth: "auto",
      marginLeft: '-80px',
      padding: 0,
      borderStyle:'solid',
      borderWidth:'1px',
      
      borderColor:'gray',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      '&:disabled': {
        opacity: 0.5, // Make the arrow icon appear shaded when disabled
      },
      '@media (max-width: 600px)': {
        height: '45px',
        width: '45px',
      },
    }}
  >
    <ArrowBackIosNewIcon 
      sx={{ 
        fontSize: { lg: "27px", xs: "14px" }, 
        color: currentSlide === 0 ? "gray" : "#007bff"  // Change arrow color based on currentSlide
      }} 
    />
  </Button>

  <Button
    variant="text"
    disabled={currentSlide === slides.length - 1}
    onClick={handleNext}
    sx={{
      height: '40px',
      width: '40px',
      borderRadius: "50%",
      minWidth: "auto",
      padding: 0,
      borderStyle:'solid',
      borderWidth:'1px',
      borderColor:'gray',
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      '&:disabled': {
        opacity: 0.5, // Shade the arrow icon when disabled
      },
      '@media (max-width: 600px)': {
        height: '45px',
        width: '45px',
      },
    }}
  >
    <ArrowForwardIosIcon 
      sx={{ 
        fontSize: { lg: "27px", xs: "14px" }, 
        color: currentSlide === slides.length - 1 ? "gray" : "#007bff"  // Change arrow color based on currentSlide
      }} 
    />
  </Button>
</Box>
    </Box>


    </>
  );
};

export default SliderComponent;
