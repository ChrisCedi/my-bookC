import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    backgroundColor: "red",
    height: "200px",
  },
  slider: {
    height: "140px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  sliderImage: {
    backgroundPposition: "center",
    backgroundSize: "cover",
    width: "140px",
    height: "140px",

    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
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
