import { Typography, Button, Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "./AboutMeStyles";
import { Images } from "../../assets/Images";
// import { PersonalFiles } from "../../assets/PersonalFiles";
import cv from "../../assets/Files/cv-ChristianJavierCedilloPalacios.pdf";

export const AboutMe = () => {
  const classes = useStyles();

  return (
    <section id="aboutMe" className={classes.container}>
      <Grid container className={classes.firstContainer}>
        <Grid item xs={12} md={7}>
          <Grid container className={classes.secondContainer}>
            <Grid item xs={12} className={classes.gridInfo}>
              <Typography variant="h3" className={classes.title}>
                About me
              </Typography>
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
                <Button color="primary" variant="contained">
                  Descargar CV
                </Button>
              </a>
            </Grid>

            <Grid
              item
              xs={12}
              style={{ height: "200px", backgroundColor: "red" }}
            >
              sdfas
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={5} className={classes.gridImage}>
          <img
            src={Images.developer}
            alt="developer"
            className={classes.developer}
          />
        </Grid>
      </Grid>
    </section>
  );
};
