import { Box, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, Divider, IconButton, Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import Danielthompson from '../../Assets/DANIEL THOMPSON.jpg';
import RashhedAhmed from '../../Assets/RASHID AHMED.jpg';

// Sample updates data
const updates = [
  {
   
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
      {
        title: 'Rashid Ahmed assigned E-sign walk-over tutorial screens issue to you',
        name: 'Rashid Ahmed',
        time: '10 hours ago',
        avatar: RashhedAhmed,
      },
      {
        title: 'Rashid Ahmed assigned E-sign walk-over tutorial screens issue to you',
        name: 'Rashid Ahmed',
        time: '10 hours ago',
        avatar: RashhedAhmed,
      },
    ],
  },
 
];

const ActiveIssus = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#000', // Set background color to black
        color: '#fff', // Set text color to white
        height: '100vh',
        overflowY: 'scroll',
      }}
    >
      <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: '20px' }}>
        <Grid item>
          <Typography variant="h5" color="gray" fontFamily='sans-serif'>
            Activities
          </Typography>
        </Grid>
        <Grid item>
          <IconButton sx={{ color: 'white' }}>
            <InfoIcon />
          </IconButton>
        </Grid>
      </Grid>
<Box>
    <Typography sx={{marginTop:'-23px',marginBottom:'33px',color:'gray',}}>Stay up-to-date with what is happening across the project</Typography>
</Box>
      {/* Search bar and filter */}
      <Box sx={{display:'flex',flexDirection:'row',justifyContent:'flex-start'}}
        
      >
        <Box>
        <input
          type="search"
          placeholder="Search this activities"
          style={{
            backgroundColor: '#1c1c1c',
            border: 'none',
            outline: 'none',
            color: 'white',
            borderStyle:'solid',
            height:'45px',
            borderRadius:'8px',
            width:'21vw',
            marginRight:'12px',
            borderWidth:'0px',
            flex: 1,
            fontSize: '16px',
          }}
        />
        </Box>
        <select
          style={{
             backgroundColor: 'transparent',  color: 'white',
            borderStyle:'solid',
            height:'45px',
            borderRadius:'8px',
            width:'40vw',
            borderWidth:'1px',
            borderStyle:'solid',
            
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '16px',
          }}
        >
          <option>Activities Type</option>
        </select>
      </Box>

      {/* List of activities */}
      {updates.map((section, sectionIndex) => (
        <Box key={sectionIndex} sx={{ marginBottom: '30px' }}>
          <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px' }}>
            {section.section}
          </Typography>

          <List>
            {section.items.map((update, index) => (
              <ListItem key={index} sx={{ padding: '10px 0', borderBottom: '1px solid #444' }}>
                <ListItemAvatar>
                  <Avatar src={update.avatar} alt={update.name} sx={{ borderRadius: '5px', width: 40, height: 40 }} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: '#fff' }}>
                      {update.title}
                    </Typography>
                  }
                  secondary={`${update.name} • ${update.time}`}
                  secondaryTypographyProps={{ sx: { color: '#aaa' } }}
                />
              </ListItem>
            ))}
          </List>

          {sectionIndex !== updates.length - 1 && <Divider sx={{ backgroundColor: '#444', marginY: '20px' }} />}
        </Box>
      ))}
    </Box>
  );
};

export default ActiveIssus;
