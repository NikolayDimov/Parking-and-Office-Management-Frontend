import { FaRegCalendarPlus } from 'react-icons/fa6';
import { useReservationContext } from '../../../context/ReservationContext';
import { CalendarCount, StyledCalendarIcon } from './CalendarIcon.style';

const CalendarIcon = () => {
    const { reservations } = useReservationContext();
    return (
        <StyledCalendarIcon>
            <FaRegCalendarPlus className="calendar-icon" />
            {reservations.length > 0 && <CalendarCount>{reservations.length}</CalendarCount>}
        </StyledCalendarIcon>
    );
};

export default CalendarIcon;
