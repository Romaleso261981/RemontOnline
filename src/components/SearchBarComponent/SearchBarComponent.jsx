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

    const foundTitle = orders.filter(item =>
      item.customerName?.toLowerCase().includes(normilizedValue.toLowerCase()),
    );
    if (normilizedValue === "") {
      setSortOrders(orders);
      return;
    }
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
