import Loader from '../../components/Loader/Loader';
import SpotTypeCards from './SpotTypeCards/SpotTypeCards';
import useSpotTypeCard from './SpotTypeCards/SpotTypeCards.logic';
import { ChooseLocationContainer } from './SpotType.style';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';
import { useChoseLocation, useFutureReservationsByUserIdAndLocation, useLocationBackBtn } from './SpotType.logic';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import { FaArrowLeft } from 'react-icons/fa';

const SpotType = () => {
    const { singleLocation, isLoading: loadingLocation, error: errorLocation, userId } = useChoseLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotTypeCard();
    const { futureReservations, areFutureReservationsLoading, futureReservationsRefetch } =
        useFutureReservationsByUserIdAndLocation(userId);

    const { handleGoBack } = useLocationBackBtn();

    const loading = loadingLocation || loadingSpotType || areFutureReservationsLoading;

    const hasError = errorLocation || errorSpotType;

    if (loading) {
        return <Loader />;
    }

    if (hasError) {
        return <div>Error loading data</div>;
    }
    return (
        <ChooseLocationContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <SpotTypeCards singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
            {/* <UserReservationsTable
                reservations={futureReservations}
                isLoading={areFutureReservationsLoading}
                refetch={futureReservationsRefetch}
                reservationType="Future"
            /> */}
        </ChooseLocationContainer>
    );
};

export default SpotType;
