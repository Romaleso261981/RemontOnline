import styled from 'styled-components';

export const Image = styled.img`
  width: 240px;
  height: 240px;
  margin-bottom: 20px;
  border-radius: 20px;
  object-fit: cover;
  aspect-ratio: 4/4;

  @media screen and (min-width: 768px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
    margin-right: 32px;
  }
`;

export const Flex = styled.div`
  display: flex;
`;

export const StyledPetPhone = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: ${props => props.margin || '12px'};

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.357;
  }
`;
export const StyledTextOrder = styled.li`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: ${props => props.margin || '12px'};

  display: flex;
  align-items: center;
  letter-spacing: 0.04em;

  color: #111111;

  @media screen and (min-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 1.357;
  }
  @media screen and (min-width: 1280px) {
    max-width: 300px;
  }
`;

export const BattonWrapper = styled.div`
  display: none;
  // position: absolute;
  // top: 300px;
  // right: 30px;

  @media screen and (min-width: 768px) {
    top: 20px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
    position: absolute;
    top: 300px;
    right: 30px;
    top: 10px;
  }
`;
export const DataListFirst = styled.ul`
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    padding: 0 10px;
    width: 200px;
    border-left: 1px solid red;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    min-height: 155px;
    min-width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 3px solid red;
    margin-right: 40px;
    display: block;
  }
`;
export const DataListsecond = styled.ul`
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    padding: 0 10px;
    width: 200px;
    border-left: 1px solid red;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    min-height: 155px;
    min-width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 3px solid red;
    margin-right: 40px;
    display: block;
  }
`;
export const CommentWrapper = styled.ul`
  @media screen and (min-width: 768px) {
    margin-left: 10px;
    padding: 0 10px;
    width: 200px;
    border-left: 1px solid red;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    min-height: 155px;
    min-width: 300px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 3px solid red;
    margin-right: 40px;
    display: block;
  }
`;
export const DataListWrapper = styled.ul`
  @media screen and (min-width: 768px) {
    // border-left: 1px solid red;
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
  }
`;
