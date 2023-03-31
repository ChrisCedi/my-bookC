import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "red",
    height: "200px",
  },
  slider: {
    backgroundColor: "red",
    height: "150px",
  },
}));

export { useStyles };
