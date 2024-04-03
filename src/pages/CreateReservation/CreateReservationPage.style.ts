import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    width: auto;
    height: auto;
    margin: 1rem;
    background-color: var(--light-blue);
`;
const NoSpotsMessageContainer = styled.div`
    display: flex;
    margin-top: 1.25rem;
    text-align: center;
    justify-content: center;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;

    padding: 1rem;
    justify-content: center;
    background-color: var(--beige-light);
    h3 {
        text-align: center;
        padding: 1rem;
    }
`;

const ImageStyled = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 0.625rem;

    @media screen and (max-width: 900px) {
        width: 60%;
    }
    @media screen and (max-width: 780px) {
        width: 70%;
    }

    @media screen and (max-width: 640px) {
        width: 80%;
    }
    @media screen and (max-width: 400px) {
        width: 100%;
    }

    .image-marker {
        .image-marker__marker {
            display: flex;
            justify-content: center;
        }
    }
`;

const ListContainer = styled.div`
    max-width: 93rem;
    margin: 0 auto;
    background-color: var(--background-color);

    @media (max-width: 768px) {
        padding: 0.625rem;
    }
`;

const BackButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.875rem;
    padding: 0.5rem;
    margin: 0.2rem 0.5rem;
    fill: var(--light-blue-nav);
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;

    &:hover {
        background: var(--hover-color-back-btn);
    }
`;

const SelectUser = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 8rem;
    font-size: 1.2rem;
    font-weight: bold;

    select {
        background-color: var(--light-blue);
        padding: 0.4rem 0;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
`;

const FloorPlanImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ExpandRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0 8rem;
    border-radius: 0.625rem;
    background-color: var(--light-blue);
    cursor: pointer;

    @media (max-width: 768px) {
        margin: 0 6rem;
    }

    @media (max-width: 600px) {
        margin: 0 5rem;
    }

    @media (max-width: 480px) {
        margin: 0 3rem;
    }
`;

const DivFlexStyledContainer = styled.div`
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
        background-color: var(--background-color);
        display: flex;
        justify-content: center;
        gap: 5rem;

        h4 {
            padding-top: 2rem;
        }
    }

    &.create-reservation-container.collapsed {
        /* Styles for the container when it's collapsed */
        display: none; /* or any other styles to hide it */
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

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export {
    Card,
    ImageContainer,
    ImageStyled,
    NoSpotsMessageContainer,
    BackButton,
    ListContainer,
    SelectUser,
    FloorPlanImageContainer,
    ExpandRow,
    DivFlexStyledContainer,
};
