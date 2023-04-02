import { Typography, Toolbar, AppBar } from "@material-ui/core";
import React from "react";
import { useStyles } from "./HeaderStyles";
import { motion } from "framer-motion";

export const Header = () => {
  const classes = useStyles();

  return (
    // <div className={classes.container}>
    // <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
    //   <Typography
    //     variant="h5"
    //     className={classes.title}
    //     onClick={() =>
    //       document.getElementById("mainSection").scrollIntoView({
    //         behavior: "smooth",
    //       })
    //     }
    //   >
    //     {`<BookC/>`}
    //   </Typography>
    // </motion.div>
    // </div>
    <AppBar position="static" className={classes.container}>
      <Toolbar>
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
      </Toolbar>
    </AppBar>
  );
};
