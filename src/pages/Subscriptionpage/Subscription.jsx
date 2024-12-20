import React , { useState } from 'react';
import {  Avatar,   Box,
    TextField,
    Typography,
    Button,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    InputLabel,
    FormControl,
    Tooltip,
    IconButton,} from '@mui/material';
import creditcardone from '../../Assets/Page-1.png';
import creditcardtwo from '../../Assets/visa.png';
import Billingadress from '../../pages/Subscriptionpage/BillingAddress';
import creditthree from '../../Assets/american-express.png';
import Yogesh from '../../Assets/YOGESH SINGH.jpg';
import brandicon from '../../Assets/clikkleproj.png';
import AddIcon from '@mui/icons-material/Add';
import Themeentire from '../../style/theme'


import InfoIcon from '@mui/icons-material/Info';

const Subscription= () => {
  // State to manage the visibility of the optional field
  const [showTaxID, setShowTaxID] = useState(false);

  // Toggle function for the plus icon
  const toggleTaxID = () => setShowTaxID((prev) => !prev);


    const [formData, setFormData] = useState({
        companyName: '',
        country: '',
        city: '',
        address1: '',
        address2: '',
        state: '',
        taxID: '',
        isSameAsBilling: false,
      });
    
      const [isFormValid, setIsFormValid] = useState(false);
    
      // Handle input changes and form validation
      const handleChange = (e) => {
        const { name, value, checked, type } = e.target;
        const updatedValue = type === 'checkbox' ? checked : value;
        setFormData((prev) => ({ ...prev, [name]: updatedValue }));
    
        // Validate form - Check if all required fields are filled
        const { companyName, country, city, address1, state } = formData;
        const isValid =
          companyName && country && city && address1 && state && updatedValue;
        setIsFormValid(isValid);
      };
    
  return (
    <Themeentire>
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        
      
      }}
    >
      {/* Header Section */}
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        bgcolor: '#1f1f1f',
        position: 'sticky', // Make the header sticky
        top: 0, // Stick to the top of the viewport
        zIndex: 1000, // Ensure it stays on top of other content
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Avatar
          src={brandicon}
          alt="Profile"
          sx={{ width: 35, height: 35, marginRight: '12px' }}
        />
        <Typography
          sx={{
            color: 'gray',
            fontSize: '25px',
          }}
          variant="h6"
        >
          Clikkle Technologies
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center',color:'white' }}>
        <Typography variant="body1" sx={{ mr: 1 }}>
          Need help?
        </Typography>

        <Box
          sx={{
            backgroundColor: 'white',
            height: '37px',
            width: '1px',
            marginRight: '14px',
          }}
        ></Box>
        <Avatar
          src={Yogesh}
          alt="Profile"
          sx={{ width: 35, height: 35 }}
        />
      </Box>
    </Box>

      {/* Main Content */}
      <Box  container
      sx={{
       
        display: 'flex',
        justifyContent: 'space-between',
        p: 4,
        minHeight: '100vh',
         // Set background color to black to match design
         // White text for contrast
      }}
    >
      {/* Left Section */}
      <Box container  sx={{
    width: '60%',
  
    height: '100vh',
    overflow: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none', // Hides scrollbar for Webkit browsers (Chrome, Safari)
    },
    '-ms-overflow-style': 'none', // Hides scrollbar for Internet Explorer and Edge
    'scrollbar-width': 'none', // Hides scrollbar for Firefox
  }}>
  {/* Secure Checkout Title */}
  <Typography variant="h5" gutterBottom sx={{  mb: 2,fontSize:'16px',fontFamily:'sans-serif',color:'gray', }}>
     Secure Checkout
  </Typography>

  {/* Subscription Details Section */}
  <Typography variant="h4" gutterBottom sx={{ fontFamily:'sans-serif',fontSize:'38px'}}>
  Subscription Details  </Typography>
  <Typography variant="body1" paragraph sx={{ opacity: 0.8, mb: 4,fontSize:'17px',fontFamily:'sans-serif',color:'gray',width:'750px', }}>
  By adding your payment details, you'll ensure uninterrupted access to your team's site once your trial ends.
  </Typography>

  {/* Add Payment Method Title */}
  <Typography variant="h5" gutterBottom sx={{ mb: 1 ,fontFamily:"sans-serif",fontSize:'32px'}}>
  Add Payment Method  </Typography>
  <Typography variant="body2" paragraph sx={{ opacity: 0.8 ,fontFamily:"sans-serif",color:'gray',width:'750px'}}>
  Your payment details are securely encrypted for protection. Clikkle will use this as your default payment method for future transactions on this account. You can update or remove it at any time.
  </Typography>

  {/* Card Logos */}
  <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
    <img
      src={creditcardtwo}
      alt="Visa"
      style={{ borderRadius: '4px',height:'24px', }}
    />
    <img
      src={creditcardone}
      alt="MasterCard"
      style={{ borderRadius: '4px',height:'24px', }}
    />
    <img
      src={creditthree}
      alt="American Express"
      style={{ borderRadius: '4px',height:'24px', }}
    />
  </Box>

  {/* Payment Form */}
  <Box component="form" sx={{ mt: 2 }}>
    {/* Credit Card Number */}
    <Box sx={{display:'flex',}}>
        <Box>
        <Typography sx={{fontFamily:'sans-serif',color:'gray',
            marginBottom:'12px',
        }}>Credit card number</Typography>
   <TextField
  fullWidth
  label="1234  1234  1234  1234"
  variant="outlined"
  sx={{
    width: '420px',
    marginRight: '12px',
    mb: 2,
    color: 'gray',
    '& .MuiInputBase-input': {  }, // Input text color
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', // Border color
    },
    '& .MuiInputLabel-root': { color: 'gray' }, // Label color
    '& .MuiInputLabel-root.Mui-focused': { color: '#fff' }, // Label color when focused
  }}
  inputProps={{ maxLength: 19 }}
