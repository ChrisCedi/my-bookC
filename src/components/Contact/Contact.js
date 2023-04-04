import React from "react";
import { useStyles } from "./ContactStyles";
import { Typography, Grid } from "@material-ui/core";
import { ContactForm } from "./ContactForm/ContactForm";

export const Contact = () => {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.container}>
      <Typography color="primary" variant="h3" className={classes.title}>
        Contact
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.gridForm}>
          <ContactForm />
        </Grid>

        <Grid item xs={12} md={6}>
          s
        </Grid>
      </Grid>
    </section>
  );
};
