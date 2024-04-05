import { useFormik } from 'formik';
import useToken from '../../../hooks/Token/Token.hook';
import { ChangePassword, ChangePasswordSchema } from './ChangePasswordForm.static';
import { changePassword } from '../../../services/userService';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const useChangePassword = () => {
    const navigate = useNavigate();
    const decodedToken = useToken();

    const formik = useFormik({
        initialValues: {
            id: decodedToken?.id,
            password: '',
            newPassword: '',
            confirmPassword: '',
            error: '',
        },
        validationSchema: ChangePasswordSchema,

        onSubmit: async (values: ChangePassword, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const { id, password, newPassword } = values;
                const response = await changePassword({ id, password, newPassword });
                if (response.error) {
                    throw new Error(response.error);
                }
                toast.success('Password changed successfully');
                resetForm();
                navigate(-1);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
};

export default useChangePassword;
