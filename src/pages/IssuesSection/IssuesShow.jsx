import {
    Box,
    Typography,
    IconButton,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Divider,
    TableHead,
    TableRow,
    Checkbox,
    Paper,
    Button,
    Avatar,
    Card,
    CardContent,
} from '@mui/material';

import HtmlIcon from '../../Assets/Kanbanto.png';
import FigmaIcon from '@mui/icons-material/Palette'; 
import SearchIcon from '@mui/icons-material/Search'; // Import the search icon

import yogeshimg from '../../Assets/YOGESH SINGH.jpg';
import youngpretty from '../../Assets/young-pretty-model-is-smiling.jpg';
import waistipimgm from '../../Assets/waist-up-portrait-smiling-pleased-guy-round-spectacles-looking-front-him.jpg';
import smailymanimg from '../../Assets/smiley-man-holding-camera-front-view.jpg';
import rashidimg from '../../Assets/RASHID AHMED.jpg';
import { useState } from 'react';
import InfoIcon from '@mui/icons-material/InfoOutlined';

// Define styles for each status button
const getStatusStyles = (status) => {
    switch (status) {
        case 'To Do':
            return {
                backgroundColor: 'transparent',
                border: '1px solid red', // Orange border
                color: 'red', // Orange text color
                borderRadius: '10px',
                padding: '5px 15px',
                fontWeight: 'bold',
                fontSize: '13px',
                width:'11px',
            };
        case 'Review':
            return {
                backgroundColor: 'transparent',
                border: '1px solid #FF9800', // Lighter orange border
                color: '#FF9800', // Lighter orange text color
                borderRadius: '10px',
                padding: '5px 15px',
                fontWeight: 'bold',
                fontSize: '10px',
                width:'11px',
            };
        case 'In Progress':
            return {
                backgroundColor: 'transparent',
                border: '1px solid #0D47A1', // Blue border
                color: '#0D47A1', // Blue text color
                borderRadius: '10px',
                padding: '5px 15px',
                fontWeight: 'bold',
                fontSize: '10px',
                width:'25px',
            };
        default:
            return {};
    }
};

