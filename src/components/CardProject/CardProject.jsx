import React from "react";
import { useStyles } from "./CardProjectStyles";
import { Typography, Grid, Button, withWidth, Avatar } from "@material-ui/core";
import { motion } from "framer-motion";

const CardProject = ({ width, project }) => {
  const classes = useStyles();

  return (
    <motion.div
      className={classes.cardProject}
      whileHover={width === "xs" ? { scale: 1 } : { scale: 1.1 }}
      transition={{ type: "tween", stiffness: 300, damping: 1 }}
    >
      <Typography variant="h5" className={classes.titleProject}>
        {project.nameProject}
      </Typography>
      <Typography className={classes.descriptionProject}>
        {project.description}
      </Typography>
      <Grid className={classes.gridTools}>
        {project.tools.map((tool, index) => (
          <Avatar src={tool} alt="tool" className={classes.avatar} />
        ))}
      </Grid>
      <Grid className={classes.gridButtons}>
        {project.link && (
          <a href={`${project.link}`} className={classes.textButton}>
            <Button
              variant="outlined"
              color="secondary"
              className={classes.buttonProject}
              style={{ borderRadius: 25, fontWeight: 600 }}
            >
              Ver proyecto
            </Button>
          </a>
        )}
        {project.github && (
          <a href={`${project.github}`} className={classes.textButton}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.buttonProject}
              style={{ borderRadius: 25, fontWeight: 600 }}
            >
              Ver repositorio
            </Button>
          </a>
        )}
      </Grid>
    </motion.div>
  );
};

export default withWidth()(CardProject);
