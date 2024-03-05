import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@yara\.com$/, 'Email must end with @yara.com')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
        .matches(
            /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/,
            'Password must contain at least one letter, one number, and one special character.',
        )
        .required('Required'),
});

export { RegisterSchema };
