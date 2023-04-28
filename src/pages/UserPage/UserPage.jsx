import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import OrderData from 'components/User/OrderData/OrderData';

import { fetchUser } from 'redux/users/operations';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <>
      <OrderData />
    </>
  );
};

export default UserPage;
