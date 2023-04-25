import { StyledPetPhone } from '../OrderList.styled';

const OrderCustomerName = ({ value }) => {
  return <StyledPetPhone>ПІБ: {value}</StyledPetPhone>;
};

export default OrderCustomerName;
