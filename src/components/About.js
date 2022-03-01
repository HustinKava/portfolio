import React, { useEffect } from 'react';
import { Container, Grid, } from '@material-ui/core';
import ProfilePic from '../images/ProfilePic.png';
import Resume from '../resume/Resume.pdf';
import Skills from '../data/Skills.json';

function About () {

    useEffect(() => {
        console.log(document.documentElement.offsetHeight)
    }, []);

    const iconSwitch = (e) => {  
        e.stopPropagation();
        e.preventDefault();
        
        for (let i = 0; i < Skills.length; i++) {
            if (e.currentTarget.dataset.id === Skills[i].dataId) {
                if (e.currentTarget.children[0].src === Skills[i].srcWhite) {                    
                    e.currentTarget.children[0].src = Skills[i].srcColor;
                } else if (e.currentTarget.children[0].src === Skills[i].srcColor) {
                    e.currentTarget.children[0].src = Skills[i].srcWhite;
                }
            }
        }        
    }

    const linkedin = (e) => {
        e.currentTarget.children[0].children[0].src === "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Linkedin.png" ? 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/color-icons/Linkedin-color.png" : 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Linkedin.png"
    }
    const resume = (e) => {
        e.currentTarget.children[0].children[0].src === "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Acrobat.png" ? 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/color-icons/Acrobat-color.png" : 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Acrobat.png"
    }
    const github = (e) => {
        e.currentTarget.children[0].children[0].src === "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Github.png" ? 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/color-icons/Github-color.png" : 
        e.currentTarget.children[0].children[0].src = "https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Github.png"
    }

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
                        
                        <div className='profile-image-container'>
                            <img className='profile' src={ProfilePic} alt='Profile'/>
                        </div>

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
                    <div data-id="1" onMouseEnter={linkedin} onMouseLeave={linkedin}>
                        <a href="http://www.linkedin.com/in/hustin-kava" target="_blank" rel="noopener noreferrer">
                            <img src="https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Linkedin.png" alt="linkedin" className='icon'/>
                        </a>
                        <p className='socialText'>Linkedin</p>
                    </div>
                    <div data-id="2" onMouseEnter={resume} onMouseLeave={resume}>
                        <a href={Resume} target="_blank" rel="noopener noreferrer">
                        <img src="https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Acrobat.png" alt="resume" className='icon'/>
                        </a>
                        <p className='socialText'>Resume</p>
                    </div>
                    <div data-id="3" onMouseEnter={github} onMouseLeave={github}>
                        <a href="https://github.com/HustinKava" target="_blank" rel="noopener noreferrer">
                        <img src="https://s3-hustin-test-bucket.s3.ca-central-1.amazonaws.com/Icons/white-icons/Github.png" alt="github" className='icon'/>
                        </a>
                        <p className='socialText'>GitHub</p>
                    </div>
                    </div>
                </Grid>
            </Grid>
                

            <div className='skillTitle'></div>
                <h3 className='techSkills'>Technical Skills:</h3>
            <div className='skills'>

                {Skills.map((data, index) => {
                    return (
                        <div
                            key={index}
                            onMouseEnter={iconSwitch}
                            onMouseLeave={iconSwitch}
                            data-id={index + 1}
                        >
                            <img                                 
                                src={data.srcWhite} 
                                alt={data.text} 
                                className='iconSkill'
                            />
                            <p 
                                className='iconText'>
                                    {data.text}
                            </p>
                        </div>                        
                    )
                })}
            </div>
        </Container>
    )
};

export default About;