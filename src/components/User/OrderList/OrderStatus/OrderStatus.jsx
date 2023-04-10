import { StyledTextOrder } from '../OrderList.styled';

const OrderStatus = ({ value }) => {
  return <StyledTextOrder>Статус ремонту: {value}</StyledTextOrder>;
};

export default OrderStatus;
