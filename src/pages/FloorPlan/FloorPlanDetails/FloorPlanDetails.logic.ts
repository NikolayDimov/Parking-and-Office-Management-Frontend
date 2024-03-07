import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FloorPlan } from '../FloorPlan.static';
import { useQuery } from 'react-query';
import { getSpotsByFloorPlanId } from '../../../services/spotService';
import { getFloorPlan } from '../../../services/floorPlanService';

function useFloorPlanDetails() {
    const navigate = useNavigate();

    const { fpId } = useParams();

    const [floorPlan, setFloorPlan] = useState<FloorPlan | null>(null);
    const {
        data: spotsByFloorPlan,
        error,
        isLoading,
        refetch: refetchSpots,
    } = useQuery('spotsByFloorPlan', () => getSpotsByFloorPlanId(fpId!));

    useEffect(() => {
        if (fpId) {
            getFloorPlan(fpId)
                .then((data: FloorPlan) => {
                    setFloorPlan(data);
                })
                .catch((error) => console.error('Error fetching floor plan details:', error));
        }
    }, [fpId]);

    const handleGoBack = () => {
        navigate(-1);
    };

    return { floorPlan, spotsByFloorPlan, error, isLoading, refetchSpots, handleGoBack };
}

export { useFloorPlanDetails };
