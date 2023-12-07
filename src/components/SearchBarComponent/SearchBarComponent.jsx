import SearchBar from 'components/ReusableComponents/SearchBar/SearchBar';
import { StyledSearchBox } from './SearchBarComponent.styled';

import { useSelector } from 'react-redux';

import { getSearchBtnIsActive } from 'redux/orders/selectors';
import { showToastInfo } from 'utils/showTost';

const SearchBarComponent = ({ setSortOrders, orders, filter }) => {
  const isButtonClicked = useSelector(getSearchBtnIsActive);

  const onFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const normilizedValue = form.elements.search.value;
    const foundTitle = orders.filter(item => {
      let arr = orders;
      if (filter === 'number') {
        arr = item.number
          ?.toLowerCase()
          .includes(normilizedValue.toLowerCase());
      } else if (filter === 'customerName') {
        arr = item.customerName
          ?.toLowerCase()
          .includes(normilizedValue.toLowerCase());
      } else if (filter === 'nametechnique') {
        arr = item.nametechnique
          ?.toLowerCase()
          .includes(normilizedValue.toLowerCase());
      } else if (filter === 'customerAddress') {
        arr = item.customerAddress
          ?.toLowerCase()
          .includes(normilizedValue.toLowerCase());
      } else if (filter === 'phone') {
        arr = item.phone?.toLowerCase().includes(normilizedValue.toLowerCase());
      } else if (filter === 'brend') {
        arr = item.brend?.toLowerCase().includes(normilizedValue.toLowerCase());
      } else if (filter === 'model') {
        arr = item.model?.toLowerCase().includes(normilizedValue.toLowerCase());
      } else if (filter === 'cost') {
        arr = item.cost?.toLowerCase().includes(normilizedValue.toLowerCase());
      }
      return arr;
    });
    if (normilizedValue === '') {
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
