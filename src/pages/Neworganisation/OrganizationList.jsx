import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Typography } from '@mui/material';

const OrganizationList = ({ organizations }) => {
  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [confirmName, setConfirmName] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook for redirection

  const handleDelete = (organizationName) => {
    setSelectedOrg(organizationName);
    setOpen(true);
  };

  const confirmDelete = () => {
    if (confirmName === selectedOrg) {
      console.log('Deleting organization:', selectedOrg);
      // Perform DELETE request here
      setOpen(false);
      // After deleting or selecting, navigate to home
      navigate('/');
    } else {
      alert('Organization name does not match.');
    }
  };

  const handleOrgClick = (organizationName) => {
    console.log('Organization selected:', organizationName);
    // Navigate to Home page or any other page on clicking the organization
    navigate('/'); // Redirect to home
  };

  return (
    <div style={{ textAlign: 'center', color: '#fff', padding: '50px', textAlign: 'left', marginLeft: '-12px', backgroundColor: 'black', height: '100vh' }}>
      <h1 style={{ fontWeight: 'lighter', fontFamily: 'sans-serif',marginBottom:'22px', }}>Organization<span style={{ color: 'gray' }}> List</span></h1>
      <p style={{ width: '900px', color: 'gray', fontFamily: 'sans-serif', fontSize: '18px',width:'850px', }}>Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.</p>
      <h2 style={{ marginTop: '43px', fontSize: '18px', color: 'gray', fontFamily: 'sans-serif',marginBottom:'33px',fontWeight:'lighter', }}>Total Organization</h2>
      <h1 style={{ fontSize: '46px', fontWeight: 'lighter', color: 'gray', fontFamily: 'san-sirf' }}>{organizations.length}</h1>
      <table style={{ width: '100%', margin: '20px auto', color: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Organizations</th>
            <th style={{ paddingRight: '120px', marginRight: '133px' }}>Status</th>
            <th style={{ paddingRight: '120px', marginRight: '133px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org, index) => (
            <tr key={index} style={{ borderBottom: '1px solid black' }}>
              <td
                style={{ padding: '10px', textAlign: 'left', cursor: 'pointer' }}
                onClick={() => handleOrgClick(org.name)} // Handle organization click to navigate to home
              >
                <img
                  src={org.imageUrl}
                  alt={`${org.name} logo`}
                  style={{ width: '30px', height: '30px', marginBottom: '-5px', marginRight: '10px', backgroundColor: 'white', borderRadius: '22px', paddingTop: '1px' }}
                />
                {org.name}
              </td>
              <td style={{ padding: '10px' }}>
                <button
                  style={{
                    backgroundColor: org.status === 'Active' ? 'rgba(0, 100, 0, 0.2)' : 'rgba(139, 0, 0, 0.2)',
                    color: org.status === 'Active' ? 'green' : 'red',
                    border: 'none',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
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
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete Confirmation Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Delete Organization</DialogTitle>
        <DialogContent>
          <Typography>Enter the organization's name to confirm deletion:</Typography>
          <TextField
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrganizationList;
