import { useEffect, useState } from 'react';
import { deleteFloorPlan, getFloorPlans, updateFloorPlan } from '../../services/floorPlanService';
import { FloorPlan as FloorPlanProp } from './FloorPlan.static';
import { useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import useToken from '../../hooks/Token/Token.hook';

function useFloorPlan() {
    const { isLoading, refetch } = useQuery('floorPlan', () => getFloorPlans());
    const decodedToken = useToken();

    const [floorPlan, setFloorPlan] = useState<FloorPlanProp[]>([]);
    const location = useLocation();
    const { state } = location;
    const { locationId } = state || {};
    const navigate = useNavigate();

    const [selectedFloorPlanIdForDelete, setSelectedFloorPlanIdForDelete] = useState<string | null>(null);
    const [selectedFloorPlanIdForEdit, setSelectedFloorPlanIdForEdit] = useState<string | null>(null);
    const [currentFloorPlanName, setCurrentFloorPlanName] = useState<string>('');
    const [originalFloorPlanName, setOriginalFloorPlanName] = useState<string>('');

    useEffect(() => {
        const fetchFloorPlansData = async () => {
            try {
                const fetchedFloorPlans = await getFloorPlans();

                if (fetchedFloorPlans && fetchedFloorPlans.length > 0) {
                    const matchingFloorPlan: FloorPlanProp[] = fetchedFloorPlans.filter(
                        (plan) => plan.locationId === locationId,
                    );

                    if (matchingFloorPlan.length > 0) {
                        setFloorPlan(matchingFloorPlan);
                    } else {
                        setFloorPlan([]);
                    }
                } else {
                    setFloorPlan([]);
                }
            } catch (error) {
                console.error('Error fetching floor plans data:', error);
            }
        };

        fetchFloorPlansData();
    }, [locationId, navigate]);

    const onDeleteFloorPlan = async (floorPlanId: string) => {
        try {
            await deleteFloorPlan(floorPlanId);
            refetch();
            setFloorPlan((prevFloorPlans) => prevFloorPlans.filter((plan) => plan.id !== floorPlanId));
        } catch (error) {
            console.error('Error deleting floor plan:', error);
        }
    };

    const onDeleteClick = (floorPlanId: string) => {
        setSelectedFloorPlanIdForDelete(floorPlanId);
    };

    const onDeleteConfirm = async () => {
        if (selectedFloorPlanIdForDelete) {
            await onDeleteFloorPlan(selectedFloorPlanIdForDelete);
            setSelectedFloorPlanIdForDelete(null);
        }
    };

    const onEditFloorPlan = async (floorPlanId: string, newFloorPlanData: FloorPlanProp) => {
        try {
            if (newFloorPlanData.name !== originalFloorPlanName) {
                await updateFloorPlan(floorPlanId, newFloorPlanData);
                setFloorPlan((prevFloorPlans) =>
                    prevFloorPlans.map((plan) => {
                        if (plan.id === floorPlanId) {
                            return { ...plan, name: newFloorPlanData.name };
                        }
                        return plan;
                    }),
                );
            } else {
                const updatedFloorPlanData = { ...newFloorPlanData };
                if ('name' in updatedFloorPlanData) {
                    delete updatedFloorPlanData.name;
                }
                await updateFloorPlan(floorPlanId, updatedFloorPlanData);
            }

            refetch();
        } catch (error) {
            console.error('Error editing location:', error);
        }
    };

    const onEditClick = (floorPlanId: string, floorPlanName: string) => {
        setSelectedFloorPlanIdForEdit(floorPlanId);
        setCurrentFloorPlanName(floorPlanName);
        setOriginalFloorPlanName(floorPlanName);
    };

    const onEditConfirm = async () => {
        try {
            if (selectedFloorPlanIdForEdit) {
                const newFloorPlanData = {
                    name: currentFloorPlanName,
                    modifiedBy: decodedToken?.id,
                };

                await onEditFloorPlan(selectedFloorPlanIdForEdit, newFloorPlanData);
            }

            setSelectedFloorPlanIdForEdit(null);
            setCurrentFloorPlanName('');
        } catch (error) {
            console.error('Error handling edit confirmation:', error);
        }
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    return {
        floorPlan,
        isLoading,
        onDeleteClick,
        onDeleteConfirm,
        onEditClick,
        onEditConfirm,
        currentFloorPlanName,
        setCurrentFloorPlanName,
        originalFloorPlanName,
        setOriginalFloorPlanName,
        handleGoBack,
    };
}

export default useFloorPlan;
