import login from './Login.logic';
import { LoginForm, LoginPage } from './Login.style';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();

    const { formik } = login();

    return (
        <LoginPage>
            <LoginForm onSubmit={formik.handleSubmit}>
                <h2 className="form-title">{t('login.loginTitle')}</h2>
                <label htmlFor="email">{t('login.email')}</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={t('login.email')}
                    onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="password">{t('login.password')}</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder={t('login.password')}
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <button type="submit">{t('login.loginBtn')}</button>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </LoginForm>
        </LoginPage>
    );
};

export default Login;
