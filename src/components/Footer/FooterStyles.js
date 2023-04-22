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
    flexDirection: "column",
  },
  text: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.caption.fontSize,
      textAlign: "center",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.caption.fontSize,
      textAlign: "center",
    },
  },
}));

export { useStyles };
