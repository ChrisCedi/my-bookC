import { makeStyles } from "@material-ui/core";
import { Images } from "../../assets/Images";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `url(${Images.mainBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  motionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  nameP: {
    textAlign: "center",
    textTransform: "upperCase",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  subtitleP: {
    textAlign: "center",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    textTransform: "upperCase",
  },
  iconButton: {
    color: theme.palette.common.white,
  },
}));

export { useStyles };
