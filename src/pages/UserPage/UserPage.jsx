// import UserData from 'components/User/UserData/UserData';
import OrderData from 'components/User/OrderData/OrderData';
import { UserWrapper } from './UserPage.styled';
import { fetchUser } from 'redux/users/operations';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const UserPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserWrapper>
      {/* <UserData /> */}
      <OrderData />
    </UserWrapper>
  );
};

export default UserPage;
