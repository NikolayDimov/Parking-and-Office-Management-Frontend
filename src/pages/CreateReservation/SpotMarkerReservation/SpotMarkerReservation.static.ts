import { SpotMarker } from '../../CreateSpots/AddSpotForm/AddSpotForm.static';
import { User } from '../../User/UsersPage/UsersPage.static';
import { DateRangeOutput } from '../Calendar/Calendar.static';

interface CustomSpotMarker extends SpotMarker {
    period?: DateRangeOutput;
    spotType?: string;
    user?: User | null;
}
interface CombinedReservationSpotMarker {
    id: string;
    name: string;
    description: string;
    isPermanent: string;
    top: number;
    left: number;
    spotTypeId: string;
    floorPlanId: string;
    period?: DateRangeOutput;
    createdAt: Date;
    updatedAt: Date;
    modifiedBy: string;
    spotType: string;
    spot: Spot;
    start: Date;
    end: Date;
}

interface Spot {
    id: string;
    name: string;
    description: string;
    isPermanent: string;
    top: number;
    left: number;
    spotTypeId: string;
    floorPlanId: string;
    createdAt: Date;
    updatedAt: Date;
    modifiedBy: string;
}

interface GetSpot {
    floorPlanId: string;
    spotTypeId: string;
}

export type { CustomSpotMarker, CombinedReservationSpotMarker, Spot, GetSpot };
