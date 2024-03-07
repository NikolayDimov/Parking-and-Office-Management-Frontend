import * as Yup from 'yup';

interface FloorPlan {
    id?: string;
    name?: string;
    imgUrl?: string;
    locationId?: string;
    modifiedBy?: string;
    error?: string;
}

const FloorPlanCreateSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name is too short!').max(100, 'Name is too long!').required('Name is required'),
    imgUrl: Yup.string().required('Image is required'),
});

interface EditFormErrors {
    name: string;
}

export type { FloorPlan, EditFormErrors };
export { FloorPlanCreateSchema };
