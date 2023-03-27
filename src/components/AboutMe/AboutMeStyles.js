import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
  },
  developer: {
    width: "100%",
    height: "100%",
  },
  title: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
  },
  information: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  gridInfo: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: theme.spacing(4),
  },
  firstContainer: { height: "100%" },
  secondContainer: {
    display: "flex",
    alignItems: "space-bewtween",
    height: "100%",
  },
  gridImage: {
    display: "flex",
    alignItems: "flex-end",
  },
  textButton: {
    textDecoration: "none",
  },
}));

export { useStyles };
