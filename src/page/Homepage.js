import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Projects from '../components/Projects';
// import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Particles from "react-tsparticles";
import particleConfig from '../components/configParticles';

function Homepage () {

    const [value, setValue] = useState(0)

    const handleTabs = (e, val) => {
        setValue(val)
        console.log(val)
    };

    const navHighlight = (e) => {

        let dataId = e.currentTarget.dataset.id

        switch(dataId) {
            case "1":
            console.log("div 1")
            setValue(0)
            break;
            case "2":
            console.log("div 2")
            setValue(1)
            break;
            case "3":
            console.log("div 3")
            setValue(2)
            break;
            default:
            console.log("default 1")
        }
    } 

    return (
        <div>            
            <Navbar
                handleTabs={handleTabs}
                value={value}
            />

            <div className='App' style={{position:'relative'}}>
            
            <div className='particlesDiv' style={{ position: 'fixed', zIndex: '-1' }}>
                <Particles className='particles' params={particleConfig} />
            </div>

            <div id='About' className='space'/>
            <div 
                data-id="1" 
                onMouseEnter={navHighlight}
                onTouchMove={navHighlight} 
                onTouchEnd={navHighlight}
            >
                <About/>
            </div>

            <div id='Projects'/>
            <div 
                data-id="2" 
                onMouseEnter={navHighlight}
                onTouchMove={navHighlight} 
                onTouchEnd={navHighlight}
            >
                <Projects/>
            </div>

            {/* <div id='Portfolio' className='space'/>
            <Portfolio/> */}

            <div id='Contact'/>
            <div 
                data-id="3" 
                onMouseEnter={navHighlight}
                onTouchMove={navHighlight} 
                onTouchEnd={navHighlight}
            >
                <Contact/>
            </div>

            <div className='space'/>
            </div>
        </div>
    )
};

export default Homepage;