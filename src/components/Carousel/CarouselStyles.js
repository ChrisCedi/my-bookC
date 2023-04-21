import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    height: "200px",
  },
  slider: {
    height: "100px",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  sliderImage: {
    backgroundPposition: "center",
    backgroundSize: "cover",
    width: "100px",
    height: "100px",

    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
  },
  imageSlider: {
    display: "block",
    width: "100%",
  },
}));

export { useStyles };
