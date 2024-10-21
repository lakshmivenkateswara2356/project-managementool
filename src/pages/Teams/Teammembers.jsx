import React,{ useState }  from 'react';
import Teammemon from '../../Assets/team1.png';
import Demoimg from '../../Assets/demoadimg.png';
import Teamtwo from '../../Assets/team2.png';
import Teamthre from '../../Assets/team3.png';
import Teamfour from '../../Assets/team4.png';
import Teambackgro from '../../Assets/teambackgr.png';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Bottommenu from '../BottomMenu/Bottommenu';
import { Dialog, DialogActions, DialogContent, DialogTitle,  Checkbox, FormControlLabel } from '@mui/material';
import Teamcreatimage from '../../Assets/Personsimages/pana.png';

import Rashid from '../../Assets/RASHID AHMED (1).jpg';
import { 
  Box, Typography, Grid, TextField, Card, CardContent, 
  Avatar, IconButton, Button 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Define team members
const teamMembers = [
  { name: 'Your teammate', avatar: Demoimg, role: 'Add people' },
  { name: 'Rohit Anderson', avatar: Teammemon }, // Target for onClick
  { name: 'Dave Maxwell ', avatar: Teamtwo },
  { name: 'Amanda Throne', avatar: Teamthre },
  { name: 'Amina Kumar', avatar: Teamfour },
  { name: 'Rashid Ahmed', avatar: Rashid },
];

// Define teams
const teams = [
  { 
    teamName: 'Design Team', 
    teamAvatar: Teambackgro, 
    leadName: 'Rashid Ahmed', 
    leadAvatar: Rashid,
  }
];

// Component definition
const Teammembers = () => {

  const navigate = useNavigate(); // Define navigate

  // Function for handling click on Rohit Anderson
  const handleRohitClick = () => {
    navigate ('/profile')
    // Add any additional logic you need here (e.g., routing, modals, etc.)
  };


  const handleRashidClick =()=>{

    navigate('/teammember')
  }

  const [open, setOpen] = useState(false);

  const [openee, setOpenee] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenmin = () => {
    setOpenee(true);
  };

  const handleClosee = () => {
    setOpenee(false);
  };


  return (
    <Box sx={{ color: '#fff', height:{xs:'82vh' ,xl:'75vh'}, p: 3,overflow:'scroll' }}>
      {/* Search Bar */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <TextField
          placeholder="Search for people and teams"
          fullWidth
          sx={{
            marginTop: '-22px',
            width: '422px',
            height: '40px',
           
            borderRadius: '8px',
            input: { 
              padding: '8px 12px',
              
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
      <Typography variant="h6" sx={{ mb: 2, fontSize: '13px', marginTop: '-22px',color:'gray', }}>
        People you work with
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {teamMembers.map((person, index) => (
          <Grid item xs={6} sm={2} md={1.7} key={index}>
            <Grid item xs={6} sm={2} md={1.7} key={index}>
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    
      borderRadius: '10px',
      textAlign: 'center',
      
      width: '150px',
      height: '170px',
      padding: '16px',
      cursor: person.name === 'Rohit Anderson' ? 'pointer' : 'default',
      '&:hover': {
        backgroundColor: 'gray', // Change to gray on hover
      },
    }}
    onClick={() => {
      if (person.name === 'Rohit Anderson') {
        handleRohitClick();
      } else if (person.name === 'Rashid Ahmed') {
        handleRashidClick();
      }
    }}
  >
    <CardContent sx={{ width: '100%' }}>
      <Avatar
        src={person.avatar}
        alt={person.name}
        sx={{
          width: '80px',
          height: 80,
          margin: '0 auto',
          marginBottom: 1,
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
            backgroundColor: 'gray',
            width: '90px',
            height: '28px',
            marginLeft: '-7px',
          }}
          onClick={handleClickOpenmin} // Opens the dialog
        >
          {person.role}
        </Button>
      ) : (
        <Typography variant="body2" sx={{ color: '#bbb' }}>
          {person.role || ''}
        </Typography>
      )}
    </CardContent>
  </Card>

   {/* Dialog Box for "Add People" */}
  
</Grid>

          </Grid>
        ))}
      </Grid>

      {/* Your Teams */}
      <Typography variant="h6" sx={{ mb: 2, fontSize: '13px',color:'gray' }}>
        Your teams
      </Typography>
<Box sx={{display:'flex',justifyContent:'flex-start',}}>
      <Grid container spacing={2}>
  {teams.map((team, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
      
          borderRadius: '10px',
          textAlign: 'center',
         
          width: '150px',
          height: '177px',
          padding: '16px',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {/* Avatars - Two team members side by side */}
          <Box sx={{ display: 'flex', gap: 1, marginBottom: 1 }}>
            <Avatar src={Demoimg} sx={{ width: 40, height: 40,marginRight:"-13px" }} />
            <Avatar src={team.leadAvatar} sx={{ width: 40, height: 40 }} />
          </Box>

          {/* Team Name */}
          <Typography
            variant="body1"
            sx={{
              fontWeight: 'bold',
              fontSize: '14px',
              marginBottom: '8px',
            }}
          >
            Your new team!
          </Typography>

          {/* Create Team Button */}
       {/* Button to trigger the dialog */}
       <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{
          textTransform: 'none',
          backgroundColor: '#333',
          borderRadius: '5px',
          width: '100px',
          height: '30px',
          fontSize: '11px',
          '&:hover': {
            backgroundColor: 'gray',
          },
        }}
      >
        Create team
      </Button>

      {/* Dialog for "Create a Team" */}
      <Dialog   open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{backgroundColor: '#1c1c1c'}}>
        <DialogTitle sx={{ color: '#fff' }}>Create a team</DialogTitle>
          {/* Grid Layout to split the dialog into two sections */}
          <Grid container>
            {/* Left Side (Image Section) */}
            <Grid item xs={12} sm={5}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <img 
                  src={Teamcreatimage} 
                  alt="Team illustration" 
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              </Box>
            </Grid>

            {/* Right Side (Form Section) */}
            <Grid item xs={12} sm={7} sx={{ paddingLeft: '20px', color: '#fff', backgroundColor: '#1c1c1c' }}>
              
              <DialogContent>
                <p style={{ fontSize: '14px', marginBottom: '20px' }}>
                  Unite your team in one place, where you can @mention, filter, and assign tasks with ease.
                </p>

                {/* Team name input */}
                <TextField
                  fullWidth
                  required
                  label="Team name"
                  placeholder="Enter team name"
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { backgroundColor: '#222', color: '#fff' } }}
                  sx={{ marginBottom: '20px' }}
                />

                {/* Team members input */}
                <TextField
                  fullWidth
                  required
                  label="Who should be in this team?"
                  placeholder="Choose people"
                  variant="outlined"
                  margin="dense"
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { backgroundColor: '#222', color: '#fff' } }}
                  helperText="You can choose up to 50 people at once."
                  sx={{ marginBottom: '20px' }}
                />

                {/* Membership control */}
                <FormControlLabel
                  control={<Checkbox />}
                  label="Anyone can join this team without approval"
                  sx={{ color: '#fff' }}
                />
              </DialogContent>

              <DialogActions>
                <Button onClick={handleClose} sx={{ color: '#ccc' }}>
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#3767B1',
                    '&:hover': {
                      backgroundColor: '#285693',
                    },
                  }}
                >
                  Create a team
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

      <Grid sx={{marginLeft:'-853px'}} container spacing={2}>
        {teams.map((team, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                
                borderRadius: '10px',
                textAlign: 'center',
                
                width: '150px',
                height: '170px',
                padding: '16px',
              }}
            >
              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
              >
                <Avatar
                  src={team.teamAvatar}
                  sx={{ width: '170%', height: '60%', borderRadius: '2px', marginTop: '-22px' }}
                  alt={team.teamName}
                />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: '13px',
                      marginTop: '8px',
                      
                      fontFamily: 'sans-serif',
                    }}
                  >
                    {team.teamName}
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 1 }}>
                    <Avatar src={team.leadAvatar} sx={{ width: 40, height: 40 }} alt={team.leadName} />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: '10px', fontFamily: 'sans-serif', marginTop: '5px' }}
                    >
                      {team.leadName}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog  open={openee} onClose={handleClosee} >
        <DialogContent sx={{ padding: '24px'}}>
          <DialogTitle sx={{ color: '#fff', padding: 0, marginBottom: '20px' }}>
            Add people to Clikkle Projects
          </DialogTitle>

          <Box sx={{ color: '#ccc', marginBottom: '20px' }}>
            Your admin enables you to request access on behalf of others. Any added individuals will be reviewed before being granted access.
          </Box>

          {/* Input Field for adding names or emails */}
          <TextField
            fullWidth
            required
            label="Names or email addresses"
            placeholder="Enter name or email"
            variant="outlined"
            InputLabelProps={{ style: { color: '#fff' } }}
            InputProps={{ style: { backgroundColor: '#333', color: '#fff' } }}
            sx={{ marginBottom: '20px' }}
          />

          <DialogActions sx={{ justifyContent: 'space-between' }}>
            {/* Cancel Button */}
            <Button
             onClick={handleClosee}
              sx={{
                color: '#ccc',
                backgroundColor: '#333',
                '&:hover': {
                  backgroundColor: '#444',
                },
              }}
            >
              Cancel
            </Button>

            {/* Add Button */}
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: '#3767B1',
                '&:hover': {
                  backgroundColor: '#285693',
                },
              }}
            >
              Add
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>

      </Box>
      <Box sx={{display:{xs:'block',lg:'none'}}}>
<Bottommenu/>
</Box>
    </Box>
  );
};

export default Teammembers;
