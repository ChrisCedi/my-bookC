import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layouts/BaseLayout";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Error404 } from "../views/Error404/Error404";

const routes = [
  {
    path: "/",
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
];

export { routes };
