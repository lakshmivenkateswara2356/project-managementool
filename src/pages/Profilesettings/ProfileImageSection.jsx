import React, { useState } from 'react';

const ProfileImageSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [headerImage, setHeaderImage] = useState(null);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleHeaderImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setHeaderImage(URL.createObjectURL(file));
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '800px', height: '300px', margin: '16px auto', backgroundColor: '#1C1C1C', borderRadius: '8px', overflow: 'hidden',marginLeft:'-1px',borderRadius:'2px', }}>
      
      {/* Header Section */}
      <div style={{ width: '100%', height: '50%', backgroundColor: '#44688E', position: 'relative', }}>
        {headerImage ? (
          <img
            src={headerImage}
            alt="Header"
            style={{
              width: '120%',
              height: '120%',
              marginTop:'173px',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={{ color: '#666', textAlign: 'center', paddingTop: '30px' }}>
            <i className="fa fa-camera" style={{ fontSize: '24px', color: '#ccc' }}></i>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleHeaderImageChange}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            opacity: '0',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* Profile Image Section */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: 'calc(50% - 50px)',
        width: '130px',
        height: '130px',
        borderRadius: '50%',
        marginLeft:'-270px',
        overflow: 'hidden',
        border: '4px solid #fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}>
        <img
          src={profileImage || 'https://via.placeholder.com/100'}
          alt="Profile"
          style={{
            width: '130px',
            height: '130px',
           
            objectFit: 'cover',
          }}
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImageChange}
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            opacity: '0',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* Profile Visibility Text */}
      <div style={{ marginTop: '40px', textAlign: 'center', color: '#b3b3b3',marginRight:'-195px',color:'gray',fontFamily:'sans-serif',fontSize:'15px' }}>
        <p style={{marginRight:'-195px'}}>Who can see your profile photo?</p>
        <p style={{  color: '#fff',fontFamily:'sans-serif',marginRight:'-45px',color:'gray',marginTop:'15px',fontSize:"18px" }}>Anyone</p>
      </div>
    </div>
  );
};

export default ProfileImageSection;
