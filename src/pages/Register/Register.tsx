import Modal from '../../components/Modal/Modal';
import useRegister from './Register.logic';
import { RegisterForm } from './Register.style';
import { BaseButtonCreateUser } from '../User/UsersPage/UsersPage.style';
import { useTranslation } from 'react-i18next';

const Register = () => {
    const { t } = useTranslation();

    const { formik } = useRegister();

    return (
        <Modal>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <h2 className="form-title">{t('register.registerTitle')}</h2>
                <label htmlFor="email">{t('register.email')}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('register.email')}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="password">{t('register.password')}</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder={t('register.password')}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <BaseButtonCreateUser type="submit">{t('register.registerBtn')}</BaseButtonCreateUser>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </RegisterForm>
        </Modal>
    );
};

export default Register;
