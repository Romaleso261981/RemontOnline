import PetListItem from './PetListItem/PetListItem';
import { getIsLoading } from 'redux/pets/selectors';
import { useSelector } from 'react-redux';
import CoverPage from 'components/ReusableComponents/CoverPage/CoverPage';
import Loader from 'components/Loader/Loader';
// import { Animation } from 'components/Animation/Animation';

const PetsList = ({ pets }) => {
  console.log(pets);
  const isLoading = useSelector(getIsLoading);
  console.log(pets);
  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && pets.length === 0 && <CoverPage />}
      {!isLoading && pets.length >= 1 && (
        <ul>
          {pets.map(
            ({
              photo,
              nametechnique,
              datecreation,
              model,
              comments,
              _id,
              phone,
            }) => (
              <PetListItem
                id={_id}
                petId={_id}
                photo={photo}
                phone={phone}
                nametechnique={nametechnique}
                datecreation={datecreation}
                model={model}
                comments={comments}
              />
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default PetsList;
