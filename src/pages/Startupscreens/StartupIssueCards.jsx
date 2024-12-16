import { Box, Typography, IconButton, Divider } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import RefreshIcon from '@mui/icons-material/Refresh';

const styles = {
  card: {
    backgroundColor: '#1A1A1A',
    borderRadius: '10px',
    padding: '20px',
    color: '#FFFFFF',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  sectionTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  issueIcon: {
    width: '60px',
    height: '60px',
    backgroundImage: 'url(/path/to/your/icon.png)', // Add the correct path to your icon
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  noDataText: {
    color: '#B0B0B0',
    marginTop: '10px',
  },
};

function TodoCard() {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.sectionTitle}>
        <Typography variant="body1" fontWeight="bold">To Do</Typography>
        <Box>
          <IconButton sx={{ color: '#FFFFFF' }}><FullscreenIcon /></IconButton>
          <IconButton sx={{ color: '#FFFFFF' }}><RefreshIcon /></IconButton>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: '#3D73F1', marginBottom: '10px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={styles.issueIcon} />
        <Typography variant="body2" sx={styles.noDataText}>No current issues!</Typography>
      </Box>
    </Box>
  );
}

function InProgressCard() {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.sectionTitle}>
        <Typography variant="body1" fontWeight="bold">In-Progress</Typography>
        <Box>
          <IconButton sx={{ color: '#FFFFFF' }}><FullscreenIcon /></IconButton>
          <IconButton sx={{ color: '#FFFFFF' }}><RefreshIcon /></IconButton>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: '#3D73F1', marginBottom: '10px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={styles.issueIcon} />
        <Typography variant="body2" sx={styles.noDataText}>No current issues!</Typography>
      </Box>
    </Box>
  );
}

function ReviewCard() {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.sectionTitle}>
        <Typography variant="body1" fontWeight="bold">Review</Typography>
        <Box>
          <IconButton sx={{ color: '#FFFFFF' }}><FullscreenIcon /></IconButton>
          <IconButton sx={{ color: '#FFFFFF' }}><RefreshIcon /></IconButton>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: '#3D73F1', marginBottom: '10px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={styles.issueIcon} />
        <Typography variant="body2" sx={styles.noDataText}>No current issues!</Typography>
      </Box>
    </Box>
  );
}

function DoneCard() {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.sectionTitle}>
        <Typography variant="body1" fontWeight="bold">Done</Typography>
        <Box>
          <IconButton sx={{ color: '#FFFFFF' }}><FullscreenIcon /></IconButton>
          <IconButton sx={{ color: '#FFFFFF' }}><RefreshIcon /></IconButton>
        </Box>
      </Box>
      <Divider sx={{ backgroundColor: '#3D73F1', marginBottom: '10px' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={styles.issueIcon} />
        <Typography variant="body2" sx={styles.noDataText}>No current issues!</Typography>
      </Box>
    </Box>
  );
}

function StartupIssueCards() {
  return (
    <Box
      sx={{
       width:"30vw"
      }}
    >
        <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <TodoCard />

      <ReviewCard />
      
      </Box>

      <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
      <InProgressCard />
      <DoneCard />
      </Box>
    </Box>
  );
}

export default StartupIssueCards;
