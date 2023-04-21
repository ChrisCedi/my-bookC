import React, { useRef } from "react";
import { useStyles } from "./MyProjectsStyles";
import { useInView } from "framer-motion";
import { Typography, Grid, Container } from "@material-ui/core";
import { octopyProjects, projects } from "./helpers";
import CardProject from "../CardProject/CardProject";

export const MyProjects = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  return (
    <section className={classes.container} id="MyProjects" ref={ref}>
      <Container>
        <Typography
          variant="h3"
          color="primary"
          className={classes.title}
          style={{
            transform: isInVIew ? "none" : "translateX(-200px)",
            opacity: isInVIew ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          mis proyectos
        </Typography>
        <Grid container spacing={4} className={classes.containerCards}>
          {octopyProjects.map((item, index) => (
            <Grid
              item
              sm={12}
              md={6}
              className={classes.gridCard}
              style={{
                transform: isInVIew ? "none" : "translateX(-200px)",
                opacity: isInVIew ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <CardProject project={item} />
            </Grid>
          ))}

          {projects.map((item, index) => (
            <Grid
              item
              sm={12}
              md={6}
              className={classes.gridCard}
              style={{
                transform: isInVIew ? "none" : "translateX(-200px)",
                opacity: isInVIew ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <CardProject project={item} key={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
