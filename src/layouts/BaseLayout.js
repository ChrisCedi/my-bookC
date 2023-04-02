import React from "react";
import { Container } from "@material-ui/core";
import { useStyles } from "./BaseLayoutStyles";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.body}>
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};
