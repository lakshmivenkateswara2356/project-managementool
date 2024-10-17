import React from 'react';
import { Box, Typography, FormControl, Select, MenuItem, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';

const LinkPreferences = () => {
  return (
    <Box
      sx={{
        // Dark background
        color: '#fff',            // White text
        height:'100vh',       // Full height for the view
        padding: '20px',          // Outer padding
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '500px',         // Container width
          padding: '30px',        // Inner padding
          borderRadius: '8px',    // Rounded corners
         // Slightly lighter background
        }}
      >
        {/* Title */}
       
        <Typography variant="body2" sx={{ marginBottom: '30px', color: '#bbb',marginLeft:'-500px',marginTop:'-203px' }}>
          Choose how to display new links you create in Clikkle products.
        </Typography>

        {/* Display Options List */}
        <Typography variant="h6" sx={{ marginBottom: '10px',marginLeft:'-500px' }}>
          Display options
        </Typography>
        <List sx={{ marginBottom: '40px',marginLeft:'-500px' }}>
          <ListItem disableGutters>
            <ListItemIcon>
              <LinkIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText
              primary="URL"
              secondary="Display the full URL 'www.example.com'"
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: '#bbb' }}
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemIcon>
              <TextFieldsIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText
              primary="Inline"
              secondary="Display the title of the link as inline text"
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: '#bbb' }}
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemIcon>
              <DescriptionIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText
              primary="Card"
              secondary="Display a summary of the link or a snippet of content"
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: '#bbb' }}
            />
          </ListItem>

          <ListItem disableGutters>
            <ListItemIcon>
              <ImageIcon sx={{ color: '#fff' }} />
            </ListItemIcon>
            <ListItemText
              primary="Embed"
              secondary="Display an interactive preview of the link"
              primaryTypographyProps={{ fontWeight: 'bold' }}
              secondaryTypographyProps={{ color: '#bbb' }}
            />
          </ListItem>
        </List>

        {/* Default Display Section */}
        <Typography variant="h6" sx={{ marginBottom: '10px' ,marginLeft:'-500px'}}>
          Default display
        </Typography>

        <FormControl fullWidth>
          <Select defaultValue="inline" sx={{ backgroundColor: '#222', color: '#fff' ,marginLeft:'-500px'}}>
            <MenuItem value="url">Display URL</MenuItem>
            <MenuItem value="inline">Display Inline</MenuItem>
            <MenuItem value="card">Display Card</MenuItem>
            <MenuItem value="embed">Display Embed</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LinkPreferences;
