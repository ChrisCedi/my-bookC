import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    // backgroundColor: theme.palette.background.primary,
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  gridText: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  gridCarousel: {
    paddingLeft: theme.spacing(7),
    paddingRight: theme.spacing(7),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
  },
  developer: {
    width: "90%",
    height: "20%",
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  title: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    fontWeight: 600,
    letterSpacing: theme.spacing(1),
    textTransform: "upperCase",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  information: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "justify",
  },
  gridInfo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      paddingBottom: theme.spacing(8),
    },
  },
  firstContainer: { height: "100%" },
  secondContainer: {
    display: "flex",
    alignItems: "space-bewtween",
    height: "100%",
  },
  gridImage: {
    display: "flex",
    alignItems: "flex-end",
  },

  motionImage: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  myInformation: {
    // backgroundColor: theme.palette.background.primary,
    height: "400px",
  },
}));

export { useStyles };
