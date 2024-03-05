import { RiCloseFill } from 'react-icons/ri';

import useReservationSummary from './ReservationSummary.logic';
import { Reservation } from '../../static/types';
import Loader from '../../components/Loader/Loader';
import { useReservationContext } from '../../context/ReservationContext';
import {
    AddNewReservationButton,
    ReservationRemveButton,
    ReservationSummaryButton,
    ReservationSummaryContainer,
    ReservationSummaryList,
    ReservationSummaryListItem,
    ReservationSummaryNoItems,
    SummaryButtonContainer,
} from './ReservationSummary.style';
import { PageTitle } from '../../components/CommonStyledElements';
import { useNavigate } from 'react-router-dom';

const ReservationSummary = () => {
    const navigation = useNavigate();
    const { reservations, sendReservationsToBackend, removeReservation } = useReservationContext();
    const { isLoading, error, spotNames } = useReservationSummary();

    const handleConfirm = () => {
        sendReservationsToBackend(reservations);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        <ReservationSummaryContainer>
            <PageTitle>Reservation Summary</PageTitle>
            {reservations.length === 0 && !isLoading ? (
                <ReservationSummaryNoItems>No reservations</ReservationSummaryNoItems>
            ) : (
                <>
                    <ReservationSummaryList>
                        {reservations.map((reservation: Reservation) => (
                            <ReservationSummaryListItem
                                key={`${reservation.spotId}_${reservation.start}_${reservation.end}`}
                            >
                                <div>Spot Name: {spotNames[reservation.spotId]}</div>
                                <div>Start: {new Date(reservation.start).toDateString()}</div>
                                <div>End: {new Date(reservation.end).toDateString()}</div>
                                <div>Comment: {reservation.comment}</div>

                                <ReservationRemveButton
                                    onClick={() =>
                                        removeReservation(reservation.spotId, reservation.start, reservation.end)
                                    }
                                >
                                    <RiCloseFill />
                                </ReservationRemveButton>
                            </ReservationSummaryListItem>
                        ))}
                    </ReservationSummaryList>
                    <SummaryButtonContainer>
                        <AddNewReservationButton onClick={() => navigation('/')}>
                            Add new reservation
                        </AddNewReservationButton>
                        <ReservationSummaryButton onClick={handleConfirm}>Confirm</ReservationSummaryButton>
                    </SummaryButtonContainer>
                </>
            )}
        </ReservationSummaryContainer>
    );
};

export default ReservationSummary;
