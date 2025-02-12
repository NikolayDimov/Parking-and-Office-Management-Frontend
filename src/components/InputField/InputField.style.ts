import styled from 'styled-components';

const InputStyle = styled.div`
    margin-inline-end: auto;
    margin-inline-start: auto;

    label {
        font-weight: 500;
        font-size: 1.125rem;
        color: var(--white-smoke);
        display: block;
        text-align: left;
        padding-left: 0.8rem;
    }

    input {
        font-size: 1rem;
        font-weight: 400;
        width: 100%;
        color: var(--dark-grey);
        background: var(white-smoke);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 0.5rem;
        padding: 0.825rem 0.875rem;
        margin-bottom: 1rem;

        &:focus {
            border-color: red;
            outline: none;
        }

        &.error {
            border: 1px solid red;
        }

        .image-input input {
            border: none;
        }
        .p {
            color: red;
        }
    }

    input::placeholder {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--grey);
    }

    input.number-field {
        width: 0.625rem;
    }

    &.error {
        color: red;
        /* font-size: var(--font-size-sm); */
        font-weight: 500;
        margin-left: 1.2rem;
        margin-top: 0.4rem;
    }

    @media (max-width: 450px) {
        margin: 0;
        padding: 0;

        input {
            width: 100%;
        }
    }
`;

export default InputStyle;
