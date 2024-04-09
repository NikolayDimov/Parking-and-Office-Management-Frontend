import { Container } from '../../../../components/CommonStyledElements';
import { UserCardContainerProps } from './UserCard.static';
import { UserCardsContainerWrapper } from './UserCard.styles';
import UserCard from './UserCard';
import { useTranslation } from 'react-i18next';

const UserCardsContainer = ({ users, deleteUser, userReservations }: UserCardContainerProps) => {
    const { t } = useTranslation();

    return (
        <Container>
            <UserCardsContainerWrapper>
                {users && users.length > 0 ? (
                    users.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            deleteUser={deleteUser}
                            userReservations={userReservations}
                        />
                    ))
                ) : (
                    <p>{t('user.noUsers')}</p>
                )}
            </UserCardsContainerWrapper>
        </Container>
    );
};

export default UserCardsContainer;
