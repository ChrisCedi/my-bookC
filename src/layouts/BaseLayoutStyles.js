import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(7),
  },
  containerDefault: {
    height: "100vh",
  },
  footer: {
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
}));

export { useStyles };
