import { useState } from 'react';
import { deleteFloorPlan, getAllByLocation } from '../../services/floorPlanService';
import { FloorPlan as FloorPlanProp } from './FloorPlan.static';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

function useFloorPlan() {
    const [floorPlan, setFloorPlan] = useState<FloorPlanProp[]>([]);
    const { locId } = useParams();
    const navigate = useNavigate();

    const {
        data: floorPlans,
        isLoading,
        error,
        refetch: refetchFloorPlans,
    } = useQuery('floorPlans', () => getAllByLocation(locId!));

    const [selectedFloorPlanIdForDelete, setSelectedFloorPlanIdForDelete] = useState<string | null>(null);

    const onDeleteClick = (floorPlanId: string) => {
        setSelectedFloorPlanIdForDelete(floorPlanId);
    };

    const onDeleteConfirm = async () => {
        if (selectedFloorPlanIdForDelete) {
            try {
                await deleteFloorPlan(selectedFloorPlanIdForDelete);
                refetchFloorPlans();
                setFloorPlan((prevFloorPlans) =>
                    prevFloorPlans.filter((plan) => plan.id !== selectedFloorPlanIdForDelete),
                );
                setSelectedFloorPlanIdForDelete(null);
            } catch (error) {
                console.error('Error deleting floor plan:', error);
            }
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return {
        floorPlans,
        isLoading,
        error,
        refetchFloorPlans,
        onDeleteClick,
        onDeleteConfirm,
        handleGoBack,
    };
}

export default useFloorPlan;
