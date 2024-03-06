import styled from 'styled-components';

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    padding: 1.25rem;
    border-radius: 0.3125rem;
    .form-title {
        text-align: center;
    }
    label {
        margin-top: 0.625rem;
    }
    input {
        margin-top: 0.3125rem;
        margin-bottom: 0.3125rem;
        padding: 0.625rem;
        border: 1px solid #ccc;
        border-radius: 0.3125rem;
    }
    div {
        color: red;
    }
`;

export { RegisterForm };
