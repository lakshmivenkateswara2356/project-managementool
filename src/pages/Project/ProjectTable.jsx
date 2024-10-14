import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Table, TableBody, TableCell, TableHead, TableRow, Avatar,
  Button, LinearProgress, IconButton, Menu, MenuItem
} from '@mui/material';

import { useNavigate } from 'react-router-dom'; // Import useNavigate

import StarBorderIcon from '@mui/icons-material/StarBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Yogeshsingh from '../../Assets/YOGESH SINGH.jpg';

// Initial project data
const initialProjectData = [
  {
    id: 1,
    name: { 
      name: "Clikkle E-Sign",
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh,Yogeshsingh],
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
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh],
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
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh],
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
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh],
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
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh],
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
      avatar: Yogeshsingh 
    },
    key: "CES",
    lead: { name: "Yogesh Singh", avatar: Yogeshsingh, },
    team: [Yogeshsingh, Yogeshsingh, Yogeshsingh],
    priority: "High",
    startDate: "05-08-2024",
    deadline: "23-08-2024",
    progress: 70,
    progressLabel: "Project Status 70%"
  },
  // Add more project objects as needed
];
const ProjectTable = () => {
  const [projects, setProjects] = useState(initialProjectData);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const open = Boolean(anchorEl);

  // Handle action menu click
  const handleActionClick = (event, projectId) => {
    setAnchorEl(event.currentTarget);
    setSelectedProjectId(projectId);

  };

  const navigate = useNavigate(); 

  const handleViewProject = (projectId) => {
    navigate(`/project/${projectId}`); // Navigate to the project page
    handleActionClose(); // Close the menu
  };

  // Handle action menu close
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
        <TableHead sx={{ backgroundColor: '#171717' }}>
          <TableRow>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>S.No</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Projects</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Key</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Project Lead</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Team</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Priority</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Start Date</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Deadline</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Work Progress</TableCell>
            <TableCell sx={{ fontSize: '13px', color: '#FFFFFF' }}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project, index) => (
            <TableRow key={project.id}>
              <TableCell sx={{ color: '#FFFFFF' }}>#{index + 1}</TableCell>
              <TableCell sx={{ display: 'flex', alignItems: 'center', color: '#FFFFFF', height: '90px' }}>
                <StarBorderIcon sx={{ color: '#FFFFFF', marginRight: '10px' }} />
                <img src={project.name.avatar} alt="Project Icon" style={{ width: '22px', height: '22px', marginRight: '10px' }} />
                {project.name.name}
              </TableCell>
              <TableCell sx={{ fontSize: '11px', color: '#FFFFFF' }}>{project.key}</TableCell>
              <TableCell sx={{ display: 'flex', alignItems: 'center', color: '#FFFFFF' }}>
                <Avatar src={project.lead.avatar} alt={project.lead.name} sx={{ width: '22px', height: '22px', marginRight: '10px' }} />
                {project.lead.name}
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex' }}>
                  {project.team.map((member, idx) => (
                    <Avatar key={idx} src={member} alt="Team Member" sx={{ width: '22px', height: '22px', marginRight: '4px' }} />
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: project.priority === "High" ? 'rgba(255, 94, 94, 0.1)' :
                      project.priority === "Medium" ? 'rgba(240, 165, 0, 0.1)' : 'rgba(91, 192, 222, 0.1)',
                    borderColor: project.priority === "High" ? '#ff5e5e' :
                      project.priority === "Medium" ? '#f0a500' : '#5bc0de',
                    color: project.priority === "High" ? '#ff5e5e' :
                      project.priority === "Medium" ? '#f0a500' : '#5bc0de',
                    fontSize: '12px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    textTransform: 'none',
                    height: '29px',
                  }}
                >
                  {project.priority}
                </Button>
              </TableCell>
              <TableCell sx={{ fontSize: '12px', color: '#FFFFFF' }}>{project.startDate}</TableCell>
              <TableCell sx={{ fontSize: '12px', color: '#FFFFFF' }}>{project.deadline}</TableCell>
              <TableCell sx={{ color: '#FFFFFF', width: '200px' }}>
                <Typography variant="body2" sx={{ fontSize: '12px', color: '#FFFFFF' }}>{project.progressLabel}</Typography>
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
              <TableCell>
                <IconButton onClick={(e) => handleActionClick(e, project.id)} sx={{ color: '#FFFFFF' }}>
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
