import ImageMarker from 'react-image-marker';
import { BaseButton, StyledToolTip } from '../../components/CommonStyledElements';
import { useShowSpots } from './CreateReservationPage.logic';
import Loader from '../../components/Loader/Loader';
import { LocationImage } from '../Home/LocationChocie/LocationChoice.style';
import { Card, ImageContainer, ImageStyled, NoSpotsMessageContainer } from './CreateReservationPage.style';
import { DivFlexStyled } from '../CreateSpots/CreateSpotsPage.style';
import SpotMarkerReservation from './SpotMarkerReservation/SpotMarkerReservation';
import CalendarPage from './Calendar/CalendarPage';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import SpotCardsContainer from './CombinationReservation/SpotCardsContainer';

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
    } = useShowSpots();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Create reservation page</p>;
    }

    return (
        <>
            <DivFlexStyled className="create-reservation-container">
                <CalendarPage sendDateTime={handleDataFromCalendar} spotType={selectedSpotType} />
                {calendarData && (
                    <>
                        <h4>Select an option:</h4>
                        <DivFlexStyled className="create-reservation-container-cards">
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
        </>
    );
}
