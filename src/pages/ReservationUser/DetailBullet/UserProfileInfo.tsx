import DetailBullet from './DetailBullet';
import { UserDetails } from '../../User/UserProfilePage/UserProfilePage.static';
import redCalendar from '../../../assets/calendarPast.png';
import blueCalendar from '../../../assets/calendarNow.png';
import greenCalendar from '../../../assets/calendarFuture.png';

const UserProfileInfo = ({ pastReservations, currentReservations, futureReservations }: UserDetails) => {
    return (
        <div>
            <DetailBullet icon={redCalendar} value={`Past reservations: ${pastReservations}`} />
            <DetailBullet icon={blueCalendar} value={`Current reservations: ${currentReservations}`} />
            <DetailBullet icon={greenCalendar} value={`Future reservations: ${futureReservations}`} />
        </div>
    );
};

export default UserProfileInfo;
