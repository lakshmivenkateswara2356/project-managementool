import React from 'react';

import DeleteIcon from '@mui/icons-material/Delete';
const OrganizationList = () => {
  const organizations = [
    {
      name: 'Clikkle Technologies',
      status: 'Active',
    },
  ];

  const handleDelete = (organizationName) => {
    console.log('Deleting organization:', organizationName);
    // Perform DELETE request
  };

  return (
    <div style={{ textAlign: 'center', color: '#fff', padding: '50px',textAlign:'left',marginLeft:'-12px',backgroundColor:'black',height:'100vh' }}>
      <h1 style={{fontWeight:'lighter', fontFamily:'sans-serif'}}>Organization<span  style={{color:'gray'}}> List</span></h1>
      <p style={{width:'900px',color:'gray',fontFamily:'sans-serif',fontSize:'15px'}}>Project organization refers to the style of coordination, communication, and management a team uses throughout a project’s lifecycle.</p>
      <h2 style={{marginTop:'43px',fontSize:'15px',color:'gray',fontFamily:'sans-serif'}}>Total Organization</h2>
      <h1 style={{fontSize:'26px',fontWeight:'lighter',color:'gray',fontFamily:'san-sirf'}}>{organizations.length}</h1>
      <table style={{ width: '100%', margin: '20px auto', color: '#fff', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ccc' }}>
            <th style={{ padding: '10px',fontFamily:'sans-serif' }}>Organizations</th>
            <th style={{ paddingRight: '120px',marginRight:'133px' }}>Status</th>
            <th style={{ paddingRight: '120px',marginRight:'133px'  }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations.map((org, index) => (
            <tr key={index} style={{ borderBottom: '1px solid black' }}>
              <td style={{ padding: '10px', textAlign: 'left' }}>
                <img src="https://cdn.clikkle.com/images/clikkle/logo/2023/clikkle.svg" alt="Organization Icon" style={{ width: '20px',marginBottom:'-5px', marginRight: '10px',backgroundColor:'white',borderRadius:'22px',psddingTop:'12px' }} />
                {org.name}
              </td>
              <td style={{ padding: '10px' }}>
        <button
          style={{
            backgroundColor: 'darkgreen',
            color: 'lime',
            border: 'none',
            padding: '5px 10px',
            pr:'33px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Active
        </button>
      </td>

      {/* Delete button with icon */}
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
    </div>
  );
};

export default OrganizationList;
