import OrderList from 'components/User/OrderList/OrderList';
import { BoxOrderData, Flex, Span, FlexSvg } from './OrderData.styled';
import TitleUser from '../TitleUser/TitleUser';
import { useEffect, useState } from 'react';
import { ButtonPlus } from '../ButtonUser/ButtonUser';
import { fetchPets } from 'redux/order/operations';
import { useDispatch, useSelector } from 'react-redux';
// import { getStatePets } from 'redux/pets/selectors';
import ModalAddOrder from 'components/ModalAddOrder/ModalAddOrder';
import { Modal } from 'components/Modal/Modal';
import { getIsLoading } from 'redux/order/selectors';
import Loader from 'components/Loader/Loader2';

const OrderData = ({ orders }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const isLoading = useSelector(getIsLoading);
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
    <BoxOrderData>
      <Flex>
        <TitleUser M={'0px'}>Техніка в ремонті:</TitleUser>
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
      {!isLoading && <OrderList orders={orders} />}
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModalAddOrder closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </BoxOrderData>
  );
};

export default OrderData;
