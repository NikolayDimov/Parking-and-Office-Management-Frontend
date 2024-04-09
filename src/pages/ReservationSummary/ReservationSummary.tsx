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
import { useTranslation } from 'react-i18next';

const ReservationSummary = () => {
    const { t } = useTranslation();

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
        return <div>{t('reservationSummary.error')}</div>;
    }

    return (
        <ReservationSummaryContainer>
            <PageTitle>{t('reservationSummary.title')}</PageTitle>
            {reservations.length === 0 && !isLoading ? (
                <ReservationSummaryNoItems>{t('reservationSummary.noReservations')}</ReservationSummaryNoItems>
            ) : (
                <>
                    <ReservationSummaryList>
                        {reservations.map((reservation: Reservation) => (
                            <ReservationSummaryListItem
                                key={`${reservation.spotId}_${reservation.start}_${reservation.end}`}
                            >
                                <div>
                                    {t('reservationSummary.spotName')} {spotNames[reservation.spotId]}
                                </div>
                                <div>
                                    {t('reservationSummary.start')} {new Date(reservation.start).toDateString()}
                                </div>
                                <div>
                                    {t('reservationSummary.end')} {new Date(reservation.end).toDateString()}
                                </div>
                                <div>
                                    {t('reservationSummary.comment')} {reservation.comment}
                                </div>

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
                            {t('reservationSummary.addNewReservationBtn')}
                        </AddNewReservationButton>
                        <ReservationSummaryButton onClick={handleConfirm}>
                            {' '}
                            {t('reservationSummary.confirmBtn')}
                        </ReservationSummaryButton>
                    </SummaryButtonContainer>
                </>
            )}
        </ReservationSummaryContainer>
    );
};

export default ReservationSummary;
