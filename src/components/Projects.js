import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Data from '../data/Data.json';
import Data2 from '../data/Data2.json';
import './Projects.css';

function Projects () {

    const Gif = (e) => {
        // console.log("this is the target: ",e.target.dataset.id);
        
        for (let i =0; i < Data2.length; i++) {
            // console.log(Data2[i].dataId)   
            if (e.target.dataset.id === Data2[i].dataId) {
                console.log(e.target)
                console.log(Data[0].src)
                e.target.src = Data[0].src            
            }
        }
    }

    const Image = (e) => {
        console.log("exit");
        console.log("exit target: ", e.target)

        for (let i =0; i < Data2.length; i++) {
            // console.log(Data2[i].dataId)   
            if (e.target.dataset.id === Data2[i].dataId) {
                console.log(e.target)
                console.log(Data[0].src)
                e.target.src = Data2[i].src            
            }
        }
    }

    return (
        <div>

            {Data2.map((data, index) => {
                return (
                    <Container key={index} className='container' maxWidth="md">
                        <div>
                            <h4>{data.text}</h4>
                        </div>

                        <Grid className='bio' container spacing={2}>
                            <Grid item xs={12} sm={5}>
                                <img data-id={index + 1} className='projectImage' src={data.src} alt={data.text} style={{width: '100%'}} onMouseEnter={Gif} onMouseLeave={Image}/>
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
                                    <div>
                                    <h3 className='technologies'>Technology: </h3>
                                    { Array.isArray(data.icons) && data.icons.map((url, index) => {
                                        return (
                                            // console.log(url.image)
                                            <img className='techImg' key={index} src={url.image}  alt='Icon' title={url.title}/>
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