import { UserProfilePageLogic } from './UserProfilePage.logic';
import { BaseButtonLogout, BigButtonDark, BigButtonLight } from '../../../components/CommonStyledElements';
import {
    ToggleButtonsContainer,
    UpdateButtonContainer,
    UserAdditionalInfoContainer,
    UserMainInfoContainer,
    UserProfileContainer,
    UserProfileEmail,
    UserProfilePicture,
    UserProfilePictureContainer,
} from './UserProfilePage.styles';
import { userProfileConstants } from './UserProfilePage.static';
import UserProfileInfo from './UserProfileInfo';
import defaultPicture from '../../../assets/default-profile.jpg';
import UserReservationsTable from '../../../components/UserReservationsTable/UserReservationsTable';
import { TbLogout2 } from 'react-icons/tb';
import NotFound from '../../NotFound/NotFound';



const UserProfilePage = () => {
    const {
        user,
        pastReservations,
        arePastReservationsLoading,
        pastReservationsRefetch,
        currentReservations,
        areCurrentReservationsLoading,
        currentReservationsRefetch,
        futureReservations,
        areFutureReservationsLoading,
        futureReservationsRefetch,
        handleUpdateUserPassword,
        handleUpdateUserProfilePicture,
        activeTab,
        handleTabClick,
        logout,
        reservationTypes,
        tokenId,
    } = UserProfilePageLogic();

    if (tokenId !== user?.id && user?.role !== "ADMIN") {
        return <NotFound />;
    }
    return (
        <div>
            {user && (
                <div>
                    <UserProfileContainer>
                        <UserMainInfoContainer>
                            <UserProfilePictureContainer>
                                <UserProfilePicture src={user.imgUrl ?? defaultPicture} alt="Profile" />
                                <UserProfileEmail>{user.email}</UserProfileEmail>
                            </UserProfilePictureContainer>
                            {tokenId === user.id && (
                                <UpdateButtonContainer>
                                    <BigButtonLight onClick={() => handleUpdateUserProfilePicture(user.id)}>
                                        {userProfileConstants.changeProfilePictureButton}
                                    </BigButtonLight>
                                    <BigButtonLight onClick={() => handleUpdateUserPassword(user.id)}>
                                        {userProfileConstants.changePasswordButton}
                                    </BigButtonLight>
                                    <BaseButtonLogout className="remove-btn" onClick={() => logout()}>
                                        {userProfileConstants.logout}
                                        <TbLogout2 />
                                    </BaseButtonLogout>
                                </UpdateButtonContainer>
                            )}
                        </UserMainInfoContainer>
                        <UserAdditionalInfoContainer>
                            <UserProfileInfo
                                pastReservations={pastReservations?.length ?? 0}
                                currentReservations={currentReservations?.length ?? 0}
                                futureReservations={futureReservations?.length ?? 0}
                            ></UserProfileInfo>
                        </UserAdditionalInfoContainer>
                    </UserProfileContainer>
                    <ToggleButtonsContainer>
                        <BigButtonDark
                            onClick={() => handleTabClick('past')}
                            style={{
                                fontWeight: activeTab === 'past' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'past' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showPastReservations}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('current')}
                            style={{
                                fontWeight: activeTab === 'current' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'current' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showCurrentReservations}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('future')}
                            style={{
                                fontWeight: activeTab === 'future' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'future' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {userProfileConstants.showFutureReservations}
                        </BigButtonDark>
                    </ToggleButtonsContainer>

                    {activeTab === 'past' && (
                        <UserReservationsTable
                            reservations={pastReservations}
                            isLoading={arePastReservationsLoading}
                            refetch={pastReservationsRefetch}
                            reservationType={reservationTypes.past}
                        />
                    )}
                    {activeTab === 'current' && (
                        <UserReservationsTable
                            reservations={currentReservations}
                            isLoading={areCurrentReservationsLoading}
                            refetch={currentReservationsRefetch}
                            reservationType={reservationTypes.current}
                        />
                    )}
                    {activeTab === 'future' && (
                        <UserReservationsTable
                            reservations={futureReservations}
                            isLoading={areFutureReservationsLoading}
                            refetch={futureReservationsRefetch}
                            reservationType={reservationTypes.future}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfilePage;
