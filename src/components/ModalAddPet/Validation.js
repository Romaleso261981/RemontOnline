import * as Yup from 'yup';

// Values for Formik
export const initialValues = {
  name: '',
  birthdate: '',
  breed: '',
  photo: '',
  comments: '',
};

// Yup validation
export const validationSchemaStepOne = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  birthdate: Yup.mixed().required('Birth date is required'),
  breed: Yup.string().required('Breed is required'),
});

export const validationSchemaStepTwo = Yup.object().shape({
  photo: Yup.mixed(),
  comments: Yup.string().min(8, 'Має бути довше 8 символів')
    .max(120, 'Має бути не довше 120 символів'),
});
