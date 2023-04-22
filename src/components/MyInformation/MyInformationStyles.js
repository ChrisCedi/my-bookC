import { makeStyles } from "@material-ui/core";
import { Images } from "../../assets/Images";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Images.earth})`,
    backgroundSize: "initial",
    backgroundColor: theme.palette.common.black,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      height: "100%",
    },
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },

  cardInformation: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(240,240,240,.2)",
    padding: theme.spacing(3),
    borderRadius: 20,
    boxShadow: "0px 3px 6px #00000029",
  },
  cardInformationCv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(240,240,240,.2)",
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5),
    borderRadius: 20,
    boxShadow: "0px 3px 6px #00000029",
  },
  cardCv: {
    padding: theme.spacing(2),
  },
  imageCv: {
    width: "100%",
    height: "200px",
    zIndex: 1,
  },
  textButton: {
    textDecoration: "none",
  },
  title: {
    textAlign: "center",
  },
  gridSkills: {
    display: "flex",
    justifyContent: "center",
    paddingTop: theme.spacing(2),
  },
  list: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  titleSkills: {
    color: theme.palette.common.white,
    fontWeight: 600,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(1),
    textAlign: "center",
    paddingBottom: theme.spacing(1),
  },
  subtitleCv: {
    textAlign: "center",
    color: theme.palette.common.white,
    paddingTop: theme.spacing(2),
  },
  gridButtonCv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: theme.spacing(4),
  },
  imageSkills: {
    height: "300px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  imageDog: {
    height: "150px",
    [theme.breakpoints.down("xs")]: {
      height: "200px",
    },
  },
  button: {
    borderRadius: 30,
    paddingLeft: theme.spacing(4),

    paddingRight: theme.spacing(4),
  },
}));

export { useStyles };
