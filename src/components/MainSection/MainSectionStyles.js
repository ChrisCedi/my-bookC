import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "red",
    [theme.breakpoints.down("xs")]: {
      height: "105vh",
    },
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
  photo: {
    height: "320px",
    width: "250px",
    borderRadius: 0,
  },
  name: {
    textAlign: "center",
    fontWeight: 700,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  subtitle: {
    textAlign: "center",
    fontWeight: 600,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(0.5),
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  iconButton: {
    color: theme.palette.common.black,
  },

  image: {
    height: "250px",
  },
}));

export { useStyles };
