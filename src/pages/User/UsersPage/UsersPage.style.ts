import styled from 'styled-components';
import { BaseButton, Container } from '../../../components/CommonStyledElements';

const UserPageMainButtonsContainer = styled(Container)`
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    gap: 1.25rem;

    @media (max-width: 768px) {
        flex-direction: column;
        max-width: 18.75rem;
    }
`;

const BaseButtonCreateUser = styled(BaseButton)`
    font-size: 1rem;
    padding: 0.9375rem;
    background-color: var(--blue-green-light);
`;

const ListContainer = styled.div`
    padding: 1.25rem;

    @media (max-width: 768px) {
        padding: 0.625rem;
    }
`;

export { UserPageMainButtonsContainer, BaseButtonCreateUser, ListContainer };
