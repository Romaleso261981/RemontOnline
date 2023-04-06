import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  margin-left: 130px;
  gap: 25px;

  @media screen and (min-width: 1280px) {
    width: 100%;
    justify-content: space-between;
    margin-left: 80px;
  }
`;
