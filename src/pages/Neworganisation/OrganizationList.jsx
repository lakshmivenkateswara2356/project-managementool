import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import DeleteIcon from '@mui/icons-material/Delete';
import NotificationIcon from '../../components/NotificationIcon';
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
      <h1 style={{ fontWeight: 'lighter', fontFamily: 'sans-serif',marginBottom:'22px',marginTop:'75px' }}>Organization<span style={{ color: 'gray' }}> List</span></h1>
      <Typography sx={{ width: '900px', color: 'gray', fontFamily: 'sans-serif', fontSize: '18px',width:'850px',"@media(max-width:600px)":{width:'350px',fontSize:'18px'}  }}>Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.</Typography>
      <h2 style={{ marginTop: '43px', fontSize: '18px', color: 'gray', fontFamily: 'sans-serif',marginBottom:'33px',fontWeight:'lighter', }}>Total Organization</h2>
      <h1 style={{ fontSize: '46px', fontWeight: 'lighter', color: 'gray', fontFamily: 'san-sirf' }}>{organizations.length}</h1>
      <table style={{ width: '100%', margin: '20px auto', color: '#fff', borderCollapse: 'collapse' }}>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: '100%' }}>
    <thead>
      <tr style={{ borderBottom: '5px solid #ccc', display: 'table-row' }}>
        <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Organizations</th>
        <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Status</th>
        <th style={{ padding: '10px', fontFamily: 'sans-serif' }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* Add table body rows here */}
    </tbody>
  </table>
</div>
  <tbody>
    {organizations.map((org, index) => (
      <tr key={index} style={{ borderBottom: '1px solid black', fontFamily: 'sans-serif' }}>
        <td
          style={{ padding: '10px', textAlign: 'left', cursor: 'pointer', fontFamily: 'sans-serif' }}
          onClick={() => handleOrgClick(org.name)}
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
            <DeleteIcon sx={{ color: 'red' }} />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

<style jsx>{`
  @media (max-width: 600px) {
    table {
      width: 100px;
      font-size: 18px;
    }
    th, td {
      padding: 5px;
      font-size: 14px;
    }

    tr{
    width:50px;
    }
    img {
      width: 20px;
      height: 20px;
    }
    button {
      padding: 3px 5px;
    }
  }




   @media (max-width: 768px) {
    thead {
      display: block; /* Allow thead to be block for easier manipulation */
    }

    tr {
      display: table; /* Keep table behavior for the rows */
      width: 100%; /* Ensures the row takes full width */
    }

    th {
      padding: 10px; /* Padding for mobile view */
      font-size: 14px; /* Adjust font size for mobile */
      white-space: nowrap; /* Prevents text from wrapping */
    }
  }

  @media (min-width: 769px) {
    thead {
      display: table-header-group; /* Regular display for larger screens */
    }

    th {
      padding: 10px; /* Default padding for larger screens */
    }
  }
`}</style>


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
