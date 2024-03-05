import { useState } from 'react';
import { useEditModalError } from './EditModalErrors';

interface EditModalLogicProps {
    currentFloorPlanName: string;
    onConfirm: (newFloorPlanName: string, newFloorPlanImage: string) => void;
    hideModal: () => void;
}

export const useEditFloorPlanModalLogic = ({ currentFloorPlanName, onConfirm, hideModal }: EditModalLogicProps) => {
    const { formErrors, validateName } = useEditModalError();
    const [newFloorPlanName, setNewFloorPlanName] = useState(currentFloorPlanName);

    const handleFloorPlanBlur = () => {
        validateName(newFloorPlanName);
    };

    const handleConfirm = () => {
        const isNameValid = validateName(newFloorPlanName);

        if (isNameValid) {
            onConfirm(newFloorPlanName, '');
            hideModal();
        }
    };

    return {
        formErrors,
        newFloorPlanName,
        setNewFloorPlanName,
        handleFloorPlanBlur,
        handleConfirm,
    };
};
