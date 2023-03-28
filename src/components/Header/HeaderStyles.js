import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.primary.main,
    height: "60px",
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    position: "fixed",
    width: "100%",
    top: 0,
  },
  title: {
    fontWeight: 600,
    color: theme.palette.common.black,
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.h6.fontSize,
    },
  },
}));

export { useStyles };
