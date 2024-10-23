import React, { useState, useEffect, startTransition } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

import Thementire from '../../style/theme';
import { Box,
  Dialog, DialogContent, DialogActions, 
  Button, TextField, Typography, Table, TableBody, 
  TableCell,  TableHead, TableRow, Paper 
} from '@mui/material';

const OrganizationList = ({ organizations }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [confirmName, setConfirmName] = useState('');
  const navigate = useNavigate();

  const handleDelete = (organizationName) => {
    setSelectedOrg(organizationName);
    setOpen(true);
  };

  const confirmDelete = async () => {
    

    if (confirmName === selectedOrg) {
      try {
        const response = await fetch(`/api/organizations/${selectedOrg}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log('Organization deleted successfully');
          setOpen(false);
          startTransition(() => navigate('/walk-through'));
        } else {
          alert('Failed to delete the organization. Please try again.');
        }
      } catch (error) {
        console.error('Error deleting organization:', error);
        alert('Error deleting organization. Please try again later.');
      }
    } else {
      alert('Organization name does not match.');
    }
  };




  const handleOrganizationClick = (organization) => {
    localStorage.setItem("org", JSON.stringify(organization));
    startTransition(() => navigate("/", { state: { organization } }));
  };

  useEffect(() => {
    if (organizations.length === 0) {
      navigate('/walk-through');
    }
  }, [organizations.length, navigate]);

  return (

    <Thementire>
    <Box style={{
      textAlign: 'left',  padding: '50px', 
      height: '100vh', marginLeft: '-12px',
    }}>
      <h1 style={{ fontWeight: 'lighter', fontFamily: 'sans-serif', marginBottom: '22px', marginTop: '75px' }}>
        Organization<span style={{ color: 'gray' }}> List</span>
      </h1>

      <Typography sx={{ 
        width: '850px', color: 'gray', fontFamily: 'sans-serif', fontSize: '18px',
        '@media(max-width:600px)': { width: '350px', fontSize: '18px' },
      }}>
        Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.
      </Typography>

      <h2 style={{ marginTop: '43px', fontSize: '18px', color: 'gray', marginBottom: '33px', fontWeight: 'lighter' }}>
        Total Organization
      </h2>

      <h1 style={{ fontSize: '46px', fontWeight: 'lighter', color: 'gray' }}>
        {organizations.length}
      </h1>

      <Box container component={Paper} sx={{ marginTop: '20px', maxWidth: '100%',backgroundColor:'#141414'}}>
        <Table>
          <TableHead sx={{backgroundColor:'background.default'}}>
            <TableRow>
              <TableCell sx={{  fontWeight: 'bold' }}>Organization</TableCell>
              <TableCell sx={{  fontWeight: 'bold' }}>Status</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <Box sx={{backgroundColor:'#202020',width:'100%',height:'1px'}}></Box>
          <TableBody sx={{backgroundColor:'background.default'}}>
            {organizations.map((org) => (
              <TableRow key={org._id} onClick={() => handleOrganizationClick(org)} sx={{ cursor: 'pointer' }}>
                <TableCell>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                      src={org.imageUrl}
                      alt={org.name} 
                      style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '15px' }} 
                    />
                    <Typography sx={{  }}>{org.name}</Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <span 
                    style={{
                      backgroundColor: org.status === 'Active' ? 'rgba(0, 100, 0, 0.2)' : 'rgba(139, 0, 0, 0.2)',
                      color: org.status === 'Active' ? 'green' : 'green',
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  >
                    {org.status}
                  </span>
                </TableCell>
                <TableCell>
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent table row click
                      handleDelete(org.name);
                    }}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      width:"13px",
                      cursor: 'pointer',
                    }}
                  >
                    <DeleteIcon sx={{ color: 'red' }} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>



      
      <Dialog
  open={open}
  onClose={() => setOpen(false)}
  sx={{
    '& .MuiDialog-paper': {
      backgroundColor: '#171717',
      borderRadius: '8px',
      width: '400px',
      padding: '24px',
      maxWidth: '90%',
      maxHeight: '85vh',
    },
  }}
>
  <Typography
    sx={{
      color: 'white',
      fontSize: '20px',
      fontWeight: 600,
      
      marginBottom: '16px',
    }}
  >
    Delete <span style={{ color: '#42a5f5' }}>{selectedOrg}</span>
  </Typography>

  <DialogContent sx={{ padding: '0px' }}>
    <Typography
      sx={{
        color: 'gray',
        fontSize: '14px',
        marginBottom: '8px',
      }}
    >
      Are you sure you want to delete the organization{' '}
      <span style={{ color: '#42a5f5' }}>{selectedOrg}</span>?
    </Typography>

    <Typography
      sx={{
        color: 'red',
        fontSize: '13px',
        marginBottom: '16px',
        fontWeight: 500,
      }}
    >
      This action cannot be undone.
    </Typography>

    <Typography sx={{ fontSize: '14px', marginBottom: '8px', color: 'gray' }}>
      Please type the organization name to confirm:
    </Typography>

    <TextField
      fullWidth
      variant="outlined"
      placeholder="Enter organization name"
      onChange={(e) => setConfirmName(e.target.value)}
      sx={{
        marginBottom: '24px',
        backgroundColor: '#1c1c1c',
        borderRadius: '4px',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'gray',
          },
          '&:hover fieldset': {
            borderColor: 'white',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#42a5f5',
          },
        },
        input: { color: 'white' },
      }}
    />
  </DialogContent>

  <DialogActions
    sx={{
      justifyContent: 'flex-end',
      padding: '0px 8px',
    }}
  >
    <Button
      onClick={() => setOpen(false)}
      sx={{
        color: 'white',
        borderStyle:'solid',
        borderWidth:'1px',
        borderColor:'gray',
        textTransform: 'none',
        fontWeight: 500,

      }}
    >
      Close
    </Button>

    <Button
      onClick={confirmDelete}
      sx={{
        color: 'white',
        backgroundColor: '#42a5f5',
        textTransform: 'none',
        fontWeight: 500,
        '&:hover': {
          backgroundColor: '#d32f2f',
        },
      }}
    >
      Delete
    </Button>
  </DialogActions>
</Dialog>


      
    </Box>

    </Thementire>
  );
};

export default OrganizationList;
