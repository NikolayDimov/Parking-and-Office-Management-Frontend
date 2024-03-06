import { useLocation, useNavigate } from 'react-router';
import useToken from '../../../hooks/Token/Token.hook';
import { useFormik } from 'formik';
import { SelectSpotShema } from './SpotSelection.static';
import { checkReservation } from '../../../services/reservationService';
import { useReservationContext } from '../../../context/ReservationContext';

import { route } from '../../../static/routes';
import { Reservation } from '../../../static/types';
import { useShowSpots } from '../CreateReservationPage.logic';

function useReservSpot() {
    const { addReservation } = useReservationContext();
    const location = useLocation();
    const spotProps = location.state.spotProps;
    const navigate = useNavigate();
    const user = useToken();

    const startPeriodDate = new Date(spotProps.period.startDate).toDateString();
    const startPeriodTime = new Date(spotProps.period.startDate).toTimeString().split('(')[0];
    const endPeriodDate = new Date(spotProps.period.endDate).toDateString();
    const endPeriodTime = new Date(spotProps.period.endDate).toTimeString().split('(')[0];

    const formik = useFormik({
        initialValues: {
            comment: '',
            error: '',
        },
        validationSchema: SelectSpotShema,

        onSubmit: async (values, { setFieldError, setSubmitting, resetForm }) => {
            try {
                if (user) {
                    const reservationData: Reservation = {
                        spotId: spotProps.id,
                        start: spotProps.period.startDate,
                        end: spotProps.period.endDate,
                        comment: values.comment,
                        userId: user?.id,
                        modifiedBy: user?.id,
                    };

                    if (spotProps.user) {
                        reservationData.userId = spotProps.user.id;
                    }

                    const selectedSpot = await checkReservation(reservationData);

                    if (selectedSpot.error) {
                        throw new Error(selectedSpot.error);
                    } else {
                        addReservation(selectedSpot);
                    }
                }
                resetForm();
                navigate(route.reservationSummary);

                console.log('user obj', user);
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return {
        formik,
        navigate,
        spotProps,
        startPeriodDate,
        startPeriodTime,
        endPeriodDate,
        endPeriodTime,
    };
}

export { useReservSpot };
