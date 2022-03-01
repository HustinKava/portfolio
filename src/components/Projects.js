import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Data from '../data/Data.json';
import ProjectData from '../data/Projects.json';
// import Ipad from '../images/ipad.png';
// import Flashcards from '../images/Flashcards.PNG';

function Projects () {

    const GifToggle = (e) => {        
        for (let i =0; i < ProjectData.length; i++) {
            if (e.target.dataset.id === ProjectData[i].dataId) {
                if (e.target.src === ProjectData[i].src) {
                    e.target.src = Data[0].src
                } else {
                    e.target.src = ProjectData[i].src
                }       
            }
        }
    }

    const iconSwitch = (e) => {        
        
        for (let i =0; i < ProjectData.length; i++) {

            if (e.target.parentNode.dataset.id === ProjectData[i].dataId) {                      
                let icons = ProjectData[i].icons

                for (let j = 0; j < icons.length; j++) {
                    if (e.target.src === icons[j].image) {

                        e.target.src = icons[j].colorImage    

                    } else if (e.target.src === icons[j].colorImage) {

                        e.target.src = icons[j].image                                                  
                    }
                }     
            }
        }
    }

    return (
        <div>

            {ProjectData.map((data, index) => {
                return (
                    <Container key={index} className='container' maxWidth="md">
                        <div>
                            <h4>{data.text}</h4>
                        </div>

                        <Grid className='bio' container spacing={2}>
                            <Grid item xs={12} sm={5}>

                            <img data-id={index + 1} className='projectImage' src={data.staticSrc} alt={data.text} style={{width: '100%'}}/>
                            
                            {/* <img data-id={index + 1} className='projectImage' src={data.src} alt={data.text} style={{width: '100%'}} onMouseEnter={GifToggle} onMouseLeave={GifToggle}/> */}

                            {/* <div className='image-container'>
                                <img data-id={index + 1} className='ipad-image' src={Ipad} alt={data.text} style={{width: '100%'}} />
                                <img data-id={index + 1} className='project-image' src={data.src} alt={data.text} />
                            </div> */}

                                <div className='links'>                                
                                    <Button variant="outlined" color="primary" href={data.repoLink} target="_blank" rel="noopener noreferrer">
                                        {data.bOne}
                                    </Button>
                                                                        
                                    <div className="divider"/>
                                    
                                    <Button variant="outlined" color="primary" href={data.webHref} target="_blank" rel="noopener noreferrer">
                                        {data.bTwo}
                                    </Button>                                
                                </div>
                            </Grid>

                            <Grid item xs={12} sm={7}>
                                <div className="descriptionDiv">
                                    <div><p className='descriptionText'>
                                        {data.description}
                                    </p></div>
                                </div>
                                <div className="icons">
                                    <div data-id={index + 1}>
                                    { Array.isArray(data.icons) && data.icons.map((url, index) => {
                                        return (
                                            <img className='techImg' key={index} src={url.image}  alt='Icon' title={url.title} onMouseEnter={iconSwitch} onMouseLeave={iconSwitch}/>
                                    );})}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                )
            })}        
        </div>        
    )
};

export default Projects;