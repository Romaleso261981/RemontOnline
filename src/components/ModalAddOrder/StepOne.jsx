import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

const StepOne = ({ order }) => {
  return (
    <>
      <InputField
        type="text"
        label="Номер замовлення"
        id="number"
        name="number"
        placeholder="25"
        span="*"
      />
      <InputField
        type="text"
        label="Тип техніки"
        id="nametechnique"
        name="nametechnique"
        placeholder="Холодильник"
        span="*"
        value={order.nametechnique}
      />
      <InputField
        type="text"
        label="Бренд"
        id="brend"
        name="brend"
        placeholder="Samsung"
        span="*"
      />
      <InputField
        type="text"
        label="Модель"
        id="model"
        name="model"
        placeholder="RR39M7140SA/UA"
        span="*"
      />
    </>
  );
};

export default StepOne;
