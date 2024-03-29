import { useSelector } from 'react-redux';

import PetListItem from './OrderListItem/OrderListItem';
import CoverPage from 'components/ReusableComponents/CoverPage/CoverPage';
import Loader from 'components/Loader/Loader2';

import { getIsLoading } from 'redux/orders/selectors';

const OrderList = ({ orders, fullItem }) => {
  const isLoading = useSelector(getIsLoading);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && orders.length === 0 && <CoverPage />}
      {!isLoading && orders.length >= 1 && (
        <ul>
          {orders.map(
            (
              {
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
                type,
                price,
              },
              index,
            ) => (
              <PetListItem
                fullItem={fullItem}
                index={index}
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
                type={type}
                price={price}
              />
            ),
          )}
        </ul>
      )}
    </>
  );
};

export default OrderList;
