import { Typography, Toolbar, AppBar, Button, Box } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import { motion } from "framer-motion";

export const Header = () => {
  const classes = useStyles();

  // const inView = document.;

  // console.log(inView);

  return (
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
            {`<BookC/>`}
          </Typography>
        </motion.div>
        <Box>
          <Button
            onClick={() =>
              document.getElementById("mainSection").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Home
          </Button>

          <Button
            onClick={() =>
              document.getElementById("aboutMe").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            About me
          </Button>

          <Button
            onClick={() =>
              document.getElementById("MyProjects").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            My projects
          </Button>

          <Button
            onClick={() =>
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
