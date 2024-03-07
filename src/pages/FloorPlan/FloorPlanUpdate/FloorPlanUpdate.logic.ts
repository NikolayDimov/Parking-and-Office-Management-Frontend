import { useLocation, useNavigate, useParams } from 'react-router-dom';
import useToken from '../../../hooks/Token/Token.hook';
import { useFormik } from 'formik';
import { FloorPlan } from '../FloorPlan.static';
import { updateFloorPlan } from '../../../services/floorPlanService';
import { merge } from 'lodash';
import { toast } from 'react-toastify';
import { UpdateFloorPlanShema } from './FloorPlanUpdate.static';
import useFloorPlan from '../FloorPlan.logic';
import { route } from '../../../static/routes';

const useUpdateFloorPlan = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useToken();
    const { locId } = useParams();
    const floorPlan = location.state.floorPlan;

    const { refetchFloorPlans } = useFloorPlan();

    const formik = useFormik({
        initialValues: {
            id: floorPlan?.id,
            name: floorPlan?.name,
            modifiedBy: user?.id,
            error: floorPlan?.error,
        },
        validationSchema: UpdateFloorPlanShema,

        onSubmit: async (values: FloorPlan, { setFieldError, setSubmitting, resetForm }) => {
            try {
                console.log('values', values);

                const vals = Object.entries(values)
                    .map((v) => {
                        for (const w of Object.entries(formik.initialValues)) {
                            if (v[0] === w[0]) {
                                return v[0] === 'id' || v[0] === 'modifiedBy'
                                    ? { [v[0]]: v[1] }
                                    : v[1] !== w[1]
                                        ? { [v[0]]: v[1] }
                                        : undefined;
                            }
                        }
                    })
                    .filter((v) => v !== undefined);

                if (vals.length === 2) {
                    navigate(-1);
                    return;
                }

                const updated: FloorPlan = merge({}, ...vals);
                console.log('updated', updated);

                const updatedSpot = await updateFloorPlan(updated);

                if (updatedSpot.error) {
                    throw new Error(updatedSpot.error);
                } else {
                    toast.success('Floor plan is successfully updated!');
                    console.log('log');
                    resetForm();
                    refetchFloorPlans();
                    navigate(route.floorPlan.replace(':locId', `${locId}`));
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
};

export { useUpdateFloorPlan };
