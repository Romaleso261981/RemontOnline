import { StyledTextPet } from '../PetsList.styled';

const PetName = ({ nametechnique }) => {
  return <StyledTextPet>Тип: {nametechnique}</StyledTextPet>;
};

export default PetName;
