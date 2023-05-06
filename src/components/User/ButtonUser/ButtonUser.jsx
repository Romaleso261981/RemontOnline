import { StyleButton, StyleUpdateButton } from './ButtonUser.styled';
import {
  StyledSvgLogout,
  StyledSvgBasket,
  StyledSvgEditPhoto,
  StyledSvgPlus,
  StyledSvgPencil,
  StyledSvgCheck,
  StyledSvgDone,
} from '../ButtonUser';

export const ButtonLogout = props => (
  <StyleButton {...props}>
    <StyledSvgLogout></StyledSvgLogout>
  </StyleButton>
);

export const ButtonBasket = props => (
  <StyleButton {...props}>
    <StyledSvgBasket></StyledSvgBasket>
  </StyleButton>
);
export const UniversalButton = props => <StyleButton {...props}>{props.text}</StyleButton>;
export const ButtonDone = props => (
  <StyleButton {...props}>
    <StyledSvgDone></StyledSvgDone>
  </StyleButton>
);

export const ButtonEditPhoto = props => (
  <StyleButton {...props}>
    <StyledSvgEditPhoto></StyledSvgEditPhoto>
  </StyleButton>
);

export const ButtonPlus = props => (
  <StyleButton {...props}>
    <StyledSvgPlus></StyledSvgPlus>
  </StyleButton>
);

export const ButtonPencil = props => (
  <StyleUpdateButton {...props}>
    <StyledSvgPencil></StyledSvgPencil>
  </StyleUpdateButton>
);

export const ButtonCheck = props => (
  <StyleUpdateButton {...props}>
    <StyledSvgCheck></StyledSvgCheck>
  </StyleUpdateButton>
);

