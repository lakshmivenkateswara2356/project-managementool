import React from 'react';
import { Box, Typography, Checkbox, Grid, Button } from '@mui/material';
import twemoji from '../../Assets/tick.png';
import dotimf from '../../Assets/dot.png';
import Image from '../../components/Image';

// Example data for tasks
const tasks = {
  todo: [
    { id: 'ES-18', title: 'There should be show file successfully uploaded instead of shown error', project: 'Clikkle E-sign', status: 'To Do' },
    { id: 'ES-11', title: 'Show payment analytics dashboard in payslip page.', project: 'Clikkle E-sign', status: 'To Do' },
  ],
  inProgress: [
    { id: 'ES-13', title: 'Allow employees to clock-in via dashboard and attendance page', project: 'Clikkle E-sign', status: 'In Progress' },
  ],
};

const TaskList = () => {
  const renderTasks = (taskList, status) => (
    <Box sx={{ marginBottom: '16px'  }}>
      <Typography
        variant="h6"
        sx={{ color: 'gray', marginBottom: '8px', fontWeight: 'bold' ,marginLeft:'-155px'}}
      >
        {status}
      </Typography>
      {taskList.map((task) => (
        <Grid
          container
          
          sx={{
            padding: '8px 0',
         
          }}
          key={task.id}
        >
          <Grid item>
            <Checkbox sx={{marginLeft:'-155px'}}
              icon={<Image src={twemoji}/>}
              checkedIcon={ <Image src={ dotimf}/>}
              checked={status === 'In Progress'}
            />
          </Grid>
          <Grid item xs>
            <Typography sx={{ color: 'white', fontWeight: 'bold',marginLeft:'-105px' ,fontSize:'15px'}}>
              {task.title}
            </Typography>
            <Typography sx={{ color: 'gray', fontSize: '12px',marginLeft:'-105px' }}>
              {task.id} - {task.project}
            </Typography>
          </Grid>
          <Grid item>
          <Button
  variant="outlined"
  size="small"
  sx={{
    backgroundColor: status === 'To Do' 
      ? 'rgba(255, 0, 0, 0.2)' // Deep transparent red background for "To Do"
      : 'rgba(0, 0, 255, 0.2)', // Deep transparent blue background for "In Progress"
    color: status === 'To Do' ? 'red' : 'blue', // Red or blue text color
    textTransform: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    borderRadius: '8px',
    border: `2px solid ${status === 'To Do' ? 'red' : 'blue'}`, // Red or blue border
    marginLeft: '28px',
    marginRight: '-105px',
    '&:hover': {
      backgroundColor: status === 'To Do' 
        ? 'rgba(255, 0, 0, 0.4)' // Darker transparent red on hover
        : 'rgba(0, 0, 255, 0.4)', // Darker transparent blue on hover
    },
  }}
>
  {status}
</Button>



          </Grid>
        </Grid>
      ))}
    </Box>
  );

  return (
    <Box
      sx={{
       
        padding: '24px',
        borderRadius: '12px',
        width: '80%',
        margin: 'auto',
     
      }}
    >
      {renderTasks(tasks.todo, 'To Do')}
      {renderTasks(tasks.inProgress, 'In Progress')}
    </Box>
  );
};

export default TaskList;
