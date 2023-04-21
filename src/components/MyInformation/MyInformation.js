import React, { useRef } from "react";
import { useStyles } from "./MyInformationStyles";
import { Typography, Grid, Container, Button } from "@material-ui/core";
import { Images } from "../../assets/Images";
import cv from "../../assets/Files/cv-ChristianCedillo.pdf";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import { useInView } from "framer-motion";

export const MyInformation = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  return (
    <div className={classes.container}>
      <Container ref={ref}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Grid
              className={classes.cardInformation}
              style={{
                transform: isInVIew ? "none" : "translateX(-60px)",
                opacity: isInVIew ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <Typography
                variant="h5"
                color="primary"
                className={classes.titleSkills}
              >
                Skills
              </Typography>
              <Grid container>
                <Grid item xs={6} md={6} className={classes.gridSkills}>
                  <Typography variant="h6" className={classes.list}>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Hooks</li>
                    <li>Custom Hoks</li>
                    <li>Redux</li>
                    <li>Toolkit</li>
                    <li>Context Api</li>
                    <li>Material UI</li>
                    <li>Bootstrap</li>
                    <li>HTML5</li>
                  </Typography>
                </Grid>
                <Grid item xs={6} md={6} className={classes.gridSkills}>
                  <Typography variant="h6" className={classes.list}>
                    <li>Css3</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>EcmaScript 6</li>
                    <li>Semantic UI </li>
                    <li>Axios</li>
                    <li>Formik</li>
                    <li>Gatsby</li>
                    <li>Github</li>
                    <li>Gitlab</li>
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.gridSkills}>
                  <img
                    src={Images.code}
                    alt="code"
                    className={classes.imageSkills}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              <Grid
                item
                xs={12}
                className={classes.cardInformationCv}
                style={{
                  transform: isInVIew ? "none" : "translateX(-200px)",
                  opacity: isInVIew ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s",
                }}
              >
                <Typography
                  variant="h5"
                  color="primary"
                  className={classes.titleSkills}
                >
                  Hobbies
                </Typography>
                <Grid container>
                  <Grid item xs={12} md={5} className={classes.gridSkills}>
                    <img
                      src={Images.dog}
                      alt="dog"
                      className={classes.imageDog}
                    />
                  </Grid>
                  <Grid item xs={12} md={7} className={classes.gridSkills}>
                    <Typography variant="h6" className={classes.list}>
                      <li>Pasear a mi perrito</li>
                      <li>Basketball</li>
                      <li>Aprender nuevas tecnologías</li>
                      <li>Tomar fotos</li>
                      <li>Viajar</li>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={12}
                className={classes.cardInformation}
                style={{
                  transform: isInVIew ? "none" : "translateY(-10px)",
                  opacity: isInVIew ? 1 : 0,
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.3s",
                }}
              >
                <Grid container className={classes.cardCv}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      color="primary"
                      className={classes.titleSkills}
                    >
                      ¿Prefieres ver mi cv?
                    </Typography>
                    <Typography variant="h6" className={classes.subtitleCv}>
                      Puedes ver información más detallada en mi cv
                    </Typography>
                  </Grid>
                  <Grid item xs={12}></Grid>
                  <Grid item xs={12} className={classes.gridButtonCv}>
                    <a
                      href={cv}
                      download="cv - Christian Javier Cedillo Palacios"
                      className={classes.textButton}
                    >
                      <Button
                        color="primary"
                        variant="contained"
                        style={{ fontWeight: 700 }}
                        endIcon={<InsertDriveFileIcon />}
                        className={classes.button}
                      >
                        Descargar CV
                      </Button>
                    </a>
                    <img
                      src={Images.profileData}
                      alt="profileDatasvg"
                      className={classes.imageCv}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
