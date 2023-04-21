import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(10),
    textTransform: "upperCase",
    fontWeight: 600,
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  gridForm: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: "100px",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      width: "60px",
    },
  },
  body: {
    height: "60vh",
    display: "flex",
    alignItems: "center",
  },
  gridImage: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
