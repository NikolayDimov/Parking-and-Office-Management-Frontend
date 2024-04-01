import * as Yup from 'yup';

const SelectSpotSchema = Yup.object().shape({
    comment: Yup.string(),
});

interface ReservationData {
    spotId: string;
    start: string;
    end: string;
    comment: string;
    userId: string;
    modifiedBy: string;
    error?: string;
}

interface MultipleReservations {
    reservations: ReservationData[];
}

export { SelectSpotSchema };
export type { ReservationData, MultipleReservations };
