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
            <div className='App' style={{position:'relative'}}>
            <div className='particlesDiv' style={{ position: 'fixed', zIndex: '-1' }}>
            <Particles className='particles' params={particleConfig} />
            </div>
            <div id='About' className='space'/>
            <About/>
            <div id='Portfolio' className='space'/>
            <Portfolio/>
            <div id='Contact' className='space'/>
            <Contact/>
            <div className='space'/>
            </div>
        </div>
    )
};

export default Homepage;