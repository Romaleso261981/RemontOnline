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
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreDetali, setIsMoreDetali] = useState(true);
  const [isMoreComent, setIsMoreComent] = useState(true);
  const [isOpenFull, setIsOpenFull] = useState(false);

  const toggle = (is, isSet) => {
    isSet(!is);
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
        {isMoreDetali && (
          <DataListsecond>
            <OrderSerialNumber value={serialNumber} />
            <OrderCustomerName value={customerName} />
            <OrderCustomerAddress value={customerAddress} />
            <OrderPhone value={phone} />
          </DataListsecond>
        )}
        {isMoreComent && (
          <CommentWrapper>
            <OrderDescriptionMalfunction value={descriptionMalfunction} />
            <OrderDescriptionOfRepair value={descriptionOfRepair} />
            <OrderCost value={cost} />
            <OrderStatus value={type} />
          </CommentWrapper>
        )}
      </DataListWrapper>
      <BattonWrapper>
        <UniversalButton
          type="button"
          onClick={() => toggle(isMoreDetali, setIsMoreDetali)}
          text="Деталі"
        />
        <UniversalButton
          type="button"
          onClick={() => toggle(isMoreComent, setIsMoreComent)}
          text="деталі"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => fullItem(id)}
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
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModaEditingOrder />
        </Modal>
      )}
      {isOpenFull && (
        <Modal
          toggle={toggle}
          setIsOpenFull={setIsOpenFull}
          isOpenFull={isOpenFull}
        >
          {/* <ShowFullItem FullItem={FullItem} /> */}
        </Modal>
      )}
    </ContainerOrder>
  );
};

export default OrderListItem;
