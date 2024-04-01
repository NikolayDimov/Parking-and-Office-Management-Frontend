import { useQuery } from 'react-query';
import { getAllBySpotTypeAndLocation } from '../../services/floorPlanService';
import { useLocation, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import {
    getFreeSpotsBySpotTypeAndLocation,
    getFreeSpotsCombinationBySpotTypeAndFloorPlan,
} from '../../services/spotService';
import { DateRangeOutput } from './Calendar/Calendar.static';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import { CombinedReservationSpotMarker, CustomSpotMarker } from './SpotMarkerReservation/SpotMarkerReservation.static';
import { getUsers } from '../../services/userService';
import { User } from '../User/UsersPage/UsersPage.static';
import useToken from '../../hooks/Token/Token.hook';

function useShowSpots() {
    const location = useLocation();
    const navigate = useNavigate();

    const currentLocation = location.state.currentLocation;
    const selectedSpotType = location.state.selectedSpotType;
    const [isCombination, setIsCombination] = useState(false);
    const [areNoSpots, setAreNoSpots] = useState(false);
    const [spots, setSpots] = useState<CustomSpotMarker[]>([]);
    const [combinedSpots, setCombinedSpots] = useState<CombinedReservationSpotMarker[]>([]);
    const [currentFloorPlan, setCurrentFloorPlan] = useState<FloorPlan>();

    const [showSpots, setShowSpots] = useState<boolean>(false);
    const decodedToken = useToken();
    const { role: tokenRole } = decodedToken || {};
    const [users, setUsers] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<User | null>();

    const [isContainerCollapsed, setIsContainerCollapsed] = useState(false);
    const toggleContainerCollapse = () => {
        setIsContainerCollapsed((prevState) => !prevState);
    };

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

            // setIsTopContainerExpanded(!showSpots);

            if (data.length > 0) {
                const outputSpots = data.map((spot: CustomSpotMarker) => {
                    spot.spotType = selectedSpotType?.name || '';
                    spot.period = calendarData;
                    spot.user = selectedUser;
                    return spot;
                });

                setSpots(outputSpots);

                if (!showSpots) {
                    toggleSpots();
                }
            } else if (
                data.length <= 0 &&
                (selectedSpotType.name === 'Office desk' || selectedSpotType.name === 'Parking place')
            ) {
                const spotCombination = await getFreeSpotsCombinationBySpotTypeAndFloorPlan({
                    floorPlanId: floorPlan.id!,
                    spotTypeId: selectedSpotType.id,
                    start: calendarData.startDate,
                    end: calendarData.endDate,
                });
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
                    s.user = selectedUser;
                    return s;
                });

                setCombinedSpots(outputSpots);
                setIsCombination(true);
            } else {
                setAreNoSpots(true);
            }
        }
    };

    const getAllUsers = async () => {
        try {
            const userData = await getUsers();
            setUsers(userData);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        getAllUsers();
    }, []);

    const handleGoBack = () => {
        navigate(-1);
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
        tokenRole,
        users,
        selectedUser,
        setSelectedUser,
        handleGoBack,
        isContainerCollapsed,
        toggleContainerCollapse,
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
