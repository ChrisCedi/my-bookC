import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    wdith: "100%",
  },
  hi: {
    // backgroundColor: "red",
  },
  divButton: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    borderRadius: 30,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    fontWeight: 600,
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}));
