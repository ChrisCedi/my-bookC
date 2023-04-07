import React from "react";
import { useStyles } from "./ContactFormStyles";
import { TextField, Button } from "@material-ui/core";

export const ContactForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <TextField
        fullWidth
        placeholder="Nombre"
        variant="outlined"
        className={classes.field}
      />

      <TextField
        placeholder="Nombre"
        variant="outlined"
        className={classes.field}
      />

      <TextField
        placeholder="Nombre"
        variant="outlined"
        className={classes.field}
      />

      <TextField
        placeholder="Nombre"
        variant="outlined"
        className={classes.field}
      />
      <Button color="secondary" variant="contained">
        Enviar
      </Button>
    </form>
  );
};
