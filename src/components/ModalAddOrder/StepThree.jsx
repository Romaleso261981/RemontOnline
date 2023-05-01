import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

const StepThree = ({ order }) => {
  console.log(order);
  return (
    <>
      <InputField
        type="text"
        label="Опис несправності"
        id="descriptionMalfunction"
        name="descriptionMalfunction"
        placeholder="Нехолодить, невключається"
        span="*"
      />
      <InputField
        type="text"
        label="Опис ремонту"
        id="descriptionOfRepair"
        name="descriptionOfRepair"
        placeholder="Ремонт блоку живлення"
        span="*"
      />
      <InputField
        type="text"
        label="Статус"
        id="status"
        name="status"
        placeholder="прийнятий"
        span="*"
      />
      <InputField
        type="text"
        label="Вартість ремонту"
        id="cost"
        name="cost"
        placeholder="1000"
        span="*"
      />
    </>
  );
};

export default StepThree;
