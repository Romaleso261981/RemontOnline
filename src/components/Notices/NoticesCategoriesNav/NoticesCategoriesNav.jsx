// import { useSelector } from 'react-redux';

import {
  NavBox,
  NavBox1,
  NavBox2,
  NavBox3,
  // NavUsersBox,
} from './NoticesCategoriesNav.styled';
import { StyledNavButton } from 'components/ReusableComponents/Buttons/StyledNavButton';

// import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const NoticesCategoriesNav = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavBox>
      <NavBox1>
        <NavBox2>
          <NavBox3>
            <StyledNavButton
              route="/notices/lost-found"
              buttonName="в ремонті"
            />
            <StyledNavButton
              route="/notices/for-free"
              buttonName="зроблено"
            />
          </NavBox3>
          <StyledNavButton route="/notices/sell" buttonName="на гарантії" />
        </NavBox2>
      </NavBox1>

      {/* {isLoggedIn && (
        <NavUsersBox>
          <StyledNavButton
            route="/notices/favorite"
            buttonName="favorite ads"
          />
          <StyledNavButton route="/notices/own" buttonName="my ads" />
        </NavUsersBox>
      )} */}
    </NavBox>
  );
};

export default NoticesCategoriesNav;
