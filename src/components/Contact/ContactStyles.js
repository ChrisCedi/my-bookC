import { makeStyles } from "@material-ui/core";
import { Images } from "../../assets/Images";
const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    backgroundColor: theme.palette.common.black,
    backgroundImage: `url(${Images.contactBackground})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  title: {
    textAlign: "center",
    color: theme.palette.common.white,
    paddingTop: theme.spacing(10),
    textTransform: "upperCase",
    fontWeight: 600,
    letterSpacing: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h4.fontSize,
    },
  },
  gridForm: {
    display: "flex",
    justifyContent: "center",
  },
  image: {
    height: "100px",
    width: "100px",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      height: "60px",
      width: "60px",
    },
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
  phoneText: {
    color: theme.palette.common.white,
  },
}));

export { useStyles };
