import { Home } from "../views/Home/Home";
import { BaseLayout } from "../layouts/BaseLayout";

const routes = [
  {
    path: "/",
    layout: BaseLayout,
    component: Home,
    exact: true,
    routeMessage: "Home",
  },
];

export { routes };
