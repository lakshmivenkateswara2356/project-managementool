import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './utilities/axios';

import Header from './components/Header';
import Home from './pages/Home';
import ActionIcon from './components/ActionIcon';
import Feedback from './components/Feedback';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Image from './components/Image';
import Icon from './components/Icon';

import MicrophoneIcon from './components/MicrophoneIcon';
import Dashboard from './pages/Dashboard';

const App = () => {
    return (

        
        <div>
             <Home/>
        </div>
    );
};

export default App;
