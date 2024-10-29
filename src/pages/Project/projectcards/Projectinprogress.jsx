import React, { useState } from 'react';
import {
  Box, Typography, Card, TextField, Button, Checkbox, Tabs, FormControl, Avatar, Select, InputAdornment,
  Tab, IconButton, Menu, MenuItem, ListItemText, Dialog, DialogTitle, DialogContent,
} from '@mui/material';
import {
  EmojiEmotions, AttachFile, Link, MoreVert, MoreHoriz as MoreHorizIcon,
  FilterList as FilterListIcon, Visibility as VisibilityIcon, ThumbUpAlt as ThumbUpAltIcon,
  Share as ShareIcon, CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';

const ProjectInProgress = () => {
  const [tab, setTab] = useState(0);
  const [anchorElActions, setAnchorElActions] = useState(null);
  const openActions = Boolean(anchorElActions);
  const [isHovered, setIsHovered] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [newIssue, setNewIssue] = useState('');
  const [inProgressItems, setInProgressItems] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [filter, setFilter] = useState('Newest first');
  const [comment, setComment] = useState('');
  const openMenu = Boolean(anchorEl);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleActionsClick = (event) => {
    setAnchorElActions(event.currentTarget);
  };

  const handleActionsClose = () => {
    setAnchorElActions(null);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => setAnchorEl(null);

  const handleCreateClick = () => setShowTextArea(true);

  const handleSaveIssue = () => {
    if (newIssue.trim()) {
      const newIssueCode = `CHR-${inProgressItems.length + 26}`;
      setInProgressItems([...inProgressItems, { code: newIssueCode, description: newIssue }]);
      setNewIssue('');
      setShowTextArea(false);
    }
  };

  const handleOpenDialog = (issue) => {
    setSelectedIssue(issue);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedIssue(null);
  };

  const handleCommentChange = (e) => setComment(e.target.value);

  return (
    <Box>
      <Card
        sx={{
          width: '280px',
          height:"145px",
          padding: '16px',
          borderRadius: '8px',
          backgroundColor: 'background.default',
          position: 'relative',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{
            fontSize: '14px', fontWeight: '500', color: '#3767B1', border: '1px solid #878ECE',
            backgroundColor: '#02163580', padding: '4px 8px', borderRadius: '4px',
          }}>
            In Progress
          </Typography>
          <Typography sx={{
            fontSize: '15px', fontWeight: '500', color: '#3767B1', border: '1px solid #878ECE',
            backgroundColor: '#02163580', padding: '4px 8px', borderRadius: '4px', width: '34px',
            height: '28px',textAlign:"center",
          }}>
            {inProgressItems.length}
          </Typography>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose} PaperProps={{ style: { maxHeight: 200, width: '20ch' } }}>
            <MenuItem onClick={handleMenuClose}>Move to</MenuItem>
            <MenuItem onClick={handleMenuClose}>Copy issue link</MenuItem>
            <MenuItem onClick={handleMenuClose}>Copy issue key</MenuItem>
            <MenuItem onClick={handleMenuClose}>Add flag</MenuItem>
            <MenuItem onClick={handleMenuClose}>Add label</MenuItem>
            <MenuItem onClick={handleMenuClose}>Link issue</MenuItem>
            <MenuItem onClick={handleMenuClose} sx={{ color: 'red' }}>Delete</MenuItem>
          </Menu>
        </Box>

        {isHovered && !showTextArea && (
          <Button sx={{
            textTransform: 'none', width: '100%', height: '35px', padding: '12px', color: 'white',
            justifyContent: 'flex-start', backgroundColor: '#171716', marginTop: '12px',
          }} onClick={handleCreateClick}>
            + Create Issue
          </Button>
        )}

        {showTextArea && (
          <>
            <TextField
              fullWidth
              multiline
              rows={2}
              placeholder="What needs to be done?"
              value={newIssue}
              onChange={(e) => setNewIssue(e.target.value)}
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: { padding: '4px 8px', fontSize: '14px', lineHeight: '1.2' },
              }}
              sx={{ marginTop: '8px', backgroundColor: 'background.default', borderRadius: '4px' }}
            />
            <Button sx={{
              marginTop: '8px', backgroundColor: '#3767B1', color: 'white', fontSize: "11px",
              height: "28px", marginTop: "-28px", textTransform: 'none', '&:hover': { backgroundColor: '#3767B1' },
            }} onClick={handleSaveIssue}>
              Create
            </Button>
          </>
        )}

        {!showTextArea && inProgressItems.length === 0 && (
          <Typography sx={{ marginTop: '16px', color: '#aaa', textAlign: 'center', fontStyle: 'italic' }}>
           
          </Typography>
        )}

       

        <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="lg"
          PaperProps={{ sx: { color: '#ffffff', borderRadius: '8px', height: '100vh', backgroundColor: 'background.default' } }}>
          <DialogTitle sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Checkbox sx={{ color: '#00ab55' }} />
              <Typography variant="h6" sx={{ marginLeft: '10px', color: '#ffffff' }}>{selectedIssue?.code}</Typography>
            </Box>
          </DialogTitle>
          <DialogContent sx={{ display: 'flex', padding: '24px', gap: '24px', backgroundColor: 'background.default' }}>
            <Box sx={{ flex: 2, padding: '24px', color: '#ffffff' }}>
              <Box sx={{ display: 'flex', gap: 2, marginBottom: '16px' }}>
                <Button startIcon={<AttachFile />} sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}>Attach</Button>
                <Button startIcon={<Link />} sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}>Link Issue</Button>
                <Button endIcon={<MoreVert />} sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }} onClick={handleMenuClick}>Create</Button>
              </Box>
              <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ffffff' }}>Description</Typography>
              <TextField
                placeholder="Add a description..."
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: '#1e1e1e', borderRadius: '4px', padding: '8px', fontSize: '14px' }}
              />
              <Typography variant="h6" sx={{ marginTop: '20px', color: '#ffffff' }}>Comments</Typography>
              <TextField
                placeholder="Write a comment..."
                value={comment}
                onChange={handleCommentChange}
                multiline
                rows={2}
                fullWidth
                sx={{ marginTop: '8px', backgroundColor: '#1e1e1e', borderRadius: '4px', padding: '8px' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><EmojiEmotions /></InputAdornment>,
                  endAdornment: <InputAdornment position="end"><IconButton><AttachFile /></IconButton></InputAdornment>,
                }}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ marginBottom: '16px', color: '#ffffff' }}>Details</Typography>
              {/* Additional details can be added here */}
            </Box>
          </DialogContent>
        </Dialog>
      </Card>
<Box sx={{backgroundColor:"background.default"}}>
      {!showTextArea && inProgressItems.map((item, index) => (
          <Card key={index} sx={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            backgroundColor: '#1e1e1e', padding: '12px', borderRadius: '8px', marginTop: '12px',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleOpenDialog(item)}>
              <CheckCircleIcon sx={{ fontSize: '24px', color: '#4FC3F7', marginRight: '8px' }} />
              <Typography sx={{ fontSize: '14px', color: 'white' }}>{item.description}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconButton sx={{ color: '#FF6F00' }}><MoreHorizIcon /></IconButton>
              <Avatar sx={{ width: 24, height: 24 }} />
            </Box>
          </Card>
        ))}

</Box>
    </Box>
  );
};

export default ProjectInProgress;
