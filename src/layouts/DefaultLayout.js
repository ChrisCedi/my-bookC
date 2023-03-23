import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./BaseLayoutStyles";

export const DefaultLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerDefault}>
      <Container>{children}</Container>
    </div>
  );
};
