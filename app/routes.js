import HomePage from './containers/HomePage/Loadable';
import FeaturePage from './containers/FeaturePage/Loadable';
import NotFoundPage from './containers/NotFoundPage/Loadable';

export default function createRoutes() {
  return [
    {
      path: '/',
      component: HomePage,
      exact: true,
      routeData: { pageName: 'Home Page' },
    },
    {
      path: '/features',
      component: FeaturePage,
      exact: true,
      routeData: { pageName: 'Feature Page' },
    },
    {
      path: '',
      component: NotFoundPage,
      exact: true,
      routeData: { pageName: 'Page not found!' },
    },
  ];
}
