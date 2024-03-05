import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getLocation } from '../../services/locationService';
import useToken from '../../hooks/Token/Token.hook';

const useChoseLocation = () => {
    const { id } = useParams();
    const decodedToken = useToken();

    const { id: userId } = decodedToken || {};

    const {
        data: singleLocation,
        isLoading,
        error,
    } = useQuery(['location', id], () => {
        if (id) {
            return getLocation(id);
        }
    });

    return { singleLocation, isLoading, error, userId };
};

export default useChoseLocation;
