import styled from 'styled-components';

const ModalOverlay = styled.div`
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: flex-start;
    width: auto;
    height: auto;
    background-color: var(--beige-light);
    border-radius: 0.5rem;
    padding: 0.3rem;
    z-index: 20;

    h3,
    h4 {
        color: black;
        text-align: center;
        padding: 1.25rem;
    }

    p,
    div {
        text-align: center;
        padding: 0.5rem;
        padding-bottom: 0;
    }

    &.close-btn {
        background-color: transparent;
        position: relative;
        padding: 0.2rem;
        right: 0.5rem;
        top: 0.5rem;
        align-self: flex-end;
        margin: 0;
    }

    @media (max-width: 768px) {
        h3,
        h4 {
            font-size: 0.8rem;
        }

        p,
        div {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 450px) {
        h3,
        h4 {
            font-size: 1rem;
        }

        p,
        div {
            font-size: 0.8rem;
        }

        label {
            font-size: 0.8rem;
        }

        input {
            font-size: 0.8rem;
            padding: 0.5rem;
        }
    }
`;

export { ModalBox, ModalOverlay };
