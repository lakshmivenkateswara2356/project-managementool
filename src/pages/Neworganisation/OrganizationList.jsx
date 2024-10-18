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
      try {
        const response = await fetch(`/api/organizations/${selectedOrg}`, {
          method: 'DELETE',
        });
        
        if (response.ok) {
          console.log('Organization deleted successfully');
          setOpen(false);
          navigate('/walk-through');
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
    navigate('/'); // Navigate to the home page
  };

  useEffect(() => {
    if (organizations.length === 0) {
      navigate('/walk-through');
    }
  }, [organizations.length, navigate]);

  return (
    <div style={{
      textAlign: 'center',
      color: '#fff',
      padding: '50px',
      backgroundColor: 'black',
      height: '100vh',
      textAlign: 'left',
      marginLeft: '-12px',
    }}>
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
                  onClick={() => handleOrgClick(org.name)}
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
            Are you sure you want to delete the organization <span style={{ color: 'white' }}>{selectedOrg}</span>?<br />
            Please type the organization name <span style={{ color: 'red' }}>{selectedOrg}</span> to confirm.
          </Typography>
          <TextField
            sx={{ marginTop: '20px', width: '350px', color: 'white' }}
            label="Organization Name"
            variant="outlined"
            onChange={(e) => setConfirmName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: 'gray' }}>Cancel</Button>
          <Button onClick={confirmDelete} sx={{ color: 'red' }}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrganizationList;
