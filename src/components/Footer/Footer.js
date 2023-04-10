import React from "react";
import { useStyles } from "./FooterStyles";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.text}>
        @ 2023 Christian Cedillo /{" "}
        <a href="https://storyset.com/magic" className={classes.link}>
          Magic illustrations by Storyset
        </a>
      </Typography>
    </div>
  );
};
