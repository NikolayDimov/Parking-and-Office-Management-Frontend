import { useFormik } from 'formik';
import { RegisterUser, register } from '../../services/userService';
import { RegisterSchema } from './Register.static';
import { useNavigate } from 'react-router';
import useToken from '../../hooks/Token/Token.hook';

const useRegister = () => {
    const navigate = useNavigate();
    const decodedToken = useToken();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            modifiedBy: decodedToken?.id,
            error: '',
        },
        validationSchema: RegisterSchema,

        onSubmit: async (values: RegisterUser, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const user = await register(values);
                if (user?.error) {
                    throw new Error(user.error);
                } else {
                    resetForm();
                    navigate(-1);
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

export default useRegister;
