import React from "react";
import { useStyles } from "./ContactFormStyles";
import { TextField } from "@material-ui/core";

export const ContactForm = () => {
  const classes = useStyles();

  return (
    <form className={classes.container}>
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

      <TextField
        placeholder="Nombre"
        variant="outlined"
        className={classes.field}
      />
    </form>
  );
};
