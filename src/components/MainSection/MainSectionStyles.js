import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  motionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  nameP: {
    textAlign: "center",
    textTransform: "upperCase",
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  subtitleP: {
    textAlign: "center",
    textTransform: "upperCase",
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  iconButton: {
    color: theme.palette.common.black,
  },
}));

export { useStyles };
