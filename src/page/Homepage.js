import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import './Homepage.css';

function Homepage () {

    return (
        <div>
            <Navbar/>
            <About/>
            <Portfolio/>
        </div>
    )
};

export default Homepage;