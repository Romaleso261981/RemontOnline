import { useDispatch } from 'react-redux';
import { StyledAccountButton } from '../../../../../ReusableComponents/Buttons/StyledAccountButton';
import { logOut } from 'redux/auth/auth-operations';

import { StyledUserButton } from './UserNav.styled';

export const UserNav = () => {
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(logOut());
    alert("вийти")
  };
  return (
    <StyledUserButton>
      <StyledAccountButton onClick={Logout} buttonName="Вийти" />
    </StyledUserButton>
  );
};
