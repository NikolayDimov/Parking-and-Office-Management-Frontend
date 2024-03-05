import styled from 'styled-components';

const HeaderModal = styled.h3`
    padding: 1.25rem;
`;

const ItemsModal = styled.div`
    font-weight: 500;
    font-size: 1.125rem;
    color: var(--white-smoke);
    display: block;
    text-align: left;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
`;

const LabelModal = styled.div`
    margin-left: 0.9375rem;
`;

const InputModal = styled.input`
    font-size: 1rem;
    font-weight: 400;
    width: 15.625rem;
    color: var(--dark-grey);
    background: var(white-smoke);
    border: 1px solid gray;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 0.5rem;
    padding: 0.625rem 0.875rem;
    margin-bottom: 1rem;
`;

const ErrorStyles = styled.p`
    color: orange;
    font-size: 1rem;
    padding-bottom: 0.625rem;
`;

export { ErrorStyles, InputModal, LabelModal, ItemsModal, HeaderModal };
