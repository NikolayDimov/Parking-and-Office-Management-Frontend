import Loader from '../../components/Loader/Loader';
import SpotTypeCards from './SpotTypeCards/SpotTypeCards';
import useChoseLocation from './SpotType.logic';
import useSpotTypeCard from './SpotTypeCards/SpotTypeCards.logic';
import { ChooseLocationContainer } from './SpotType.style';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';
import { useFutureReservationsByUserId } from '../User/UserProfilePage/UserProfilePage.logic';

const SpotType = () => {
    const { singleLocation, isLoading: loadingLocation, error: errorLocation, userId } = useChoseLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotTypeCard();
    const { futureReservations, areFutureReservationsLoading, futureReservationsRefetch } =
        useFutureReservationsByUserId(userId);

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
            <SpotTypeCards singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
            <UserReservationsTable
                reservations={futureReservations}
                isLoading={areFutureReservationsLoading}
                refetch={futureReservationsRefetch}
                reservationType="Future"
            />
        </ChooseLocationContainer>
    );
};

export default SpotType;
