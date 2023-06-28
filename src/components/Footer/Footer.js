import React from "react";
import { useStyles } from "./FooterStyles";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <a
        href="https://github.com/ChrisCedi"
        target="_blank"
        rel="noreferrer"
        title="react icons"
        className={classes.link}
      >
        <Typography className={classes.text}>
          Diseñado y desarrollado por Christian Cedillo. @ 2023.
        </Typography>
      </a>
      <Typography>
        <a
          href="https://www.flaticon.com/free-icons/react"
          title="react icons"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
          Icons created by Kiranshastry - Flaticon
        </a>
      </Typography>
    </div>
  );
};
