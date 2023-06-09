import { NavList, NavGeneralLink } from './Nav.styled';

export const Nav = () => {
  return (
    <NavList>
      <li>
        <NavGeneralLink to="/news">Зобленно</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/notices/sell">В ремонті</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/friends">Гарантія</NavGeneralLink>
      </li>
    </NavList>
  );
};
