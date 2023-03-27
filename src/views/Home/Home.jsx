import React from "react";
import { useStyles } from "./HomeStyles";
import { MainSection } from "../../components/MainSection/MainSection";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <MainSection />
      <AboutMe />
    </div>
  );
};
