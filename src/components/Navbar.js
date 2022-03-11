import React from 'react';
import { Tabs, Tab } from '@material-ui/core';

function Navbar ({ handleTabs, value}) {

   
    return (
        <div style={{position: "sticky", top:"0", width:"100%", zIndex: '100', borderBottom: 'solid 5px white', backgroundColor: '#71afed'}}>
          {/* <img
            src={
              "https://i.ibb.co/tXcW19W/logo.png"
            }
            alt="HK Logo"
            className='navImage'
          /> */}
          {/* test comment */}
            <Tabs
                onChange={handleTabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                centered
                TabIndicatorProps={{ style: { background: "rgb(113, 175, 237)" } }}
            >
              <Tab label="About" href='#About'/>
              <Tab label="Projects" href='#Projects' />
              {/* <Tab label="Portfolio" href='#Portfolio' /> */}
              <Tab label="Contact" href='#Contact'/>
            </Tabs>
      </div>
    )
};

export default Navbar;

