import { useQuery } from 'react-query';
import { createMultipleSpots, getSpotsByFloorPlanId } from '../../services/spotService';
import { SpotMarker } from './AddSpotForm/AddSpotForm.static';
import { getFloorPlan } from '../../services/floorPlanService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSpotsContext } from '../../context/SpotsContext';
import { toast } from 'react-toastify';

function useCreateSpots() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { setSpots, setNewSpots, existingSpots, newSpots, setMarkerData, setExistingSpots } = useSpotsContext();
    const {
        data: floorPlan,
        error: floorPlanError,
        isLoading: floorPlanLoading,
    } = useQuery('floorPlan', () => getFloorPlan(id!));
    const {
        data: spotsByFloorPlan,
        error: spotsError,
        isLoading: spotsLoading,
        refetch: refetchSpots,
    } = useQuery('spotsByFloorPlan', () => getSpotsByFloorPlanId(id!), { initialData: [], enabled: false });

    useEffect(() => {
        refetchSpots();

        if (existingSpots.length === 0 && spotsByFloorPlan) {
            for (const spot of spotsByFloorPlan) {
                if (spot.floorPlanId !== id) {
                    refetchSpots();
                    return;
                }
            }
            setSpots(spotsByFloorPlan);
        }
        if (existingSpots.length > 0 && newSpots.length > 0) {
            setSpots(existingSpots);
        }
    }, [existingSpots, id, newSpots, refetchSpots, setSpots, spotsByFloorPlan]);

    const handleGoBack = () => {
        setMarkerData({ marker: undefined, floorPlan: {} });
        navigate(-1);
    };

    const handleClear = () => {
        setSpots([]);
        setNewSpots([]);
        refetchSpots();
        if (spotsByFloorPlan) {
            setSpots(spotsByFloorPlan);
        }
    };

    const createSpots = async () => {
        try {
            const markers: SpotMarker[] | undefined = newSpots;
            if (markers) {
                const markersJson = { markers };
                const addedSpots = await createMultipleSpots(markersJson);
                if (addedSpots) {
                    toast.success('All spots were successfully created!');
                    setMarkerData({ marker: undefined, floorPlan: {} });
                    setNewSpots([]);
                    setExistingSpots([]);
                    navigate(-1);
                    return addedSpots;
                } else {
                    throw new Error ("Error in spot creation!")
                }
            }
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
            toast.error(errorMessage);
        }
    };

    return {
        handleClear,
        createSpots,
        floorPlan,
        floorPlanError,
        floorPlanLoading,
        spotsError,
        spotsLoading,
        handleGoBack,
    };
}

export { useCreateSpots };
