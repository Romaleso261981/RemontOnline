import PetListItem from './OrderListItem/OrderListItem';
import { getIsLoading } from 'redux/pets/selectors';
import { useSelector } from 'react-redux';
import CoverPage from 'components/ReusableComponents/CoverPage/CoverPage';
import Loader from 'components/Loader/Loader2';
// import { Animation } from 'components/Animation/Animation';

const OrderList = ({ pets }) => {
  const isLoading = useSelector(getIsLoading);
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

export default OrderList;
