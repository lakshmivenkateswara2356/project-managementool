import React, { useState } from "react";
import Projectheader from './ProjectHeader';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { orange } from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SendIcon from '@mui/icons-material/Send';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { EmojiEmotions, AttachFile, Link, MoreVert, FilterList, Create } from '@mui/icons-material';

import ShareIcon from '@mui/icons-material/Share';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography, Table, TableBody, IconButton, Menu, Tabs,
  Tab,
  Select,
  FormControl,
  InputLabel, Checkbox, Avatar, Dialog,  InputAdornment, DialogActions, DialogContent, DialogTitle, TableCell, TextField, MenuItem, TableHead, TableRow, Button, Grid, Card, CardContent } from '@mui/material';

const ProjectList = () => {

  const [tab, setTab] = useState(0);
  const [comment, setComment] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleCommentChange = (e) => setComment(e.target.value);
  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };


  const [anchorElActions, setAnchorElActions] = useState(null);
  const openActions = Boolean(anchorElActions);

  const handleActionsClick = (event) => {
    setAnchorElActions(event.currentTarget);
  };

  const handleActionsClose = () => {
    setAnchorElActions(null);
  };

  const dummyData = [
    {
      id: 'ES-141',
      description: 'Fix all the refactoring errors that are coming when deploying the repo.',
      status: 'Review',
      assignee: { name: 'Dave Maxwell', avatar: 'https://i.pravatar.cc/150?img=3' },
      progress: '--',
      startDate: '05-08-2024',
      dueDate: '07-08-2024',
      reviewer: 'Daniel Thompson',
      isChecked: true,
    },
    {
      id: 'ES-142',
      description: 'Implement the new authentication flow for the app.',
      status: 'In Progress',
      assignee: { name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?img=4' },
      progress: '50%',
      startDate: '01-08-2024',
      dueDate: '10-08-2024',
      reviewer: 'Mark Spencer',
      isChecked: false,
    },
  ];

  const handleClickOpen = (data) => {
    setSelectedData(data);
    setOpen(true);
  };


  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedData(null);
  };

  return (
    <Box>
      <Projectheader />
      <Box>
        {/* List View */}
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell>Keys</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Assignee</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Updated At</TableCell>
              <TableCell>Reporter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((data, index) => (
              <TableRow
                key={index}
                sx={{ borderBottom: '10px solid #121212', cursor: 'pointer' }}
                onClick={() => handleClickOpen(data)} // Open dialog on row click
              >
                <TableCell>
                  <Checkbox checked={data.isChecked} sx={{ color: '#00ab55' }} />
                </TableCell>
                <TableCell sx={{ color: '#00ab55', fontSize: '12px' }}>{data.id}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '400px' }}>{data.description}</TableCell>
                <TableCell sx={{ color: '#ffc107', fontSize: '12px', width: '150px' }}>{data.status}</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <Avatar src={data.assignee.avatar} sx={{ width: 15, height: 15 }} />
                  <Typography
                    sx={{ color: '#ffffff', display: 'inline-block', marginLeft: '8px', fontSize: '10px', width: '100px' }}
                  >
                    {data.assignee.name}
                  </Typography>
                </TableCell>
                <TableCell sx={{ color: orange[500] }}>{data.progress}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.startDate}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '100px' }}>{data.dueDate}</TableCell>
                <TableCell sx={{ color: '#ffffff', fontSize: '12px', width: '170px' }}>{data.reviewer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>

      {/* Dialog for showing details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg" PaperProps={{ sx: { color: '#ffffff', borderRadius: '8px', height: '100vh',} }}>
  <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  padding: '16px 24px' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox checked={selectedData?.isChecked} sx={{ color: '#00ab55' }} />
      <Typography variant="h6" sx={{ marginLeft: '10px', color: '#ffffff' }}>{selectedData?.id} - {selectedData?.description}</Typography>
    </Box>
    <Box>
      <IconButton onClick={handleMenuClick} sx={{ color: '#ffffff' }}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {  color: '#ffffff' }
        }}
      >
        <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
      </Menu>
    </Box>
  </DialogTitle>

  <DialogContent sx={{ display: 'flex', padding: '24px', gap: '24px' }}>
    {/* Main Content */}
    <Box sx={{ flex: 2, padding: '24px', color: '#ffffff', backgroundColor: '#1e1e1e' }}>
      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: 2, marginBottom: '16px' }}>
        <Button
          startIcon={<AttachFile />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
        >
          Attach
        </Button>
        <Button
          startIcon={<Link />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
        >
          Link Issue
        </Button>
        <Button
          endIcon={<MoreVert />}
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }}
          onClick={handleMenuClick}
        >
          Create
        </Button>

        <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Sub-task</MenuItem>
          <MenuItem onClick={handleMenuClose}>Story</MenuItem>
        </Menu>
      </Box>

      {/* Description Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ffffff' }}>
        Description
      </Typography>
      <TextField
        placeholder="Add a description..."
        multiline
        rows={3}
        fullWidth
        
        sx={{
          marginBottom: '20px',
        borderStyle:'none',
          color: '#ffffff',
          '& .MuiOutlinedInput-root': { color: '#ffffff' },
        }}
      />

      {/* Activity Section */}
      <Typography variant="h6" sx={{ marginBottom: '10px', color: '#ffffff' }}>
        Activity
      </Typography>

      {/* Tabs for All / Comments / History */}
      <Tabs value={tab} onChange={handleTabChange} textColor="inherit" sx={{ marginBottom: '10px' }}>
        <Tab label="All" />
        <Tab label="Comments" />
        <Tab label="History" />
      </Tabs>

      {/* Filter Dropdown */}
      <FormControl sx={{ marginBottom: '10px', minWidth: 120 }}>
        <InputLabel sx={{ color: '#ffffff' }}>Newest first</InputLabel>
        <Select
          defaultValue="Newest first"
          sx={{ color: '#ffffff', backgroundColor: '#3e3e3e' }}
        >
          <MenuItem value="Newest first">Newest first</MenuItem>
          <MenuItem value="Oldest first">Oldest first</MenuItem>
        </Select>
      </FormControl>

      {/* Comment Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <Avatar src={selectedData?.assignee.avatar} sx={{ width: 36, height: 36 }} />
        <TextField
          placeholder="Add a comment..."
          value={comment}
          onChange={handleCommentChange}
          fullWidth
          variant="outlined"
          sx={{
            marginLeft: '10px',
            backgroundColor: '#2b2b2b',
            '& .MuiOutlinedInput-root': { color: '#ffffff' },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton sx={{ color: '#ffffff' }}>
                  <EmojiEmotions />
                </IconButton>
                <IconButton sx={{ color: '#ffffff' }}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Existing Comment */}
      <Box sx={{ marginLeft: '44px', marginTop: '10px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
          <Avatar src="https://i.pravatar.cc/150?img=1" sx={{ width: 24, height: 24 }} />
          <Typography sx={{ marginLeft: '10px', color: '#ffffff' }}>
            Daniel Thompson <span style={{ color: '#888888' }}>3 minutes ago</span>
          </Typography>
        </Box>
        <Typography sx={{ marginLeft: '34px', color: '#ffffff', fontSize: '14px' }}>
          Icon updated to match the design for E-sign.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, marginLeft: '34px', marginTop: '4px' }}>
          <Button size="small" sx={{ color: '#888888' }}>
            Edit
          </Button>
          <Button size="small" sx={{ color: '#888888' }}>
            Delete
          </Button>
          <IconButton size="small" sx={{ color: '#888888' }}>
            <EmojiEmotions />
          </IconButton>
        </Box>
      </Box>
    </Box>

    {/* Right Panel (Details) */}
    <Box sx={{ flex: 1, padding: '24px', color: '#ffffff', backgroundColor: '#1e1e1e' }}>
      {/* Top Icons */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, marginBottom: '16px' }}>
        <IconButton sx={{ color: '#ffffff' }}>
          <VisibilityIcon />
        </IconButton>
        <IconButton sx={{ color: '#ffffff' }}>
          <ThumbUpAltIcon />
        </IconButton>
        <IconButton sx={{ color: '#ffffff' }}>
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={handleActionsClick}
          sx={{ color: '#ffffff' }}
        >
          <MoreVertIcon />
        </IconButton>
      </Box>

      {/* Dropdown Menu for Actions */}
      <Menu
        anchorEl={anchorElActions}
        open={openActions}
        onClose={handleActionsClose}
        PaperProps={{ style: { backgroundColor: '#2b2b2b', color: '#ffffff' } }}
      >
        <MenuItem onClick={handleActionsClose}>Action 1</MenuItem>
        <MenuItem onClick={handleActionsClose}>Action 2</MenuItem>
      </Menu>

      {/* ToDo and Actions Dropdowns */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Typography variant="button" sx={{ color: '#888888' }}>To Do</Typography>
        <Typography variant="button" sx={{ color: '#888888' }}>Actions</Typography>
      </Box>

      {/* Details Section */}
      <Box sx={{ border: '1px solid #444444', borderRadius: '8px', padding: '16px' }}>
        <Typography variant="h6" sx={{ marginBottom: '10px' }}>Details</Typography>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Assignee</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={selectedData?.assignee.avatar} sx={{ width: 24, height: 24 }} />
            <Typography sx={{ marginLeft: '10px' }}>{selectedData?.assignee.name}</Typography>
          </Box>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Labels</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Parent</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Team</Typography>
          <Typography>None</Typography>
        </Box>

        <Box sx={{ marginBottom: '16px' }}>
          <Typography variant="subtitle2" sx={{ color: '#888888' }}>Reporter</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src="https://i.pravatar.cc/150?img=1" sx={{ width: 24, height: 24 }} />
            <Typography sx={{ marginLeft: '10px' }}>Daniel Thompson</Typography>
          </Box>
        </Box>
      </Box>

      {/* Footer Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px', color: '#888888' }}>
        <Typography>Created 3 days ago</Typography>
        <Typography>Updated 3 days ago</Typography>
        <IconButton sx={{ color: '#888888' }}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  </DialogContent>

  <DialogActions sx={{ borderTop: '1px solid #444444', padding: '16px 24px' }}>
    <Button onClick={handleClose} sx={{ color: '#00ab55' }}>Close</Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default ProjectList;
