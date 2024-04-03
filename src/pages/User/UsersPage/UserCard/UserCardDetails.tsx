import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, BaseButtonReservationUser, StyledUserDetails } from './UserCard.styles';

export default function UserDetails({ user, deleteUser, userReservations }: UserDetailsProps) {
    return (
        <StyledUserDetails>
            <h3>{user.email}</h3>
            {user.role !== 'ADMIN' && (
                <>
                    <BaseButtonReservationUser onClick={() => userReservations(user.id)}>
                        Display user reservations
                    </BaseButtonReservationUser>

                    <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
                        Delete
                    </BaseButtonDeleteUser>
                </>
            )}
        </StyledUserDetails>
    );
}
