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

const ModalAddOrder = ({ setIsOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const dispatch = useDispatch();
  const handleSubmit = async (values, { setSubmitting }) => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      const dateBD = format(values.datecreation, 'dd.MM.yyyy');

      const data = {
        nametechnique: values.nametechnique,
        brend: values.brend,
        model: values.model,
        serialNumber: values.serialNumber,
        customerName: values.customerName,
        customerAddress: values.customerAddress,
        phone: values.phone,
        datecreation: dateBD,
        descriptionMalfunction: values.descriptionMalfunction,
        descriptionOfRepair: values.descriptionOfRepair,
        cost: values.cost,
        number: values.number,
      };
      try {
        dispatch(addOrder(data));
      } catch (error) {
        console.log('Failed to add pet:', error);
      }
      setIsOpen(false);
    }
    setSubmitting(false);
  };
  return (
    <Container>
      <CloseModalButton setIsOpen={setIsOpen} />
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
            {currentStep === 1 && <StepOne />}
            {currentStep === 2 && <StepTwo />}
            {currentStep === 3 && <StepThree />}

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
                <UniversalButton name="transparent" onClick={()=>{setIsOpen(false)}}>
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
