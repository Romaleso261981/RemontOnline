import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  OrderNametechnique,
  OrderBrend,
  OrderModel,
  OrderSerialNumber,
  OrderDateCreation,
  OrderCustomerName,
  OrderCustomerAddress,
  OrderPhone,
  OrderDescriptionMalfunction,
  OrderDescriptionOfRepair,
  OrderCost,
  OrderStatus,
  OrderNumber,
} from '../index';
import { ContainerOrder } from '../../OrderData/OrderData.styled';
import { UniversalButton } from '../../ButtonUser/ButtonUser';
import ModaEditingOrder from 'components/ModaEditingOrder/ModaEditingOrder';
import Modal from 'components/Modal/Modal';

import { deleteOrder, done } from 'redux/orders/operations';

import {
  BattonWrapper,
  DataListFirst,
  DataListsecond,
  DataListWrapper,
  CommentWrapper,
} from '../OrderList.styled';
const OrderListItem = ({
  id,
  brend,
  cost,
  customerAddress,
  customerName,
  datecreation,
  descriptionMalfunction,
  descriptionOfRepair,
  model,
  nametechnique,
  number,
  phone,
  serialNumber,
  type,
  index,
  fullItem,
}) => {
  const dispatch = useDispatch();
  const [isOpenModaEditingOrder, setIsOpenModaEditingOrder] = useState(false);

  const toggleModaEditingOrder = (is, isSet) => {
    setIsOpenModaEditingOrder(!isOpenModaEditingOrder);
  };
  return (
    <ContainerOrder>
      <DataListWrapper>
        <DataListFirst>
          <OrderNumber value={number} />
          <OrderDateCreation value={datecreation} />
          <OrderNametechnique value={nametechnique} />
          <OrderBrend value={brend} />
          <OrderModel value={model} />
        </DataListFirst>
        <DataListsecond>
            <OrderSerialNumber value={serialNumber} />
            <OrderCustomerName value={customerName} />
            <OrderCustomerAddress value={customerAddress} />
            <OrderPhone value={phone} />
          </DataListsecond>
          <CommentWrapper>
            <OrderDescriptionMalfunction value={descriptionMalfunction} />
            <OrderDescriptionOfRepair value={descriptionOfRepair} />
            <OrderCost value={cost} />
            <OrderStatus value={type} />
          </CommentWrapper>
      </DataListWrapper>
      <BattonWrapper>
        <UniversalButton
          type="button"
          onClick={toggleModaEditingOrder}
          text="редагувати"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => {
            dispatch(deleteOrder(id));
          }}
          text="Видалити"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => {
            dispatch(done(id));
          }}
          text="зроблено"
          strokeM={'#fdf7f2'}
        />
      </BattonWrapper>
      {isOpenModaEditingOrder && (
        <Modal onClose={toggleModaEditingOrder}>
          <ModaEditingOrder
            id={id}
            setIsOpenModaEditingOrder={setIsOpenModaEditingOrder}
          />
        </Modal>
      )}
    </ContainerOrder>
  );
};

export default OrderListItem;
