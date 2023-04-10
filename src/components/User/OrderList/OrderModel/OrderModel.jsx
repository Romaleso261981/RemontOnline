import { StyledTextOrder } from '../OrderList.styled';

const OrderModel = ({ value }) => {
  return <StyledTextOrder margin={'16px'}>Модель: {value}</StyledTextOrder>;
};

export default OrderModel;
