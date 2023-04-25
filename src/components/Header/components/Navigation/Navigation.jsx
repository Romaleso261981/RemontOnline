// import { MenuButtonOpen } from '../MobileMenu/MenuButton/MenuButtonOpen.styled';
import { Nav, AuthNav } from './components';
// import { Nav, AuthNav, UserNav } from './components';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavMobile } from '../MobileMenu/MobileMenu';
import { NavContainer } from './Navigation.styled';

export const Navigation = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  // const isloggedIn = useSelector(selectIsLoggedIn);

  const onMenuButtonClick = () => {
    setShowMenuModal(!showMenuModal);
  };

  return (
    <NavContainer>
      <Nav />
      {/* {isloggedIn ? <UserNav /> : <AuthNav />} */}
      <AuthNav />
      {/* <MenuButtonOpen onMenuButtonClick={onMenuButtonClick} /> */}
      {showMenuModal && <NavMobile onClose={onMenuButtonClick} />}
    </NavContainer>
  );
};
