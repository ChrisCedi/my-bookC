import React, { useRef } from "react";
import { useStyles } from "./MyProjectsStyles";
import { useInView, motion } from "framer-motion";
import { Typography, Grid, Button } from "@material-ui/core";
import { projects } from "./helpers";

export const MyProjects = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  return (
    <section className={classes.container} id="MyProjects" ref={ref}>
      <Typography
        variant="h3"
        className={classes.title}
        style={{
          transform: isInVIew ? "none" : "translateX(-200px)",
          opacity: isInVIew ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        My projects
      </Typography>
      <Grid
        container
        spacing={4}
        className={classes.containerCards}
        style={{
          transform: isInVIew ? "none" : "translateX(-200px)",
          animationDelay: 1,
          opacity: isInVIew ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {projects.map((item, index) => (
          <Grid item xs={12} md={4}>
            <motion.div
              className={classes.cardProject}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 400, damping: 10 }}
              key={index}
            >
              <Typography>{item.nameProject}</Typography>
              <Typography>{item.description}</Typography>
              <Button variant="contained" color="primary">
                Ver más
              </Button>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};