/>


</Box>

    {/* Expiration Date and CVV */}
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
  {/* Expiration Date Field */}
  <Box>
    <Typography
      sx={{
        fontFamily: 'sans-serif',
        color: 'gray',
        marginBottom: '8px',
      }}
    >
      Expiration Date
    </Typography>
    <TextField
      fullWidth
      placeholder="MM / YY"
      variant="outlined"
      sx={{
        width: '200px',
       
        '& .MuiInputBase-input': { color: 'gray' },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
      }}
      inputProps={{ maxLength: 5 }}
    />
  </Box>

  {/* CVV Field */}
  <Box>
    <Typography
      sx={{
        fontFamily: 'sans-serif',
        color: 'gray',
        marginBottom: '8px',
      }}
    >
      Security Code (CVV)
    </Typography>
    <TextField
      fullWidth
      placeholder="CVV"
      variant="outlined"
      sx={{
        width: '200px',
       
        '& .MuiInputBase-input': { color: 'gray' },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
      }}
      inputProps={{ maxLength: 3 }}
    />
  </Box>
</Box>

    </Box > 
    {/* Name on Card */}


    <Typography
      sx={{
        marginTop:'22px',
        fontFamily: 'sans-serif',
        color: 'gray',
        marginBottom: '8px',
      }}
    >
      Name on card
    </Typography>
    <TextField
  fullWidth
  label=""
  variant="outlined"
  sx={{
    width:'97%',
     // Add a visible background color
    borderRadius: '8px', // Optional: Adds some rounding to match design aesthetics
    '& .MuiInputBase-input': { 
      color: 'gray', 
      padding: '12px', // Optional: Adjusts padding for a cleaner look
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'gray', // Optional: Highlight border on hover
    },
    '& .MuiInputLabel-root': {
      color: 'gray', // Label color
    },
  }}
/>

  </Box>

  <Box sx={{ maxWidth: '600px', marginLeft: '-30px', padding: 4 }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold' ,textAlign:'left',}}>
        Billing Address
      </Typography>

      {/* Company Name */}


      <Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Company Name*</Typography>
      <TextField
  fullWidth
  label=""
  name="companyName"
  variant="outlined"
  onChange={handleChange}
  sx={{
    height:'44px',
    width:'150%',
    marginLeft:'10px',
    mb: 2,
    '& .MuiInputBase-root': { 
      color: 'gray', // Input text color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // Gradient on focus
      },
    },
    '& .MuiInputLabel-root': {
      color: 'gray', // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'gray', // Label color on focus
    },
  }}
/>


      {/* Country Select */}
      <Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Country*</Typography>

      <FormControl 
  fullWidth 
  sx={{ 
    width:'150%',
    marginLeft:'10px',
    mb: 2, 
    '& .MuiInputLabel-root': {
      color: 'gray', // Label color (default)
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'gray', // Label color on focus
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Hover border color
      },
      '&.Mui-focused fieldset': {
        borderImageSource: 'gray', // Gradient on focus
        borderImageSlice: 1,
      },
    },
  }}
