import React from 'react';
import { Container, Grid } from '@material-ui/core';
import './About.css';
import ProfilePic from '../images/ProfilePic.png';
import Resume from '../resume/Resume.pdf';

function About () {

    return (
        <Container className='container' maxWidth="md">
            <h1 style={{textAlign:'center'}}>About Me</h1>

            <Grid  container spacing={0}>
                <Grid item xs={12} sm={6}>
                    <div>
                    <h3>Hi, I'm</h3>
                    <h2 className='name'>Hustin Kava</h2>
                    <h3>Full-Stack Developer</h3>
                    <p>
                        Freshly graduated from the University of Toronto's Full-Stack Coding Bootcamp and excited to see where this new adventure takes me.
                    </p>
                    <p>
                        Originally born and raised in London, England but now currently residing in Alberta, Canada. 
                    </p>
                    <p>
                        With a passion to code and a desire to learn, I am ready to make an impact on dynamic and innovative projects.
                    </p>

                    <p>Email: HustinKava@gmail.com</p>
                    <p>Phone: 403-919-9102</p>
                    </div>


                </Grid>
                <Grid item xs={12} sm={6}>
                    <img className='profile' src={ProfilePic} alt='Profile'/>
                    <div className='social'>
                    <div>
                        <a href="http://www.linkedin.com/in/hustin-kava" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.ibb.co/D1hqnyL/iconfinder-linkedin-circle-color-107178-1.png" alt="linkedin" className='icon'/>
                        </a>
                        <p>Linkedin</p>
                    </div>
                    <div>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/RvLKBnj/iconfinder-pdf-01-3079281-1.png" alt="resume" className='icon'/>
                        </a>
                        <p>Resume</p>
                    </div>
                    <div>
                        <a href="https://github.com/HustinKava" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/6XXQ4fX/iconfinder-github-circle-color-107173-1.png" alt="github" className='icon'/>
                        </a>
                        <p>GitHub</p>
                    </div>
                    </div>
                </Grid>
            </Grid>
                

            <h2 className='skillTitle' style={{textAlign:'center'}}>Skills</h2>

            <div className='skills'>
                <div>
                    <img src="https://i.ibb.co/dtGwpHP/iconfinder-React-js-logo-1174949.png" alt="react" className='icon'/>
                    <p className='text'>React</p>
                </div>
                <div>
                  <img src="https://i.ibb.co/NttJZWL/iconfinder-187-Js-logo-logos-4373213.png" alt="javascript" className='icon'/>
                    <p className='text'>JavaScript</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/kBhZN3k/iconfinder-badge-html-5-317755.png" alt="html" className='icon'/>
                    <p className='text'>HTML</p>
                </div>
                <div>
                  <img src="https://i.ibb.co/yPhh2Sq/iconfinder-badge-css-3-317756.png" alt="react" className='icon'/>
                    <p className='text'>CSS</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/c8sHM9b/iconfinder-233-Node-Js-logo-4375017.png" alt="nodejs" className='icon'/>
                    <p className='text'>Node.js</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/VxWy2m7/mysql.png" alt="mysql" className='icon'/>
                    <p className='text'>MySQL</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/qFDXKkK/icons8-mongodb-24.png" alt="mongodb" className='icon'/>
                    <p className='text'>MongoDB</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/gVZGhj9/6929231-24.png" alt="vscode" className='icon'/>
                    <p className='text'>VSCode</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/SdzTbPf/icons8-heroku-24.png" alt="heroku" className='icon'/>
                    <p className='text'>Heroku</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/dfLR8Zf/icons8-travis-ci-24.png" alt="travis" className='icon'/>
                    <p className='text'>Travis-CI</p>
                </div>
            </div>
        </Container>
    )
};

export default About;