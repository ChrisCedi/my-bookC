import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
  },
  developer: {
    width: "100%",
    height: "100%",
    paddingTop: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  title: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    fontWeight: 600,
    textShadow: "2px 2px #000000",
  },
  information: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    textAlign: "center",
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
    height: "100%",
  },
  myInformation: {
    backgroundColor: theme.palette.background.primary,
    height: "400px",
  },
}));

export { useStyles };
