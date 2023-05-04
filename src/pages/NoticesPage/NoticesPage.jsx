// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Loader from 'components/Loader/Loader';
import Header from 'components/Header/Header';
import Modal from 'components/Modal/Modal';
import Categories from 'components/OnlineShop/Categories';
import ModalAddNotice from 'components/Notices/NoticeModal/ModalAddNotice';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';


import { getNotices } from 'redux/notices/noticesSelectors';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { getIsLoading } from 'redux/notices/noticesSelectors';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';
import { showToastInfo } from 'utils/showTost';

import { StyledSection } from './NoticesPage.styled';


const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showAddModal, setShowAddModal] = useState(false);
  const [category, setCategory] = useState('прийнятий');
  const notices = useSelector(getNotices);
  useEffect(() => {
    const searchNoticeByCategory = () => {
      try {
        dispatch(fetchNoticesByCategory(category));
      } catch (error) {
        console.log(error);
      }
    };

    searchNoticeByCategory();
  }, [category, isLoggedIn, dispatch]);

  const onAddButtonClick = () => {
    if (!isLoggedIn) {
      showToastInfo('Please, signup or login to add notice about your pet.');
      return;
    }
    setShowAddModal(!showAddModal);
  };
  return (
    <StyledSection>
      <Header />

      {/* <StyledAddPetMobileButton onAddButtonClick={onAddButtonClick} /> */}

      {showAddModal && (
        <Modal onClose={onAddButtonClick}>
          <ModalAddNotice onClose={onAddButtonClick} />
        </Modal>
      )}

      <div style={{ position: 'relative' }}>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Categories setCategory={setCategory} />
            <NoticesCategoriesList
              notices={notices}
              category={category}
              onClose={onAddButtonClick}
            />
          </>
        )}
      </div>
    </StyledSection>
  );
};

export default NoticesPage;
