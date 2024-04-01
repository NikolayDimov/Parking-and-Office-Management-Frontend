import styled from 'styled-components';

const SpotTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
    margin: 3rem auto;
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;

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
    margin-bottom: 0.625rem;
`;

const SpotTypeImage = styled.img`
    width: 100%;
    height: 12.5rem;
    margin-bottom: 0.625rem;
    border-radius: 0.5rem;
    object-fit: cover;
`;

const StyledCardLocation = styled.div`
    background-color: var(--navbar);
    color: #fff;
    width: 100%;
    height: 90%;
    margin: 0 auto;
    /* border: 1px solid #ccc; */
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.home-card {
        width: 90%;
    }
`;

export { SpotTypeContainer, SpotTypeImage, SpotTypeImageContainer, SpotTypeParagraph, StyledCardLocation };
