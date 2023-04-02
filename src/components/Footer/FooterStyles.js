import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: "100px",
    width: "100%",
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export { useStyles };
