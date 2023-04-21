import React, { useRef } from "react";
import { useStyles } from "./MyProjectsStyles";
import { useInView, motion } from "framer-motion";
import { Typography, Grid, Button, Container, Avatar } from "@material-ui/core";
import { octopyProjects, projects } from "./helpers";

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
            <Grid item sm={12} md={6} className={classes.gridCard}>
              <motion.div
                className={classes.cardProject}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 300, damping: 1 }}
                key={index}
              >
                <Grid className={classes.information}>
                  <Typography variant="h5" className={classes.titleProject}>
                    {item.nameProject}
                  </Typography>
                  <Typography className={classes.descriptionProject}>
                    {item.description}
                  </Typography>
                </Grid>
                <Grid className={classes.gridTools}>
                  {item.tools.map((tool, index) => (
                    <Avatar
                      src={tool}
                      alt="tool"
                      key={index}
                      className={classes.avatar}
                    />
                  ))}
                </Grid>
                <a href={`${item.link}`} className={classes.textButton}>
                  <Button
                    variant="contained"
                    color="secondary"
                    className={classes.buttonProject}
                  >
                    Ver proyecto
                  </Button>
                </a>
              </motion.div>
            </Grid>
          ))}

          {projects.map((item, index) => (
            <Grid item sm={12} md={6} className={classes.gridCard}>
              <motion.div
                className={classes.cardProject}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "tween", stiffness: 300, damping: 1 }}
                key={index}
              >
                <Typography variant="h5" className={classes.titleProject}>
                  {item.nameProject}
                </Typography>
                <Typography className={classes.descriptionProject}>
                  {item.description}
                </Typography>
                <Grid className={classes.gridTools}>
                  {item.tools.map((tool, index) => (
                    <Avatar
                      src={tool}
                      alt="tool"
                      key={index}
                      className={classes.avatar}
                    />
                  ))}
                </Grid>
                <Grid className={classes.gridButtons}>
                  {item.link && (
                    <a href={`${item.link}`} className={classes.textButton}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.buttonProject}
                      >
                        Ver proyecto
                      </Button>
                    </a>
                  )}
                  {item.github && (
                    <a href={`${item.github}`} className={classes.textButton}>
                      <Button
                        variant="contained"
                        color="primary"
                        className={classes.buttonProject}
                      >
                        Ver repositorio
                      </Button>
                    </a>
                  )}
                </Grid>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};
