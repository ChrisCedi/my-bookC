import {
  Typography,
  Toolbar,
  AppBar,
  Button,
  Box,
  IconButton,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "../Drawer/Drawer";
import CloseIcon from "@material-ui/icons/Close";

export const Header = ({ inNotFound }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

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
            <Hidden smDown>
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
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setShow(!show)}>
                <MenuIcon color="" />
              </IconButton>
              <Drawer show={show}>
                <IconButton onClick={() => setShow(!show)}>
                  <CloseIcon color="primary" />
                </IconButton>
              </Drawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
