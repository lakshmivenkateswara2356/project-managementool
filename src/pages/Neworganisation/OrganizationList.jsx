import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

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
      console.log('Deleting organization:', selectedOrg);
      // Perform DELETE request here (add API logic)
      try {
        const response = await fetch(`/api/organizations/${selectedOrg}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          console.log('Organization deleted successfully');
          setOpen(false);
          navigate('/walk-through'); // Navigate to the walkthrough screen after deletion
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

  const handleOrgClick = (organizationName) => {
    console.log('Organization selected:', organizationName);
    // Navigate to the home page when an organization is clicked
    navigate('/'); // This will redirect to the home page
  };

  // Redirect to walkthrough if organization list is empty
  useEffect(() => {
    if (organizations.length === 0) {
      navigate('/walk-through'); // Redirect to the walkthrough screen
    }
  }, [organizations.length, navigate]);

  return (
    <div
      style={{
        textAlign: 'center',
        color: '#fff',
        padding: '50px',
        textAlign: 'left',
        marginLeft: '-12px',
        backgroundColor: 'black',
        height: '100vh',
      }}
    >
      <h1 style={{ fontWeight: 'lighter', fontFamily: 'sans-serif', marginBottom: '22px', marginTop: '75px' }}>
        Organization<span style={{ color: 'gray' }}> List</span>
      </h1>

      <Typography
        sx={{
          width: '850px',
          color: 'gray',
          fontFamily: 'sans-serif',
          fontSize: '18px',
          '@media(max-width:600px)': { width: '350px', fontSize: '18px' },
        }}
      >
        Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.
      </Typography>

      <h2 style={{ marginTop: '43px', fontSize: '18px', color: 'gray', fontFamily: 'sans-serif', marginBottom: '33px', fontWeight: 'lighter' }}>
        Total Organization
      </h2>

      <h1 style={{ fontSize: '46px', fontWeight: 'lighter', color: 'gray', fontFamily: 'sans-serif' }}>
        {organizations.length}
      </h1>

      <div style={{ overflowX: 'auto', width: '100%', margin: '20px auto' }}>
        <table style={{ width: '100%', color: '#fff', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #ccc' }}>
              <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Organizations</th>
              <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Status</th>
              <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org, index) => (
              <tr key={index} style={{ borderBottom: '1px solid black', fontFamily: 'sans-serif' }}>
                <td
                  style={{
                    padding: '10px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '150px',
                  }}
                  onClick={() => handleOrgClick(org.name)} // Navigate to home on click
                >
                  <img
                    src={org.imageUrl}
                    alt={`${org.name} logo`}
                    style={{
                      width: '30px',
                      height: '30px',
                      marginBottom: '-11px',
                      marginRight: '10px',
                      backgroundColor: 'white',
                      borderRadius: '22px',
                      paddingTop: '1px',
                    }}
                  />
                  <span>{org.name}</span>
                </td>

                <td style={{ padding: '10px' }}>
                  <button
                    style={{
                      backgroundColor: org.status === 'Active' ? 'rgba(0, 100, 0, 0.2)' : 'rgba(139, 0, 0, 0.2)',
                      color: org.status === 'Active' ? 'green' : 'red',
                      border: 'none',
                      padding: '5px 10px',
                      borderRadius: '5px',
                    }}
                  >
                    {org.status}
                  </button>
                </td>

                <td style={{ padding: '10px' }}>
                  <button
                    onClick={() => handleDelete(org.name)}
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    <DeleteIcon sx={{ color: 'red' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          '& .MuiDialog-paper': {
            backgroundColor: '#171717',
            borderRadius: '5px',
            width: '520px',
            height: '400px',
            maxWidth: '80%',
            maxHeight: '90vh',
          },
        }}
      >
        <Typography sx={{ color: 'white', marginTop: '33px', marginLeft: '37px', fontSize: '22px' }}>
          Delete {selectedOrg}
        </Typography>
        <DialogContent sx={{ color: 'gray', marginLeft: '17px' }}>
          <Typography sx={{ fontSize: '13px', width: '300px' }}>
            Are you sure you want to delete the organization{' '}
            <span style={{ fontWeight: 'bold', color: 'dodgerblue' }}>{selectedOrg}</span>?
          </Typography>
          <Typography color="error" sx={{ marginTop: '10px', marginLeft: '17px', marginTop: '34px', marginLeft: '1px', marginBottom: '34px' }}>
            This action cannot be undone.
          </Typography>

          <Typography sx={{ fontSize: '13px' }}>Please type the organization name to confirm:</Typography>
          <TextField
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'gray',
                },
                '&:hover fieldset': {
                  borderColor: 'lightgray',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'lightgray',
                },
              },
              '& .MuiOutlinedInput-input': {
                padding: '10px 14px',
                fontSize: '16px',
                height: '22px',
                color: 'white',
              },
              '& .MuiInputLabel-root': {
                color: 'gray',
                fontSize: '10px',
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'lightgray',
              },
              width: '370px',
            }}
            autoFocus
            margin="dense"
            label="Enter organization name"
            type="text"
            fullWidth
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end', padding: '16px' }}>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            sx={{
              marginTop: '-15px', marginRight: '5px',
              color: 'white',
              borderColor: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Close
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            sx={{
              marginTop: '-15px', marginRight: '25px',
              backgroundColor: 'red',
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrganizationList;
