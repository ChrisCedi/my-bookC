import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "80vh",
  },
  title: {
    textAlign: "center",
    paddingTop: theme.spacing(10),
    fontWeight: 600,
    textShadow: "2px 2px #000000",
  },
  gridForm: {
    // backgroundColor: theme.palette.background.secondary,
    display: "flex",
    justifyContent: "center",
  },
}));

export { useStyles };
