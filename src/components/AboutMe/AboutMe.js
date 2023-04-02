import { Typography, Button, Grid } from "@material-ui/core";
import React, { useRef } from "react";
import { useStyles } from "./AboutMeStyles";
import { Images } from "../../assets/Images";
import cv from "../../assets/Files/cv-ChristianJavierCedilloPalacios.pdf";
import { useInView, motion } from "framer-motion";
import { Carousel } from "../Carousel/Carousel";

export const AboutMe = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  return (
    <section id="aboutMe" className={classes.container} ref={ref}>
      <Grid container className={classes.firstContainer}>
        <Grid item xs={12} md={7}>
          <Grid container className={classes.secondContainer}>
            <Grid item xs={12} className={classes.gridInfo}>
              <span
                style={{
                  transform: isInVIew ? "none" : "translateX(-200px)",
                  opacity: isInVIew ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
              >
                <Typography variant="h3" className={classes.title}>
                  About me
                </Typography>
              </span>
              <Typography className={classes.information}>
                añslmdlasdkals dck sckj dclsdklmdflksdmflkmsdlks cl dsjk ckdjsf
                sdjk fdjsk fkjsd fj skdf skf elkf dslkf slkd flsd sd cldsk clksd
                flkdflskd slck clskd clks dclks clsd clksd clksd clks sdl lksd
                slkd flskdf lskd flksdf lskdf slkdf sldkc lskd lfdek vlker vlke
                vl krjef w fkj erkj fk erfj f kj dkj fskj fkjds fjk ds
              </Typography>
              <a
                href={cv}
                download="cv - Christian Cedillo"
                className={classes.textButton}
              >
                <Button
                  color="primary"
                  variant="contained"
                  style={{ fontWeight: 700 }}
                >
                  Descargar CV
                </Button>
              </a>
            </Grid>

            <Grid item xs={12}>
              <Carousel />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className={classes.gridImage}>
          <motion.div
            className={classes.motionImage}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src={Images.developer}
              alt="developer"
              className={classes.developer}
            />
          </motion.div>
        </Grid>
      </Grid>
    </section>
  );
};
