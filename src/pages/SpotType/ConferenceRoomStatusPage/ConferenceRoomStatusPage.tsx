import { useParams } from 'react-router-dom';
import useConferenceRoomStatus from './ConferenceRoomStatusPage.logic';

import DigitalClock from './DigitalClock/DigitalClock';
import {
    CenteredContent,
    ClockContainer,
    Container,
    ContainerNoReservations,
    NoReservations,
    ReservationsTableStyle,
    Title,
} from './ConferenceRoomStatusPage.style';

import { useTranslation } from 'react-i18next';

const ConferenceRoomStatusPage = () => {
    const { t } = useTranslation();
    const { locationId } = useParams<{ locationId: string }>();
    const { reservations, error, isLoading, singleLocation, backgroundColor } = useConferenceRoomStatus(locationId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const formatAndAdjustTime = (date: Date) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}`;
    };

    return (
        <Container $backgroundColor={backgroundColor}>
            <Title>
                {t('conference-room.title')} {singleLocation?.name}
            </Title>

            <CenteredContent>
                <ClockContainer>
                    <p>{t('conference-room.timeNow')}:</p>
                    <DigitalClock />
                </ClockContainer>

                {reservations && reservations.length > 0 ? (
                    <ReservationsTableStyle>
                        <caption>{t('conference-room.nextReservations')}</caption>
                        <thead>
                            <tr>
                                <th></th>
                                <th>{t('conference-room.startTime')}</th>
                                <th>{t('conference-room.endTime')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservations.map((reservation, index) => (
                                <tr key={reservation.id}>
                                    <td>{index + 1}</td>
                                    <td>{formatAndAdjustTime(new Date(reservation.start))}</td>
                                    <td>{formatAndAdjustTime(new Date(reservation.end))}</td>
                                </tr>
                            ))}
                        </tbody>
                    </ReservationsTableStyle>
                ) : (
                    <ContainerNoReservations>
                        <NoReservations>{t('conference-room.noReservations')}</NoReservations>
                    </ContainerNoReservations>
                )}
            </CenteredContent>
        </Container>
    );
};

export default ConferenceRoomStatusPage;
