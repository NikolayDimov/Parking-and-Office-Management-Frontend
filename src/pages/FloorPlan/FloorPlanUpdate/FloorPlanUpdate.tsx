import { useNavigate } from 'react-router-dom';
import { FormStyled } from '../../../components/InputField/Form.style';
import InputField from '../../../components/InputField/InputField';
import Modal from '../../../components/Modal/Modal';
import { useUpdateFloorPlan } from './FloorPlanUpdate.logic';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import { ErrorStyles } from './FloorPlanUpdate.style';

function UpdateFloorPlanModal() {
    const navigate = useNavigate();
    const { formik } = useUpdateFloorPlan();
    return (
        <Modal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3>Update Floor Plan</h3>
                <InputField
                    type="text"
                    id={'name'}
                    name={'name'}
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                <FormButtonsContainer>
                    <BaseButton className="create-btn" type={'submit'}>
                        Update
                    </BaseButton>
                    <BaseButton type="button" className="close-btn" onClick={() => navigate(-1)}>
                        Close
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <ErrorStyles>{formik.errors.error}</ErrorStyles> : null}
            </FormStyled>
        </Modal>
    );
}

export default UpdateFloorPlanModal;
