import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(10),
    fontWeight: 600,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(1),
  },
  containerCards: {
    paddingTop: theme.spacing(8),
  },
  cardProject: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    minHeight: "200px",
    backgroundColor: theme.palette.background.primary,
    borderRadius: 10,
    boxShadow: "0px 3px 6px #00000029",
  },
  titleProject: {
    textTransform: "upperCase",
    letterSpacing: "3px",
  },
  button: {
    borderRadius: 30,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontWeight: 600,
  },
}));

export { useStyles };
