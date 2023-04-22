import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardProject: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    minHeight: "230px",
    width: "75%",
    backgroundColor: theme.palette.common.white,
    borderRadius: 10,
    boxShadow: "0px 3px 6px #00000029",
  },
  information: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  titleProject: {
    textTransform: "upperCase",
    letterSpacing: "3px",
    textAlign: "center",
  },
  descriptionProject: {
    textAlign: "justify",
    paddingTop: theme.spacing(1),
  },
  textButton: {
    textDecoration: "none",
  },
  buttonProject: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },

  gridTools: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  gridButtons: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  avatar: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(0.5),
      marginRight: theme.spacing(0.5),
      marginTop: theme.spacing(1),
    },
  },
}));

export { useStyles };
