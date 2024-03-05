import styled from 'styled-components';

const Option = styled.option`
    font-size: var(--font-size-sm);
    font-weight: 400;
    width: 15.625rem;
    color: var(--dark-grey);
    padding: 0.625rem 0.875rem;
    margin-bottom: 1rem;
    min-height: 1em;
`;

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: flex-start;
    width: auto;
    height: auto;
    padding: 0.4rem;
    z-index: 20;

    h3 {
        color: black;
        text-align: center;
    }
`;

const SelectStyle = styled.div`
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
        margin-bottom: 0.25rem;
    }

    select {
        font-size: var(--font-size-sm);
        font-weight: 400;
        width: 15.625rem;
        color: var(--dark-grey);
        background: var(--beige);
        border: 0.17rem solid var(--blue-green);
        box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
        border-radius: 0.5rem;
        padding: 0.625rem 0.875rem;
        margin-bottom: 1rem;
    }

    select::placeholder {
        font-size: var(--font-size-sm);
        font-weight: 500;
        color: var(--grey);
    }

    .error {
        color: var(--red);
        font-size: var(--font-size-sm);
        font-weight: 500;
        margin-left: 1.2rem;
        margin-top: 0.4rem;
    }
`;

export { FormStyled, Option, SelectStyle };
