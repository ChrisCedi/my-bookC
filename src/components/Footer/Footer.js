import React from "react";
import { useStyles } from "./FooterStyles";
import { Typography } from "@material-ui/core";

export const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography className={classes.text}>
        Diseñado y desarrollado por Christian Cedillo. @ 2023.
      </Typography>
      <Typography>
        <a
          href="https://www.flaticon.com/free-icons/react"
          title="react icons"
          className={classes.link}
        >
          Icons created by Kiranshastry - Flaticon
        </a>
      </Typography>
    </div>
  );
};
