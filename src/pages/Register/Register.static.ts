import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
    email: Yup.string()
        .matches(/^[a-zA-Z0-9._%+-]+@yara\.com$/, 'Email must end with @yara.com')
        .required('Email is required'),
    password: Yup.string()
        .min(6, 'Password is too short - should be 6 chars minimum.')
        .max(32, 'Password is too long - should be 32 chars maximum.')
        .matches(
            /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/,
            'Password must contain at least one letter, one number, and one special character.',
        )
        .required('Password is required'),
});

export { RegisterSchema };

//------------------------------------
// import * as Yup from 'yup';
// import { TFunction } from 'i18next';

// const getRegisterSchema = (t: TFunction) =>
//     Yup.object().shape({
//         email: Yup.string()
//             .matches(/^[a-zA-Z0-9._%+-]+@yara\.com$/, t('register.emailInvalid'))
//             .required(t('register.emailRequired')),
//         password: Yup.string()
//             .min(6, t('register.passwordMin'))
//             .max(32, t('register.passwordMax'))
//             .matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{6,}$/, t('register.passwordInvalid'))
//             .required(t('register.passwordRequired')),
//     });

// export default getRegisterSchema;
