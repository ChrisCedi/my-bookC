import React from "react";
import { useStyles } from "./HomeStyles";
import { Images } from "../../assets/Images";
import { Typography, Grid } from "@material-ui/core";
import { motion } from "framer-motion";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.gridInfo}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={Images.me} alt="PhotoProfile" className={classes.photo} />
          </motion.div>
        </Grid>

        <Grid item xs={12} md={6} className={classes.gridInfo}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Typography variant="h2" className={classes.mainInfo}>
              Soy Christian Cedillo, Frontend developer
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};
