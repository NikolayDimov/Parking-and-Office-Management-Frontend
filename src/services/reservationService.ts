import { MultipleReservations } from '../pages/CreateReservation/SpotSelection/SpotSelection.static';
import { Reservation } from '../static/types';

import { endpoints } from '../static/endpoints';
import { get, del, post } from './fetchService';

const getAllReservations = async (): Promise<Reservation[]> => {
    const response = await get(endpoints.reservation, {});
    return response;
};

const getPastReservationsByUserId = async (id: string | undefined): Promise<Reservation[]> => {
    const response = await get(`${endpoints.getPastReservationsByUser}${id}`, {});
    return response;
};

const getCurrentReservationsByUserId = async (id: string | undefined): Promise<Reservation[]> => {
    const response = await get(`${endpoints.getCurrentReservationsByUser}${id}`, {});
    return response;
};

const getFutureReservationsByUserId = async (id: string | undefined): Promise<Reservation[]> => {
    const response = await get(`${endpoints.getFutureReservationsByUser}${id}`, {});
    return response;
};

const getResevationsBySpot = async (spotId: string): Promise<Reservation[]> => {
    const response = await get(`${endpoints.getResevationsBySpotId}/${spotId}`, {});
    return response;
};

const checkReservation = async ({
    spotId,
    start,
    end,
    comment,
    userId,
    modifiedBy,
}: Reservation): Promise<Reservation> => {
    return await post(`${endpoints.checkReservation}`, {
        spotId,
        start,
        end,
        comment,
        userId,
        modifiedBy,
    });
};

const createReservation = async ({ reservations }: MultipleReservations): Promise<MultipleReservations> => {
    return await post(`${endpoints.createReservation}`, { reservations });
};

const deleteReservation = async (reservationId: string): Promise<void> => {
    await del(`${endpoints.reservation}/${reservationId}`, {});
};

export {
    getAllReservations,
    getPastReservationsByUserId,
    getCurrentReservationsByUserId,
    getFutureReservationsByUserId,
    getResevationsBySpot,
    checkReservation,
    createReservation,
    deleteReservation,
};
