import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import Data from '../data/Data.json';
import './Projects.css';

function Projects () {

    return (
        <div>
            
            {/* PROJECT 1 */}
            <Container className='container' maxWidth="md">

                <div>
                    <h4>{Data[0].text}</h4>
                </div>

                <Grid className='bio' container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <img className='projectImage' src={Data[0].src} alt={Data[0].text} style={{width: '100%'}}/>

                        <div className='links'>
                        
                            <Button variant="outlined" color="primary" href={Data[0].repoLink} target="_blank" rel="noopener noreferrer">
                                {Data[0].bOne}
                            </Button>
                                                                
                            <div className="divider"/>

                            <Button variant="outlined" color="primary" href={Data[0].webHref} target="_blank" rel="noopener noreferrer">
                                {Data[0].bTwo}
                            </Button>
                            
                        </div>

                    </Grid>

                    <Grid item xs={12} sm={7}>

                        <div className="descriptionDiv">
                            <div><p className='descriptionText'>
                                {Data[0].description}
                            </p></div>
                        </div>

                        <div className="icons">
                            <div>
                            <h3 className='technologies'>Technology: </h3>
                            { Array.isArray(Data[0].icons) && Data[0].icons.map(url => {
                                return (
                                    <img className='techImg' key={url} src={url}  alt='Icon'/>
                            );})}
                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Container>

            <div className='space'/>
            
            {/* PROJECT 2 */}
            <Container className='container' maxWidth="md">

                <div>
                    <h4>{Data[1].text}</h4>
                </div>

                <Grid className='bio' container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <img className='projectImage' src={Data[1].src} alt={Data[1].text} style={{width: '100%'}}/>

                        <div className='links'>
                        
                            <Button variant="outlined" color="primary" href={Data[1].repoLink} target="_blank" rel="noopener noreferrer">
                                {Data[1].bOne}
                            </Button>
                                                                
                            <div className="divider"/>

                            <Button variant="outlined" color="primary" href={Data[1].webHref} target="_blank" rel="noopener noreferrer">
                                {Data[1].bTwo}
                            </Button>
                            
                        </div>

                    </Grid>

                    <Grid item xs={12} sm={7}>

                        <div className="descriptionDiv">
                            <div><p className='descriptionText'>
                                {Data[1].description}
                            </p></div>
                        </div>

                        <div className="icons">
                            <div>
                            <h3 className='technologies'>Technology: </h3>
                            { Array.isArray(Data[1].icons) && Data[1].icons.map(url => {
                                return (
                                    <img className='techImg' key={url} src={url}  alt='Icon'/>
                            );})}
                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Container>

            <div className='space'/>

            {/* PROJECT 3 */}
            <Container className='container' maxWidth="md">

                <div>
                    <h4>{Data[2].text}</h4>
                </div>

                <Grid className='bio' container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <img className='projectImage' src={Data[2].src} alt={Data[2].text} style={{width: '100%'}}/>

                        <div className='links'>
                        
                            <Button variant="outlined" color="primary" href={Data[2].repoLink} target="_blank" rel="noopener noreferrer">
                                {Data[2].bOne}
                            </Button>
                                                                
                            <div className="divider"/>

                            <Button variant="outlined" color="primary" href={Data[2].webHref} target="_blank" rel="noopener noreferrer">
                                {Data[2].bTwo}
                            </Button>
                            
                        </div>

                    </Grid>

                    <Grid item xs={12} sm={7}>

                        <div className="descriptionDiv">
                            <div><p className='descriptionText'>
                                {Data[2].description}
                            </p></div>
                        </div>

                        <div className="icons">
                            <div>
                            <h3 className='technologies'>Technology: </h3>
                            { Array.isArray(Data[2].icons) && Data[2].icons.map(url => {
                                return (
                                    <img className='techImg' key={url} src={url}  alt='Icon'/>
                            );})}
                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Container>

                <div className='space'/>

            {/* PROJECT 4 */}
            <Container className='container' maxWidth="md">

                <div>
                    <h4>{Data[10].text}</h4>
                </div>

                <Grid className='bio' container spacing={2}>
                    <Grid item xs={12} sm={5}>
                        <img className='projectImage' src={Data[10].src} alt={Data[10].text} style={{width: '100%'}}/>

                        <div className='links'>
                        
                            <Button variant="outlined" color="primary" href={Data[10].repoLink} target="_blank" rel="noopener noreferrer">
                                {Data[10].bOne}
                            </Button>
                                                                
                            <div className="divider"/>

                            <Button variant="outlined" color="primary" href={Data[10].webHref} target="_blank" rel="noopener noreferrer">
                                {Data[10].bTwo}
                            </Button>
                            
                        </div>

                    </Grid>

                    <Grid item xs={12} sm={7}>

                        <div className="descriptionDiv">
                            <div><p className='descriptionText'>
                                {Data[10].description}
                            </p></div>
                        </div>

                        <div className="icons">
                            <div>
                            <h3 className='technologies'>Technology: </h3>
                            { Array.isArray(Data[10].icons) && Data[10].icons.map(url => {
                                return (
                                    <img className='techImg' key={url} src={url}  alt='Icon'/>
                            );})}
                            </div>
                        </div>

                    </Grid>

                </Grid>
            </Container>

        </div>

        
    )
};

export default Projects;