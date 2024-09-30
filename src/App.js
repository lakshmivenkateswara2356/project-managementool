import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import IssueUpdate from './pages/IssuesSection/IssueUpdate';
import Home from './pages/Home';

const App = () => {
    return (
        <Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/issue-updates" element={<IssueUpdate />} />
            </Routes>
        </Header>
    );
};

export default App;