import DetailBullet from './DetailBullet';
import { UserDetails } from '../../User/UserProfilePage/UserProfilePage.static';
import redCalendar from '../../../assets/calendarPast.png';
import blueCalendar from '../../../assets/calendarNow.png';
import greenCalendar from '../../../assets/calendarFuture.png';
import { useTranslation } from 'react-i18next';

const UserProfileInfo = ({ pastReservations, currentReservations, futureReservations }: UserDetails) => {
    const { t } = useTranslation();

    return (
        <div>
            <DetailBullet
                icon={redCalendar}
                value={`${t('reservations.bullets.pastReservations')}: ${pastReservations}`}
            />
            <DetailBullet
                icon={blueCalendar}
                value={`${t('reservations.bullets.currentReservations')}: ${currentReservations}`}
            />
            <DetailBullet
                icon={greenCalendar}
                value={`${t('reservations.bullets.futureReservations')}: ${futureReservations}`}
            />
        </div>
    );
};

export default UserProfileInfo;