// Sample issues data
const initialIssues = [
    {
        type: 'CHR-6',
        key: 'Edit subscription plan',
        status: 'Review',
        assignee: 'Dave Maxwell',
        assigneeAvatar: yogeshimg, // Assignee avatar
        reporter: 'Daniel Thompson',
        reporterAvatar: youngpretty, // Reporter avatar
        priority: 'High',
        createdAt: '05-08-2024',
        updatedAt: '07-08-2024',
        dueDate: '20-10-2024',
    },
    {
        type: 'CHR-5',
        key: 'Fix pagination error',
        status: 'To Do',
        assignee: 'Rohit Anderson',
        assigneeAvatar: waistipimgm,
        reporter: 'Rohan Singh',
        reporterAvatar: smailymanimg,
        priority: 'Medium',
        createdAt: '19-08-2024',
        updatedAt: '30-08-2024',
        dueDate: '30-08-2024',
    },
    {
        type: 'ES-137',
        key: 'Structure the frontend code',
        status: 'Review',
        assignee: 'Dave Maxwell',
        assigneeAvatar: rashidimg,
        reporter: 'Daniel Thompson',
        reporterAvatar: smailymanimg,
        priority: 'Low',
        createdAt: '26-08-2024',
        updatedAt: '27-08-2024',
        dueDate: '21-09-2024',
    },
    {
        type: 'ES-137',
        key: 'Structure the frontend code',
        status: 'Review',
        assignee: 'Dave Maxwell',
        assigneeAvatar: youngpretty,
        reporter: 'Daniel Thompson',
        reporterAvatar: rashidimg,
        priority: 'Low',
        createdAt: '26-08-2024',
        updatedAt: '27-08-2024',
        dueDate: '21-09-2024',
    }
    ,
    {
        type: 'ES-137',
        key: 'Structure the frontend code',
        status: 'Review',
        assignee: 'Dave Maxwell',
        assigneeAvatar: rashidimg,
        reporter: 'Daniel Thompson',
        reporterAvatar: youngpretty,
        priority: 'Low',
        createdAt: '26-08-2024',
        updatedAt: '27-08-2024',
        dueDate: '21-09-2024',
    }
    ,
    
    
    
];
const IssuesShow = () => {
    const [issues, setIssues] = useState(initialIssues); // State for issues
    const [view, setView] = useState('list'); // State for managing view

    // Function to handle status change
    const handleStatusChange = (index, newStatus) => {
        const updatedIssues = [...issues];
        updatedIssues[index].status = newStatus;
        setIssues(updatedIssues);
    };

    return (
       
        
        <Box
            sx={{
                padding: '20px',
                
                color: '#fff',
                height: '80vh',
                overflowY: 'scroll',
                
            }}
        >
            {/* Header */}
            <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: '20px' }}>
                <Grid item>
                    <Typography variant="h5" color="gray">
                        Issues
                    </Typography>
                    
                </Grid>
                <Grid item>
                    <IconButton sx={{ color: 'white' }}>
                        <InfoIcon />
                    </IconButton>
                </Grid>
            </Grid>

            {/* Toggle View Buttons */}
           
           
            <Box display="flex" mb={2} sx={{ borderBottom: '1px solid #333', width: 'fit-content' }}>
            <Button
          variant="text"
          sx={{
            color: view === 'board' ? '#999' : '#999',
            borderBottom: view === 'board' ? '2px solid #1976d2' : 'none',
            borderRadius: 0,
            paddingBottom: '8px',
          }}
          onClick={() => setView('board')}
        >
          Board
        </Button>
       
       
       
        <Button
          variant="text"
          sx={{
            color: view === 'list' ? '#999' : '#999',
            borderBottom: view === 'list' ? '2px solid #1976d2' : 'none', // Underline when active
            marginRight: '10px',
            borderRadius: 0, // No border radius for flat underline effect
            paddingBottom: '8px', // Slight padding for the bottom
          }}
          onClick={() => setView('list')}
        >
          List
        </Button>
    
      </Box>

      {/* Search bar */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <SearchIcon
          sx={{
            position: 'absolute',
            left: 10,  // Position the icon inside the input
            color: '#999',
            fontSize:'19px',
            marginBottom:'12px',
          }}
        />
        <input
          placeholder="Search issues"
          style={{
            width: '250px',
            height: '38px',
            backgroundColor:'black',
            borderRadius: '9px',
            borderWidth: '0px',
            paddingLeft: '35px', // Add padding to the left to make space for the icon
            marginBottom: '12px',
            outline: 'none',
          }}
          type="search"
        />
      </Box>
            {/* Conditional Rendering Based on View */}
            {view === 'list' ? (
                <TableContainer component={Paper} sx={{  }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ width: '5%' }}>
                                <TableCell sx={{  }}>Type</TableCell>
                                </TableCell>
                                
                                <TableCell sx={{  }}>Keys</TableCell>
                                <TableCell sx={{ }}>Summary</TableCell>
                                <TableCell sx={{}}>Status</TableCell>
                                <TableCell sx={{  }}>Assignee</TableCell>
                                <TableCell sx={{  }}>Reporter</TableCell>
                                <TableCell sx={{  }}>Priority</TableCell>
                                <TableCell sx={{  }}>Created At</TableCell>
                                <TableCell sx={{}}>Updated At</TableCell>
                                <TableCell sx={{ }}>Due Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {issues.map((issue, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Checkbox sx={{ }} />
                                    </TableCell>
                                    <TableCell sx={{  }}>{issue.type}</TableCell>
                                    <TableCell sx={{  }}>{issue.key}</TableCell>

                                    {/* Status Button */}
                                    <TableCell>
                                        <Button
                                            onClick={() => handleStatusChange(index, issue.status === 'To Do' ? 'Review' : 'In Progress')}
                                          
                                            sx={getStatusStyles(issue.status)}
                                        >
                                            {issue.status}
                                        </Button>
                                    </TableCell>
                                   
                                    <TableCell sx={{   fontSize: '12px',marginLeft:"12px", }}>
                                        <Box sx={{display:'flex'}}>
                                        <Avatar src={issue.assigneeAvatar} sx={{  height: '17px', width: '17px',marginRight:'8px' }} />
                                        {issue.assignee}
                                        </Box>
                                    </TableCell>
                                     

                                    
                                    <TableCell sx={{   fontSize: '12px',marginLeft:"12px", }}>
                                        <Box sx={{display:'flex'}}>
                                        <Avatar src={issue.reporterAvatar} sx={{ height: '17px', width: '17px',marginRight:'8px' }} />
                                        {issue.reporter}
                                        </Box>
                                    </TableCell>

                                    <TableCell sx={{  }}>{issue.priority}</TableCell>
                                    <TableCell sx={{ }}>{issue.createdAt}</TableCell>
                                    <TableCell sx={{  }}>{issue.updatedAt}</TableCell>
                                    <TableCell sx={{  }}>{issue.dueDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <Grid container spacing={2}>
        {issues.map((issue, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                    sx={{
                       
                       
                        padding: '10px',
                        borderRadius: '10px',
                    }}
                >
                    <CardContent>
                        <Box sx={{ display: "flex", alignItems: 'center' }}>
                            <Checkbox sx={{ color: 'white' }} />
                            <Typography sx={{ fontSize: "16px", marginTop: '8px' }} variant="h6">{issue.key}</Typography>
                        </Box>
                        <Typography sx={{ fontSize: "14px", marginTop: '8px', color: 'gray' }} variant="h6">Clikkle Hr</Typography>
                        <Typography variant="body2" color="gray">
                            {issue.type}
                        </Typography>

                        <Divider sx={{ backgroundColor: 'gray', height: '1px', width: '400px', marginTop: '12px', marginBottom: '24px' }} />

                        {/* Assignee and Technologies */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar src={issue.assigneeAvatar} sx={{ height: '27px', width: '27px', marginRight: '8px' }} />
                            </Box>

                            {/* Technology Icon */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                {/* Display different icons based on the technology */}
                                {issue.technology === 'HTML' ? (
                                    <HtmlIcon sx={{ color: '#F16529', fontSize: '30px' }} />
                                ) : issue.technology === 'Figma' ? (
                                    <FigmaIcon sx={{ color: '#F24E1E', fontSize: '30px' }} />
                                ) : null}
                            </Box>

                            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        height: '27px', width: '27px',
                                        color: issue.priority === 'High' ? '#ff4d4d' : (issue.priority === 'Medium' ? '#ffcc00' : '#00ccff'),
                                        backgroundColor: 'transparent',
                                        borderColor: issue.priority === 'High' ? '#ff4d4d' : (issue.priority === 'Medium' ? '#ffcc00' : '#00ccff'),
                                        margin: '5px',
                                        "&:hover": {
                                            backgroundColor: issue.priority === 'High' ? '#ff4d4d10' : (issue.priority === 'Medium' ? '#ffcc0010' : '#00ccff10'),
                                        }
                                    }}
                                >
                                    {issue.priority}
                                </Button>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        height: '27px', marginTop: '33px',
                                        color: issue.status === 'In Progress' ? '#0057e7' : (issue.status === 'Review' ? '#ffa500' : '#999'),
                                        backgroundColor: 'transparent',
                                        borderColor: issue.status === 'In Progress' ? '#0057e7' : (issue.status === 'Review' ? '#ffa500' : '#999'),
                                        margin: '5px',
                                        "&:hover": {
                                            backgroundColor: issue.status === 'In Progress' ? '#0057e710' : (issue.status === 'Review' ? '#ffa50010' : '#99910'),
                                        }
                                    }}
                                >
                                    {issue.status}
                                </Button>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
            )}
        </Box>

        
    );
};

export default IssuesShow;
