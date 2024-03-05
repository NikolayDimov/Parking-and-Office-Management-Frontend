import { useQuery } from 'react-query';
import { getSpotById } from '../../services/spotService';
import { Reservation } from '../../static/types';
import { useReservationContext } from '../../context/ReservationContext';
import { useEffect, useState } from 'react';

const useReservationSummary = () => {
    const reservationsFromSession = sessionStorage.getItem('reservation');
    const transformedReservations = JSON.parse(reservationsFromSession || '[]');
    const { reservations } = useReservationContext();

    const [spotNames, setSpotNames] = useState<{ [key: string]: string }>({});

    const getSpotName = async (spotId: string) => {
        const spot = await getSpotById(spotId);
        return spot.name;
    };

    useEffect(() => {
        const fetchSpotNames = async () => {
            const spotNamesObj: { [key: string]: string } = {};
            for (const reservation of reservations) {
                const spotName = await getSpotName(reservation.spotId);
                spotNamesObj[reservation.spotId] = spotName;
            }
            setSpotNames(spotNamesObj);
        };

        fetchSpotNames();
    }, [reservations]);

    const {
        data: updatedReservations,
        isLoading,
        error,
    } = useQuery('spot', async () => {
        if (transformedReservations.length === 0) {
            return [];
        }

        const spotNamesPromises = transformedReservations.map(async (reservation: Reservation) => {
            const spotName = await getSpotName(reservation.spotId);
            return spotName;
        });

        const spotNames = await Promise.all(spotNamesPromises);

        const updatedReservations = transformedReservations.map((reservation: Reservation, index: number) => {
            return { ...reservation, spotName: spotNames[index] };
        });

        return updatedReservations;
    });

    return { reservations: updatedReservations, isLoading, error, spotNames };
};

export default useReservationSummary;
