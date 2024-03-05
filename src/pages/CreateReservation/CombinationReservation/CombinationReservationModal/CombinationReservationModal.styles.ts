import styled from 'styled-components';

const CombinationReservationModalOverlay = styled.div`
    z-index: 200;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CombinationReservationModalBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-items: center;

    width: auto;
    height: auto;
    min-width: 18.75rem;
    background-color: var(--beige-light);
    border-radius: 0.5rem;
    box-shadow: 0 0.625rem 1.25rem 0 darkgrey;
    padding: 0.3rem;
    z-index: 20;

    h3,
    h4 {
        color: black;
        text-align: center;
        padding: 1rem;
        padding-bottom: 1rem;
    }

    p,
    div {
        text-align: center;
        padding: 1rem;
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
`;

export { CombinationReservationModalBox, CombinationReservationModalOverlay };
