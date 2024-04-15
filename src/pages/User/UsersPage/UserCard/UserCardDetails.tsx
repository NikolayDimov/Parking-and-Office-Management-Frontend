// import { UserDetailsProps } from './UserCard.static';
// import { BaseButtonDeleteUser, BaseButtonReservationUser, StyledUserDetails, UserButtons } from './UserCard.styles';
// import { useTranslation } from 'react-i18next';

// export default function UserDetails({ user, deleteUser, userReservations }: UserDetailsProps) {
//     const { t } = useTranslation();

//     return (
//         <StyledUserDetails>
//             <h3>{user.email}</h3>
//             {user.role !== 'ADMIN' && (
//                 <UserButtons>
//                     <BaseButtonReservationUser onClick={() => userReservations(user.id)}>
//                         {t('user.userContainer.userReservations')}
//                     </BaseButtonReservationUser>

//                     <BaseButtonDeleteUser className="delete-btn" onClick={() => deleteUser(user.id)}>
//                         {t('user.userContainer.deleteUser')}
//                     </BaseButtonDeleteUser>
//                 </UserButtons>
//             )}
//         </StyledUserDetails>
//     );
// }

import { useState } from 'react';
import useModal from '../../../../components/ModalList/useModal';
import DeleteLocationModal from '../../../AdminPage/AdminListModal/DeleteModal/DeleteModal';
import { UserDetailsProps } from './UserCard.static';
import { BaseButtonDeleteUser, BaseButtonReservationUser, StyledUserDetails, UserButtons } from './UserCard.styles';
import { useTranslation } from 'react-i18next';
import { useUsers, useUsersPageLogic } from '../UsersPage.logic';

export default function UserDetails({ user, userReservations }: UserDetailsProps) {
    const { t } = useTranslation();
    const { showModal: showDeleteModal, hideModal: hideDeleteModal, isVisible: isDeleteModalVisible } = useModal();
    const [selectedUserIdForDelete, setSelectedUserIdForDelete] = useState<string | null>(null);
    const { handleDeleteUser } = useUsersPageLogic();
    const { refetch } = useUsers();

    const onDeleteClick = (userId: string) => {
        setSelectedUserIdForDelete(userId);
        showDeleteModal();
    };

    const onDeleteConfirm = async () => {
        if (selectedUserIdForDelete) {
            await handleDeleteUser(selectedUserIdForDelete);
            setSelectedUserIdForDelete(null);
            hideDeleteModal();
            refetch();
        }
    };

    return (
        <>
            <StyledUserDetails>
                <h3>{user.email}</h3>
                {user.role !== 'ADMIN' && (
                    <UserButtons>
                        <BaseButtonReservationUser onClick={() => userReservations(user.id)}>
                            {t('user.userContainer.userReservations')}
                        </BaseButtonReservationUser>
                        <BaseButtonDeleteUser className="delete-btn" onClick={() => onDeleteClick(user.id)}>
                            {t('user.userContainer.deleteUser')}
                        </BaseButtonDeleteUser>
                    </UserButtons>
                )}
            </StyledUserDetails>

            {isDeleteModalVisible && (
                <DeleteLocationModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
        </>
    );
}
