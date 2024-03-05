import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, StyledUserDetails } from './UserCard.styles';

export default function UserDetails({ user, deleteUser }: UserDetailsProps) {
    return (
        <StyledUserDetails>
            <h3>{user.email}</h3>
            {user.role !== 'ADMIN' && (
                <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
                    Delete
                </BaseButtonDeleteUser>
            )}
        </StyledUserDetails>
    );
}
