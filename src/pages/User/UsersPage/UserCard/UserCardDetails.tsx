import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, StyledUserDetails } from './UserCard.styles';

export default function UserDetails({ user, deleteUser, userReservations }: UserDetailsProps) {
    return (
        <StyledUserDetails>
            <h3>{user.email}</h3>
            {user.role !== 'ADMIN' && (
                <>
                    <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
                        Delete
                    </BaseButtonDeleteUser>
                    <BaseButtonDeleteUser className="delete-btn" onClick={() => userReservations(user.id)}>
                        Display user reservations
                    </BaseButtonDeleteUser>
                </>
            )}
        </StyledUserDetails>
    );
}
