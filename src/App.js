import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import IssueUpdate from './pages/IssuesSection/IssueUpdate';
import ActiveIssues from './pages/IssuesSection/ActiveIssues';
import IssuesShow from './pages/IssuesSection/IssuesShow';
import OrganizationList from './pages/Neworganisation/OrganizationList';
import Neworganisation from './pages/Neworganisation/Neworganisation';
import Home from './pages/Home';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/issue-updates" element={<IssueUpdate />} />
                <Route path='/active-issues' element={<ActiveIssues/>}/>
                <Route path="/issues-show" element={<IssuesShow/>}/>
                <Route path='Neworganisation' element={<Neworganisation/>}/>
                <Route path="/organizations" element={<OrganizationList/>}/>
            </Routes>
        </Header>
    );
};

export default App;