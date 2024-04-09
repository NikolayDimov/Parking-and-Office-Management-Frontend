import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, BaseButtonReservationUser, StyledUserDetails, UserButtons } from './UserCard.styles';
import { useTranslation } from 'react-i18next';

export default function UserDetails({ user, deleteUser, userReservations }: UserDetailsProps) {
    const { t } = useTranslation();

    return (
        <StyledUserDetails>
            <h3>{user.email}</h3>
            {user.role !== 'ADMIN' && (
                <UserButtons>
                    <BaseButtonReservationUser onClick={() => userReservations(user.id)}>
                        {t('user.userContainer.userReservations')}
                    </BaseButtonReservationUser>

                    <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
                        {t('user.userContainer.deleteUser')}
                    </BaseButtonDeleteUser>
                </UserButtons>
            )}
        </StyledUserDetails>
    );
}
