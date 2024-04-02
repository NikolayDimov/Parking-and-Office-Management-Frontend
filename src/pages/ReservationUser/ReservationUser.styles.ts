import styled from 'styled-components';

const ToggleButtonsContainer = styled.div`
    max-width: 93.75rem;
    display: flex;
    gap: 1.875rem;
    margin: 5rem auto 1.875rem;
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
    margin: 0.875rem 0.625rem;
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 0.625rem;
    max-width: 93.75rem;
    border-radius: 0.5rem;
    overflow: hidden;

    @media (min-width: 1500px) {
        margin: 1.875rem auto;
    }
    @media (max-width: 715px) {
        grid-template-columns: 1fr;
        > :nth-child(2) {
            display: none;
        }
    }
    @media (max-width: 510px) {
        margin: 0.625rem;
    }
`;

const UserAdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;
    background-color: var(--brown);
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
`;

const UserMainInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;
    background-color: var(--blue-green);
    padding: 0.625rem;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 510px) {
        flex-direction: column;
    }
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
    color: var(--blue-green);
    cursor: pointer;
    padding: 0.5rem;

    transition: font-size 0.3s ease-in-out;

    &:hover {
        font-size: 2.25rem;
    }

    &.floor-plan {
        margin-top: 1.25rem;
    }
`;

export {
    ToggleButtonsContainer,
    UserAdditionalInfoContainer,
    UserProfileContainer,
    UserMainInfoContainer,
    ListContainer,
    BackButton,
};
