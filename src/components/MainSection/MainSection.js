import React from "react";
import { useStyles } from "./MainSectionStyles";
import { motion } from "framer-motion";
import { Typography, IconButton, Container } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const MainSection = ({ width }) => {
  const classes = useStyles();

  return (
    <section className={classes.container} id="mainSection">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className={classes.motionDiv}
        >
          <Typography
            className={classes.nameP}
            style={{ fontWeight: 600, letterSpacing: 4 }}
            variant="h3"
            color="primary"
          >
            Christian Cedillo
          </Typography>
          <Typography
            className={classes.subtitleP}
            variant="h4"
            style={{ fontWeight: 600, letterSpacing: 4 }}
            color="secondary"
          >
            Frontend Developer
          </Typography>
          <IconButton
            onClick={() =>
              document.getElementById("aboutMe").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <ExpandMoreIcon className={classes.iconButton} fontSize="large" />
          </IconButton>
        </motion.div>
      </Container>
    </section>
  );
};
