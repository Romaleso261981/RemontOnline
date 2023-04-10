import styled from '@emotion/styled';

export const StyleButton = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 30px;
  margin-top: 5px;
  color: #ffffff;
  border-radius: 5px;
  background-color: ${props => props.bgT || 'rgb(20, 16, 232, 0.9);'};
  stroke: ${props => props.strokeM || '#f59256'};
  transition: color, background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    background-color: #f29e0c;
    color: #000000;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
    height: 30px;
    margin-top: 5px;
    background-color: ${props => props.bgT || 'rgba(255, 255, 255)'};
  }

  @media screen and (max-width: 1280px) {
    width: 110px;
    height: 30px;
    margin-top: 5px;
    background-color: ${props => props.bgT || 'rgb(20, 16, 232, 0.9);'};
  }
`;

export const Button = styled.button`
  border: none;
  background-color: #fff;
`;

export const StyleUpdateButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.widthM || '18px'};
  height: ${props => props.heightM || '18px'};

  background-color: ${props => props.bgM || 'rgba(255, 255, 255, 0.6)'};
  backdrop-filter: blur(2px);
  border-radius: 50%;
  border: transparent;

  // fill: ${({ disabled }) => (disabled ? 'rgba(17, 17, 17, 0.6)' : '#f59256')};
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: ${props => props.widthMsvg || '18px'};
    height: ${props => props.heighthMsvg || '18px'};
  }

  @media screen and (min-width: 768px) {
    width: ${props => props.widthT || '18px'};
    height: ${props => props.heightT || '18px'};
    background-color: ${props => props.bgT || 'rgba(255, 255, 255, 0.6)'};

    svg {
      width: ${props => props.widthTsvg || '18px'};
      height: ${props => props.heighthTsvg || '18px'};
    }
  }
`;
