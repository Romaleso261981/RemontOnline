import React from 'react';
import InputField from 'components/ReusableComponents/InputField/InputField';
import MyDataPicker from 'components/ReusableComponents/DataPicker/DatePicker';
import { DateBox, ErrorData, Label } from './StepOne.styled';

const StepTwo = ({ order }) => {
  return (
    <>
      <InputField
        type="text"
        label="ФІО"
        id="customerName"
        name="customerName"
        placeholder="Лесьо Роман Володимирович"
        span="*"
      />
      <InputField
        type="text"
        label="Адреса замовника"
        id="customerAddress"
        name="customerAddress"
        placeholder="м.Ладижин вул Петра Кравчика буд.25 кв 116"
        span="*"
      />
      <InputField
        type="text"
        label="Телефон замовника"
        id="phone"
        name="phone"
        placeholder="068-156-23-20"
        span="*"
      />
      <DateBox>
        <Label>Дата приймання</Label>
        <MyDataPicker
          name="datecreation"
          label="Дата створення"
          placeholderText="25.05.2022"
        />
        <ErrorData name="datecreation" component="div" />
      </DateBox>
    </>
  );
};

export default StepTwo;
