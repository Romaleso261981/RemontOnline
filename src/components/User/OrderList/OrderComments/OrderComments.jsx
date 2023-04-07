import { StyledTextOrder } from '../OrderList.styled';

const OrderComments = ({ comments }) => {
  return (
    <StyledTextOrder margin={'0px'}>Коментарі: {comments}</StyledTextOrder>
  );
};

export default OrderComments;
