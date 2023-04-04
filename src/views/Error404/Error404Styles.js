import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    paddingBottom: theme.spacing(2),
  },
  image: {
    height: "50vh",
  },
  button: {
    fontWeight: 600,
  },
}));

export { useStyles };
