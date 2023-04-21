import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(https://media1.giphy.com/media/1H8sdPP3JDAR5iY0Yv/giphy.gif?cid=ecf05e475f8va96k124qgum2tvo4y9gt1h93w947ayq9xab6&rid=giphy.gif&ct=g)`,
    backgroundSize: "cover",
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
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(3),
    borderRadius: 20,
    boxShadow: "0px 3px 6px #00000029",
  },
  cardInformationCv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: theme.palette.background.primary,
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
