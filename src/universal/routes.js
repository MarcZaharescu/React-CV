import App from "./components/app";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

export default function routesFactory() {
  const routes = [];
  routes.push({
    component: App,
    routes: [
      {
        path: `/home`,
        component: Home,
        exact: true
      },
      {
        path: `/about`,
        component: About,
        exact: true
      },
      {
        path: `/contact`,
        component: Contact,
        exact: true
      }
    ]
  });

  return routes;
}
