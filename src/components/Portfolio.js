import React from 'react';
import { Container } from '@material-ui/core';
import SwiperCore, { Mousewheel, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from '../data/Data.json';
import './Portfolio.css';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Mousewheel, Pagination, Navigation]);


function Portfolio () {

    return (
        <Container className='container'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                mousewheel={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

        </Container>
    )
};

export default Portfolio;