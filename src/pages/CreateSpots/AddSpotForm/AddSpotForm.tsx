import { Field, FormikProvider } from 'formik';
import { FormStyled, Option, SelectStyle } from './AddSpotForm.style';
import { useAddSpot, useSpotTypes } from './AddSpotForm.logic';
import Modal from '../../../components/Modal/Modal';
import InputField from '../../../components/InputField/InputField';
import { useNavigate } from 'react-router';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import { useTranslation } from 'react-i18next';

export default function AddSpotForm() {
    const { t } = useTranslation();

    const navigate = useNavigate();
    const { formik } = useAddSpot();
    const { spotTypes } = useSpotTypes();

    return (
        <Modal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3>{t('createSpotPage.addSpotForm.title')}</h3>
                <InputField
                    type="text"
                    id={'name'}
                    name={'name'}
                    label={t('createSpotPage.addSpotForm.name')}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                <InputField
                    type="text"
                    id={'description'}
                    name={'description'}
                    label={t('createSpotPage.addSpotForm.description')}
                    onChange={formik.handleChange}
                />
                {formik.errors.description && formik.touched.description ? (
                    <div>{formik.errors.description}</div>
                ) : null}
                <FormikProvider value={formik}>
                    <SelectStyle>
                        <label>{t('createSpotPage.addSpotForm.type')}</label>
                        <Field as="select" id={'spotTypeId'} name="spotTypeId" onChange={formik.handleChange}>
                            <Option value="" label={t('createSpotPage.addSpotForm.placeHolderType')} />
                            {spotTypes?.map((option) => (
                                <Option key={option.id} value={option.id}>
                                    {t(`createSpotPage.addSpotForm.types.${option.name}`)}
                                </Option>
                            ))}
                        </Field>
                        {formik.errors.spotTypeId && formik.touched.spotTypeId ? (
                            <div>{formik.errors.spotTypeId}</div>
                        ) : null}
                    </SelectStyle>
                </FormikProvider>
                <FormButtonsContainer>
                    <BaseButton className="create-btn" type={'submit'}>
                        {t('createSpotPage.addSpotForm.saveBtn')}
                    </BaseButton>
                    <BaseButton type="button" className="close-btn" onClick={() => navigate(-1)}>
                        {t('createSpotPage.addSpotForm.closebtn')}
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </FormStyled>
        </Modal>
    );
}
