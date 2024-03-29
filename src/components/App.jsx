import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
// import { useDispatch } from 'react-redux';

// import { refreshUser } from '../redux/auth/auth-operations';
import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import { ConditionalRoutes } from './ConditionalRoutes/ConditionalRoutes';
import { RestrictedRoute } from './RestrictedRoutes/RestrictedRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));

export const App = () => {

  return (
    <>
      <Container>
        <Suspense>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<NoticesPage />} />
              <Route
                path="/notices/:category"
                element={
                  <ConditionalRoutes
                    redirectTo="/user"
                    component={<NoticesPage />}
                  />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/notices/:category"
                    component={RegisterPage}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    component={LoginPage}
                    redirectTo="/notices/:category"
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
