import {
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Box,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStyles } from "./HeaderStyles";
import { motion } from "framer-motion";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import { Drawer } from "../Drawer/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import RutesHeader from "../RutesHeader/RutesHeader";

export const Header = ({ inNotFound }) => {
  const classes = useStyles();
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
              <RutesHeader />
            </Hidden>
            <Hidden smUp>
              <IconButton onClick={() => setShow(!show)}>
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
              <Drawer show={show}>
                <>
                  <Box width="100%">
                    <IconButton onClick={() => setShow(!show)}>
                      <CloseIcon color="primary" />
                    </IconButton>
                  </Box>
                  <RutesHeader setShow={setShow} />
                </>
              </Drawer>
            </Hidden>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};
