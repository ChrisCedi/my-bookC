import React from "react";
import { useStyles } from "./HomeStyles";
import { SplashScreen } from "../../components/SplashScreen/SplashScreen";
import { Typography } from "@material-ui/core";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>Home</Typography>
    </div>
  );
};
