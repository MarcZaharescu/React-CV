import App from './components/app';
import Home from './components/home';

export default function routesFactory(config) {
  const appPath = ``;
  const routes = [];
  console.log('routeFactory')
  routes.push({
    path: appPath,
    component: Home,
    routes: [
      {
        path: `/home`,
        component: Home,
        exact: true,
      },
    ],
  });

  return [
    {
      component: App,
      routes,
    },
  ];
}
