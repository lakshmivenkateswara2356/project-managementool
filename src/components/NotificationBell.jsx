import { Box } from '@mui/material';
import NotificationIcon from '@mui/icons-material/Notifications'; // Example import, adjust if using a custom icon
import { useTheme } from '@mui/material/styles';

const NotificationBell = () => {
  const theme = useTheme(); // Get the current theme (dark or light)
  
  const iconColor = theme.palette.mode === 'dark' ? 'gray' : 'black'; // Adjust colors for both modes

  return (
    <Box sx={{ transform: 'rotate(40deg)' }}>
      <NotificationIcon sx={{ color: iconColor }} />
    </Box>
  );
};

export default NotificationBell;
