import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundImage: `url(https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWZmNjIyMmIzMDJkMzAyYzA4MGNiNzA2N2RmNjc4NWMxZWI1MTQ1NyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/l0HlUWrmRr7wCTCqQ/giphy.gif)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  motionDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  nameP: {
    textAlign: "center",
    textTransform: "upperCase",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
    },
  },
  subtitleP: {
    textAlign: "center",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
    textTransform: "upperCase",
  },
  iconButton: {
    color: theme.palette.common.black,
  },
}));

export { useStyles };
