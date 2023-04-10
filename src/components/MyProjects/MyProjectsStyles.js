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
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  containerCards: {
    paddingTop: theme.spacing(8),
  },
  cardProject: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    minHeight: "230px",
    backgroundColor: theme.palette.background.primary,
    borderRadius: 10,
    boxShadow: "0px 3px 6px #00000029",
  },
  information: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  titleProject: {
    textTransform: "upperCase",
    letterSpacing: "3px",
  },
  descriptionProject: {
    textAlign: "justify",
    paddingTop: theme.spacing(1),
  },
  textButton: {
    textDecoration: "none",
  },
  button: {
    borderRadius: 30,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontWeight: 600,
    marginBottom: theme.spacing(2),
  },
}));

export { useStyles };
