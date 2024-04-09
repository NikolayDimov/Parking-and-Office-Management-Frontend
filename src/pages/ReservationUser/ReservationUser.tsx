import { UserProfilePageLogic } from './ReservationUser.logic';
import { BigButtonDark } from '../../components/CommonStyledElements';
import {
    BackButton,
    ListContainer,
    ToggleButtonsContainer,
    UserAdditionalInfoContainer,
    UserProfileContainer,
} from './ReservationUser.styles';
import UserProfileInfo from './DetailBullet/UserProfileInfo';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';
import NotFound from '../NotFound/NotFound';
import { useTranslation } from 'react-i18next';

const ReservationUser = () => {
    const { t } = useTranslation();

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
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
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
                            {t('reservations.buttons.showPastReservations')}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('current')}
                            style={{
                                fontWeight: activeTab === 'current' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'current' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {t('reservations.buttons.showCurrentReservations')}
                        </BigButtonDark>

                        <BigButtonDark
                            onClick={() => handleTabClick('future')}
                            style={{
                                fontWeight: activeTab === 'future' ? 'bold' : 'normal',
                                backgroundColor:
                                    activeTab === 'future' ? `var(--blue-green-light)` : `var(--blue-green-dark)`,
                            }}
                        >
                            {t('reservations.buttons.showFutureReservations')}
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
