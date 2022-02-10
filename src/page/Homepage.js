import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
// import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";
import particleConfig from '../components/configParticles';

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
            <div id='Projects' className='space'/>
            <Projects/>
            {/* <div id='Portfolio' className='space'/>
            <Portfolio/> */}
            <div id='Contact' className='space'/>
            <Contact/>
            <div className='space'/>
            </div>
        </div>
    )
};

export default Homepage;