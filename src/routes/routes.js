import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layouts/BaseLayout";
import { SplashScreen } from "../components/SplashScreen/SplashScreen";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Error404 } from "../views/Error404/Error404";
import { Navigate } from "react-router-dom";

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
  {
    path: "/not-found",
    layout: DefaultLayout,
    component: Error404,
    exact: true,
    routeMessage: "Not found",
  },

  // {
  //   path: "*",
  //   layout: BaseLayout,
  //   component: <Navigate to="/not-found" />,
  // },
];

export { routes };
