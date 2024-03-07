import * as Yup from 'yup';

const UpdateSpotSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
});

interface SpotUpdate {
    id?: string;
    name?: string;
    description?: string;
    isPermanent?: boolean;
    modifiedBy?: string;
    error?: string;
}
export type { SpotUpdate };
export { UpdateSpotSchema };
