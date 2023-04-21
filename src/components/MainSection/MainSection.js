import React from "react";
import { useStyles } from "./MainSectionStyles";
import { motion } from "framer-motion";
import { Typography, IconButton, Box, withWidth } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const MainSection = ({ width }) => {
  const classes = useStyles();

  return (
    <section className={classes.container} id="mainSection">
      <Box>
        {width === "xs" ? (
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
              variant="h5"
              color="primary"
              className={classes.nameP}
              style={{ fontWeight: 600, letterSpacing: "8px" }}
            >
              Christian Cedillo
            </Typography>
            <Typography
              variant="h5"
              color="secondary"
              key="12312"
              className={classes.subtitleP}
              style={{ fontWeight: 600, letterSpacing: "8px" }}
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
        ) : (
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
              variant="h2"
              color="primary"
              className={classes.nameP}
              style={{ fontWeight: 600, letterSpacing: "8px" }}
            >
              Christian Cedillo
            </Typography>
            <Typography
              variant="h4"
              color="secondary"
              className={classes.subtitleP}
              style={{ fontWeight: 600, letterSpacing: "8px" }}
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
        )}
      </Box>
    </section>
  );
};

export default withWidth()(MainSection);
