import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { styled } from '@mui/material/styles';
// import './styles/swiperArrow.css'; // Arrow styles
// import arrow from './assets/arrow.svg';

SwiperCore.use([Pagination, Navigation]);

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  width: '100%',
  // overflow: 'visible',
  '& .swiper-button-next': {
    // right: '0px',
    color: theme.palette.secondary.main,
  },
  '& .swiper-button-prev': {
    // left: '0px',
    color: theme.palette.secondary.main,
  },
  // '& .swiper-pagination': {
  //   bottom: '-30px',
  // },
  '& .swiper-pagination-bullet': {
    backgroundColor: theme.palette.secondary.main,
  },
  '& .swiper-wrapper .swiper-slide': {
    margin: 'auto !important',
  },
  // '& .swiper-button-next::after': {
  //   display: 'none',
  // },
  // '& .swiper-button-prev::after': {
  //   display: 'none',
  // },
}));

const CardSwiper = ({ children, ...props }) => (

  <StyledSwiper
    {...props}
    slidesPerView={1}
    spaceBetween={1}
    navigation
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      600: {
        slidesPerView: 1,
        spaceBetween: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 1,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 1,
      },
      1360: {
        slidesPerView: 4,
        spaceBetween: 1,
      },
    }}
  >
    {children}
  </StyledSwiper>
);

export default CardSwiper;
