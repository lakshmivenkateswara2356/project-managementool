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
import Login from './pages/Login'; // Import the Login component

const App = () => {
    return (
        <Routes>
            <Route 
                path='/' 
                element={
                    <Header>
                        <Home />
                    </Header>
                } 
            />
            <Route 
                path="/issue-updates" 
                element={
                    <Header>
                        <IssueUpdate />
                    </Header>
                } 
            />
            <Route 
                path='/active-issues' 
                element={
                    <Header>
                        <ActiveIssues />
                    </Header>
                } 
            />
            <Route 
                path="/issues-show" 
                element={
                    <Header>
                        <IssuesShow />
                    </Header>
                } 
            />
            <Route path="/login" element={<Login />} />  {/* Login route without Header */}
            <Route path='Neworganisation' element={<Neworganisation />} />
            <Route path="/organizations" element={<OrganizationList />} />
        </Routes>
    );
};

export default App;
