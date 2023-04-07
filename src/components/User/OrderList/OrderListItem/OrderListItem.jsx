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
  phone,
  nametechnique,
  datecreation,
  model,
  comments,
  petId,
  id,
}) => {
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ContainerOrder key={id}>
      <DataListWrapper>
        <DataListFirst>
          <PetName nametechnique={nametechnique} />
          <PetPhone phone={phone} />
        </DataListFirst>
        <DataListsecond>
          <DateCreation datecreation={datecreation} />
          <TechnicalModel model={model} />
        </DataListsecond>
        <CommentWrapper>
          <PetComments comments={comments} />
        </CommentWrapper>
      </DataListWrapper>
      <BattonWrapper>
        <UniversalButton
          type="button"
          // onClick={() => setIsOpen(true)}
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
          text="в роботі"
          strokeM={'#fdf7f2'}
        />
        <UniversalButton
          type="button"
          // onClick={() => setIsOpen(true)}
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
