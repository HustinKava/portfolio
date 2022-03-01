import React from 'react';
import { Tabs, Tab, Grid } from '@material-ui/core';

function Navbar ({ handleTabs, value}) {
   
    return (
        <div style={{position: "sticky", top:"0", width:"100%", zIndex: '100', borderBottom: 'solid 5px white', backgroundColor: '#71afed'}}>
        <Grid justifyContent='space-between' container>
        <Grid xs={1} item>
          <img
            src={
              "https://i.ibb.co/tXcW19W/logo.png"
            }
            alt="HK Logo"
            className='navImage'
          />
        </Grid>
        <Grid xs={12} item>
          <Grid container justifyContent={"center"}>
            <Tabs
                onChange={handleTabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
              <Tab label="About" href='#About'/>
              <Tab label="Projects" href='#Projects' />
              {/* <Tab label="Portfolio" href='#Portfolio' /> */}
              <Tab label="Contact" href='#Contact'/>
            </Tabs>
          </Grid>
        </Grid>
        <Grid item xs={1} />
      </Grid>
      </div>

        // <div style={{position: "sticky", top:"0", width:"100%", zIndex: '100', borderBottom: 'solid 5px white'}}>
        // <Paper >
        // <Tabs
        //     onChange={handleTabs}
        //     value={value}
        //     indicatorColor="primary"
        //     textColor="primary"
        //     centered
        // >
        //     <Tab label="About" href='#About'/>
        //     <Tab label="Portfolio" href='#Portfolio'/>
        //     <Tab label="Contact" href='#Contact'/>
        // </Tabs>
        // </Paper>
        // </div>
    )
};

export default Navbar;

