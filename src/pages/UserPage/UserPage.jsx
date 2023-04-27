import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import OrderData from 'components/User/OrderData/OrderData';

import { fetchUser } from 'redux/users/operations';

import { UserWrapper } from './UserPage.styled';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserWrapper>
      <OrderData />
    </UserWrapper>
  );
};

export default UserPage;
