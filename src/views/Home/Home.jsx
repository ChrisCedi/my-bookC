import React from "react";
import { useStyles } from "./HomeStyles";

export const Home = () => {
  const classes = useStyles();

  return <div className={classes.container}>Home</div>;
};
