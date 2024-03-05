import styled from 'styled-components';

const LoginPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f1f3f5;
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 18.75rem;
    padding: 1.25rem;
    border: 1px solid #ccc;
    border-radius: 0.3125rem;
    background-color: #fff;
    box-shadow: 0 0 0.625rem 0 #000000;
    .form-title {
        text-align: center;
    }
    label {
        margin-top: 0.625rem;
    }
    input {
        margin-top: 0.3125rem;
        padding: 0.625rem;
        border: 1px solid #ccc;
        border-radius: 0.3125rem;
    }
    button {
        margin-top: 0.625rem;
        padding: 0.625rem;
        border: 1px solid #ccc;
        border-radius: 0.3125rem;
        color: #cce5ff;
        background-color: #007bff;
        cursor: pointer;
    }
    div {
        color: red;
    }
`;

export { LoginForm, LoginPage };
