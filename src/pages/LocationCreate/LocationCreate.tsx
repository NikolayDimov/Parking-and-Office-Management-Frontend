import { BaseButton } from '../../components/CommonStyledElements';
import { FormStyled } from '../../components/InputField/Form.style';
import ImageInputField from '../../components/InputField/ImageInputField';
import InputField from '../../components/InputField/InputField';
import { ListContainer } from '../AdminPage/AdminPage.style';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import { useCreateLocation } from './LocationCreate.logic';
import { useTranslation } from 'react-i18next';

export default function LocationCreateForm() {
    const { t } = useTranslation();

    const { formik, setImageFile, handleGoBack } = useCreateLocation();

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
            </BackButton>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3 className="form-title">{t('createLocation.title')}</h3>

                <InputField
                    type="name"
                    id="name"
                    name="name"
                    label={t('createLocation.name')}
                    placeholder={t('createLocation.placeholderName')}
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}

                <InputField
                    type="name"
                    id="city"
                    name="city"
                    label={t('createLocation.city')}
                    placeholder={t('createLocation.placeholderCity')}
                    onChange={formik.handleChange}
                />
                {formik.errors.city && formik.touched.city && <div className="error-message">{formik.errors.city}</div>}

                <InputField
                    type="name"
                    id="address"
                    name="address"
                    label={t('createLocation.address')}
                    placeholder={t('createLocation.placeholderCity')}
                    onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address && (
                    <div className="error-message">{formik.errors.address}</div>
                )}

                <ImageInputField
                    type="file"
                    id="imgUrl"
                    name="imgUrl"
                    label={t('createLocation.image')}
                    placeholder={t('createLocation.placeholderImage')}
                    onChange={(event) => {
                        const file = event.currentTarget.files?.[0] || null;
                        setImageFile(file);
                        formik.handleChange(event);
                    }}
                />
                {formik.errors.imgUrl && formik.touched.imgUrl && (
                    <div className="error-message">{formik.errors.imgUrl}</div>
                )}

                <BaseButton className="create-btn" type="submit">
                    {t('createLocation.createBtn')}
                </BaseButton>
            </FormStyled>
        </ListContainer>
    );
}
