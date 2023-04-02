import React from "react";
import Slider from "react-slick";
import { useStyles } from "./CarouselStyles";
import { Box } from "@material-ui/core";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export const Carousel = () => {
  const classes = useStyles();

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className={classes.slider}
    >
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png"
          alt="react"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://play-lh.googleusercontent.com/tZywwDYlqDzJ7FMjcCY9heOO_A66M94duhvS6pDLouPKZSUYDtkrx4Y-mF9EGpewe-Q=w240-h480-rw"
          alt="js"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1200px-HTML5_Badge.svg.png"
          alt="html"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://logospng.org/download/css-3/logo-css-3-1536.png"
          alt="css"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          alt="redux"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://images.opencollective.com/formik/7ba0331/logo/256.png"
          alt="formik"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://v4.mui.com/static/logo.png"
          alt="material"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
          alt="booststrap"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="ts"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"
          alt="github"
        />
      </SwiperSlide>
    </Swiper>
  );
};
