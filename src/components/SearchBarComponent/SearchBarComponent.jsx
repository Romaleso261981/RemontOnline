import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import { StyledSearchBox } from './SearchBarComponent.styled';

import { useSelector } from 'react-redux';

import { getSearchBtnIsActive } from 'redux/notices/noticesSelectors';
import { showToastInfo } from 'utils/showTost';

const SearchBarComponent = ({ setSortOrders, orders }) => {
  const isButtonClicked = useSelector(getSearchBtnIsActive);

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;

    if (normilizedValue.trim() === '') {
      showToastInfo('Введіть щось в строку пошуку');
      return;
    }
    console.log(orders);
    const foundTitle = orders.filter(item =>
      item.customerName?.toLowerCase().includes(normilizedValue.toLowerCase()),
    );

    console.log(foundTitle);
    setSortOrders(foundTitle);

    if (!foundTitle) {
      showToastInfo('Нічого за цим запитом незнайденно');
      return;
    }
    form.reset();
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
