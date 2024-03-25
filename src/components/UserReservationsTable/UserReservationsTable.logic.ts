import { useMutation } from 'react-query';
import { deleteReservation } from '../../services/reservationService';
import { useEffect, useState } from 'react';
import { getSpotById } from '../../services/spotService';
import { getSpotType } from '../../services/spotTypeService';
import { Reservation } from '../../static/types';
import { getFloorPlan } from '../../services/floorPlanService';
import { getLocation } from '../../services/locationService';

type FormattedReservation = {
    id: string;
    comment: string;
    spotName: string;
    spotDescription: string;
    spotTypeName: string;
    start: Date;
    end: Date;
    spotLocation: string;
};

const useUserReservationsTableLogic = (
    reservations: Reservation[] | undefined,
    areLoading: boolean,
    refetch: () => void,
) => {
    const deleteReservationMutation = useMutation(deleteReservation, {
        onSuccess: () => {
            refetch();
        },
    });

    const [formattedReservations, setFormattedReservations] = useState<FormattedReservation[]>([]);
    const [selectedReservationIdForDelete, setSelectedReservationIdForDelete] = useState<string | null>(null);

    const onDeleteClick = (reservationId: string) => {
        setSelectedReservationIdForDelete(reservationId);
    };

    const onDeleteConfirm = async () => {
        if (selectedReservationIdForDelete) {
            try {
                await deleteReservationMutation.mutate(selectedReservationIdForDelete);
            } catch (error) {
                console.error('Error deleting reservation:', error);
            } finally {
                setSelectedReservationIdForDelete(null);
            }
        }
    };

    useEffect(() => {
        if (!reservations) return;

        const fetchSpotData = async () => {
            const potentialFormattedData = await Promise.all(
                reservations.map(async (reservation: Reservation) => {
                    const spotId = reservation.spotId;
                    try {
                        const spot = await getSpotById(spotId);
                        const spotType = await getSpotType(spot.spotTypeId);
                        const floorPlan = await getFloorPlan(spot.floorPlanId);
                        let locationName = '';

                        if (floorPlan.locationId) {
                            const location = await getLocation(floorPlan.locationId);
                            locationName = location.name;
                        }

                        return {
                            id: reservation.id,
                            comment: reservation.comment,
                            spotName: spot.name,
                            spotDescription: spot.description,
                            spotTypeName: spotType.name,
                            start: reservation.start,
                            end: reservation.end,
                            spotLocation: locationName,
                        };
                    } catch (error) {
                        console.error('Error fetching spot or spot type:', error);
                        return null;
                    }
                }),
            );

            // setFormattedReservations(formattedData);

            // Filter out null values before setting the state
            const formattedData = potentialFormattedData.filter((item): item is FormattedReservation => item !== null);
            setFormattedReservations(formattedData);
        };

        fetchSpotData();
    }, [reservations]);

    return {
        formattedReservations,
        deleteReservation: deleteReservationMutation.mutate,
        areLoading,
        onDeleteConfirm,
        onDeleteClick,
    };
};

export default useUserReservationsTableLogic;
