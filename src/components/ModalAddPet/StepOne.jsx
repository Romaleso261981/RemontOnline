import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';
import MyDataPicker from 'components/ReusableComponents/DataPicker/DatePicker';
import { DateBox, ErrorData, Label } from './StepOne.styled';

const StepOne = () => {
  return (
    <>
      <InputField
        type="text"
        label="Тип техніки"
        id="name"
        name="name"
        placeholder="Холодильник"
        span="*"
      />
      <InputField
        type="text"
        label="Модель"
        id="breed"
        name="breed"
        placeholder="Samsung RR39M7140SA/UA"
        span="*"
      />
      <InputField
        type="text"
        label="Телефон"
        id="phone"
        name="phone"
        placeholder="068 947 87 23"
        span="*"
      />
      <InputField
        type="text"
        label="Адресса"
        id="adress"
        name="adress"
        placeholder="м.Ладижин вул.Кравчика буд 25"
        span="*"
      />

      <DateBox>
        <Label>Дата приймання</Label>
        <MyDataPicker
          name="birthdate"
          label="Date of birth*"
          placeholderText="Type date of birth"
        />
        <ErrorData name="birthdate" component="div" />
      </DateBox>
    </>
  );
};

export default StepOne;
