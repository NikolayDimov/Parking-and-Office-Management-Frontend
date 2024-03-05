import styled from 'styled-components';
import { BaseButton } from '../../../../components/CommonStyledElements';

const StyledUserCard = styled.div`
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #fff;

    &:hover {
        background-color: #8dd76d;
        transform: scale(1.05);
    }
`;

const UserImage = styled.img`
    width: 100%;
    max-height: 15.625rem;
    object-fit: cover;
`;

const UserCardsContainerWrapper = styled.div`
    background-color: var(--blue-green-light);
    margin: 0.625rem auto;
    padding: 0.625rem 1.25rem;
    border-radius: 0.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 1.875rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 420px) {
        background-color: transparent;
    }
`;

const StyledUserDetails = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: var(--pink-light);
`;

const BaseButtonDeleteUser = styled(BaseButton)`
    font-size: 1rem;
    padding: 0.9375rem;
`;

export { StyledUserCard, StyledUserDetails, UserImage, UserCardsContainerWrapper, BaseButtonDeleteUser };
