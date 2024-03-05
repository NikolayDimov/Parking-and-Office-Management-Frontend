import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    width: auto;
    height: auto;
    margin: 1rem;
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

export { Card, ImageContainer, ImageStyled, NoSpotsMessageContainer };
