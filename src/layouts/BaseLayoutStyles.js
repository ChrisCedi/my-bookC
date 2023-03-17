import { makeStyles } from "@material-ui/core";
import { Images } from "../assets/Images";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
    // backgroundImage: `url(${Images.baseBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  containerDefault: {
    backgroundImage: "linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)",
    // backgroundImage: `url(${Images.baseBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  },
}));

export { useStyles };
