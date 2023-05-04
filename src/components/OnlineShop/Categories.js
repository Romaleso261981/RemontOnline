import React from 'react';
import { CategoriesWrapper } from './OnlineShop.styled';

 function Categories({ setCategory }) {
  const categories = [
    {
      key: 'прийнятий',
      name: 'Прийнятий',
    },
    {
      key: 'в роботі',
      name: 'в роботі',
    },
    {
      key: 'замовлення запчастин',
      name: 'замовлення запчастин',
    },
    {
      key: 'очікування запчастин',
      name: 'очікування запчастин',
    },
    {
      key: 'на гарантії',
      name: 'на гарантії',
    },
    {
      key: 'зроблено',
      name: 'зроблено',
    },
    {
      key: 'проблемний клієнт',
      name: 'проблемний клієнт',
    },
  ];
  return (
    <div>
      {categories.map(el => (
        <CategoriesWrapper key={el.key} onClick={() => setCategory(el.key)}>
          {el.name}
        </CategoriesWrapper>
      ))}
    </div>
  );
}
export default Categories;
