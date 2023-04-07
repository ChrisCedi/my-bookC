import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    backgroundColor: theme.palette.background.secondary,
    height: "100%",

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
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    borderRadius: 20,
  },
  cardInformationCv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.common.white,
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5),
    borderRadius: 20,
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
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
  titleSkills: {
    fontWeight: 600,
    textTransform: "upperCase",
    letterSpacing: theme.spacing(1),
    textAlign: "center",
    paddingBottom: theme.spacing(1),
  },
  subtitleCv: {
    textAlign: "center",
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