>
  <InputLabel>Country</InputLabel>
  <Select
    name="country"
    value={formData.country}
    onChange={handleChange}
    sx={{ 
      color: 'gray', // Selected value color
    }}
  >
    <MenuItem value="India">India</MenuItem>
    <MenuItem value="USA">USA</MenuItem>
    <MenuItem value="Canada">Canada</MenuItem>
  </Select>
</FormControl>


      {/* City */}
      <Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>City*</Typography>

      <TextField
  fullWidth
  label=""
  name="city"
  variant="outlined"
  sx={{
    width:'150%',
    marginLeft:'10px',
    mb: 2,
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)', // Default label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'gray', // Focused label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Border on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // Border on focus
      },
    },
    '& .MuiInputBase-input': {
      color: 'gray', // Input text color
    },
  }}
  onChange={handleChange}
/>

<Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Address*</Typography>

<TextField
  fullWidth
  label=""
  name="address1"
  variant="outlined"
  sx={{
    width:'150%',
    marginLeft:'10px',
    mb: 2,
    '& .MuiInputLabel-root': {
      color: 'gray', // Label color
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'gray', // Focused label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Hover border color
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // Focused border color
      },
    },
  }}
  onChange={handleChange}
/>


<Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Address*</Typography>

<TextField
  fullWidth
  label="Add building number, suite, floor, etc."
  name="address2"
  variant="outlined"
  sx={{ 
    width:'150%',
    marginLeft:'10px',
    mb: 2, // Adds margin at the bottom
    '& .MuiInputLabel-root': { 
      color: 'rgray', // Slightly brighter label for better visibility
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Brighter border on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // Solid white on focus
      },
    },
    '& .MuiInputBase-input': {
      color: 'gray', // Input text color for good visibility
    },
  }}
  onChange={handleChange}
/>


<Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
    <Box >
<Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Address*</Typography>

<TextField
  fullWidth
  label=""
  name="address1"
  variant="outlined"
  onChange={handleChange}
  sx={{
    marginLeft:'7px',
    width:'380px',
    '& .MuiInputLabel-root': { 
      color: 'gray',  // Label color
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'gray', // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'gray', // Hover border color
      },
      '&.Mui-focused fieldset': {
        borderColor: 'gray', // Focused border color
      },
    },
    '& .MuiInputBase-input': {
      color: 'gray', // Text input color
    },
  }}
/>

</Box>

  <FormControl fullWidth>
  <Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>State*</Typography>

    
    <Select
      name="state"
      value={formData.state}
      onChange={handleChange}
      sx={{
        width:'420px',
        color: 'gray', // Selected text color
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'gray',
        },
      }}
    >
      <MenuItem value="State1">State 1</MenuItem>
      <MenuItem value="State2">State 2</MenuItem>
    </Select>
  </FormControl>
</Box>
<Typography sx={{marginBottom:'12px',marginLeft:'15px',fontFamily:'sans-serif',color:'gray',fontSize:'13px'}}>Company Name*</Typography>

<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      {/* Plus icon to toggle field visibility */}
      <IconButton onClick={toggleTaxID}>
        <AddIcon sx={{ color: 'gray' }} />
      </IconButton>
      <Typography sx={{ color: 'gray' }}>
        {showTaxID ? 'Hide Optional Tax ID' : 'Add Optional Tax ID'}
      </Typography>

      {/* Tax ID input field, visible only when state is true */}
      {showTaxID && (
        <TextField
          fullWidth
          label="Add Tax ID (Optional)"
          name="taxID"
          variant="outlined"
          sx={{
            width: '150%',
            marginLeft: '10px',
            mb: 2,
            '& .MuiInputLabel-root': { color: 'gray' },
            '& .MuiInputLabel-root.Mui-focused': { color: 'gray' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'gray' },
              '&:hover fieldset': { borderColor: 'gray' },
              '&.Mui-focused fieldset': { borderColor: 'gray' },
            },
            '& .MuiInputBase-input': { color: 'gray' },
          }}
          onChange={handleChange}
        />
      )}
    </Box>

<FormControlLabel
  control={
    <Checkbox
      name="isSameAsBilling"
      checked={formData.isSameAsBilling}
      onChange={handleChange}
      sx={{ color: 'gray' }}
    />
  }
  label="Sold-to address (used for tax) is same as billing address"
  sx={{ color: 'gray' }} // Label color
