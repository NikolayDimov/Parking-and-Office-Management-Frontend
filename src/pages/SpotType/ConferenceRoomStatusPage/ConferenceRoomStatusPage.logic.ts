import { useQuery } from 'react-query';
import { getReservationsBySpotTypeAndLocation } from '../../../services/reservationService';
import { getLocation } from '../../../services/locationService';
import { Reservation } from '../../../static/types';
import { useState, useEffect } from 'react';
import { Location } from '../SpotType.static';

const useConferenceRoomStatus = (locationId: string | undefined) => {
    const [singleLocation, setSingleLocation] = useState<Location | undefined>();
    const [backgroundColor, setBackgroundColor] = useState<'red' | 'green'>('green');
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
        const intervalId = setInterval(() => {
            const currentDate = new Date();
            const currentHour = currentDate.getHours();
            const isReserved = reservations?.some(
                (reservation) =>
                    currentHour >= new Date(reservation.start).getHours() &&
                    currentHour < new Date(reservation.end).getHours(),
            );
            const newBackgroundColor = isReserved ? 'red' : 'green';
            setBackgroundColor(newBackgroundColor);
        }, 60000);

        return () => clearInterval(intervalId);
    }, [reservations]);

    return { reservations, error, isLoading, singleLocation, backgroundColor };
};

export default useConferenceRoomStatus;
