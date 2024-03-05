import * as Yup from 'yup';

const CombinationReservationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
});

export {CombinationReservationSchema};