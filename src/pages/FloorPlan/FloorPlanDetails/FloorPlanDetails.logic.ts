import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FloorPlan } from '../FloorPlan.static';
import { useQuery } from 'react-query';
import { getSpotsByFloorPlanId } from '../../../services/spotService';
import { getFloorPlan } from '../../../services/floorPlanService';

function useFloorPlanDetails() {
    const navigate = useNavigate();

    const { id } = useParams();

    const [floorPlan, setFloorPlan] = useState<FloorPlan | null>(null);
    const {
        data: spotsByFloorPlan,
        error,
        isLoading,
        refetch: refetchSpots,
    } = useQuery('spotsByFloorPlan', () => getSpotsByFloorPlanId(id!));

    useEffect(() => {
        if (id) {
            getFloorPlan(id)
                .then((data: FloorPlan) => {
                    setFloorPlan(data);
                })
                .catch((error) => console.error('Error fetching floor plan details:', error));
        }
    }, [id]);

    const handleGoBack = () => {
        navigate(-1);
    };

    return { floorPlan, spotsByFloorPlan, error, isLoading, refetchSpots, handleGoBack };
}

export { useFloorPlanDetails };
