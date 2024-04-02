import { UserProfilePageLogic } from './ReservationUser.logic';
import { BigButtonDark } from '../../components/CommonStyledElements';
import {
    BackButton,
    ListContainer,
    ToggleButtonsContainer,
    UserAdditionalInfoContainer,
    UserProfileContainer,
} from './ReservationUser.styles';
import { userProfileConstants } from './ReservationUser.static';
import UserProfileInfo from '../User/UserProfilePage/UserProfileInfo';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';
import NotFound from '../NotFound/NotFound';
import { FaArrowLeft } from 'react-icons/fa';

const ReservationUser = () => {
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
        activeTab,
        handleTabClick,
        reservationTypes,
        tokenId,
        tokenRole,
        handleGoBack,
    } = UserProfilePageLogic();

    if (tokenRole !== 'ADMIN') {
        if (tokenId !== user?.id) {
            return <NotFound />;
        }
    }
    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            {user && (
                <div>
                    <UserProfileContainer>
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
        </ListContainer>
    );
};

export default ReservationUser;
