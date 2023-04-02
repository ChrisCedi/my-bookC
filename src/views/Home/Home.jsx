import React from "react";
import { useStyles } from "./HomeStyles";
import { MainSection } from "../../components/MainSection/MainSection";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { MyProjects } from "../../components/MyProjects/MyProjects";

export const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <MainSection />
      <AboutMe />
      <MyProjects />
    </div>
  );
};
