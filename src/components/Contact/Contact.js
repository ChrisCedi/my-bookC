import React from "react";
import { useStyles } from "./ContactStyles";
import { Typography, Grid, Container } from "@material-ui/core";
import { ContactForm } from "./ContactForm/ContactForm";
import { Images } from "../../assets/Images";
import { motion } from "framer-motion";

export const Contact = () => {
  const classes = useStyles();

  return (
    <section id="contact" className={classes.container}>
      <Container>
        <Typography color="primary" variant="h3" className={classes.title}>
          Contacto
        </Typography>
        <Grid container className={classes.body}>
          <Grid item xs={12} sm={6} md={4} className={classes.gridImage}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 300, damping: 1 }}
            >
              <a href="https://wa.me/5583168743">
                <img
                  src={Images.whatsapp}
                  alt="sadasssd"
                  className={classes.image}
                />
              </a>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridImage}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 300, damping: 1 }}
            >
              <a href="https://github.com/ChrisCedi">
                <img
                  src={Images.github}
                  alt="sadasssd"
                  className={classes.image}
                />
              </a>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.gridImage}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "tween", stiffness: 300, damping: 1 }}
            >
              <a href="mailto:christian.cedillo.palacios@outlook.com">
                <img
                  src={Images.email}
                  alt="sadasssd"
                  className={classes.image}
                />
              </a>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};
