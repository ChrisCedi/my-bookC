import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: `${theme.zIndex.drawer} !important`,
  },
  container: {
    backgroundColor: theme.palette.common.white,
    width: 478,
    maxWidth: "100%",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(5),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: "100%",
    },
  },
}));

export { useStyles };
