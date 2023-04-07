import React, { useRef } from "react";
import { useStyles } from "./MyProjectsStyles";
import { useInView, motion } from "framer-motion";
import { Typography, Grid, Button, Container } from "@material-ui/core";
import { projects } from "./helpers";

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
        <Grid
          container
          spacing={6}
          className={classes.containerCards}
          style={{
            transform: isInVIew ? "none" : "translateX(-200px)",
            animationDelay: 1,
            opacity: isInVIew ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {projects.map((item, index) => (
            <Grid item xs={12} sm={6}>
              <motion.div
                className={classes.cardProject}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 300, damping: 1 }}
                key={index}
              >
                <Typography variant="h5" className={classes.titleProject}>
                  {item.nameProject}
                </Typography>
                <Typography>{item.description}</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Ver más
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
