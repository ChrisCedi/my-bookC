import React from "react";
import { useStyles } from "./HomeStyles";
import { Images } from "../../assets/Images";
import { Typography } from "@material-ui/core";

export const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography>Home</Typography>
    </div>
  );
};
