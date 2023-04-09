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
              _id,
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
            }) => (
              <PetListItem
                id={_id}
                brend={brend}
                cost={cost}
                customerAddress={customerAddress}
                customerName={customerName}
                datecreation={datecreation}
                descriptionMalfunction={descriptionMalfunction}
                descriptionOfRepair={descriptionOfRepair}
                model={model}
                nametechnique={nametechnique}
                number={number}
                phone={phone}
                serialNumber={serialNumber}
                status={status}
              />
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default OrderList;
