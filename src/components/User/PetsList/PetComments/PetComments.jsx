import { StyledTextPet } from '../PetsList.styled';

const PetComments = ({ comments }) => {
  return <StyledTextPet margin={'0px'}>Коментарі: {comments}</StyledTextPet>;
};

export default PetComments;
