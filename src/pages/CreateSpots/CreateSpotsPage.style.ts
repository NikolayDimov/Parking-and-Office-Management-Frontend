import styled from 'styled-components';

const DivFlexStyled = styled.div`
    align-items: center;
    width: auto;
    padding: 1rem;

    .checkbox-label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }

    &.create-reservation-container {
        max-width: 100%;
        background-color: var(--blue-green-light);
        display: flex;
        justify-content: center;
        flex-direction: column;

        h4{
            padding-top: 2rem;
        }
    }

    &.create-reservation-container-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: auto;
        padding: 1rem;
    }

    .image-marker {
        .image-marker__marker {
            display: flex;
            justify-content: center;
        }
    }
`;

export { DivFlexStyled };
