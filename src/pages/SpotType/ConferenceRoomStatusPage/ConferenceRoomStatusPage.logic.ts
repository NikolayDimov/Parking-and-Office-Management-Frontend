import { useQuery } from 'react-query';
import { getReservationsBySpotTypeAndLocation } from '../../../services/reservationService';
import { getLocation } from '../../../services/locationService';
import { Reservation } from '../../../static/types';
import { useState, useEffect } from 'react';
import { Location } from '../SpotType.static';

const useConferenceRoomStatus = (locationId: string | undefined) => {
    const [singleLocation, setSingleLocation] = useState<Location | undefined>();

    const {
        data: reservations,
        error,
        isLoading,
    } = useQuery<Reservation[], Error>(
        ['conferenceRoomStatus', locationId],
        () => getReservationsBySpotTypeAndLocation(locationId || ''),
        {
            enabled: !!locationId,
            onSuccess: async () => {
                try {
                    if (locationId) {
                        const response = await getLocation(locationId);
                        setSingleLocation(response);
                    }
                } catch (error) {
                    console.error('Error fetching location:', error);
                }
            },
        },
    );

    useEffect(() => {
        console.log('Conference reservations:', reservations);
    }, [reservations]);

    return { reservations, error, isLoading, singleLocation };
};

export default useConferenceRoomStatus;
