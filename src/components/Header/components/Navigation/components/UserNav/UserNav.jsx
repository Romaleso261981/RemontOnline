import { StyledAccountButton } from '../../../../../ReusableComponents/Buttons/StyledAccountButton';
import { StyledUserButton } from './UserNav.styled';

export const UserNav = () => {

  const Logout = () => {
    alert("вийти")
  };
  return (
    <StyledUserButton>
      <StyledAccountButton onClick={Logout} buttonName="Вийти" />
    </StyledUserButton>
  );
};
