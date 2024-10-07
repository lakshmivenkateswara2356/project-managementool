import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Neworganisation from './pages/Neworganisation/Neworganisation';
import Home from './pages/Home';
import Header from './components/Header';
import Activity from './pages/IssuesSection/ActiveIssues';
import SliderComponent from './pages/SliderComponent';
import Work from './pages/Work';
import Issuesshow from './pages/IssuesSection/IssuesShow';
import IssueUpdate from './pages/IssuesSection/IssueUpdate';
import Projects from './pages/Projects';
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
     
     
      <Route path="/" element={<Header><Home /></Header> } />
<Route path="/Projects" element={
  <Projects/> }/>
<Route path ='/issue-updates' element={<IssueUpdate/>}/>
<Route path = '/issues-show' element={<Activity/>}/>
<Route path='/active-issues' element={<Issuesshow/>}/>
<Route path='/yourwork' element={<Work/>}/>
      {/* Other routes like home, projects, etc., can be added here */}
    </Routes>
  );
};

export default App;
