import React, { useState } from 'react';
import Projectfolder from '../../Assets/projectfolder.png';
import Projectbox from '../../Assets/projectbox.png';
import Projectlast from '../../Assets/projectlast.png';
import Image from '../../components/Image';
import Worktask from '../../pages/Work/Workedtasklis';
import TaskList from '../../pages/Work/TaskList '; // Make sure the import path is correct
import { AppBar, Tabs, Tab, Typography, Box, Button } from '@mui/material';

// Sample task data (for demonstration)
const tasksData = {
  assigned: [
    { id: 'ES-18', title: 'Show file successfully uploaded instead of error', project: 'Clikkle E-sign', status: 'To Do' },
    { id: 'ES-11', title: 'Show payment analytics dashboard in payslip page', project: 'Clikkle E-sign', status: 'To Do' },
  ],
  workedOn: [],
  starred: [],
};

const TabPanel = ({ children, value, index }) => (
  <div hidden={value !== index}>
    {value === index && (
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    )}
  </div>
);

const Detailofworkproject = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => setSelectedTab(newValue);

  const renderEmptyState = (image, title, description) => (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" sx={{ mt: 10 }}>
      <Image src={image} sx={{ height: '140px', mt: '-33px' }} />
      <Typography variant="h5" sx={{ mt: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mt: 1,
          color: 'gray',
          fontFamily: 'sans-serif',
          fontSize: '11px',
          width: '300px',
          textAlign: 'center',
        }}
      >
        {description}
      </Typography>
      <Button variant="contained" sx={{ mt: 2, bgcolor: '#4285F4' }}>
        View all projects
      </Button>
    </Box>
  );

  return (
    <Box sx={{ width: '100%', height: '30vh', color: 'white' }}>
      <AppBar position="static" sx={{ borderBottom: '1px solid gray' }}>
        <Tabs
          sx={{ backgroundColor: 'black' }}
          value={selectedTab}
          onChange={handleTabChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab label="Assigned To Me" />
          <Tab label="Worked On" />
          <Tab label="Starred" />
        </Tabs>
      </AppBar>

      <TabPanel value={selectedTab} index={0}>
        {tasksData.assigned.length > 0 ? (
          <TaskList tasks={tasksData.assigned} />
        ) : (
          renderEmptyState(
            Projectfolder,
            'No issue has been assigned to you yet',
            "In this page, you'll find all the issues assigned to you so you can easily get started."
          )
        )}
      </TabPanel>

      <TabPanel value={selectedTab} index={1}>
        {tasksData.workedOn.length > 0 ? (
          <Worktask tasks={tasksData.workedOn} />
        ) : (
          renderEmptyState(
            Projectbox,
            'You haven’t worked on anything yet!',
            'In this page, you’ll find your recently worked on issues. Get started by finding the project your team is working on.'
          )
        )}
      </TabPanel>

      <TabPanel value={selectedTab} index={2}>
        {tasksData.starred.length > 0 ? (
          <TaskList tasks={tasksData.starred} />
        ) : (
          renderEmptyState(
            Projectlast,
            'Star your work to access quickly',
            'In this page, you’ll find all your starred works and can easily pick up from where you left off.'
          )
        )}
      </TabPanel>
    </Box>
  );
};

export default Detailofworkproject;
