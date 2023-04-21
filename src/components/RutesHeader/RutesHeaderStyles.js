import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100%",
      justifyContent: "space-around",
    },
  },
  button: {
    fontSize: theme.typography.subtitle1.fontSize,
    "&:hover": {
      textDecoration: "underline overline",
    },
    fontWeight: 600,
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
    },
  },
}));

export { useStyles };
