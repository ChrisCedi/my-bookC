import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,

    height: "60px",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: "fixed",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  toolBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 600,
    color: theme.palette.common.white,
    textTransform: "upperCase",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
  button: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: 600,
    color: "white",
    // marginLeft: theme.spacing(2),
  },
  menuIcon: {
    color: theme.palette.common.white,
  },
}));

export { useStyles };
