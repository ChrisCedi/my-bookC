import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layouts/BaseLayout";
import { SplashScreen } from "../components/SplashScreen/SplashScreen";

const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: SplashScreen,
    exact: true,
    routeMessage: "BookC",
  },
  {
    path: "/home",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Home",
  },
];

export { routes };
