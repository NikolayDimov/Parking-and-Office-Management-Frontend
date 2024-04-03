import styled from 'styled-components';

const SpotTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: stretch;
    gap: 1.25rem;
    margin: 3rem auto;
    border-radius: 0.5rem;
    text-align: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        a {
            margin: 0 auto;
        }
    }
`;

const SpotTypeImageContainer = styled.div`
    width: 100%;
`;

const SpotTypeParagraph = styled.p`
    font-size: 1.375rem;
`;

const SpotTypeParagraphOccupancy = styled.p`
    font-size: 0.9rem;
    /* margin-bottom: 0.5rem; */
`;

const SpotTypeImage = styled.img`
    width: 100%;
    height: 14rem;
    margin-bottom: 0.625rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    object-fit: cover;
`;

const StyledCardLocation = styled.div`
    border: 1px solid #aaaaaa;
    width: 100%;
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
`;

export {
    SpotTypeContainer,
    SpotTypeImage,
    SpotTypeImageContainer,
    SpotTypeParagraph,
    StyledCardLocation,
    SpotTypeParagraphOccupancy,
    ContentContainer,
};
