import { useState } from 'react';
import { Formik } from 'formik';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import {
  Container,
  ControlBox,
  FormStyled,
  Title,
} from './ModalAddOrder.styled';
import {
  initialValues,
  validationSchemaStepOne,
  validationSchemaStepTwo,
} from './Validation';
import UniversalButton from 'components/ReusableComponents/Buttons/UniversalButton';
import { CloseModalButton } from 'components/ReusableComponents/Buttons/CloseModalButton';
import { useDispatch } from 'react-redux';
import { addOrder } from 'redux/orders/operations';
import { format } from 'date-fns';

const ModalAddOrder = ({ closeModal, order }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      const dateBD = format(values.datecreation, 'dd.MM.yyyy');

      const data = new FormData();
      data.append('number', values.number);
      data.append('nametechnique', values.nametechnique);
      data.append('brend', values.brend);
      data.append('model', values.model);
      data.append('serialNumber', values.serialNumber);
      data.append('customerName', values.customerName);
      data.append('customerAddress', values.customerAddress);
      data.append('phone', values.phone);
      data.append('datecreation', dateBD);
      data.append('descriptionMalfunction', values.descriptionMalfunction);
      data.append('descriptionOfRepair', values.descriptionOfRepair);
      data.append('cost', values.cost);

      try {
        dispatch(addOrder(data));
        setFormData(data);
      } catch (error) {
        console.log('Failed to add pet:', error);
      }
      closeModal();
    }
    setSubmitting(false);
  };
  console.log(formData);
  return (
    <Container>
      <CloseModalButton closeModal={closeModal} />
      <Title step={currentStep}>Додати замовлення</Title>

      <Formik
        initialValues={initialValues}
        validationSchema={
          currentStep === 1 ? validationSchemaStepOne : validationSchemaStepTwo
        }
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting }) => (
          <FormStyled>
            {currentStep === 1 && <StepOne order={order} />}
            {currentStep === 2 && <StepTwo order={order} />}
            {currentStep === 3 && <StepThree order={order} />}

            <ControlBox>
              <UniversalButton
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                {currentStep < 3 ? <span>Next</span> : <span>Done</span>}
              </UniversalButton>

              {currentStep === 1 && (
                <UniversalButton name="transparent" onClick={closeModal}>
                  <span>Cancel</span>
                </UniversalButton>
              )}

              {currentStep === 2 && (
                <UniversalButton
                  name="transparent"
                  onClick={() => setCurrentStep(1)}
                >
                  <span>Back</span>
                </UniversalButton>
              )}
              {currentStep === 3 && (
                <UniversalButton
                  name="transparent"
                  onClick={() => setCurrentStep(1)}
                >
                  <span>Back</span>
                </UniversalButton>
              )}
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default ModalAddOrder;
