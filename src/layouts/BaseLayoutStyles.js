import { makeStyles } from "@material-ui/core";
import { Images } from "../assets/Images";

const useStyles = makeStyles((theme) => ({
  body: {
    paddingTop: theme.spacing(7),
  },
  containerDefault: {
    backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",

    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
}));

export { useStyles };
