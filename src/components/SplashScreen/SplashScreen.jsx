import { Typography, Button } from "@material-ui/core";
import { useStyles } from "./SplashScreenStyles";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const SplashScreen = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <motion.div
        transition={{ duration: 3 }}
        initial={{ y: "0%" }}
        animate={{ y: "40vh" }}
      >
        <Typography variant="h3">¡Holaa!</Typography>
      </motion.div>
      <motion.div
        transition={{ duration: 4, delay: 0.6 }}
        initial={{ x: "130vh", y: "40vh" }}
        animate={{ x: "0vh" }}
        className={classes.hi}
      >
        <Typography variant="h4">este es mi portafolio</Typography>
      </motion.div>
      <motion.div
        className={classes.divButton}
        transition={{ duration: 2, delay: 4 }}
        initial={{ y: "45vh", opacity: 0 }}
        animate={{ opacity: 3 }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/home");
          }}
        >
          Comenzar
        </Button>
      </motion.div>
    </div>
  );
};
