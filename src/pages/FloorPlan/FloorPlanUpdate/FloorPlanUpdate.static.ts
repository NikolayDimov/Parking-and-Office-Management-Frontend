import * as Yup from 'yup';
const UpdateFloorPlanShema = Yup.object().shape({
    name: Yup.string().min(3, 'Name must be at least 3 characters!').required('Name is required'),
});

export { UpdateFloorPlanShema };
