import { useFormik } from 'formik';
import { LoginSchema, LoginUser } from './Login.static';
import { useAuth } from '../../context/AuthContext';

const useLogin = () => {
    const { loginUser } = useAuth();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            error: '',
        },
        validationSchema: LoginSchema,

        onSubmit: (values: LoginUser) => {
            try {
                loginUser(values);
            } catch (error) {
                console.error('Error logging in:', error);
                formik.setFieldValue('error', error.message);
            }
        },
    });
    return { formik };
};

export default useLogin;
