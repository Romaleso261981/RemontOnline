import * as Yup from 'yup';

// Values for Formik
export const initialValues = {
  cost: '',
  descriptionOfRepair: '',
  descriptionMalfunction: ''
};

// Yup validation
export const validationSchemaStepOne = Yup.object().shape({
  // number: Yup.string().required('Поле обовязкове для заповнення'),
  // datecreation: Yup.mixed().required('Поле обовязкове для заповнення'),
  // nametechnique: Yup.string().required('Поле обовязкове для заповнення'),
  // brend: Yup.string().required('Поле обовязкове для заповнення'),
  // model: Yup.string().required('Поле обовязкове для заповнення'),
});

export const validationSchemaStepTwo = Yup.object().shape({
  // customerName: Yup.string().required('Поле обовязкове для заповнення'),
  // customerAddress: Yup.mixed().required('Поле обовязкове для заповнення'),
  // phone: Yup.string().required('Поле обовязкове для заповнення'),
  // datecreation: Yup.string().required('Поле обовязкове для заповнення'),
});
// number: Joi.string(),
// nametechnique: Joi.string(),
// brend: Joi.string(),
// model: Joi.string(),
// customerName: Joi.string(),
// customerAddress: Joi.string(),
// phone: Joi.string(),
// photo: Joi.string(),
// name: Joi.string().min(2).max(16).required(),
// birthday: Joi.date().required(),
// breed: Joi.string().min(2).max(16).required(),
// comments: Joi.string().min(8).max(120).required(),
