import styled from 'styled-components';

const ToggleButtonsContainer = styled.div`
    max-width: 93.75rem;
    display: flex;
    gap: 1.875rem;
    margin: 2rem auto 1.875rem;
    padding: 0 2rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        margin: 1.25rem auto 1.875rem;
        flex-direction: column;
        gap: 0.3125rem;
    }
`;

const UserProfileContainer = styled.div`
    margin: 0 auto;
    padding: 0 3rem;
    max-width: 70rem;
    border-radius: 0.5rem;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 0 1rem;
    }
`;

const UserAdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.325rem auto;
    width: 80%;
    background-color: var(--light-blue);
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
`;

const ListContainer = styled.div`
    max-width: 93rem;
    margin: 0 auto;

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

export { ToggleButtonsContainer, UserAdditionalInfoContainer, UserProfileContainer, ListContainer, BackButton };
