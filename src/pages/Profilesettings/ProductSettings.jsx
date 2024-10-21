import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const ProductSettings = () => {
  return (
    <Box 
      sx={{ 
        backgroundColor: '#000', 
        height: '100vh', 
        padding: '20px', 
        color: '#fff' 
      }}
    >
      {/* Title */}
      

      {/* Subtitle */}
      <Typography variant="h6" sx={{ fontSize: '16px', marginBottom: '8px' }}>
        Clikkle settings
      </Typography>

      {/* Description */}
      <Typography variant="body1" sx={{ fontSize: '14px', marginBottom: '20px', color: '#aaa' }}>
        Manage language, time zone, issue watching, and notifications settings for Clikkle Projects.
      </Typography>

      {/* Input Box with Link */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1c1c1c',
          padding: '12px 16px',
          borderRadius: '8px',
          width: '400px',
          border: '1px solid #333',
        }}
      >
        {/* Link with icon */}
        <Link
          href="https://bcgtech.clikkle.com"
          target="_blank"
          underline="none"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            color: '#fff', 
            fontSize: '14px' 
          }}
        >
          {/* Clikkle Logo - Can be replaced with an actual image */}
          <Box sx={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
            <img 
              src="https://via.placeholder.com/20" 
              alt="Clikkle Logo" 
              style={{ width: '20px', height: '20px' }} 
            />
          </Box>
          bcgtech.clikkle.com
        </Link>
        {/* Open in new tab icon */}
        <OpenInNewIcon sx={{ color: '#fff', marginLeft: 'auto' }} />
      </Box>
    </Box>
  );
};

export default ProductSettings;
