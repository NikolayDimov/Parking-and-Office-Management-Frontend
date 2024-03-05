import { useFormik } from 'formik';
import { RegisterUser, register } from '../../services/userService';
import { RegisterSchema } from './Register.static';
import { useNavigate } from 'react-router';
import { route } from '../../static/routes';
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

        onSubmit: async (values: RegisterUser) => {
            try {
                await register(values);
                navigate(route.user);
            } catch (error) {
                console.error('Error while register user:', error);

                formik.setFieldValue('error', error.message);
            }
        },
    });
    return { formik };
};

export default useRegister;
