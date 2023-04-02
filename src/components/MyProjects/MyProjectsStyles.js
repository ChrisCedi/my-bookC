import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(10),
  },
  containerCards: {
    paddingTop: theme.spacing(8),
  },
  cardProject: {
    minHeight: "200px",
  },
}));

export { useStyles };
