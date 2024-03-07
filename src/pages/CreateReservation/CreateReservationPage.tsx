import ImageMarker from 'react-image-marker';
import { BaseButton, StyledToolTip } from '../../components/CommonStyledElements';
import { useShowSpots } from './CreateReservationPage.logic';
import Loader from '../../components/Loader/Loader';
import { LocationImage } from '../Home/LocationChocie/LocationChoice.style';
import {
    BackButton,
    Card,
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
import { FaArrowLeft } from 'react-icons/fa';

export default function CreateReservation() {
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
    } = useShowSpots();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Create reservation page</p>;
    }

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <DivFlexStyled className="create-reservation-container">
                <CalendarPage sendDateTime={handleDataFromCalendar} spotType={selectedSpotType} />
                {calendarData && (
                    <>
                        <h4>Select an option:</h4>
                        <DivFlexStyled className="create-reservation-container-cards">
                            {tokenRole === 'ADMIN' && (
                                <SelectUser>
                                    <label htmlFor="userSelect">Admin can create reservation for user:</label>
                                    <select
                                        value={selectedUser?.id || ''}
                                        onChange={(e) => {
                                            const userId = e.target.value;
                                            const user = users.find((u) => u.id === userId) || null;
                                            setSelectedUser(user);
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select a user
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
                                            {<p>Select an option</p>}
                                        </StyledToolTip>
                                    </BaseButton>
                                );
                            })}
                        </DivFlexStyled>
                    </>
                )}
            </DivFlexStyled>

            {areNoSpots ? (
                <NoSpotsMessageContainer>Sorry, there are no free spots of this spot type.</NoSpotsMessageContainer>
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
                                <h3>Please select a spot:</h3>
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
