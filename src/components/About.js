import React from 'react';
import { Container, Grid, } from '@material-ui/core';
import './About.css';
import ProfilePic from '../images/ProfilePic.png';
import Resume from '../resume/Resume.pdf';

function About () {

    return (
        <Container className='container' maxWidth="md">
            
            <Grid className='bioSpace switch' container spacing={0}>
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    <h3>Hi, I'm</h3>
                    <h2 className='name'>Hustin Kava</h2>
                    <h3 className='FullStack'><img src="https://i.ibb.co/ZWZzj8S/iconfinder-Arrow-doodle-16-3847918.png" alt="arrow"/>Full-Stack Developer</h3>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    <img className='profile' src={ProfilePic} alt='Profile'/>
                    </Grid>
                </Grid>
                
                <Grid container spacing={0}>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                    <div className='bioText'>
                    <p className='text'>
                    With a passion to code and a desire to learn, I am highly ambitious and ready to make an impact on dynamic and innovative projects. Aside from coding and being exceedingly technology-driven, my passions branch out into various areas, such as cars, travelling, and indulging in culinary delights. 
                    </p>
                    <p className='text'>
                    Want to know more? Well, what are you waiting for? I am only a click away from sharing my vision of the world with you. Are you ready for me? I am definitely ready for you!
                    </p>
                    </div>
                    </Grid>
                </Grid>
            </Grid>

            <Grid className='bioSpace' container spacing={0}>
                <Grid className='contactSpace' item xs={12} sm={6}>
                    <div className='contactBox'>
                    <h3>Email: <span className='contact'>HustinKava@gmail.com</span></h3>
                    <h3>Phone: <span className='contact'>403-919-9102</span></h3>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className='social'>
                    <div>
                        <a href="http://www.linkedin.com/in/hustin-kava" target="_blank" rel="noopener noreferrer">
                            <img src="https://i.ibb.co/YNwNV3L/iconfinder-circle-linkedin-317750.png" alt="linkedin" className='icon'/>
                        </a>
                        <p className='socialText'>Linkedin</p>
                    </div>
                    <div>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/pWS2CLK/pdf-icon.png" alt="resume" className='icon'/>
                        </a>
                        <p className='socialText'>Resume</p>
                    </div>
                    <div>
                        <a href="https://github.com/HustinKava" target="_blank" rel="noopener noreferrer">
                        <img src="https://i.ibb.co/JjqDx3j/iconfinder-github-287583.png" alt="github" className='icon'/>
                        </a>
                        <p className='socialText'>GitHub</p>
                    </div>
                    </div>
                </Grid>
            </Grid>
                

            <div className='skillTitle'></div>

            <div className='skills'>
                <div>
                    <img src="https://i.ibb.co/HNMnVwV/1174949-24.png" alt="react" className='iconSkill'/>
                    <p className='iconText'>React</p>
                </div>
                <div>
                  <img src="https://i.ibb.co/NttJZWL/iconfinder-187-Js-logo-logos-4373213.png" alt="javascript" className='iconSkill'/>
                    <p className='iconText'>JavaScript</p>
                </div>
                {/* <div>
                    <img src="https://i.ibb.co/kBhZN3k/iconfinder-badge-html-5-317755.png" alt="html" className='icon'/>
                    <p className='iconText'>HTML</p>
                </div> */}
                <div>
                  <img src="https://i.ibb.co/yPhh2Sq/iconfinder-badge-css-3-317756.png" alt="react" className='iconSkill'/>
                    <p className='iconText'>CSS</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/QvJ4Q6Y/iconfinder-icon.png" alt="nodejs" className='iconSkill'/>
                    <p className='iconText'>Node.js</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/VxWy2m7/mysql.png" alt="mysql" className='iconSkill'/>
                    <p className='iconText'>MySQL</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/mvmmCsf/uxwing-svg-icon-editor.png" alt="mongodb" className='iconSkill'/>
                    <p className='iconText'>MongoDB</p>
                </div>
                {/* <div>
                    <img src="https://i.ibb.co/gVZGhj9/6929231-24.png" alt="vscode" className='iconSkill'/>
                    <p className='iconText'>VSCode</p>
                </div> */}
                <div>
                    <img src="https://i.ibb.co/SdzTbPf/icons8-heroku-24.png" alt="heroku" className='iconSkill'/>
                    <p className='iconText'>Heroku</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/dfLR8Zf/icons8-travis-ci-24.png" alt="travis" className='iconSkill'/>
                    <p className='iconText'>Travis CI</p>
                </div>
            </div>
        </Container>
    )
};

export default About;