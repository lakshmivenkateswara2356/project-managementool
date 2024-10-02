import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,Typography } from '@mui/material';

const OrganizationList = () => {
  const organizations = [
    {
      name: 'Clikkle Technologies',
      status: 'Active',
      imageUrl: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg', // Clikkle logo
    },
    {
      name: 'Beehive Corporate Affairs',
      status: 'Inactive',
      imageUrl: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg', // Beehive logo
    },
    {
      name: 'Revolution Africa',
      status: 'Active',
      imageUrl: 'https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg', // Revolution Africa logo
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);
  const [confirmName, setConfirmName] = useState('');

  const handleDelete = (organizationName) => {
    setSelectedOrg(organizationName);
    setOpen(true);
  };

  const confirmDelete = () => {
    if (confirmName === selectedOrg) {
      console.log('Deleting organization:', selectedOrg);
      // Perform DELETE request here
      setOpen(false);
    } else {
      alert('Organization name does not match.');
    }
  };

  return (
    <div style={{ textAlign: 'center', color: '#fff', padding: '50px', textAlign: 'left', marginLeft: '-12px', backgroundColor: 'black', height: '100vh' }}>
      <h1 style={{ fontWeight: 'lighter', fontFamily: 'sans-serif' }}>Organization<span style={{ color: 'gray' }}> List</span></h1>
      <p style={{ width: '900px', color: 'gray', fontFamily: 'sans-serif', fontSize: '15px' }}>Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.</p>
      <h2 style={{ marginTop: '43px', fontSize: '15px', color: 'gray', fontFamily: 'sans-serif' }}>Total Organization</h2>
      <h1 style={{ fontSize: '26px', fontWeight: 'lighter', color: 'gray', fontFamily: 'san-sirf' }}>{organizations.length}</h1>
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
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <img src={org.imageUrl} alt={`${org.name} logo`} style={{ width: '30px', height: '30px', marginBottom: '-5px', marginRight: '10px', backgroundColor: 'white', borderRadius: '22px', paddingTop: '1px' }} />
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
                    cursor: 'pointer',
                  }}
                >
                  <DeleteIcon style={{ color: 'red', fontSize: '20px' }} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Delete confirmation dialog */}
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" PaperProps={{ style: {  color: '#fff', padding: '20px',height:'50vh',width:'70vw', } }}>
        <DialogTitle style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff', paddingBottom: '0px' }}>
          Delete {selectedOrg}
        </DialogTitle>
        <DialogContent style={{ fontSize: '15px', fontFamily: 'sans-serif',marginTop:'22px',color:'gray',}}>
          <p>Are you sure you want to delete the organization <a href="#" style={{ color: '#5b94f5', textDecoration: 'none',fontSize:'12px' }}>{selectedOrg}</a>?</p>
          <p style={{ color: 'red', fontSize: '13px', marginBottom: '20px',marginTop:'25px', }}>This action cannot be undone.</p>
          
          <Typography sx={{color:'white',fontFamily:'sans-serif',
            fontSize:'15px',
          }}>Please type in the organization name to confirm:</Typography>
          <TextField
            label="Enter organisation name:"
            fullWidth
            variant="outlined"
            value={confirmName}
            onChange={(e) => setConfirmName(e.target.value)}
            InputLabelProps={{ style: { color: 'white', fontSize: '13px' } }}
            inputProps={{ style: { color: '#fff', padding: '10px' } }}
            style={{ marginBottom: '20px', backgroundColor: '#333', borderRadius: '5px',marginTop:'5px', }}
          />
        </DialogContent>
        <DialogActions style={{  }}>
          <Button
            onClick={() => setOpen(false)}
            variant="outlined"
            style={{
              color: '#fff',
              borderColor: '#fff',
              padding: '6px 20px',
              fontSize: '13px',
              fontFamily: 'sans-serif',
            }}
          >
            Close
          </Button>
          <Button
            onClick={confirmDelete}
            variant="contained"
            style={{
              backgroundColor: '#5b94f5',
              color: '#fff',
              padding: '6px 20px',
              fontSize: '13px',
              fontFamily: 'sans-serif',
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
