import { useSelector } from 'react-redux';
import OrderData from '../../User/OrderData/OrderData';

import {
  getNotices,
} from 'redux/notices/noticesSelectors';

const NoticesCategoriesList = ({ onClose }) => {
  const notices = useSelector(getNotices);
  console.log(notices);

  return <>{true && <OrderData orders={notices} onClose={onClose} />}</>;
};

export default NoticesCategoriesList;
