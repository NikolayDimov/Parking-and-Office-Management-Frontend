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

        onSubmit: async (values: LoginUser, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const user = await loginUser(values);
                if (user?.error) {
                    throw new Error(user.error);
                } else {
                    resetForm();
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });
    return { formik };
};

export default useLogin;
