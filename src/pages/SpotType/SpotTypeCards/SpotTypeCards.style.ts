import styled from 'styled-components';

const SpotTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    margin: 1rem auto;
    border-radius: 0.5rem;
    text-align: center;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);

        a {
            margin: 0 auto;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        a {
            margin: 0 auto;
        }
    }
`;

const SpotTypeImageContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f4f4;
`;

const SpotTypeParagraph = styled.p`
    font-size: 1.375rem;
`;

const SpotTypeParagraphOccupancy = styled.p`
    font-size: 0.9rem;
`;

const SpotTypeImage = styled.img`
    width: 100%;
    height: 20rem;
    margin-bottom: 0.625rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    object-fit: cover;
`;

const StyledCardLocation = styled.div`
    border: 1px solid #aaaaaa;
    height: auto;
    margin: 0 auto;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    box-shadow: 0px 0px 4px 0px #615757;
    overflow: hidden;
    background-color: var(--card-background);

    &:hover {
        box-shadow: 0px 2px 8px 2px var(--light-blue);
    }
`;

const ContentContainer = styled.div`
    height: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
`;

const BaseButtonCard = styled.button`
    align-self: center;
    background-color: transparent;
    border: transparent;
    border-radius: 0.625rem;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0.5rem;

    @media (max-width: 1100px) {
        grid-template-columns: 1fr;

        width: 100%;
        box-shadow: none;
        margin: 0 auto;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        width: 100%;
        box-shadow: none;
        margin: 0 auto;
    }
`;

export {
    SpotTypeContainer,
    SpotTypeImage,
    SpotTypeImageContainer,
    SpotTypeParagraph,
    StyledCardLocation,
    SpotTypeParagraphOccupancy,
    ContentContainer,
    BaseButtonCard,
};
