import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Neworganisation from './pages/Neworganisation/Neworganisation';
import Home from './pages/Home';
import Header from './components/Header';
import Activity from './pages/IssuesSection/ActiveIssues';
import SliderComponent from './pages/SliderComponent';
import Work from './pages/Work';
import ProjectDash from './pages/Project/Projectdashboard';
import Issuesshow from './pages/IssuesSection/IssuesShow';
import IssueUpdate from './pages/IssuesSection/IssueUpdate';
import Teams from './pages/Teams/Teams';
import Teammember from './pages/profile/Profileteammember';
import Profile from './pages/profile/Profileaccount';
import Profileediter from './pages/Profilesettings/ProfileEdit';

import Inprogresscard from './pages/Project/projectcards/Projectinprogress';
import Projects from './pages/Projects';

import Usermanagment from './pages/Usermanagment/OrganizationUsers';
import Subscription from './pages/Subscriptionpage/Subscription';
import OrganizationList from './pages/Neworganisation/OrganizationList';

const App = () => {
  // State to store the list of organizations
  const [organizations, setOrganizations] = useState([]);

  // Function to add a new organization to the state
  const addOrganization = (newOrg) => {
    setOrganizations([...organizations, newOrg]);
  };

  return (
    <Routes>
         <Route path="/walk-through" element={<SliderComponent />} />
      {/* Pass addOrganization as a prop to Neworganisation */}
      <Route path="/neworganisation" element={<Neworganisation addOrganization={addOrganization} />} />

      {/* OrganizationList component to display the list of organizations */}
     
      <Route path="/listorganisation" element={<OrganizationList organizations={organizations} />} />
     
     
      <Route path="/" element={<Home /> } />  
<Route path="/Projects" element={
 <Header><ProjectDash/></Header>  }/>

 <Route path="/project-detail" element ={<Header><Projects/></Header>}/>
<Route path ='/issue-updates' element={<IssueUpdate/>}/>
<Route path = '/issues-show' element={<Activity/>}/>
<Route path='/active-issues' element={<Header><Issuesshow/></Header>}/>
<Route path='/shared-with-me' element={<Teams/>}/>
<Route path="/profile" element={<Header><Profile/></Header>}/>
<Route path="/teammember" element={<Header><Teammember/> </Header>}/>
<Route path="/Organization-managment" element={<Header><Usermanagment/> </Header>}/>
<Route path="/gooder" element={<Inprogresscard/>}/>

<Route path="/Profilesettings" element ={<Profileediter/>}/>

<Route path="/paymet-gateway" element={<Subscription/>}/>

<Route path='/yourwork' element={ <Work/> }/>
      {/* Other routes like home, projects, etc., can be added here */}
    </Routes>
  );
};

export default App;
