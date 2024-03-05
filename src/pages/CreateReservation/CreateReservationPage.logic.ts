import { useQuery } from 'react-query';
import { getAllBySpotTypeAndLocation } from '../../services/floorPlanService';
import { useLocation } from 'react-router';
import { useState } from 'react';
import {
    getFreeSpotsBySpotTypeAndLocation,
    getFreeSpotsCombinationBySpotTypeAndFloorPlan,
} from '../../services/spotService';
import { DateRangeOutput } from './Calendar/Calendar.static';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import { CombinedReservationSpotMarker, CustomSpotMarker } from './SpotMarkerReservation/SpotMarkerReservation.static';

function useShowSpots() {
    const location = useLocation();

    const currentLocation = location.state.currentLocation;
    const selectedSpotType = location.state.selectedSpotType;
    const [isCombination, setIsCombination] = useState(false);
    const [areNoSpots, setAreNoSpots] = useState(false);
    const [spots, setSpots] = useState<CustomSpotMarker[]>([]);
    const [combinedSpots, setCombinedSpots] = useState<CombinedReservationSpotMarker[]>([]);
    const [currentFloorPlan, setCurrentFloorPlan] = useState<FloorPlan>();

    const [showSpots, setShowSpots] = useState<boolean>(false);

    function toggleSpots() {
        setShowSpots(!showSpots);
    }

    const [calendarData, setCalendarData] = useState<DateRangeOutput>();

    function handleDataFromCalendar(data: DateRangeOutput) {
        setCalendarData(data);
    }

    const { floorPlans, isLoading, error } = useFloorPlansByLocation(selectedSpotType.id, currentLocation.id);

    const showPlan = async (floorPlan: FloorPlan) => {
        setCurrentFloorPlan(floorPlan);
        if (floorPlan && calendarData) {
            const data = await getFreeSpotsBySpotTypeAndLocation({
                floorPlanId: floorPlan.id!,
                spotTypeId: selectedSpotType.id,
                start: calendarData.startDate,
                end: calendarData.endDate,
            });

            if (data.length > 0) {
                const outputSpots = data.map((spot: CustomSpotMarker) => {
                    spot.spotType = selectedSpotType.name;
                    spot.period = calendarData;
                    return spot;
                });

                setSpots(outputSpots);

                if (!showSpots) {
                    toggleSpots();
                }
            } else if (data.length <= 0 && (selectedSpotType.name === "Office desk" || selectedSpotType.name === "Parking place" )){
                const spotCombination = await getFreeSpotsCombinationBySpotTypeAndFloorPlan({
                    floorPlanId: floorPlan.id!,
                    spotTypeId: selectedSpotType.id,
                    start: calendarData.startDate,
                    end: calendarData.endDate,
                });
                console.log(spotCombination);
                const outputSpots = spotCombination.map((s: CombinedReservationSpotMarker) => {
                    s.floorPlanId = s.spot.floorPlanId;
                    s.description = s.spot.description;
                    s.id = s.spot.id;
                    s.isPermanent = s.spot.isPermanent;
                    s.left = s.spot.left;
                    s.top = s.spot.top;
                    s.name = s.spot.name;
                    s.modifiedBy = s.spot.modifiedBy;
                    s.spotTypeId = s.spot.spotTypeId;
                    s.spotType = selectedSpotType.name;
                    return s;
                });

                setCombinedSpots(outputSpots);
                setIsCombination(true);
            } else {
                setAreNoSpots(true);
            }
        }
    };

    return {
        isLoading,
        error,
        floorPlans,
        showPlan,
        spots,
        combinedSpots,
        showSpots,
        currentFloorPlan,
        handleDataFromCalendar,
        calendarData,
        selectedSpotType,
        isCombination,
        areNoSpots,
    };
}

const useFloorPlansByLocation = (spotTypeId: string, locationId: string) => {
    const {
        data: floorPlans,
        isLoading,
        error,
    } = useQuery(['floorPlans', spotTypeId, locationId], () => {
        if (spotTypeId && locationId) {
            return getAllBySpotTypeAndLocation(spotTypeId, locationId);
        }
    });
    return { floorPlans, isLoading, error };
};

export { useShowSpots };
