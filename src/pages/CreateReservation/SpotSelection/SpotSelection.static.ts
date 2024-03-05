import * as Yup from 'yup';

const SelectSpotShema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
});

interface ReservationData {
    spotId: string;
    start: string;
    end: string;
    comment: string;
    userId: string;
    modifiedBy: string;
    error?: string
}

interface MultipleReservations {
    reservations: ReservationData[];
}

export { SelectSpotShema };
export type { ReservationData, MultipleReservations };
