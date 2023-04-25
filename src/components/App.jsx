import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { refreshUser } from '../redux/auth/auth-operations';
import Container from './Container/Container';
import SharedLayout from './SharedLayout/SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const NotFound = lazy(() => import('pages/NotFoundPage/NotFound'));

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
              <Route index element={<NoticesPage />} />
              <Route path="/notices/:category" element={<NoticesPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer autoClose={1500} pauseOnHover={false} limit={2} />
        </Suspense>
      </Container>
    </>
  );
};
