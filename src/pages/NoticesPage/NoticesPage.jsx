// import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import Title from 'components/Title/Title';
// import NoticesSearch from 'components/Notices/NoticesSearch/NoticesSearch';
// import NoticesCategoriesNav from 'components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import Loader from 'components/Loader/Loader';
import ModalAddNotice from 'components/Notices/NoticeModal/ModalAddNotice';
import NoticesCategoriesList from 'components/Notices/NoticesCategoriesList/NoticesCategoriesList';

import { StyledSection } from './NoticesPage.styled';
// import { StyledSection, ButtonBox } from './NoticesPage.styled';
import { StyledAddPetMobileButton } from 'components/ReusableComponents/Buttons/StyledAddPetMobileButton';
// import { StyledAddPetDesktopButton } from 'components/ReusableComponents/Buttons/StyledAddPetDesktopButton';
import { Modal } from 'components/Modal/Modal';
import { Categories } from 'components/OnlineShop/Categories';

import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { getIsLoading } from 'redux/notices/noticesSelectors';
import { fetchNoticesByCategory } from 'redux/notices/noticesOperations';
import { showToastInfo } from 'utils/showTost';

const NoticesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [showAddModal, setShowAddModal] = useState(false);
  const [category, setCategory] = useState('прийнятий');

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

      <StyledAddPetMobileButton onAddButtonClick={onAddButtonClick} />

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
