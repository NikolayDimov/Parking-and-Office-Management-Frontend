import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, BaseButtonReservationUser, StyledUserDetails, UserButtons } from './UserCard.styles';

export default function UserDetails({ user, deleteUser, userReservations }: UserDetailsProps) {
    return (
        <StyledUserDetails>
            <h3>{user.email}</h3>
            {user.role !== 'ADMIN' && (
                <UserButtons>
                    <BaseButtonReservationUser onClick={() => userReservations(user.id)}>
                        User reservations
                    </BaseButtonReservationUser>

                    <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
                        Delete
                    </BaseButtonDeleteUser>
                </UserButtons>
            )}
        </StyledUserDetails>
    );
}
