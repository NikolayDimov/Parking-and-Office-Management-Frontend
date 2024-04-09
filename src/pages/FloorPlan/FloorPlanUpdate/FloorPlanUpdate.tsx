import { useNavigate } from 'react-router-dom';
import { FormStyled } from '../../../components/InputField/Form.style';
import InputField from '../../../components/InputField/InputField';
import Modal from '../../../components/Modal/Modal';
import { useUpdateFloorPlan } from './FloorPlanUpdate.logic';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import { ErrorStyles } from './FloorPlanUpdate.style';
import { useTranslation } from 'react-i18next';

function UpdateFloorPlanModal() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const { formik } = useUpdateFloorPlan();
    return (
        <Modal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3>{t('floorPlanList.update.title')}</h3>
                <InputField
                    type="text"
                    id={'name'}
                    name={'name'}
                    label={t('floorPlanList.update.name')}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                <FormButtonsContainer>
                    <BaseButton className="create-btn" type={'submit'}>
                        {t('floorPlanList.update.updateBtn')}
                    </BaseButton>
                    <BaseButton type="button" className="close-btn" onClick={() => navigate(-1)}>
                        {t('floorPlanList.update.closeBtn')}
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <ErrorStyles>{formik.errors.error}</ErrorStyles> : null}
            </FormStyled>
        </Modal>
    );
}

export default UpdateFloorPlanModal;
