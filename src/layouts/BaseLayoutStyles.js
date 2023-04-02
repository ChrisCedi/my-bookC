import { makeStyles } from "@material-ui/core";
import { Images } from "../assets/Images";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(7),
    marginBottom: theme.spacing(4),
  },
  containerDefault: {
    height: "100vh",
  },
}));

export { useStyles };
