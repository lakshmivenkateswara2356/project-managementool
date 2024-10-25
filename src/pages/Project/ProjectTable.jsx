import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Avatar,
  Button, LinearProgress, IconButton, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import profile from '../../Assets/Ellipse 47.png';
import profileteo from '../../Assets/Ellipse 48.png';
import profilethre from '../../Assets/Ellipse 61.png';
import profilefour from '../../Assets/Ellipse 54.png';
import profilefive from '../../Assets/Ellipse 68.png';
import Listimageone from '../../Assets/listimgone.png';
import Listimagetwo from '../../Assets/listimagetwo.png';
import Listimagethree from '../../Assets/listimagethree.png';
import Listimagefour from '../../Assets/listimagefour.png';
import Listimagefive from '../../Assets/listimagefive.png';
import Listimagesix from '../../Assets/listimagesix.png';
import Yogeshsingh from '../../Assets/YOGESH SINGH.jpg';

// Initial project data
const initialProjectData = [
  {
    id: 1,
    name: { 
      name: "Clikkle E-Sign",
      avatar: Listimageone 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [profile, profileteo, Yogeshsingh,profilethre],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },
  {
    id: 2,
    name: { 
      name: "Clikkle HR",
      avatar: Listimagetwo
    },
    key: "CES",
    lead: { name: "Isabella Campbell", avatar:profilethre, },
    team: [profilefive, profileteo, Yogeshsingh,profilefour,],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },
  {
    id: 3,
    name: { 
      name: "Web Scrapper",
      avatar: Listimagethree
    },
    key: "CES",
    lead: { name: "Dwayne Graham", avatar:profilefive, },
    team: [profilefour, profileteo, Yogeshsingh,profilefive,],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 20,
    progressLabel: "Project Status 70%"
  },
  {
    id: 4,
    name: { 
      name: "CMail",
      avatar: Listimagefour
    },
    key: "CES",
    lead: { name: "Daniel Thompson", avatar: profile, },
    team: [Yogeshsingh, profileteo, profilefour,profileteo,],
    priority: "Medieum",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },
  {
    id: 5,
    name: { 
      name: "Clikkle Projects",
      avatar: Listimagefive
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, profile],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },
  {
    id: 6,
    name: { 
      name: "Clikkle Admin",
      avatar: Listimagesix 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [ profilefour, Yogeshsingh, Yogeshsingh],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },


];

const ProjectTable = () => {
  const [projects, setProjects] = useState(initialProjectData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if the screen size is mobile

  const navigate = useNavigate();

  const handleActionClick = (event, projectId) => {
    setAnchorEl(event.currentTarget);
    setSelectedProjectId(projectId);
  };

  const handleViewProject = (projectId) => {
    navigate('/project-detail'); // Navigate to the project page
    handleActionClose(); // Close the menu
  };

  const Openspecificproject = () => {
    navigate("/project-detail");
  };

  const handleActionClose = () => {
    setAnchorEl(null);
    setSelectedProjectId(null);
  };

  // Simulate live updates for project progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProjects(prevProjects =>
        prevProjects.map(project => {
          const newProgress = project.progress + Math.floor(Math.random() * 3); // Simulate progress update
          return {
            ...project,
            progress: newProgress > 100 ? 100 : newProgress,
            progressLabel: `Project Status ${newProgress > 100 ? 100 : newProgress}%`
          };
        })
      );
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h5" sx={{ color: 'gray', marginBottom: '2px', fontSize: '17px', fontFamily: 'sans-serif' }}>
        Total Projects
      </Typography>
      <Typography variant="h3" sx={{ color: 'gray', marginBottom: '2px', fontSize: '34px' }}>
        {projects.length}
      </Typography>

      <Table sx={{ minWidth: '100%' }}>
        <TableHead>
          <TableRow>

            {!isMobile &&(
            <TableCell sx={{ fontSize: '13px' }}>S.No</TableCell>

          )}
            <TableCell sx={{ fontSize: '13px' }}>Projects</TableCell>
            {!isMobile && (
              <>
                <TableCell sx={{ fontSize: '13px' }}>Key</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Project Lead</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Team</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Priority</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Start Date</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Deadline</TableCell>
                <TableCell sx={{ fontSize: '13px' }}>Work Progress</TableCell>
              </>
            )}
            <TableCell sx={{ fontSize: '13px' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={project.id}>
              {!isMobile &&(
              <TableCell sx={{}}>{isMobile ? `#${index + 1}` : `#${index + 1}`}</TableCell>

            )}
              <TableCell sx={{ display: 'flex', alignItems: 'center', height: '2px' }}>
                {isMobile && <StarBorderIcon sx={{ marginRight: '10px',marginTop:'22px' }} />}
                {!isMobile ? (
                  <>
                    <StarBorderIcon sx={{ marginRight: '10px' }} />
                    <Typography sx={{ fontSize: '13px',marginTop:{xs:"22px",lg:"0px"} }} onClick={Openspecificproject}>
                      <img src={project.name.avatar} alt="Project Icon" style={{ width: '22px', height: '22px', marginRight: '10px' }} />
                      {project.name.name}
                    </Typography>
                  </>
                ) : (
                  <Typography sx={{ fontSize: '13px',marginTop:'22px' }} onClick={Openspecificproject}>
                    <img src={project.name.avatar} alt="Project Icon" style={{ width: '22px', height: '22px', marginRight: '10px' }} />
                    {project.name.name}
                  </Typography>
                )}
              </TableCell>
              {!isMobile && (
                <>
                  <TableCell sx={{ fontSize: '11px' }}>{project.key}</TableCell>
                  <TableCell sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={project.lead.avatar} alt={project.lead.name} sx={{ width: '22px', height: '22px', marginRight: '10px' }} />
                    {project.lead.name}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex' }}>
                      {project.team.map((member, idx) => (
                        <Avatar key={idx} src={member} alt="Team Member" sx={{ width: '22px', height: '22px', marginRight: '-4px' }} />
                      ))}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      sx={{
                        backgroundColor: project.priority === "High" ? 'rgba(255, 94, 94, 0.1)' :
                          project.priority === "Medium" ? 'rgba(240, 165, 0, 0.1)' : 'rgba(255, 140, 0, 0.1)',
                        borderColor: project.priority === "High" ? 'red' :
                          project.priority === "Medium" ? '#f0a500' : '#FF9446',
                        color: project.priority === "High" ? '#F33E3E' :
                          project.priority === "Medium" ? '#f0a500' : 'orange',
                        fontSize: '12px',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        textTransform: 'none',
                        height: '29px',
                        width: "100px",
                      }}
                    >
                      {project.priority}
                    </Button>
                  </TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>{project.startDate}</TableCell>
                  <TableCell sx={{ fontSize: '12px' }}>{project.deadline}</TableCell>
                  <TableCell sx={{ color: '#FFFFFF', width: '200px' }}>
                    <Typography variant="body2" sx={{ fontSize: '12px' }}>{project.progressLabel}</Typography>
                    <LinearProgress
                      variant="determinate"
                      value={project.progress}
                      sx={{
                        fontSize: '11px',
                        height: '8px',
                        borderRadius: '4px',
                        backgroundColor: '#555555',
                        '& .MuiLinearProgress-bar': { backgroundColor: '#007bff' },
                      }}
                    />
                  </TableCell>
                </>
              )}
              <TableCell >
                <IconButton sx={{marginTop:'-8px'}} onClick={(e) => handleActionClick(e, project.id)}>
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open && selectedProjectId === project.id}
                  onClose={handleActionClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                  <MenuItem onClick={() => handleViewProject(project.id)}>View Project</MenuItem>
                  <MenuItem onClick={handleActionClose}>Project Settings</MenuItem>
                  <MenuItem onClick={handleActionClose}>Move to Trash</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default ProjectTable;
