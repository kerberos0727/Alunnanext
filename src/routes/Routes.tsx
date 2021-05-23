import React, { Suspense, Fragment, lazy } from 'react';
// import { Switch, Redirect, Route } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import HomeView from 'views/home/HomeView';
import LoadingScreen from 'components/LoadingScreen';
import { RouterPathName } from 'constants/routes.constant';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []): JSX.Element => (
  <Suspense fallback={<LoadingScreen />}>
    {/* <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch> */}
  </Suspense>
);

const routes: Routes = [
  // {
  //   exact: true,
  //   path: RouterPathName.NotFound,
  //   component: lazy(() => import('views/404'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.ThankYou,
  //   component: lazy(() => import('views/thankyou/index'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.NoPayment,
  //   component: lazy(() => import('views/thankyou/noPayment'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.Contact,
  //   component: lazy(() => import('views/contact'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.HowItWorks,
  //   component: lazy(() => import('views/howWork'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.Courses + '/:courseId',
  //   component: lazy(() => import('views/courses'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.CompleteAccountSetup,
  //   component: lazy(() => import('views/auth/CompleteAccountSetup'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.Teacher,
  //   component: lazy(() => import('views/teacher'))
  // },
  // {
  //   exact: true,
  //   path: '/',
  //   component: HomeView
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.Classes,
  //   component: lazy(() => import('views/classes/ClassesView'))
  // },
  // {
  //   exact: true,
  //   path: RouterPathName.Profile,
  //   component: lazy(() => import('views/profile'))
  // },
  // {
  //   component: () => <Redirect to={RouterPathName.NotFound} />
  // },
  // {
  //   path: '*',
  //   layout: MainLayout,
  //   routes: [
      
      
      
  //   ]
  // }
];

export default routes;
