import React, { useRef } from "react";
import { useStyles } from "./ContactStyles";
import { Typography, Grid, Container } from "@material-ui/core";
import { Images } from "../../assets/Images";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

export const Contact = () => {
  const classes = useStyles();
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  return (
    <section id="contact" className={classes.container} ref={ref}>
      <Container>
        <Typography
          variant="h3"
          color="primary"
          className={classes.title}
          style={{
            transform: isInVIew ? "none" : "translateX(-200px)",
            opacity: isInVIew ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          contacto
        </Typography>
        <Grid container className={classes.body}>
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.gridImage}
            style={{
              transform: isInVIew ? "none" : "translateX(-200px)",
              opacity: isInVIew ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
          >
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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.gridImage}
            style={{
              transform: isInVIew ? "none" : "translateX(-200px)",
              opacity: isInVIew ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s",
            }}
          >
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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            className={classes.gridImage}
            style={{
              transform: isInVIew ? "none" : "translateX(-200px)",
              opacity: isInVIew ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.0s",
            }}
          >
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
