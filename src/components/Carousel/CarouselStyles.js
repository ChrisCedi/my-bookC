import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "red",
    height: "200px",
  },
  slider: {
    height: "190px",
  },
  sliderImage: {
    backgroundPposition: "center",
    backgroundSize: "cover",
    width: "190px",
    height: "190px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0),
      marginRight: theme.spacing(0),
    },
  },
  imageSlider: {
    display: "block",
    width: "100%",
  },
}));

export { useStyles };
