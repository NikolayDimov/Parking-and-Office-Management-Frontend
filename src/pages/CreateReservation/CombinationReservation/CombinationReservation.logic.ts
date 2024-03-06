import { useLocation, useNavigate } from 'react-router';
import { useReservationContext } from '../../../context/ReservationContext';
import useToken from '../../../hooks/Token/Token.hook';
import { useFormik } from 'formik';
import { CombinationReservationSchema } from './CombinationReservation.static';
import { checkReservation } from '../../../services/reservationService';
import { route } from '../../../static/routes';
import { Reservation } from '../../../static/types';
import { CombinedReservationSpotMarker } from '../SpotMarkerReservation/SpotMarkerReservation.static';
import { toast } from 'react-toastify';

function useReserveSpotCombination() {
    const { addReservation } = useReservationContext();
    const location = useLocation();
    const spots = location.state.spots;
    const navigate = useNavigate();
    const user = useToken();

    const formik = useFormik({
        initialValues: {
            comment: '',
            error: '',
        },
        validationSchema: CombinationReservationSchema,

        onSubmit: async (values, { setFieldError, setSubmitting, resetForm }) => {
            try {
                if (user) {
                    spots.forEach(async (spot: CombinedReservationSpotMarker) => {
                        const reservationData: Reservation = {
                            spotId: spot.id,
                            start: spot.start,
                            end: spot.end,
                            comment: values.comment,
                            userId: user?.id,
                            modifiedBy: user?.id,
                        };

                        if (spot.user) {
                            reservationData.userId = spot.user.id;
                        }
                        const selectedSpot = await checkReservation(reservationData);

                        if (selectedSpot.error) {
                            toast.error(selectedSpot.error);
                            throw new Error(selectedSpot.error);
                        } else {
                            addReservation(selectedSpot);
                        }
                    });
                }
                resetForm();
                navigate(route.reservationSummary);
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, navigate, spots };
}

export { useReserveSpotCombination };
