import React, { useState } from 'react';
import {
  Dialog,
  Box,
  Typography,
  IconButton,
  Divider,
  Tabs,
  Tab,
  Switch,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';

const NotificationDialog = ({ open, onClose }) => {
  const [tabValue, setTabValue] = useState(0);
  const [showUnread, setShowUnread] = useState(false);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const toggleUnread = () => {
    setShowUnread((prev) => !prev);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <Box sx={{ p: 2, backgroundColor: '#1F1F1F', color: '#FFFFFF' }}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Notifications
          </Typography>
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" sx={{ color: '#999' }}>
              only show unread messages
            </Typography>
            <Switch
              checked={showUnread}
              onChange={toggleUnread}
              sx={{
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#1976d2',
                },
                '& .MuiSwitch-track': {
                  backgroundColor: '#1976d2',
                },
              }}
            />
            <IconButton sx={{ color: '#fff' }}>
              <ShareIcon />
            </IconButton>
            <IconButton sx={{ color: '#fff' }}>
              <MoreVertIcon />
            </IconButton>
            <IconButton onClick={onClose} sx={{ color: '#fff' }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Tabs for 'Direct' and 'Watching' */}
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          textColor="inherit"
          indicatorColor="primary"
          sx={{ marginY: 1 }}
        >
          <Tab label="Direct" />
          <Tab label="Watching" />
        </Tabs>

        <Divider sx={{ backgroundColor: '#333' }} />

        {/* Notification Content */}
        <Box sx={{ p: 2 }}>
          {tabValue === 0 ? (
            <Box>
              <Typography
                variant="body2"
                sx={{ color: '#999', marginBottom: 2 }}
              >
                TODAY
              </Typography>

              {/* Example Notification Entry */}
              <Box display="flex" alignItems="flex-start" mb={2}>
                <Box
                  component="img"
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    marginRight: 2,
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Yogesh Singh updated an issue{' '}
                    <span style={{ color: '#999' }}>2 hours ago</span>
                  </Typography>
                  <Typography variant="body2">
                    Employee section in Clikkle HR Dashboard
                  </Typography>
                  <Typography variant="caption" sx={{ color: '#999' }}>
                    CHR-17 - In Progress
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ backgroundColor: '#333' }} />
            </Box>
          ) : (
            <Box>
              <Typography
                variant="body2"
                sx={{ color: '#999', marginBottom: 2 }}
              >
                TODAY
              </Typography>

              <Box display="flex" alignItems="flex-start" mb={2}>
                <Box
                  component="img"
                  src="https://via.placeholder.com/40"
                  alt="Avatar"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    marginRight: 2,
                  }}
                />
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    James Bator updated an issue{' '}
                    <span style={{ color: '#999' }}>10 hours ago</span>
                  </Typography>
                  <Typography variant="body2">Fix UI Flaws</Typography>
                  <Typography variant="caption" sx={{ color: '#999' }}>
                    CHR-8 - To Do
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ backgroundColor: '#333' }} />
            </Box>
          )}
        </Box>
      </Box>
    </Dialog>
  );
};

export default NotificationDialog;
