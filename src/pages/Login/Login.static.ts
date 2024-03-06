import * as Yup from 'yup';

interface LoginUser {
    email: string;
    password: string;
    access_token?: string;
    error?: string;
}

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
        .required('Password is required'),
});

export type { LoginUser };
export { LoginSchema };
