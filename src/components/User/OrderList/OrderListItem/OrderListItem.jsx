import {
  BattonWrapper,
  DataListFirst,
  DataListsecond,
  DataListWrapper,
  CommentWrapper,
} from '../OrderList.styled';
import {
  PetName,
  DateCreation,
  TechnicalModel,
  PetComments,
  PetPhone,
} from '../index';
import { ContainerOrder } from '../../OrderData/OrderData.styled';
import { UniversalButton } from '../../ButtonUser/ButtonUser';
// import { deletePet } from 'redux/pets/operations';
import ModaEditingOrder from 'components/ModaEditingOrder/ModaEditingOrder';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
// import { useDispatch } from 'react-redux';

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
  // const dispatch = useDispatch();
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
          <PetName number={number} />
          <PetName nametechnique={nametechnique} />
          <PetPhone brend={brend} />
          <PetPhone model={model} />
          <PetPhone phone={phone} />
        </DataListFirst>
        {isMoreDetali && (
          <DataListsecond>
            <DateCreation datecreation={datecreation} />
            <DateCreation customerName={customerName} />
            <DateCreation customerAddress={customerAddress} />
            <TechnicalModel model={model} />
            <TechnicalModel status={status} />
          </DataListsecond>
        )}
        {isMoreComent && (
          <CommentWrapper>
            <PetComments descriptionMalfunction={descriptionMalfunction} />
            <PetComments descriptionOfRepair={descriptionOfRepair} />
            <PetComments serialNumber={serialNumber} />
            <PetComments cost={cost} />
          </CommentWrapper>
        )}
      </DataListWrapper>
      <BattonWrapper>
        <UniversalButton
          type="button"
          onClick={() => toggle(isMoreDetali, setIsMoreDetali)}
          ariaLabel="basket button"
          widthM={'80px'}
          heightM={'20px'}
          bRadius={'5px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          text="в роботі"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => toggle(isMoreComent, setIsMoreComent)}
          // onClick={() => {
          //   dispatch(deletePet(petId));
          // }}
          ariaLabel="basket button"
          widthM={'80px'}
          heightM={'20px'}
          bRadius={'5px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          text="зроблено"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          onClick={() => setIsOpen(true)}
          // onClick={() => {
          //   dispatch(deletePet(petId));
          // }}
          ariaLabel="basket button"
          widthM={'100px'}
          heightM={'20px'}
          bRadius={'5px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          text="редагувати"
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
