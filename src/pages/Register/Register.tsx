import useRegister from "./Register.logic";
import { RegisterForm, RegisterPage } from "./Register.style";

const Register = () => {
    const { formik } = useRegister();
    return (
      <RegisterPage>
        <RegisterForm onSubmit={formik.handleSubmit}>
          <h2 className="form-title">Register</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          <button type="submit">Register</button>
          {formik.errors.error ? <div>{formik.errors.error}</div> : null}
        </RegisterForm>
      </RegisterPage>
    );
  };
  
  export default Register;
  