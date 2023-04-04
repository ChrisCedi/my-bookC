import React from "react";
import { useStyles } from "./BaseLayoutStyles";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const DefaultLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.body}>{children}</div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};
