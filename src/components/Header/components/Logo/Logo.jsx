import { ImageCover, LogoWrapper } from './Logo.styled';
import { NavLink } from 'react-router-dom';
import RemOnline__logo_ua from 'img/icons/RemOnline__logo_ua.svg';

export const Logo = ({ onClick }) => {
  return (
    <NavLink to="/" onClick={onClick}>
      <LogoWrapper>
        <ImageCover src={RemOnline__logo_ua} alt="" />
      </LogoWrapper>
    </NavLink>
  );
};
