import styled from 'styled-components';

const ImageInputStyle = styled.div`
    margin-top: 1rem;
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
        width: 15.625rem;
        color: var(--dark-grey);
        background: var(white-smoke);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 0.5rem;
        padding: 0.625rem 0.875rem;
        margin-bottom: 1rem;

        .image-input input {
            border: none;
        }
    }

    input::placeholder {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--grey);
    }

    input.number-field {
        width: 10rem;
    }

    &.error {
        color: var(--red);
        font-size: var(--font-size-sm);
        font-weight: 500;
        margin-left: 1.2rem;
        margin-top: 0.4rem;
    }
`;
export default ImageInputStyle;
