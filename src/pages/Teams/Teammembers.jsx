import React from 'react';
import Teammemon from '../../Assets/team1.png';
import Demoimg from '../../Assets/demoadimg.png';
import Teamtwo from '../../Assets/team2.png';
import Teamthre from '../../Assets/team3.png';
import Teamfour from '../../Assets/team4.png';
import Teambackgro from '../../Assets/teambackgr.png';
import Rashid from '../../Assets/RASHID AHMED (1).jpg';
import Teamfiv from '../../Assets/team.png';
import { 
  Box, Typography, Grid, TextField, Card, CardContent, 
  Avatar, IconButton, Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const teamMembers = [
  { name: 'Your teammate', avatar: Demoimg, role: 'Add people' },
  { name: 'Rashid Ahmed', avatar: Teammemon },
  { name: 'Rohit Anderson', avatar: Teamtwo },
  { name: 'Amanda Throne', avatar: Teamthre },
  { name: 'Amina Kumar', avatar: Teamfour },
  { name: 'Dave Maxwell', avatar: Rashid},
];

const teams = [
  { 
    teamName: 'Design Team', 
    teamAvatar: Teambackgro, 
    leadName: 'Rashid Ahmed', 
    leadAvatar: Rashid ,
  }
];

const Teammembers = () => {
  return (
    <Box sx={{ color: '#fff', height: '70vh', p: 3 }}>
      {/* Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <TextField
          placeholder="Search for people and teams"
          fullWidth
          sx={{
            marginTop:'-22px',
            width: '422px',
            height: '40px',
            backgroundColor: '#1c1c1c',
            borderRadius: '8px',
            input: { 
              padding: '8px 12px',
              color: '#fff',
              fontSize: '14px',
              borderStyle: 'none',
              height: '18px'
            },
          }}
          InputProps={{
            sx: { height: '40px' },
            endAdornment: (
              <IconButton size="small" sx={{ padding: 0 }}>
                <SearchIcon sx={{ color: '#fff', height: '18px', width: '18px' }} />
              </IconButton>
            ),
          }}
        />
      </Box>

      {/* People You Work With */}
      <Typography variant="h6" sx={{ mb: 2, fontSize: '13px',marginTop:'-22px', }}>
        People you work with
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {teamMembers.map((person, index) => (
          <Grid item xs={6} sm={2} md={1.7} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#1c1c1c', 
                borderRadius: '10px', 
                textAlign: 'center', 
                color: '#fff', 
                width: '150px', 
                height: '170px',
                padding: '16px',
              }}
            >
              <CardContent sx={{ width: '100%', }}>
                <Avatar
                  src={person.avatar}
                  alt={person.name}
                  sx={{ 
                    width: '80px', 
                    height: 80, 
                    margin: '0 auto', 
                    marginBottom: 1,
                    marginTop: 'px',
                  }}
                />
                <Typography 
                  variant="body1" 
                  sx={{ 
                    fontWeight: 'bold', 
                    marginBottom: '4px',
                    fontSize: '11px',
                  }}
                >
                  {person.name}
                </Typography>

                {/* Conditional rendering: Button or Role */}
                {person.role === 'Add people' ? (
                  <Button 
                    variant="contained" 
                    color="primary" 
                    sx={{ 
                      textTransform: 'none', 
                      fontSize: '12px', 
                      padding: '6px 12px', 
                      borderRadius: '5px', 
                      backgroundColor:'gray',
                      width:'90px',
                      height:'28px',
                      marginLeft:'-7px',

                    }}
                    onClick={() => console.log('Add people button clicked')}
                  >
                    {person.role}
                  </Button>
                ) : (
                  <Typography 
                    variant="body2" 
                    sx={{ color: '#bbb' }}
                  >
                    {person.role || ''}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Your Teams */}
      <Typography variant="h6" sx={{ mb: 2,fontSize: '13px' }}>
        Your teams
      </Typography>
      <Grid container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: '#1c1c1c', 
                borderRadius: '10px', 
                textAlign: 'center', 
                color: '#fff', 
                width: '150px', 
                height: '170px',
                padding: '16px',
              }}
            >
              <CardContent sx={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
                <Avatar
                  src={team.teamAvatar}
                  sx={{ width:'170%', height: '60%', borderRadius:'2px',marginTop:'-22px',}}
                  alt={team.teamName}
                />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold',fontSize:'13px',marginTop:'8px',fontFamily:'sans-serif', }}>
                    {team.teamName}
                  </Typography>
                  <Box sx={{ display: 'flex',flexDirection:'column', alignItems: 'center', mt: 1 }}>
                    <Avatar
                      src={team.leadAvatar}
                      sx={{ width: 40, height: 40,}}
                      alt={team.leadName}
                    />
                    <Typography variant="body2" sx={{ color: '#bbb',fontSize:'10px',fontFamily:'sans-serif',marginTop:'5px', }}>
                      {team.leadName}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Teammembers;
