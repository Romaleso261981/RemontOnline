import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  display: none;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;

  @media screen and (min-width: 768px) {
    display: flex;  
    margin-bottom: 70px;
    padding-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    margin-bottom: 70px;
    padding-top: 20px;
  }
`;
