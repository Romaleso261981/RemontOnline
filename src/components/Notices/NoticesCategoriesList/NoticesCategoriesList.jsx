import OrderData from '../../User/OrderData/OrderData';



const NoticesCategoriesList = ({ onClose, notices }) => {
  

  return <>{true && <OrderData orders={notices} onClose={onClose} />}</>;
};

export default NoticesCategoriesList;
