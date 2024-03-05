import { useParams } from 'react-router';
import { getSpotsOccupancyBySpotTypeAndLocation } from '../../../services/spotService';

import { SpotType } from './SpotTypeCards.static';
import { useEffect, useState } from 'react';

const SpotTypeCardsOccupancyLogic = (spotTypeData: SpotType[]) => {
    const [updatedSpotTypeData, setUpdatedSpotData] = useState<SpotType[]>(spotTypeData);
    const { id: locationId } = useParams();
    const today = new Date();

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const tomorrowStart = new Date(tomorrow);
    tomorrowStart.setHours(0, 0, 0, 0);

    const tomorrowEnd = new Date(tomorrow);
    tomorrowEnd.setDate(tomorrow.getDate() + 1);
    tomorrowEnd.setHours(0, 0, 0, 0);

    const tomorrowStartString = tomorrowStart.toISOString();
    const tomorrowEndString = tomorrowEnd.toISOString();

    useEffect(() => {
        const fetchData = async () => {
            const updatedData = await Promise.all(
                spotTypeData.map(async (spotType) => {
                    const response = await getSpotsOccupancyBySpotTypeAndLocation({
                        locationId,
                        spotTypeId: spotType.id,
                        start: tomorrowStartString,
                        end: tomorrowEndString,
                    });
                    return {
                        ...spotType,
                        occupancy: Math.floor(response),
                    };
                }),
            );
            setUpdatedSpotData(updatedData);
        };

        fetchData();
    }, [spotTypeData, locationId, tomorrowStartString, tomorrowEndString]);

    return { updatedSpotTypeData };
};

export { SpotTypeCardsOccupancyLogic };
