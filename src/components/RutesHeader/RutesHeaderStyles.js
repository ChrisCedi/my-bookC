import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  button: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: 600,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      color: theme.palette.secondary.main,
    },
  },
}));

export { useStyles };
