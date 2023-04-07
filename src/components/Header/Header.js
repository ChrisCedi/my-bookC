import { Typography, Toolbar, AppBar, Button, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export const Header = ({ inNotFound }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <>
      {inNotFound ? (
        <AppBar position="static" className={classes.container}>
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              Book C
            </Typography>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar position="static" className={classes.container}>
          <Toolbar className={classes.toolBar}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
              <Typography
                variant="h5"
                className={classes.title}
                onClick={() =>
                  document.getElementById("mainSection").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Book C
              </Typography>
            </motion.div>
            <Box>
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
              <Button
                onClick={() => navigate("/not-found")}
                className={classes.button}
              >
                404
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
