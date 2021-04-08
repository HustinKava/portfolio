import React, { useState } from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import './Navbar.css';

function Navbar () {

    const [value, setValue] = useState(0)

    const handleTabs = (e, val) => {
        setValue(val)
    };

    return (
        <Paper >
        <Tabs
            onChange={handleTabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            centered
        >
            <Tab label="About" />
            <Tab label="Portfolio" />
            <Tab label="Contact" />
        </Tabs>
        </Paper>
    )
};

export default Navbar;