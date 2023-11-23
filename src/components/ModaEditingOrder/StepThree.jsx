import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';

const StepThree = () => {
  return (
    <>
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
        label="Вартість ремонту"
        id="cost"
        name="cost"
        placeholder="1000"
        span="*"
      />
      <InputField
        type="text"
        label="Собівартість"
        id="price"
        name="price"
        placeholder="1000"
        span="*"
      />
    </>
  );
};

export default StepThree;
