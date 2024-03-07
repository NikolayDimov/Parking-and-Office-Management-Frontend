import { useFormik } from 'formik';
import { AddSpotSchema, SpotMarker } from './AddSpotForm.static';
import { useEffect } from 'react';
import { Marker } from 'react-image-marker';
import { checkSpot } from '../../../services/spotService';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSpotTypes } from '../../../services/spotTypeService';
import useToken from '../../../hooks/Token/Token.hook';
import { useSpotsContext } from '../../../context/SpotsContext';
import { toast } from 'react-toastify';

function useAddSpot() {
    const navigate = useNavigate();
    const user = useToken();

    const { markerData, saveNewSpots } = useSpotsContext();

    const formik = useFormik({
        initialValues: {
            top: 0,
            left: 0,
            name: '',
            description: '',
            isPermanent: false,
            spotTypeId: '',
            floorPlanId: '',
            error: '',
        },
        validationSchema: AddSpotSchema,

        onSubmit: async (values: SpotMarker, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const marker: Marker | undefined = markerData?.marker;

                if (marker) {
                    const newMarker: SpotMarker = {
                        top: marker.top,
                        left: marker.left,
                        name: values.name,
                        description: values.description,
                        spotTypeId: values.spotTypeId,
                        isPermanent: values.isPermanent,
                        floorPlanId: markerData?.floorPlan.id,
                        modifiedBy: user?.id,
                    };

                    const spot = await checkSpot(newMarker);

                    if (spot.error) {
                        throw new Error(spot.error);
                    } else {
                        saveNewSpots(newMarker);
                        toast.success('New spot was added to the plan and is ready for saving!');
                        resetForm();
                        navigate(-1);
                    }
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
}

const useSpotTypes = () => {
    const { data: spotTypes, isLoading, error, refetch } = useQuery({ queryKey: ['spotTypes'], queryFn: getSpotTypes });
    useEffect(() => {}, [spotTypes]);
    return { spotTypes, isLoading, error, refetch };
};

export { useAddSpot, useSpotTypes };
