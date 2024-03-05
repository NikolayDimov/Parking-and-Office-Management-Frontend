import styled from 'styled-components';

const StyledPasswordForm = styled.form`
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
    div {
        color: red;
    }
`;

export { StyledPasswordForm };
