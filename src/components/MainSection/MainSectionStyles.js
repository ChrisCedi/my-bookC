import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  motionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gridInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photo: {
    height: "320px",
    width: "250px",
    borderRadius: 0,
  },
  mainInfo: {
    textAlign: "center",
    fontWeight: 600,
    textShadow: "2px 2px #000000",
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.h5.fontSize,
    },
  },
  iconButton: {
    color: theme.palette.common.black,
  },

  image: {
    height: "250px",
  },
}));

export { useStyles };
