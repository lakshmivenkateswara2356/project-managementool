

import React, { useState } from "react";
import { Box, Typography, Table, TableBody,IconButton, Menu, Checkbox,   Dialog, DialogActions, DialogContent, DialogTitle,TableCell,TextField,MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent,LinearProgress, AvatarGroup, Avatar } from '@mui/material';

import AddIcon from "@mui/icons-material/Add";
import Streamlineimg from "../../Assets/streamline-emojis_bird-1 (2).png";
import Image from "../../components/Image";
import InputAdornment from '@mui/material/InputAdornment';
import Rashid from '../../Assets/Ellipse 68.png';
import Yogesh from '../../Assets/Ellipse 47.png';
import Smily from '../../Assets/Ellipse 48.png';
import Thompson from '../../Assets/Ellipse 54.png';
import lastimage from '../../Assets/Ellipse 61.png';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import StandardFeatures from '../../pages/Project/StandardFeatures';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import Addpersons from '../../Assets/addperson.png';



const ProjectHeader =()=> {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleOpenAssigneeDialog = () => setAssigneeDialogOpen(true);
    const handleCloseAssigneeDialog = () => setAssigneeDialogOpen(false);
    const [assigneeDialogOpen, setAssigneeDialogOpen] = useState(false);
    const handleOpenIssueTypeDialog = () => setIssueTypeDialogOpen(true);
    const handleCloseIssueTypeDialog = () => setIssueTypeDialogOpen(false);
    const [issueTypeDialogOpen, setIssueTypeDialogOpen] = useState(false);

    return (
<Box>
<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderRadius: '8px',marginTop:'-35px', }}>
    
    {/* Search Field */}
    <Box sx={{ flexGrow: 1, maxWidth: '450px' }}>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search this board"
        InputProps={{
          style: {
            borderRadius: '4px',
            
            
            height:'38px',
            marginRight:'18px',
          },
        }}
        sx={{
          
          width: '65%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#4D4D4D',
            },
            '&:hover fieldset': {
              borderColor: '#FFFFFF',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FFFFFF',
            },
          },
          input: {
       
          },
        }}
      />
    </Box>

    {/* Avatars Section */}
    <Box sx={{ display: 'flex', gap: 'px', alignItems: 'center', marginLeft: '-209px',marginTop:'-18px', }}>
      {/* Assuming you map avatar images here */}
      {[Rashid, Yogesh, Smily, Thompson, lastimage].map((avatar, index) => (
        <img key={index} src={avatar} alt={`Avatar ${index}`} style={{ width: '39px', height: '35px', borderRadius: '50%', border: '2px solid white' }} />
      ))}
      <Box sx={{ backgroundColor: '#4D4D4D', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        +2
      </Box>

      <IconButton

onClick={handleClickOpen}
      sx={{
       
        backgroundColor: '#171717', // Dark transparent background
        color: 'gray', // Gray icon color
        borderRadius: '50%', // Circular button
        width: '35px',
        height: '35px',
        marginLeft:'12px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', // Darker on hover
        },
      }}
    >
      <Image src={Addpersons}/>
    </IconButton>
    </Box>

    {/* Assignee Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'32px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
           color:'gray',
           marginLeft:'200px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '13px',
          }}
        >
          <option>Asignee</option>
        </select>

    {/* Priority Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'31px',
            borderRadius:'18px',
            width:'6vw',
            borderWidth:'1px',
            borderStyle:'solid',
            color:'gray',
            marginLeft:'-45px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '13px',
          }}
        >
          <option>Priority</option>
        </select>

    {/* Issue Type Dropdown */}
    <select
          style={{
             backgroundColor: 'transparent',  
            borderStyle:'solid',
            height:'31px',
            borderRadius:'18px',
            width:'7vw',
            borderWidth:'1px',
            color:'gray',
            borderStyle:'solid',
          
           marginLeft:'-45px',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '13px',
          }}
        >
          <option>Issue Type</option>
        </select>

    {/* Assignee Dialog */}
    <Dialog open={assigneeDialogOpen} onClose={handleCloseAssigneeDialog}>
      <DialogTitle sx={{ color: 'white', backgroundColor: '#333333' }}>
        Create Assignee
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#333333' }}>
        <TextField
          label="Assignee Name"
          fullWidth
          sx={{
            '& .MuiInputLabel-root': { color: '#A0A0A0' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#4D4D4D',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#333333' }}>
        <Button onClick={handleCloseAssigneeDialog} sx={{ color: 'white' }}>
          Cancel
        </Button>
        <Button onClick={handleCloseAssigneeDialog} sx={{ color: 'white' }}>
          Create
        </Button>
      </DialogActions>
    </Dialog>

    {/* Issue Type Dialog */}
    <Dialog open={issueTypeDialogOpen} onClose={handleCloseIssueTypeDialog}>
      <DialogTitle sx={{ color: 'white', backgroundColor: '#333333' }}>
        Create Issue
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: '#333333' }}>
        <TextField
          label="Issue Title"
          fullWidth
          sx={{
            '& .MuiInputLabel-root': { color: '#A0A0A0' },
            '& .MuiOutlinedInput-root': {
              color: 'white',
              '& fieldset': {
                borderColor: '#4D4D4D',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white',
              },
            },
          }}
        />
      </DialogContent>
      <DialogActions sx={{ backgroundColor: '#333333' }}>
        <Button onClick={handleCloseIssueTypeDialog} sx={{ color: 'white' }}>
          Cancel
        </Button>
        <Button onClick={handleCloseIssueTypeDialog} sx={{ color: 'white' }}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  </Box>

  {/* Popup (Dialog) */}
  <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        PaperProps={{
          sx: {
            width: '1200px',   // Custom width for popup box
            height: '600px',  // Custom height for popup box
            borderRadius: '12px', // Rounded corners
          },
        }}
      >
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 0, 
            backgroundColor: '#1e1e1e',
          }}
        >
          {/* Left section */}
          <Box sx={{ width: '50%', padding: '24px', color: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Upgrade for unlimited users
            </Typography>
            <Typography sx={{ mb: 2 }}>
              With the Standard plan, you get unlimited users, 250GB of storage, free guest access and more.
            </Typography>

            {/* Users invited section */}
            <Typography sx={{ mb: 1}}>0 of 10 invited</Typography>
            <AvatarGroup max={10} sx={{ mb: 2 ,marginRight:'185px', }}>
              {[...Array(10)].map((_, index) => (
                <Avatar key={index} sx={{ backgroundColor: '#666' }} />
              ))}
            </AvatarGroup>

            {/* Storage usage section */}
            <Typography sx={{ mb: 1 }}>0 GB of 2 GB</Typography>
            <LinearProgress
              variant="determinate"
              value={0}
              sx={{ mb: 3, backgroundColor: '#444', '& .MuiLinearProgress-bar': { backgroundColor: '#fff' } }}
            />

            {/* Actions */}
            <DialogActions sx={{ justifyContent: 'space-between', mt: 2 }}>
              <Button onClick={handleClose} sx={{ color: '#888', backgroundColor: '#333', textTransform: 'none', p: '8px 24px' }}>
                Maybe later
              </Button>
              <Button onClick={handleClose} sx={{ backgroundColor: '#0059ff', color: '#fff', textTransform: 'none', p: '8px 24px' }}>
                Upgrade
              </Button>
            </DialogActions>
          </Box>

          {/* Right section */}
          <Box sx={{ width: '50%', backgroundColor: '#2b2b2b', padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
       <StandardFeatures/>
          </Box>
        </DialogContent>
      </Dialog>
</Box>

    )
};

export default ProjectHeader