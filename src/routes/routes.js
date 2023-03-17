import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layouts/BaseLayout";
import { SplashScreen } from "../components/SplashScreen/SplashScreen";
import { DefaultLayout } from "../layouts/DefaultLayout";

const routes = [
  {
    path: "/",
    layout: DefaultLayout,
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
