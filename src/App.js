import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from './pages/Aboutpage';
import Featurepage from './pages/FeatureSec';
import Servicepage from './pages/ServiceSec';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/features" element={<Featurepage />} />
                <Route path="/services" element={<Servicepage />} />
            </Routes>
        </Router>
    );
};

export default App;
