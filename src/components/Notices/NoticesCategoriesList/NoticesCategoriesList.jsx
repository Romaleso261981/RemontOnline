import OrderData from '../../User/OrderData/OrderData';

const NoticesCategoriesList = ({ onClose, order }) => {
  return <>{true && <OrderData orders={order} onClose={onClose} />}</>;
};

export default NoticesCategoriesList;
