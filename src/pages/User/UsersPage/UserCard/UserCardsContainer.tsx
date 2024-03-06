import { Container } from '../../../../components/CommonStyledElements';
import { UserCardContainerProps } from './UserCard.static';
import { UserCardsContainerWrapper } from './UserCard.styles';
import UserCard from './UserCard';

const UserCardsContainer = ({ users, deleteUser, userReservations }: UserCardContainerProps) => {
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
                    <p>No users available!</p>
                )}
            </UserCardsContainerWrapper>
        </Container>
    );
};

export default UserCardsContainer;
