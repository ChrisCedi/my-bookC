import { makeStyles } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    paddingBottom: theme.spacing(6),
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
  gridCard: {
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
