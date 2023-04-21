import React from "react";
import { Button, Box } from "@material-ui/core";
import { useStyles } from "./RutesHeaderStyles";
import withWidth from "@material-ui/core/withWidth";

const RutesHeader = ({ setShow, width }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Button
        className={classes.button}
        onClick={() =>
          document.getElementById("mainSection").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Inicio
      </Button>

      <Button
        className={classes.button}
        onClick={() =>
          document.getElementById("aboutMe").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Sobre mí
      </Button>

      <Button
        className={classes.button}
        onClick={() =>
          document.getElementById("MyProjects").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        mis proyectos
      </Button>

      <Button
        className={classes.button}
        onClick={() =>
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Contacto
      </Button>
    </Box>
  );
};

export default withWidth()(RutesHeader);
