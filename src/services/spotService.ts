import { GetFreeSpot, GetSpotOccupancy } from '../pages/CreateReservation/CreateReservationPage.static';
import {
    CombinedReservationSpotMarker,
    GetSpot,
    Spot,
} from '../pages/CreateReservation/SpotMarkerReservation/SpotMarkerReservation.static';

import { MultipleSpots, SpotMarker } from '../pages/CreateSpots/AddSpotForm/AddSpotForm.static';
import { SpotUpdate } from '../pages/FloorPlan/FloorPlanDetails/SpotUpdate/SpotUpdate.static';
import { endpoints } from '../static/endpoints';
import { del, get, patch, post } from './fetchService';

const getAll = async (): Promise<SpotMarker[]> => {
    return await get(`${endpoints.getSpots}`, {});
};

const getSpotById = async (id: string): Promise<Spot> => {
    const response = await get(`${endpoints.getSpots}/${id}`, {});
    return response;
};

const getSpotsByFloorPlanId = async (floorPlanId: string): Promise<SpotMarker[]> => {
    const spots = await get(`${endpoints.getSpotsByFloorPlanId}?floorPlanId=${floorPlanId}`, {});
    return spots;
};

const getAllBySpotTypeAndFloorPlan = async ({ floorPlanId, spotTypeId }: GetSpot): Promise<SpotMarker[]> => {
    const data = { floorPlanId: floorPlanId, spotTypeId: spotTypeId };

    return await get(`${endpoints.getBySpotTypeAndFloorPlan}?floorPlanId=${floorPlanId}&spotTypeId=${spotTypeId}`, {
        data,
    });
};

const getFreeSpotsBySpotTypeAndLocation = async ({
    floorPlanId,
    spotTypeId,
    start,
    end,
}: GetFreeSpot): Promise<SpotMarker[]> => {
    const data = {
        floorPlanId: floorPlanId,
        spotTypeId: spotTypeId,
        startDateTime: start,
        endDateTime: end,
    };

    return await get(
        `${endpoints.getFreeBySpotTypeAndFloorPlan}?floorPlanId=${floorPlanId}&spotTypeId=${spotTypeId}&startDateTime=${start}&endDateTime=${end}`,
        {
            data,
        },
    );
};
const getFreeSpotsCombinationBySpotTypeAndFloorPlan = async ({
    floorPlanId,
    spotTypeId,
    start,
    end,
}: GetFreeSpot): Promise<CombinedReservationSpotMarker[]> => {
    const data = {
        floorPlanId: floorPlanId,
        spotTypeId: spotTypeId,
        startDateTime: start,
        endDateTime: end,
    };

    return await get(
        `${endpoints.getFreeSpotsCombinationBySpotTypeAndFloorPlan}?floorPlanId=${floorPlanId}&spotTypeId=${spotTypeId}&startDateTime=${start}&endDateTime=${end}`,
        {
            data,
        },
    );
};
const getSpotsOccupancyBySpotTypeAndLocation = async ({
    locationId,
    spotTypeId,
    start,
    end,
}: GetSpotOccupancy): Promise<number> => {
    return await get(
        `${endpoints.getSpotsOccupancyBySpotTypeAndLocation}?locationId=${locationId}&spotTypeId=${spotTypeId}&startDateTime=${start}&endDateTime=${end}`,
        {},
    );
};

const checkSpot = async ({
    top,
    left,
    name,
    description,
    isPermanent,
    spotTypeId,
    floorPlanId,
    modifiedBy,
}: SpotMarker): Promise<SpotMarker> => {
    return await post(`${endpoints.checkSpot}`, {
        top,
        left,
        name,
        description,
        isPermanent,
        spotTypeId,
        floorPlanId,
        modifiedBy,
    });
};

const createMultipleSpots = async ({ markers }: MultipleSpots): Promise<MultipleSpots> => {
    return await post(`${endpoints.createSpot}`, { markers });
};

const updateSpot = async ({ id, name, description, isPermanent, modifiedBy }: SpotUpdate): Promise<SpotMarker> => {
    return await patch(endpoints.getSpots + '/' + id, { name, description, isPermanent, modifiedBy });
};

const delSpot = async (id: string) => {
    return await del(endpoints.getSpots + '/' + id, {});
};

export {
    getAll,
    getSpotById,
    checkSpot,
    createMultipleSpots,
    getSpotsByFloorPlanId,
    getAllBySpotTypeAndFloorPlan,
    getFreeSpotsBySpotTypeAndLocation,
    getFreeSpotsCombinationBySpotTypeAndFloorPlan,
    updateSpot,
    delSpot,
    getSpotsOccupancyBySpotTypeAndLocation,
};
