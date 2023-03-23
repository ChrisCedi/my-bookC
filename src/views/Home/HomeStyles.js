import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },

  gridInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    height: "320px",
    width: "250px",
    borderRadius: 0,
  },
  mainInfo: {
    textAlign: "center",
  },
}));

export { useStyles };
