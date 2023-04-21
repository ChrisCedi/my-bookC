import React from "react";
import { MainSection } from "../../components/MainSection/MainSection";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { MyProjects } from "../../components/MyProjects/MyProjects";
import { MyInformation } from "../../components/MyInformation/MyInformation";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
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
