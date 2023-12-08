import { Formik } from 'formik';
import StepThree from './StepThree';
import {
  Container,
  ControlBox,
  FormStyled,
  Title,
} from './ModaEditingOrder.styled';
import {
  initialValues,
} from './Validation';
import UniversalButton from 'components/ReusableComponents/Buttons/UniversalButton';
import { useDispatch } from 'react-redux';
import { EditOrder } from 'redux/orders/operations';

const ModalAddOrder = ({ setIsOpenModaEditingOrder, id }) => {
  const dispatch = useDispatch();
  const handleSubmit = async (data, { setSubmitting }) => {
    try {
      dispatch(EditOrder({data, id}));
    } catch (error) {
      console.log('Failed to add order:', error);
    }
    setIsOpenModaEditingOrder();
    setSubmitting(false);
  };

  return (
    <Container>
      <Title> Редагувати </Title>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
      >
        {({ isSubmitting }) => (
          <FormStyled>
            <StepThree />
            <ControlBox>
              <UniversalButton
                name="filled"
                type="submit"
                width="100%"
                disabled={isSubmitting}
              >
                <span>Done</span>
              </UniversalButton>
              <UniversalButton name="transparent" onClick={()=>setIsOpenModaEditingOrder(false)}>
                <span>Cancel</span>
              </UniversalButton>
            </ControlBox>
          </FormStyled>
        )}
      </Formik>
    </Container>
  );
};

export default ModalAddOrder;
