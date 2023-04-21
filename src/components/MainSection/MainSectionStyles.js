import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "102vh",
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  subtitleP: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    textTransform: "upperCase",
  },
  iconButton: {
    color: theme.palette.common.black,
  },
}));

export { useStyles };
