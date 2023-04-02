import React from "react";
import { useStyles } from "./FooterStyles";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography>@ 2023 Christian Cedillo </Typography>
    </div>
  );
};
