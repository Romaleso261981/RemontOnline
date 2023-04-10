import { StyledTextOrder } from '../OrderList.styled';

const OrderNumber = ({ value }) => {
  return <StyledTextOrder>номер замовлення: {value}</StyledTextOrder>;
};

export default OrderNumber;
