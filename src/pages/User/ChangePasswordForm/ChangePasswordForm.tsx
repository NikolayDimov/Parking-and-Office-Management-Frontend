import useChangePassword from './ChangePasswordForm.logic';
import InputField from '../../../components/InputField/InputField';
import { useNavigate } from 'react-router-dom';
import {
    BaseButtonCancel,
    BaseButtonSubmit,
    FormButtonsContainerPassword,
    StyledPasswordForm,
} from './ChangePasswordForm.styles';
import { route } from '../../../static/routes';
import { useTranslation } from 'react-i18next';

const ChangePasswordForm = () => {
    const { t } = useTranslation();

    const { formik } = useChangePassword();
    const navigate = useNavigate();

    return (
        <StyledPasswordForm onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="password">{t('changePassword.currentPassword')}</label>
                <InputField
                    type="password"
                    name="password"
                    id="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
            </div>
            <div>
                <label htmlFor="newPassword">{t('changePassword.newPassword')}</label>
                <InputField
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    onChange={formik.handleChange}
                    value={formik.values.newPassword}
                />
                {formik.errors.newPassword && formik.touched.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                ) : null}
            </div>
            <div>
                <label htmlFor="confirmPassword">{t('changePassword.confirmPassword')}</label>
                <InputField
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
            </div>
            <FormButtonsContainerPassword>
                <BaseButtonCancel
                    type="button"
                    // className="close-btn"
                    onClick={() => {
                        navigate(route.home);
                    }}
                >
                    {t('changePassword.close')}
                </BaseButtonCancel>
                <BaseButtonSubmit type="submit">{t('changePassword.changePassBtn')}</BaseButtonSubmit>
            </FormButtonsContainerPassword>
            {formik.errors.error ? <div>{formik.errors.error}</div> : null}
        </StyledPasswordForm>
    );
};

export default ChangePasswordForm;
