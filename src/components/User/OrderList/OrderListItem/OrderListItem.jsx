import {
  FlexBasket,
  DataListFirst,
  DataListsecond,
  DataListWrapper,
} from '../OrderList.styled';
import {
  PetName,
  DateCreation,
  TechnicalModel,
  PetComments,
  PetPhone,
} from '../index';
import { ContainerOrder } from '../../OrderData/OrderData.styled';
import {
  ButtonBasket,
  ButtonDone,
  ButtonPencil,
} from '../../ButtonUser/ButtonUser';
import { deletePet } from 'redux/pets/operations';
import { useDispatch } from 'react-redux';



const OrderListItem = ({
  phone,
  nametechnique,
  datecreation,
  model,
  comments,
  petId,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <ContainerOrder key={id}>
      <DataListWrapper>
        <DataListFirst>
          <PetName nametechnique={nametechnique} />
          <PetPhone phone={phone} />
          <DateCreation datecreation={datecreation} />
          <TechnicalModel model={model} />
          <PetComments comments={comments} />
        </DataListFirst>
        <DataListsecond>
          <PetName nametechnique={nametechnique} />
          <PetPhone phone={phone} />
          <DateCreation datecreation={datecreation} />
          <TechnicalModel model={model} />
          <PetComments comments={comments} />
        </DataListsecond>
      </DataListWrapper>
      <FlexBasket>
        <ButtonDone
          type="button"
          onClick={() => {
            dispatch(deletePet(petId));
          }}
          ariaLabel="basket button"
          widthM={'20px'}
          heightM={'20px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          bgT={'#d5e3d6'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
        />
        <ButtonPencil
          type="button"
          onClick={() => {
            dispatch(deletePet(petId));
          }}
          ariaLabel="basket button"
          widthM={'20px'}
          heightM={'20px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          bgT={'#d5e3d6'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
        />
        <ButtonBasket
          type="button"
          onClick={() => {
            dispatch(deletePet(petId));
          }}
          ariaLabel="basket button"
          widthM={'20px'}
          heightM={'20px'}
          widthT={'44px'}
          heightT={'44px'}
          widthMsvg={'20px'}
          heighthMsvg={'20px'}
          widthTsvg={'24px'}
          heighthTsvg={'24px'}
          bgT={'#d5e3d6'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
        />
      </FlexBasket>
    </ContainerOrder>
  );
};

export default OrderListItem;
