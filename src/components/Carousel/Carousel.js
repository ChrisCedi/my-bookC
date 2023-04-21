import React from "react";
import { useStyles } from "./CarouselStyles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../assets/Images";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper";

export const Carousel = () => {
  const classes = useStyles();

  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
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
      navigation={true}
      modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
      className={classes.slider}
    >
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.reactIcon}
          alt="react"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.javascriptIcon}
          alt="js"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img className={classes.imageSlider} src={Images.htmlIcon} alt="html" />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img className={classes.imageSlider} src={Images.cssIcon} alt="css" />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.reduxIcon}
          alt="redux"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.formikIcon}
          alt="formik"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.materialIcon}
          alt="material"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.bootstrapIcon}
          alt="booststrap"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.typescriptIcon}
          alt="ts"
        />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img className={classes.imageSlider} src={Images.gitIcon} alt="git" />
      </SwiperSlide>
      <SwiperSlide className={classes.sliderImage}>
        <img
          className={classes.imageSlider}
          src={Images.githubIcon}
          alt="github"
        />
      </SwiperSlide>
    </Swiper>
  );
};
