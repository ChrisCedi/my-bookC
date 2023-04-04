import React from "react";
import { Images } from "../../assets/Images";
import { useStyles } from "./Error404Styles";
import { Typography, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <img src={Images.ruteError} alt="ruteError" className={classes.image} />
      <Typography variant="h5" className={classes.description}>
        Ruta no encontrada
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => navigate("/home")}
      >
        Volver a Home
      </Button>
    </div>
  );
};
