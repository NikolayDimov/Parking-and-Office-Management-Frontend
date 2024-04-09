import ImageMarker from 'react-image-marker';
import { BaseButton, StyledToolTip } from '../../components/CommonStyledElements';
import { useShowSpots } from './CreateReservationPage.logic';
import Loader from '../../components/Loader/Loader';
import { LocationImage } from '../Home/LocationChocie/LocationChoice.style';
import {
    BackButton,
    Card,
    DivFlexStyledContainer,
    ExpandRow,
    FloorPlanImageContainer,
    ImageContainer,
    ImageStyled,
    ListContainer,
    NoSpotsMessageContainer,
    SelectUser,
} from './CreateReservationPage.style';
import { DivFlexStyled } from '../CreateSpots/CreateSpotsPage.style';
import SpotMarkerReservation from './SpotMarkerReservation/SpotMarkerReservation';
import CalendarPage from './Calendar/CalendarPage';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import SpotCardsContainer from './CombinationReservation/SpotCardsContainer';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';

export default function CreateReservation() {
    const { t } = useTranslation();

    const {
        isLoading,
        areNoSpots,
        error,
        floorPlans,
        showSpots,
        spots,
        showPlan,
        currentFloorPlan,
        handleDataFromCalendar,
        calendarData,
        selectedSpotType,
        isCombination,
        combinedSpots,
        tokenRole,
        selectedUser,
        users,
        setSelectedUser,
        handleGoBack,
        isContainerCollapsed,
        toggleContainerCollapse,
    } = useShowSpots();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>{t('createReservation.error')}</p>;
    }

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 52 52"
                    // enable-background="new 0 0 52 52"
                >
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
            </BackButton>

            {isContainerCollapsed ? (
                <ExpandRow onClick={toggleContainerCollapse}>
                    <span>{t('createReservation.calendar')}</span>
                    {isContainerCollapsed && <ExpandMoreIcon />}
                </ExpandRow>
            ) : null}

            <DivFlexStyledContainer
                className={`create-reservation-container ${isContainerCollapsed ? 'collapsed' : ''}`}
            >
                <CalendarPage sendDateTime={handleDataFromCalendar} spotType={selectedSpotType} />
                {calendarData && (
                    <FloorPlanImageContainer>
                        <h4>{t('createReservation.selectFloorPlan')}</h4>
                        <DivFlexStyled className="create-reservation-container-cards">
                            {tokenRole === 'ADMIN' && (
                                <SelectUser>
                                    <label htmlFor="userSelect">{t('createReservation.adminReservationUser')}</label>
                                    <select
                                        value={selectedUser?.id || ''}
                                        onChange={(e) => {
                                            const userId = e.target.value;
                                            const user = users.find((u) => u.id === userId) || null;
                                            setSelectedUser(user);
                                        }}
                                    >
                                        <option value="" disabled>
                                            {t('createReservation.selectUser')}
                                        </option>
                                        {Array.isArray(users) &&
                                            users.map((user) => (
                                                <option key={user.id} value={user.id}>
                                                    {user.email}
                                                </option>
                                            ))}
                                    </select>
                                </SelectUser>
                            )}

                            {floorPlans?.map((floorPlan: FloorPlan) => {
                                return (
                                    <BaseButton
                                        key={floorPlan.id}
                                        className="reservation-card"
                                        onClick={() => {
                                            showPlan(floorPlan);
                                            toggleContainerCollapse();
                                        }}
                                    >
                                        <Card
                                            data-tooltip-id={`component_${floorPlan.id}`}
                                            data-tooltip-place="right-start"
                                        >
                                            <LocationImage src={floorPlan.imgUrl} alt="floor-plan-image" />
                                            <h3>{floorPlan.name}</h3>
                                        </Card>
                                        <StyledToolTip id={`component_${floorPlan.id}`} className="spot-info">
                                            {<p> {t('createReservation.selectOption')}</p>}
                                        </StyledToolTip>
                                    </BaseButton>
                                );
                            })}
                        </DivFlexStyled>
                    </FloorPlanImageContainer>
                )}
            </DivFlexStyledContainer>

            {areNoSpots ? (
                <NoSpotsMessageContainer>{t('createReservation.noFreeSpots')}</NoSpotsMessageContainer>
            ) : (
                <>
                    {isCombination ? (
                        <SpotCardsContainer spots={combinedSpots} />
                    ) : (
                        showSpots &&
                        calendarData &&
                        currentFloorPlan &&
                        spots && (
                            <ImageContainer>
                                <h3>{t('createReservation.spotTitle')}</h3>
                                <ImageStyled>
                                    <ImageMarker
                                        src={currentFloorPlan.imgUrl!}
                                        markers={spots}
                                        markerComponent={SpotMarkerReservation}
                                    />
                                </ImageStyled>
                            </ImageContainer>
                        )
                    )}
                </>
            )}
        </ListContainer>
    );
}
