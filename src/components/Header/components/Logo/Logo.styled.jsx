import styled from 'styled-components';

export const LogoWrapper = styled.h1`
  margin-left: 20px;
  font-family: 'Poppins';
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: 0.07em;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;

export const ImageCover = styled.img`
  width: 433px;
  height: 70px;
  margin-right: 20px;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
    width: 433px;
  }
  @media screen and (max-width: 320px) {
    margin-left: auto;
    margin-right: auto;
    width: 150px;
  }
`;

export const LogoAccent = styled.span`
  color: #f59256;
`;
