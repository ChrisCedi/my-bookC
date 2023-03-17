import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./BaseLayoutStyles";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container>{children}</Container>
    </div>
  );
};
