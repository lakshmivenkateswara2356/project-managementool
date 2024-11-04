import React, { useState } from 'react';
import { orange } from '@mui/material/colors';
import Tickicon from "../../../Assets/Personsimages/twemoji_check-mark-button.png";
import Image from "../../../components/Image";
import { FaEquals } from "react-icons/fa6";
import {
  Box, Typography, Card, TextField, Button,Avatar, Checkbox, Dialog, DialogTitle, DialogContent,
  InputAdornment, IconButton
} from '@mui/material';
import {
  AttachFile, Link, MoreVert, EmojiEmotions,
} from '@mui/icons-material';

const ProjectInProgress = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [newIssue, setNewIssue] = useState('');
  const [inProgressItems, setInProgressItems] = useState([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [comment, setComment] = useState('');

  const handleCreateClick = () => {
    setShowTextArea(true);
  };

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

  return (
    <Box>
      <Card
        sx={{
          width: '280px',
          minHeight: inProgressItems.length === 0 ? '160px' : 'auto',
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
            height: '28px', textAlign: "center",
          }}>
            {inProgressItems.length}
          </Typography>
        </Box>

        {/* Render existing issues */}
        <Box sx={{ marginTop: '12px' }}>
          {inProgressItems.map((item, index) => (
            <Card key={index} sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px',
              borderRadius: '8px',
              marginTop: '12px',
            }}>
              <Box>
                <Typography sx={{ fontSize: '14px', color: 'white' }}>{item.description}</Typography>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => handleOpenDialog(item)}>
                    <Image sx={{ height: "20px", marginRight: '148px' }} src={Tickicon} alt="Tickicon" />
                  </Box>
                  <Box sx={{ display: 'flex', gap: '8px' }}>
                    <IconButton sx={{ color: orange[500], padding: 0 }}>
                      <FaEquals />
                    </IconButton>

                    <Avatar sx={{ width: 24, height: 24 }} />
                  </Box>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>

        {/* Show "Create Issue" button when hovering */}
        {isHovered && (
          <Button
            sx={{
              textTransform: 'none',
              width: '100%',
              height: '35px',
              color: 'white',
              backgroundColor: '#171716',
              marginTop: '12px',
            }}
            onClick={handleCreateClick}
          >
            + Create Issue
          </Button>
        )}

        {/* Show the text area and create button for new issue */}
        {showTextArea && (
          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
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
              sx={{ backgroundColor: 'background.default', borderRadius: '4px' }}
            />
            <Box sx={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
            <Button
              sx={{
                marginTop: '8px',
                backgroundColor: '#3767B1',
                textAlign:"right",
                width:"55px",
                
                color: 'white',
                fontSize: "11px",
                height: "28px",
                textTransform: 'none',
                '&:hover': { backgroundColor: '#3767B1' },
              }}
              onClick={handleSaveIssue}
            >
              Create
            </Button>

            </Box>
          </Box>
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
                <Button endIcon={<MoreVert />} sx={{ color: '#ffffff', backgroundColor: '#3e3e3e', padding: '6px 12px' }} onClick={handleCreateClick}>Create</Button>
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
                onChange={(e) => setComment(e.target.value)}
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
          </DialogContent>
        </Dialog>
      </Card>
    </Box>
  );
};

export default ProjectInProgress;
