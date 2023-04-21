import { Typography, Grid, Container } from "@material-ui/core";
import React, { useRef } from "react";
import { useStyles } from "./AboutMeStyles";
import { Images } from "../../assets/Images";

import { useInView, motion } from "framer-motion";
import { Carousel } from "../Carousel/Carousel";

export const AboutMe = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  console.log(isInVIew);

  return (
    <section id="aboutMe" className={classes.container}>
      <Container ref={ref}>
        <Grid container className={classes.firstContainer}>
          <Grid item xs={12} md={7}>
            <Grid container className={classes.secondContainer}>
              <Grid item xs={12} className={classes.gridInfo}>
                <span
                  style={{
                    transform: isInVIew ? "none" : "translateX(-200px)",
                    opacity: isInVIew ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                  }}
                >
                  <Typography
                    variant="h3"
                    color="primary"
                    className={classes.title}
                  >
                    Sobre mí
                  </Typography>
                </span>
                <Grid
                  className={classes.gridText}
                  style={{
                    transform: isInVIew ? "none" : "translateX(-200px)",
                    opacity: isInVIew ? 1 : 0,
                    transition:
                      "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
                  }}
                >
                  <Typography className={classes.information}>
                    Hola soy Christian Javier Cedillo Palacios, desarrollador
                    front-end con React js
                  </Typography>

                  <Typography className={classes.information}>
                    Me apasiona el desarrollo de software creando diseños
                    minimalistas y atractivos que genere un interés en cada uno
                    de los usuarios brindando una experiencia única.
                  </Typography>
                  <Typography className={classes.information}>
                    Explora mi portafolio, conoce mi trabajo, si estas
                    interesado en trabajar conmigo no dudes en contactarme.
                    Estoy listo para crear la web que necesitas.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ width: "80%" }}>
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
                // src={Images.developer}
                src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmU4ZTEwOTQ3ZjNkOTEzYWIwM2JjM2ZmMWQ3NGY0N2RmMjQ4MDI1OCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/26BGx7czp2pazBlUk/giphy.gif"
                alt="developer"
                className={classes.developer}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
