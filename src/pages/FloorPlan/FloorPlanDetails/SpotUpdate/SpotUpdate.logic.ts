import useToken from '../../../../hooks/Token/Token.hook';
import { useFormik } from 'formik';
import { SpotUpdate, UpdateSpotSchema } from './SpotUpdate.static';
import { merge } from 'lodash';
import { delSpot, updateSpot } from '../../../../services/spotService';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getReservationsBySpot } from '../../../../services/reservationService';
import { useState } from 'react';
import { useFloorPlanDetails } from '../FloorPlanDetails.logic';
import { getSpotType } from '../../../../services/spotTypeService';
import { toast } from 'react-toastify';

function useUpdateSpot() {
    const location = useLocation();
    const spotProps = location.state.spotProps;
    const navigate = useNavigate();
    const user = useToken();
    const { refetchSpots, isLoading } = useFloorPlanDetails();
    const { data: spotType } = useQuery('spotType', () => getSpotType(spotProps.spotTypeId));

    const formik = useFormik({
        initialValues: {
            id: spotProps.id,
            name: spotProps.name,
            description: spotProps.description,
            isPermanent: spotProps.isPermanent,
            modifiedBy: user?.id,
            error: spotProps.error,
        },
        validationSchema: UpdateSpotSchema,

        onSubmit: async (values: SpotUpdate, { setFieldError, setSubmitting, resetForm }) => {
            try {
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

                const updated: SpotUpdate = merge({}, ...vals);
                const updatedSpot = await updateSpot(updated);

                if (updatedSpot.error) {
                    throw new Error(updatedSpot.error);
                } else {
                    toast.success('Spot is successfully updated!');
                    resetForm();
                    refetchSpots();
                    navigate(-1);
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, spotProps, navigate, isLoading, spotType };
}

function useDeleteSpot() {
    const location = useLocation();
    const navigate = useNavigate();
    const spotProps = location.state.spotProps;
    const [errMessage, setErrMessage] = useState('');
    const { refetchSpots } = useFloorPlanDetails();
    const { data: reservationsBySpot } = useQuery('reservationsBySpot', () => getReservationsBySpot(spotProps.id));

    const onDelete = async () => {
        try {
            if (reservationsBySpot?.length !== 0 || spotProps.isPermanent) {
                if (spotProps.isPermanent) {
                    throw new Error('Spot cannot be deleted because it is permanently occupied!');
                } else {
                    throw new Error('Spot cannot be deleted because it has active reservations!');
                }
            }
            const id = spotProps.id;

            const deleted = await delSpot(id);
            if (deleted) {
                toast.success('Spot is successfully deleted!');
                refetchSpots();
                navigate(-1);
            }
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
            setErrMessage(errorMessage);
        }
    };
    return { onDelete, errMessage };
}

export { useUpdateSpot, useDeleteSpot };