/>

      {/* Tooltip and Next Button */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 3 }}>
  <Button
    variant="contained"
   
    sx={{
      
      backgroundColor: isFormValid ? '#1a73e8' : '#555', // Blue when valid, gray when not
      color: isFormValid ? 'gray' : '#ccc', // Adjust text color accordingly
      '&:hover': {
        backgroundColor: isFormValid ? '#1558b3' : '#555', // Darker blue on hover if valid
      },
      transition: 'background-color 0.3s ease', // Smooth transition effect
    }}
  >
    Next
  </Button>

  <Tooltip title="When all the fields are filled, this button will be active.">
    <IconButton>
      <InfoIcon />
    </IconButton>
  </Tooltip>
</Box>

    </Box>
    <Billingadress/>
</Box>


      {/* Subscription Summary */}
      <Box
  sx={{
    width: '35%',
   
    p: 4,
    height:'100%',
    borderRadius:'8px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
     borderImage: 'linear-gradient(180deg, #3767B1 0%, #6A0B61 100%) 1',
    display: 'flex',
    borderStyle:'solid',
    borderWidth:'2px',
    flexDirection: 'column',
    gap: 2, // Add space between elements
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.3)', // Subtle shadow for better visual depth
  }}
>
  <Typography variant="h6" gutterBottom sx={{ fontFamily:'sans-serif',fontSize:'27px',marginTop:'-8px',color:'gray' }}>
    Subscription Summary
  </Typography>
<Box  sx={{borderTop: '1px solid rgba(255, 255, 255, 0.2)',}}></Box>
  <Box
    sx={{

        
        backgroundColor: 'rgba(26, 115, 232, 0.13)', /* 13% opacity */

      color: '#407BFF',
      height:'27px',
      
      borderRadius: 1,
      textAlign: 'left',
     width
     :'150px',
     
    }}
  >
    <Typography sx={{padding:'5px', fontSize: '12px',
      fontFamily:'sans-serif',}}>
    14 DAYS LEFT IN TRIAL</Typography>
  </Box>

  {/* Subscription Details Section */}
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

    <Avatar
            src={brandicon}
            alt="Profile"
            sx={{ width: 25, height: 25 ,marginRight:'-232px'}}
          />
      <Typography sx={{ color: 'gray', opacity: 0.8,fontFamily:'sans-serif' }}>Standard</Typography>
      <Typography sx={{ fontWeight: 'bold', color: 'gray',fontFamily:'sans-serif', }}>USD 40.00</Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{ color: '#fff', opacity: 0.8,fontFamily:'sans-serif',fontSize:'12px',marginTop:'12px' }}>Site</Typography>
      <Typography sx={{ fontWeight: 'bold', color: 'gray',fontFamily:'sans-serif',fontSize:'12px' ,marginTop:'12px' }}>
        bcgtech.clikkle.com
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{  opacity: 0.8,color: 'gray',fontFamily:'sans-serif',fontSize:'12px' , }}>
        User Seats (USD 8 each)
      </Typography>
      <Typography sx={{ fontWeight: 'bold',color: 'gray',fontFamily:'sans-serif',fontSize:'12px' , }}>5</Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{  opacity: 0.8,color: 'gray',fontFamily:'sans-serif',fontSize:'12px' , }}>Billing Cycle</Typography>
      <Typography sx={{ fontWeight: 'bold',color: 'gray',fontFamily:'sans-serif',fontSize:'12px' , }}>
        Monthly (auto-renew)
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography sx={{  opacity: 0.8 ,color: 'gray',fontFamily:'sans-serif',fontSize:'12px' ,}}>Billing Starts On</Typography>
      <Typography sx={{ fontWeight: 'bold',color: 'gray',fontFamily:'sans-serif',fontSize:'12px' , }}>
        Oct 22, 2024
      </Typography>
    </Box>
  </Box>

  {/* Monthly Total Section */}
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(255, 255, 255, 0.2)',
      pt: 2,
      mt: 2,
    }}
  >
    <Typography variant="h6" sx={{ color: 'gray', fontFamily:'sans-serif',fontSize:'25px' }}>
      Monthly Total
    </Typography>
    <Typography variant="h6" sx={{ color: 'gray', fontFamily:'sans-serif',fontSize:'25px'  }}>
      USD 40.00
    </Typography>
  </Box>

  <Typography
    variant="body2"
    sx={{ color: 'gray', mt: 1,textAlign:'right',marginTop:'-26px' }}
  >
    (excluding tax)
  </Typography>

  <Typography
    variant="body2"
    sx={{ color: 'gray', mt: 1 ,textAlign:'center',marginTop:'45px',fontFamily:'sans-serif',marginBottom:'14px'}}
  >
    You won’t be charged until Oct 22, 2024.
  </Typography>
</Box>

    </Box>
    </Box>
    </Themeentire>
  );
};

export default Subscription;
