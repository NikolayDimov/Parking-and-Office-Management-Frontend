import { Marker } from 'react-image-marker';
import * as Yup from 'yup';

interface SpotMarker extends Marker {
    id?: string;
    name?: string;
    description?: string;
    isPermanent?: boolean;
    spotTypeId?: string;
    floorPlanId?: string;
    modifiedBy?: string;
    error?: string;
}

interface MultipleSpots {
    markers: Array<SpotMarker>;
}

const AddSpotShema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    spotTypeId: Yup.string().required('Please select a type'),
});

export { AddSpotShema };
export type { SpotMarker, MultipleSpots };
