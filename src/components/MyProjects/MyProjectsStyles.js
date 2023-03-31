import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "90vh",
    paddingTop: theme.spacing(10),
  },
  title: {
    textAlign: "center",
  },
  containerCards: {
    paddingTop: theme.spacing(8),
  },
  cardProject: {
    backgroundColor: "red",
    minHeight: "200px",
  },
}));

export { useStyles };
