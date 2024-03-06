import Modal from '../../components/Modal/Modal';
import useRegister from './Register.logic';
import { RegisterForm } from './Register.style';
import { BaseButtonCreateUser } from '../User/UsersPage/UsersPage.style';

const Register = () => {
    const { formik } = useRegister();
    return (
        <Modal>
            <RegisterForm onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Register</h2>
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
                <BaseButtonCreateUser type="submit">Register</BaseButtonCreateUser>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </RegisterForm>
        </Modal>
    );
};

export default Register;
