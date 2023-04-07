import React from "react";
import { useStyles } from "./BaseLayoutStyles";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header inNotFound={false} />
      <div className={classes.body}>{children}</div>
      <Footer />
    </div>
  );
};
