import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getSpotTypeByLocationId } from '../../../services/spotTypeService';

const useSpotTypeCard = () => {
    const { id } = useParams();

    const {
        data: spotTypeByLocationId,
        isLoading,
        error,
    } = useQuery(['spot', id ?? ''], () => {
        return getSpotTypeByLocationId(id ?? '');
    });
    return { spotTypeByLocationId, isLoading, error };
};

export default useSpotTypeCard;
