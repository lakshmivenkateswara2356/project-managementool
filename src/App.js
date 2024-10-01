import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import IssueUpdate from './pages/IssuesSection/IssueUpdate';
import ActiveIssues from './pages/IssuesSection/ActiveIssues';
import IssuesShow from './pages/IssuesSection/IssuesShow';
import Home from './pages/Home';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/issue-updates" element={<IssueUpdate />} />
                <Route path='/active-issues' element={<ActiveIssues/>}/>
                <Route path="/issues-show" element={<IssuesShow/>}/>
            </Routes>
        </Header>
    );
};

export default App;