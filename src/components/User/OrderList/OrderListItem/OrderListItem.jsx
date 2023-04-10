import {
  BattonWrapper,
  DataListFirst,
  DataListsecond,
  DataListWrapper,
  CommentWrapper,
} from '../OrderList.styled';
import {
  OrderNametechnique,
  OrderBrend,
  OrderModel,
  OrderSerialNumber,
  OrderDateCreation,
  OrderCustomerName,
  OrderCustomerAddress,
} from '../index';
import { ContainerOrder } from '../../OrderData/OrderData.styled';
import { UniversalButton } from '../../ButtonUser/ButtonUser';
import { deletePet } from 'redux/pets/operations';
import ModaEditingOrder from 'components/ModaEditingOrder/ModaEditingOrder';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

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
  status,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreDetali, setIsMoreDetali] = useState(false);
  const [isMoreComent, setIsMoreComent] = useState(false);

  const toggle = (is, isSet) => {
    isSet(!is);
  };
  return (
    <ContainerOrder key={id}>
      <DataListWrapper>
        <DataListFirst>
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
            <OrderBrend value={phone} />
          </DataListsecond>
        )}
        {isMoreComent && (
          <CommentWrapper>
            <OrderDateCreation value={descriptionMalfunction} />
            <OrderNametechnique value={descriptionOfRepair} />
            <OrderBrend value={cost} />
            <OrderModel value={status} />
            <OrderSerialNumber value={number} />
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
          onClick={() => setIsOpen(true)}
          text="редагувати"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => {
            dispatch(deletePet(id));
          }}
          text="Видалити"
          strokeM={'#fdf7f2'}
        />
      </BattonWrapper>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <ModaEditingOrder closeModal={() => setIsOpen(false)} />
        </Modal>
      )}
    </ContainerOrder>
  );
};

export default OrderListItem;
