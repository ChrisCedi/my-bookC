import React from "react";
import { useStyles } from "./MainSectionStyles";
import { motion } from "framer-motion";
import { Typography, IconButton, Box } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const MainSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.container} id="mainSection">
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
        <Typography variant="h2" className={classes.mainInfo}>
          Christian Cedillo
        </Typography>
        <Typography variant="h2" className={classes.mainInfo}>
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
    </section>
  );
};
