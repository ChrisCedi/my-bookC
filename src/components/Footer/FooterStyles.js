import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "100px",
    width: "100%",
    bottom: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: theme.spacing(4),
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.caption.fontSize,
      textAlign: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.caption.fontSize,
      textAlign: "center",
    },
  },
}));

export { useStyles };
