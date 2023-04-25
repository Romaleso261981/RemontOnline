import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from '../redux/auth/auth-operations';
import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import { ConditionalRoutes } from './ConditionalRoutes/ConditionalRoutes';
import { RestrictedRoute } from './RestrictedRoutes/RestrictedRoutes';
import { PrivateRoute } from './PravateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Animation } from './Animation/Animation';

const Home = lazy(() => import('pages/Home/Home'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage'),
);
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));
// const UserPage = lazy(() => import('pages/UserPage/UserPage'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <>
      <Container>
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="/news" element={<NewsPage />} />
              <Route
                path="/notices/:category"
                element={
                  <ConditionalRoutes
                    redirectTo="/user"
                    component={<NoticesPage />}
                  />
                }
              />
              <Route path="/friends" element={<OurFriendsPage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/user"
                    component={RegisterPage}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute component={LoginPage} redirectTo="/user" />
                }
              />
              <Route
                path="/user"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<NoticesPage />}
                  />
                }
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer autoClose={1500} pauseOnHover={false} limit={2} />
        </Suspense>
      </Container>
    </>
  );
};
