import React from "react";
import { useStyles } from "./HomeStyles";
import { MainSection } from "../../components/MainSection/MainSection";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { MyProjects } from "../../components/MyProjects/MyProjects";
import { MyInformation } from "../../components/MyInformation/MyInformation";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
  // const classes = useStyles();

  return (
    <div>
      <MainSection />
      <AboutMe />
      <MyInformation />
      <MyProjects />
      <Contact />
    </div>
  );
};
