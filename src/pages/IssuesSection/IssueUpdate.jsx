import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, Checkbox,Grid,IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Danielthompson from '../../Assets/DANIEL THOMPSON.jpg'
import RashhedAhmed from '../../Assets/RASHID AHMED.jpg';



// Sample updates data
const updates = [
  {
    section: 'Today',
    items: [
      {
        title: 'Add list permission on the member list issue has moved from In Progress to Review',
        name: 'Daniel Thompson',
        time: '38 minutes ago',
        avatar: Danielthompson,
      },
      {
        title: 'Add list permission on the member list issue has moved from To Do to In Progress',
        name: 'Daniel Thompson',
        time: '40 minutes ago',
        avatar: Danielthompson,
      },
      {
        title: 'New Add list permission on the member list issue has been created',
        name: 'Daniel Thompson',
        time: '45 minutes ago',
        avatar: Danielthompson,
      },
      {
        title: 'Rashid Ahmed assigned Work progress % calculation issue to you',
        name: 'Rashid Ahmed',
        time: '45 minutes ago',
        avatar: RashhedAhmed,
      },
      {
        title: 'New Add list permission on the member list issue has been created',
        name: 'Daniel Thompson',
        time: '45 minutes ago',
        avatar: Danielthompson,
      },
    ],
  },
  {
    section: 'Yesterday',
    items: [
      {
        title: 'Rashid Ahmed assigned E-sign walk-over tutorial screens issue to you',
        name: 'Rashid Ahmed',
        time: '10 hours ago',
        avatar: Danielthompson,
      },
    ],
  },
  {
    section: 'Older',
    items: [
      {
        title: 'You updated an issue',
        name: 'You',
        time: '',
        avatar: Danielthompson,
        extra: (
          <>
            <Checkbox defaultChecked />
            Show employee attendance record in attendance view page
          </>
        ),
        issueDetails: 'CHR-17 - Clikkle HR - Done',
      },
      {
        title: 'You updated an issue',
        name: 'You',
        time: '',
        avatar: '/path/to/your-avatar.jpg',
        extra: (
          <>
            <Typography color="error">
              There should be a show file successfully uploaded instead of showing blank
            </Typography>
          </>
        ),
        issueDetails: 'ESI-18 - Clikkle S Eng - Done',
      },
    ],
  },
];

const IssueUpdate = () => {
  return (

    
    <Box container sx={{ padding: '20px',  Height: '50vh', overflow:'scroll',}}>
    
     <Grid container alignItems='center'  >
                <Grid item xs>
                    <Typography variant='h5' color='text.primary'>
                        Issue Updates
                    </Typography>
                </Grid>
               
                <Grid item>
                    <IconButton sx={{ display: { sm: 'block' } }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
                
            </Grid>
            <div className='diveder'></div>
      

      {updates.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ marginBottom: '30px',color:'gray',fontSize:'22px',}}>
          {/* Section Title */}
          <Typography variant="h6" sx={{ marginBottom: '10px',}}>
            {section.section}
          </Typography>

          <List>
            {section.items.map((update, index) => (
              <ListItem key={index} sx={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
                <ListItemAvatar>
                  <Avatar src={update.avatar} alt={update.name} sx={{borderRadius:'7px',}}/>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography variant="body1" sx={{ }}>
                        {update.title}
                      </Typography>
                      {update.extra && <Box sx={{ marginTop: '5px' }}>{update.extra}</Box>}
                    </>
                  }
                  secondary={`${update.name} ${update.time ? ' • ' + update.time : ''}`}
                  primaryTypographyProps={{ color: 'white' }}
                  secondaryTypographyProps={{ color: '#aaa' }}
                />
                {update.issueDetails && (
                  <Typography variant="body2" sx={{ marginTop: '5px', color: '#aaa' }}>
                    {update.issueDetails}
                  </Typography>
                )}
              </ListItem>
            ))}
          </List>

          {/* Divider between sections */}
          {sectionIndex !== updates.length - 1 && <Divider sx={{ backgroundColor: '#444', marginY: '20px' }} />}
        </Box>
      ))}
     
    </Box>
  );
};

export default IssueUpdate;
