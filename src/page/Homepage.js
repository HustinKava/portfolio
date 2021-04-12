import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Particles from 'react-particles-js';
import particleConfig from '../components/configParticles';
import './Homepage.css';

function Homepage () {

    return (
        <div>
            <Navbar/>
            <div className='App' style={{position:'relative', overflow: 'hidden'}}>
            <div className='particlesDiv' style={{ position: 'absolute', zIndex: '-1'}}>
            <Particles className='particles' params={particleConfig} />
            </div>
            {/* <div className='topSpace'/> */}
            <About/>
            <div className='space'/>
            <Portfolio/>
            <div className='space'/>
            <Contact/>
            <div className='space'/>
            </div>
        </div>
    )
};

export default Homepage;