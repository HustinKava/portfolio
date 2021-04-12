import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './Navbar.css';

function Navbar () {

    const [value, setValue] = useState(0)

    const handleTabs = (e, val) => {
        setValue(val)
    };
   
    return (
        <div style={{position: "fixed", top:"0", width:"100%", zIndex: '100', borderBottom: 'solid 5px white'}}>
        <Paper >
        <Tabs
            onChange={handleTabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="About" href='#About'/>
            <Tab label="Portfolio" href='#Portfolio'/>
            <Tab label="Contact" href='#Contact'/>
        </Tabs>
        </Paper>
        </div>
    )
};

export default Navbar;

