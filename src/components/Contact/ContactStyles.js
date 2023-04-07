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
  },
  gridForm: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: "100px",
    width: "100px",
    cursor: "pointer",
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
