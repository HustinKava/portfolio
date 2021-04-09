import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineFilePdf } from 'react-icons/ai';
import { DiReact, DiJavascript1, DiHtml5, DiCss3, DiNodejsSmall, DiMysql, DiMongodb, DiVisualstudio, DiGithubAlt, DiHeroku } from 'react-icons/di';
import { SiTravisci } from 'react-icons/si';
import './About.css';
import ProfilePic from '../images/ProfilePic.png';
import Resume from '../resume/Resume.pdf';

function About () {

    return (
        <Container className='container' maxWidth="md">
            <h1 style={{textAlign:'center'}}>About Me</h1>

            <Grid className='bio' container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <p>
                    Hi, I'm <b>Hustin</b>. 
                    </p>
                    <p>
                        Freshly graduated from the University of Toronto's Full-Stack Coding Bootcamp and excited to see where this new adventure takes me.
                    </p>
                    <p>
                        Originally born and raised in London, England but now currently residing in Alberta, Canada. 
                    </p>
                    <p>
                        With a passion to code and a desire to learn, I am ready to make an impact on dynamic and innovative projects.
                    </p>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className='profile' src={ProfilePic} alt='Profile'/>
                </Grid>
            </Grid>
                
            <div className='social'>
                <div>
                    <a href="http://www.linkedin.com/in/hustin-kava" target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin className='icon'/>
                    </a>
                    <p>Linkedin</p>
                </div>
                <div>
                    <a href="https://github.com/HustinKava" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub className='icon'/>
                    </a>
                    <p>GitHub</p>
                </div>
                <div>
                    <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <AiOutlineFilePdf className='icon'/>
                    </a>
                    <p>Resume</p>
                </div>
            </div>

            <h2 className='skillTitle' style={{textAlign:'center'}}>Skills</h2>

            <div className='skills'>
                <div>
                    <DiReact className='icon'/>
                    <p className='text'>React</p>
                </div>
                <div>
                    <DiJavascript1 className='icon'/>
                    <p className='text'>JavaScript</p>
                </div>
                <div>
                    <DiHtml5 className='icon'/>
                    <p className='text'>HTML</p>
                </div>
                <div>
                    <DiCss3 className='icon'/>
                    <p className='text'>CSS</p>
                </div>
                <div>
                    <DiNodejsSmall className='icon'/>
                    <p className='text'>Node.js</p>
                </div>
                <div>
                    <DiMysql className='icon'/>
                    <p className='text'>MySQL</p>
                </div>
                <div>
                    <DiMongodb className='icon'/>
                    <p className='text'>MongoDB</p>
                </div>
                <div>
                    <DiVisualstudio className='icon'/>
                    <p className='text'>VSCode</p>
                </div>
                <div>
                    <DiGithubAlt className='icon'/>
                    <p className='text'>GitHub</p>
                </div>
                <div>
                    <DiHeroku className='icon'/>
                    <p className='text'>Heroku</p>
                </div>
                <div>
                    <SiTravisci className='icon'/>
                    <p className='text'>Travis-CI</p>
                </div>
            </div>
        </Container>
    )
};

export default About;