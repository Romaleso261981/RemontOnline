import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import { StyledSearchBox } from './SearchBarComponent.styled';

import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   fetchNoticesByCategory,
//   fetchNoticesByTitle,
// } from 'redux/notices/noticesOperations';

import { getSearchBtnIsActive } from 'redux/notices/noticesSelectors';
import { showToastInfo } from 'utils/showTost';

const SearchBarComponent = ({ setSortOrders, orders }) => {
  // const dispatch = useDispatch();
  const isButtonClicked = useSelector(getSearchBtnIsActive);

  const searchNoticeByTitle = title => {
    if (!isButtonClicked) {
      try {
        // dispatch(fetchNoticesByCategory(category));
      } catch (error) {
        console.log(error);
      }
      return;
    }

    // if (category === 'own' || category === 'favorite') {
    //   showToastInfo('Sorry, you can’t search in this categories');
    //   return;
    // }

    try {
      // dispatch(fetchNoticesByTitle(title));
    } catch (error) {
      console.log(error);
    }
  };

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;

    if (normilizedValue.trim() === '') {
      showToastInfo('Sorry, no order by this title');
      return;
    }

    searchNoticeByTitle(normilizedValue);
    alert(normilizedValue);
    if (!isButtonClicked) {
      form.reset();
    }
  };

  return (
    <StyledSearchBox>
      <SearchBar
        onFormSubmit={onFormSubmit}
        isButtonClicked={isButtonClicked}
      />
    </StyledSearchBox>
  );
};

export default SearchBarComponent;
