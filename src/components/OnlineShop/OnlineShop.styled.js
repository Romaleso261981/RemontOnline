import styled from '@emotion/styled';

export const CategoriesWrapper = styled.div`
  display: none;
  background: #f2f2f2;
  border-radius: 50px;
  padding: 10px 20px;
  margin-bottom: 25px;
  margin-right: 15px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 500ms ease;

  &:hover {
    border-color: silver;
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    display: inline-block;
    // width: 608px;
    // padding: 40px 80px;
  }
`;
