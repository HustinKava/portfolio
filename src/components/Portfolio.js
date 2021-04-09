import React from 'react';
import { Container, Grid, Button } from '@material-ui/core';
import { TweenMax, Power4 } from 'gsap';
import SwiperCore, { Mousewheel, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../data/Data.json';
import './Portfolio.css';

SwiperCore.use([Mousewheel, Pagination, Autoplay]);


function Portfolio () {

    return (
        <Container className='container' maxWidth="md">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                mousewheel={true}
                // autoplay={{ loop: true, autoplay: true }}
                pagination={{ clickable: true }}
                onSlideChange={() => 
                    {
                    TweenMax.to(".slide-number div", 0.5,{ x: '-1000px'})
                    TweenMax.to(".slide-detail div", 0.5, { x: "-1000px"})
                    TweenMax.to(".slide-detail-facts div", 0.5, { x: "-1000px"})
                    TweenMax.to(".swiper-slide-active", 0.5, { scale: 0.85})
                    }}
                onSlideNextTransitionStart={() =>
                    {TweenMax.to(".swiper-slide-active", 0.5, { scale: 0.85})
                    TweenMax.to(".swiper-slide .slide-img", 1, { rotation: 20})
                    }}
                onSlidePrevTransitionStart={() =>
                    {TweenMax.to(".swiper-slide-active", 0.5, { scale: 0.85})
                    TweenMax.to(".swiper-slide .slide-img", 1, { rotation: -20})
                    }}
                onSlideNextTransitionEnd={() =>
                    {   
                    TweenMax.to(".swiper-slide-active", 0.5, { scale: 0.85})
                    TweenMax.to(".swiper-slide .slide-img", 1, { rotation: 0})                        
                    TweenMax.to(".slide-number div", 0.3, { x: 0})
                    TweenMax.to(".slide-detail div", 0.4, { x: 0})
                    TweenMax.to(".slide-detail-facts div", 0.5, { x: 0})                        
                    TweenMax.to(".swiper-slide-active", 0.5, { scale: 1, ease: Power4.easeOut})
                    TweenMax.to(".swiper-slide-active .slide-number", 0, { autoAlpha: 1})
                    TweenMax.to(".swiper-slide-next .slide-number", 0, { autoAlpha: 0})
                    TweenMax.to(".swiper-slide-prev .slide-number", 0, { autoAlpha: 0})
                    }}
                onSlidePrevTransitionEnd={() =>
                    {   
                    TweenMax.to(".swiper-slide-active", 0.5, { scale: 0.85})
                    TweenMax.to(".swiper-slide .slide-img", 1, { rotation: 0})
                    TweenMax.to(".slide-number div", 0.3, { x: 0})
                    TweenMax.to(".slide-detail div", 0.4, { x: 0})
                    TweenMax.to(".slide-detail-facts div", 0.5, { x: 0})                        
                    TweenMax.to(".swiper-slide-active", 0.5, { scale: 1, ease: Power4.easeOut})
                    TweenMax.to(".swiper-slide-active .slide-number", 0, { autoAlpha: 1})
                    TweenMax.to(".swiper-slide-next .slide-number", 0, { autoAlpha: 0})
                    TweenMax.to(".swiper-slide-prev .slide-number", 0, { autoAlpha: 0})
                    }}
                >
                {Data.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="swiper-slide">
                            <div className="slide-number">
                                <div>
                                    <h1>{slide.text}</h1>
                                </div>
                            </div>
                            <Grid className='bio' container spacing={2}>
                                <Grid item xs={12} sm={5}>
                                    <div className="slide-img">
                                    <img src={slide.src} alt={slide.text} style={{width: '100%'}}/>
                                    

                                    <div className='sliderButtons'>

                                    <Button variant="outlined" color="primary" href={slide.repoLink} target="_blank" rel="noopener noreferrer">
                                        {slide.bOne}
                                    </Button>
                                                                        
                                    <div className="divider"/>

                                    <Button variant="outlined" color="primary" href={slide.webHref} target="_blank" rel="noopener noreferrer">
                                        {slide.bTwo}
                                    </Button>
                                    </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <div className="slide-detail">
                                    <div><p><span>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    </span></p></div>
                                    </div>

                                    <div className="slide-detail-facts">
                                        <div>
                                            {/* {Data.map(answer => {
                                                return (
                                                    <div>
                                                    <img src={answer.test}/>
                                                    </div>
                                                )
                                            })} */}
                                        {slide.test}
                                        </div>
                                    </div>

                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )};

export default Portfolio;