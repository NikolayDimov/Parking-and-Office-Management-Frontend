interface GetFreeSpot {
    floorPlanId: string;
    spotTypeId: string;
    start: string;
    end: string;
}
interface GetSpotOccupancy {
    locationId: string | undefined;
    spotTypeId: string;
    start: string;
    end: string;
}

export type { GetFreeSpot, GetSpotOccupancy };
