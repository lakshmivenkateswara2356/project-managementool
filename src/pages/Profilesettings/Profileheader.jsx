import React from 'react';
import Image from '../../components/Image';
import PersonImage from '../../Assets/Personsimages/Ellipse 47 (1).png';
import ClikkelBran from '../../Assets/Personsimages/Frame 48096725.png';
import Menuicon from '../../Assets/Personsimages/fe_app-menu.png';
const Profileheader = () => {
  return (
    <div style={styles.headerContainer}>
      {/* Left section with logo and name */}
      <div style={styles.leftSection}>
        <div >
          {/* Placeholder for an icon */}
          <Image src={Menuicon} sx={{height:'32px'}}/>
        </div>
       <Image src={ClikkelBran} sx={{height:'38px',ml:'11px'}}/>
      </div>

      {/* Right section with "Need help?" and profile image */}
      <div style={styles.rightSection}>
        <span style={styles.helpText}>Need help?</span>
        <div style={styles.profileContainer}>
          <img
            src={PersonImage} // Replace with actual avatar image
            alt="Profile"
            style={styles.profileImage}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#2C2C2C',
    padding: '0 20px',
    color: '#ffffff',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: '#3a3a3a',
    borderRadius: '50%',
    marginRight: '10px',
  },
  iconImage: {
    fontSize: '18px',
    color: '#b3b3b3',
  },
  appName: {
    fontSize: '16px',
    fontWeight: '500',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
  },
  helpText: {
    fontSize: '14px',
    marginRight: '10px',
    color: '#b3b3b3',
  },
  profileContainer: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '2px solid #b3b3b3',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
};

export default Profileheader;
