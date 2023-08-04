import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from 'components/Modal/Modal';
import Loader from 'components/Loader/Loader2';
import DropDown from 'components/DropDown/DropDown';
import { ButtonPlus } from '../ButtonUser/ButtonUser';
import OrderList from 'components/User/OrderList/OrderList';
import ModalAddOrder from 'components/ModalAddOrder/ModalAddOrder';
import SearchBarComponent from 'components/SearchBarComponent/SearchBarComponent';

import { getIsLoading } from 'redux/orders/selectors';

import { BoxOrderData, Flex, Span, FlexSvg } from './OrderData.styled';

const OrderData = ({ orders }) => {
  console.log(orders);
  const [isOpen, setIsOpen] = useState(false);
  const [sortOrders, setSortOrders] = useState(orders || []);
  const [change, setChange] = useState();
  // const [order, setOrder] = useState({});
  const isLoading = useSelector(getIsLoading);

  const getFilter = filter => {
    setChange(filter);
  };

  // const fullItem = id => {
  //   const foundOrder = orders.find(value => value._id === id);
  //   setOrder(foundOrder);
  //   setIsOpen(true);
  // };

  return (
    <BoxOrderData>
      <Flex>
        <FlexSvg
          type="button"
          ariaLabel="add pet button"
          onClick={() => setIsOpen(true)}
        >
          <Span>Нове замовлення</Span>
          <ButtonPlus
            widthM={'40px'}
            heightM={'40px'}
            widthT={'40px'}
            heightT={'40px'}
            widthMsvg={'16px'}
            heighthMsvg={'16px'}
            widthTsvg={'16px'}
            heighthTsvg={'16px'}
            bgM={'#f59256'}
            bgT={'#f59256'}
            strokeM={'#ffffff'}
            bgHover={'#ffffff'}
            borderHover={'2px solid #f59256'}
            strokeHover={'#f59256'}
          />
        </FlexSvg>
      </Flex>
      {isLoading && <Loader />}
      {sortOrders.length > 0 && (
        <>
          <DropDown getFilter={getFilter} />
          <SearchBarComponent
            setSortOrders={setSortOrders}
            orders={orders}
            filter={change}
          />
        </>
      )}

      {!isLoading && <OrderList orders={sortOrders}/>}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModalAddOrder closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </BoxOrderData>
  );
};

export default OrderData;
