import Loader from '../../components/Loader/Loader';
import SpotTypeCards from './SpotTypeCards/SpotTypeCards';
import useSpotTypeCard from './SpotTypeCards/SpotTypeCards.logic';
import { ChooseLocationContainer } from './SpotType.style';
import { useChoseLocation, useFutureReservationsByUserIdAndLocation, useLocationBackBtn } from './SpotType.logic';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import { useTranslation } from 'react-i18next';

const SpotType = () => {
    const { t } = useTranslation();

    const { singleLocation, isLoading: loadingLocation, error: errorLocation, userId } = useChoseLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotTypeCard();
    const { areFutureReservationsLoading } = useFutureReservationsByUserIdAndLocation(userId);

    const { handleGoBack } = useLocationBackBtn();

    const loading = loadingLocation || loadingSpotType || areFutureReservationsLoading;

    const hasError = errorLocation || errorSpotType;

    if (loading) {
        return <Loader />;
    }

    if (hasError) {
        return <div>{t('locations.error')}</div>;
    }
    return (
        <ChooseLocationContainer>
            <BackButton onClick={handleGoBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 52 52">
                    <path
                        d="M48.6,23H15.4c-0.9,0-1.3-1.1-0.7-1.7l9.6-9.6c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0
	L2.5,25c-0.6,0.6-0.6,1.5,0,2.1L20,44.6c0.6,0.6,1.5,0.6,2.1,0l2.1-2.1c0.6-0.6,0.6-1.5,0-2.1l-9.6-9.6C14,30.1,14.4,29,15.3,29
	h33.2c0.8,0,1.5-0.6,1.5-1.4v-3C50,23.8,49.4,23,48.6,23z"
                    />
                </svg>
            </BackButton>
            <SpotTypeCards singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
        </ChooseLocationContainer>
    );
};

export default SpotType;
