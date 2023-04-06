import { FlexBasket, Image } from '../PetsList.styled';
import { PetName, PetBirth, PetBreed, PetComments, PetPhone } from '../index';
import { ContainerPets } from '../../PetsData/PetsData.styled';
import {
  ButtonBasket,
  ButtonDone,
  ButtonPencil,
  ButtonEditPhoto,
} from '../../ButtonUser/ButtonUser';
import { deletePet } from 'redux/pets/operations';
import { useDispatch } from 'react-redux';



const PetListItem = ({
  photo,
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
    <ContainerPets key={id}>
      <Image src={photo} alt={nametechnique} />
      <ul>
        <PetName nametechnique={nametechnique} />
        <PetPhone phone={phone} />
        <PetBirth datecreation={datecreation} />
        <PetBreed model={model} />
        <PetComments comments={comments} />
      </ul>
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
          bgT={'#fdf7f2'}
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
          bgT={'#fdf7f2'}
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
          bgT={'#fdf7f2'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
        />

        <ButtonEditPhoto
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
          bgT={'#fdf7f2'}
          fillM={'rgba(17, 17, 17, 0.6)'}
          strokeM={'#fdf7f2'}
        />
      </FlexBasket>
    </ContainerPets>
  );
};

export default PetListItem;
