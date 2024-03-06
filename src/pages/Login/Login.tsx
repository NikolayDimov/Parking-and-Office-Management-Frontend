import login from './Login.logic';
import { LoginForm, LoginPage } from './Login.style';

const Login = () => {
    const { formik } = login();
    return (
        <LoginPage>
            <LoginForm onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Login</h2>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" onChange={formik.handleChange} />
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <button type="submit">Login</button>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </LoginForm>
        </LoginPage>
    );
};

export default Login;
