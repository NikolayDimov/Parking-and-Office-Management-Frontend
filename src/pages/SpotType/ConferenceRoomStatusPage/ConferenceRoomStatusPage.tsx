import { useParams } from 'react-router-dom';
import useConferenceRoomStatus from './ConferenceRoomStatusPage.logic';
import { List, ListItem, PageContainer } from './ConferenceRoomStatusPage.style';

import DigitalClock from './DigitalClock/DigitalClock';

const ConferenceRoomStatusPage = () => {
    const { locationId } = useParams<{ locationId: string }>();
    const { reservations, error, isLoading, singleLocation } = useConferenceRoomStatus(locationId);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Get the current hour
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();

    const formatAndAdjustTime = (date: Date) => {
        date.setHours(date.getHours());
        return date
            .toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            })
            .replace(',', '');
    };

    const backgroundColor = reservations?.some(
        (reservation) =>
            currentHour >= new Date(reservation.start).getHours() && currentHour < new Date(reservation.end).getHours(),
    )
        ? 'red'
        : 'green';

    return (
        <PageContainer $backgroundColor={backgroundColor}>
            <h1>Reservations for Conference Room at Location {singleLocation?.name}</h1>

            <p>Time now:</p>
            <DigitalClock />

            <List>
                {reservations &&
                    reservations.map((reservation) => (
                        <ListItem key={reservation.id} $backgroundColor={backgroundColor}>
                            {formatAndAdjustTime(new Date(reservation.start))} -{' '}
                            {formatAndAdjustTime(new Date(reservation.end))}
                        </ListItem>
                    ))}
            </List>
        </PageContainer>
    );
};

export default ConferenceRoomStatusPage;
