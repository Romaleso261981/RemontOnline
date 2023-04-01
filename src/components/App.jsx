import { Routes, Route  } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { refreshUser } from '../redux/users/operations';
import { selectAccessToken } from '../redux/login/logIn-selectors';
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
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

export const App = () => {
const dispatch = useDispatch();
  const [isHintShown, setIsHintShown] = useState(false);
  const token = useSelector(selectAccessToken);
 
  console.log(isHintShown);
  

    useEffect(() => {
      if (!token) {
        setIsHintShown(true);
        return;
      }
      dispatch(refreshUser());
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
                  <PrivateRoute redirectTo="/login" component={<UserPage />} />
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
