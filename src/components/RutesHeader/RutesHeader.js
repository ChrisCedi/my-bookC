import React from "react";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "./RutesHeaderStyles";
import withWidth from "@material-ui/core/withWidth";

const RutesHeader = ({ setShow, width }) => {
  const classes = useStyles();

  const handleCloseRutes = (section) => {
    document.getElementById(section).scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => setShow(false), 800);
  };

  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        onClick={() => {
          width === "xs"
            ? handleCloseRutes("mainSection")
            : document.getElementById("mainSection").scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Inicio
      </Button>

      <Button
        className={classes.button}
        onClick={() => {
          width === "xs"
            ? handleCloseRutes("aboutMe")
            : document.getElementById("aboutMe").scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Sobre mí
      </Button>

      <Button
        className={classes.button}
        onClick={() => {
          width === "xs"
            ? handleCloseRutes("MyProjects")
            : document.getElementById("MyProjects").scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        mis proyectos
      </Button>

      <Button
        className={classes.button}
        onClick={() => {
          width === "xs"
            ? handleCloseRutes("contact")
            : document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
        }}
      >
        Contacto
      </Button>
    </Box>
  );
};

export default withWidth()(RutesHeader);
