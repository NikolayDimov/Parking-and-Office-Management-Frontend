import { FloorPlan } from '../pages/FloorPlan/FloorPlan.static';
import { endpoints } from '../static/endpoints';
import { del, get, patch, post } from './fetchService';

const getFloorPlans = async (): Promise<FloorPlan[]> => {
    const response = await get(endpoints.getFloorPlans, {});
    return response;
};

const getFloorPlan = async (id: string): Promise<FloorPlan> => {
    const response = await get(endpoints.getFloorPlans + '/' + id, {});
    return response;
};

const getAllBySpotTypeAndLocation = async (spotTypeId: string, locationId: string): Promise<FloorPlan[]> => {
    return await get(`${endpoints.getBySpotTypeAndLocation}spotTypeId=${spotTypeId}&locationId=${locationId}`, {
        spotTypeId,
        locationId,
    });
};

const getAllByLocation = async (locationId: string): Promise<FloorPlan[]> => {
    return await get(`${endpoints.getFLoorPlansByLocation}locationId=${locationId}`, {
        locationId,
    });
};

const addFloorPlan = async (floorPlanData: FloorPlan): Promise<FloorPlan> => {
    const response = await post(endpoints.createFloorPlan, floorPlanData);
    return response;
};

const updateFloorPlan = async (updatedData: FloorPlan): Promise<FloorPlan> => {
    const response = await patch(endpoints.getFloorPlans + '/' + updatedData.id, updatedData);
    return response;
};

const deleteFloorPlan = async (id: string): Promise<void> => {
    const response = await del(endpoints.getFloorPlans + '/' + id, {});
    return response;
};

export {
    getAllBySpotTypeAndLocation,
    getAllByLocation,
    getFloorPlan,
    getFloorPlans,
    addFloorPlan,
    updateFloorPlan,
    deleteFloorPlan,
};
