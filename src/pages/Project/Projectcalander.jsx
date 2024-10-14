import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, Button, TableCell, TableHead, TableRow, TextField, Modal, IconButton } from '@mui/material';
import Projectheader from './ProjectHeader';
import Image from '../../components/Image';
import Calander from '../../Assets/calander.png'; // Your calendar icon

import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Checkbox from '@mui/material/Checkbox';
import { grey, blue, red } from '@mui/material/colors';

const Projectcalander = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [eventText, setEventText] = useState('');
  const [events, setEvents] = useState({});
  const [showSidePanel, setShowSidePanel] = useState(false); // State for the right-side box



  const [taskItems, setTaskItems] = useState([
    { label: 'Testing', completed: true, priority: 'low' },
    { label: 'Feedbacks + Design inconsistencies', completed: false, priority: 'high' },
    { label: 'Filter documents in table', completed: true, priority: 'low' },
  ]);
  // Get the current day, month, and year
  const today = currentDate.getDate();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the first day of the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  
  // Generate the days of the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  
  const previousMonthDays = new Date(currentYear, currentMonth, 0).getDate();

  // Generate a grid for the current month
  const calendarDays = [];
  let dayCounter = 1;

  // Fill in the blanks for days from the previous month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push({
      day: previousMonthDays - (firstDayOfMonth - 1 - i),
      currentMonth: false
    });
  }

  // Fill in the current month's days
  while (dayCounter <= daysInMonth) {
    calendarDays.push({
      day: dayCounter,
      currentMonth: true
    });
    dayCounter++;
  }

  // Fill in the remaining days for the next month to complete the grid
  while (calendarDays.length % 7 !== 0) {
    calendarDays.push({
      day: calendarDays.length % 7,
      currentMonth: false
    });
  }

  // Handle when a day is clicked
  const handleDayClick = (day) => {
    if (day.currentMonth) {
      setSelectedDay(day.day);
      setOpenModal(true);
    }
  };

  // Handle the creation of an event
  const handleCreateEvent = () => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDay]: eventText,
    }));
    setEventText('');
    setOpenModal(false);
  };

  // Toggle the right-side panel
  const handleToggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  // Active (today) and inactive (other days) cell styles
  const activeCellStyles = {
    color: '#fff',
    backgroundColor: '#007bff',
    textAlign: 'center',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    fontSize: '16px',
    lineHeight: '40px',
  };
  const inactiveCellStyles = {
    color: '#757575',
    textAlign: 'center',
    padding: '15px',
  };

  return (
    <Box sx={{ display: 'flex', position: 'relative' }}>
      <Box>
        <Projectheader />

        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '10px',
            marginTop: '2px',
          }}
        >
          <Typography sx={{ fontSize: "15px", marginRight: '12px' }} variant="h5">
            {currentDate.toLocaleString('default', { month: 'long' })}, {currentYear}
          </Typography>
          <Button
            sx={{  borderRadius: '4px', fontSize: '13px', marginRight: '12px' }}
            onClick={() => setCurrentDate(new Date())} // Set to today when clicked
          >
            Today
          </Button>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              sx={{
                fontSize: "18px",
                color: '#fff',
                marginRight: '5px',
                padding: '5px',
              }}
              onClick={() => setCurrentDate(new Date(currentYear, currentMonth - 1, 1))} // Go to previous month
            >
              &lt;
            </Button>
            <Button
              sx={{
                fontSize: "18px",
                color: '#fff',
                marginRight: '10px',
                padding: '5px',
              }}
              onClick={() => setCurrentDate(new Date(currentYear, currentMonth + 1, 1))} // Go to next month
            >
              &gt;
            </Button>
            <IconButton
              sx={{
                color: 'red',
                
                padding: '5px',
              }}
              onClick={handleToggleSidePanel}
            >
              <Image sx={{ height: '25px',width: '45px', marginLeft: '-22px' }} src={Calander} />
            </IconButton>
          </Box>
        </Box>

        <Box
          sx={{
            width: '76vw',
            borderRadius: '8px',
            color: '#ffffff',
          }}
        >
          {/* Calendar Table */}
          <Table sx={{  borderCollapse: 'collapse', height: '46vh' }}>
            <TableHead>
              <TableRow>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <TableCell
                    key={day}
                    sx={{
                      textAlign: 'center',
                      padding: '10px',
                    }}
                  >
                    {day}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody sx={{height:'46vh'}}>
              {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map((_, rowIndex) => (
                <TableRow key={rowIndex}>
                  {calendarDays.slice(rowIndex * 7, rowIndex * 7 + 7).map((dayObj, cellIndex) => (
                    <TableCell
                      key={cellIndex}
                      onClick={() => handleDayClick(dayObj)}
                      sx={dayObj.currentMonth && dayObj.day === today ? activeCellStyles : inactiveCellStyles}
                    >
                      {dayObj.currentMonth ? (
                        <>
                          {dayObj.day}
                          {/* Show event above the date if it exists */}
                          {events[dayObj.day] && (
                            <Typography sx={{ fontSize: '10px', color: '#f50057' }}>
                              {events[dayObj.day]}
                            </Typography>
                          )}
                        </>
                      ) : ''}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Modal for adding event */}
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            backgroundColor: 'gray', 
            padding: '20px', 
            borderRadius: '8px' 
          }}>
            <Typography variant="h6">Add Event for {selectedDay}</Typography>
            <TextField
              fullWidth
              label="Event"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              sx={{ marginBottom: '10px' }}
            />
            <Button onClick={handleCreateEvent} variant="contained" color="primary">
              Create
            </Button>
          </Box>
        </Modal>
      </Box>

      {/* Right-side panel */}
      {showSidePanel && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: '100%',
            width: '25vw',
            backgroundColor: '#2d2d2d',
            marginTop:'34px',
            padding: '20px',
            color: '#ffffff',
          }}
        >
           <Typography variant="h6" sx={{ marginBottom: '20px' }}>
            Schedule your work
          </Typography>

          {/* Search Field */}
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
            <TextField
              fullWidth
              placeholder="Search unscheduled item"
              variant="outlined"
              InputProps={{
                startAdornment: <SearchIcon sx={{ color: grey[500], marginRight: '5px' }} />,
                style: { color: '#ffffff' },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#757575' },
                  '&:hover fieldset': { borderColor: '#ffffff' },
                },
                input: { color: '#ffffff' },
              }}
            />
          </Box>

          {/* Filters Button */}
          <Button
            fullWidth
            sx={{
              marginBottom: '20px',
              borderColor: grey[500],
              color: grey[400],
              textTransform: 'none',
            }}
            variant="outlined"
            startIcon={<FilterListIcon sx={{ color: grey[400] }} />}
          >
            Filters
          </Button>

          {/* Task List */}
          <Box
            sx={{
              padding: '15px',
              border: '1px dashed #757575',
              borderRadius: '5px',
              marginBottom: '20px',
            }}
          >
            {taskItems.map((task, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '10px',
                }}
              >
                {/* Checkbox */}
                <Checkbox
                  checked={task.completed}
                  sx={{
                    color: task.completed ? blue[500] : grey[500],
                    '&.Mui-checked': { color: blue[500] },
                  }}
                />

                {/* Task Label */}
                <Typography
                  variant="body1"
                  sx={{
                    color: '#ffffff',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    flexGrow: 1,
                    marginLeft: '10px',
                  }}
                >
                  {task.label}
                </Typography>

                {/* Priority Indicator */}
                {task.priority === 'high' && (
                  <IconButton size="small" sx={{ marginLeft: '5px' }}>
                    <span
                      style={{
                        backgroundColor: red[500],
                        borderRadius: '50%',
                        width: '12px',
                        height: '12px',
                        display: 'inline-block',
                      }}
                    />
                  </IconButton>
                )}

                {task.priority === 'low' && (
                  <IconButton size="small" sx={{ marginLeft: '5px' }}>
                    <span
                      style={{
                        backgroundColor: blue[500],
                        borderRadius: '50%',
                        width: '12px',
                        height: '12px',
                        display: 'inline-block',
                      }}
                    />
                  </IconButton>
                )}
              </Box>
            ))}
          </Box>

          <Typography sx={{ color: grey[400], fontSize: '14px' }}>
            All work has been scheduled
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Projectcalander;
