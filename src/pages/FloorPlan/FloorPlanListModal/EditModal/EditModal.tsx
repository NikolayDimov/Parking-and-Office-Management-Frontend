import React from 'react';
import Modal from '../../../../components/ModalList/Modal';
import { ErrorStyles, HeaderModal, InputModal, ItemsModal, LabelModal } from './EditModal.style';
import { useEditFloorPlanModalLogic } from './EditModal.logic';

interface EditModalProps {
    isVisible: boolean;
    hideModal: () => void;
    currentFloorPlanName: string;
    setCurrentFloorPlanName: (newFloorPlanName: string) => void;
    onConfirm: (newFloorPlanName: string, newFloorPlanImage: string) => void;
}

const EditFloorPlanModal: React.FC<EditModalProps> = ({
    isVisible,
    hideModal,
    currentFloorPlanName,
    setCurrentFloorPlanName,
    onConfirm,
}) => {
    const { formErrors, newFloorPlanName, setNewFloorPlanName, handleFloorPlanBlur, handleConfirm } =
        useEditFloorPlanModalLogic({
            currentFloorPlanName,
            onConfirm,
            hideModal,
        });

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleConfirm} showConfirmButton={true}>
            <HeaderModal>Update Location</HeaderModal>
            <ItemsModal>
                <LabelModal>Floor Plan Name</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location name"
                    value={newFloorPlanName}
                    onChange={(e) => {
                        setNewFloorPlanName(e.target.value);
                        setCurrentFloorPlanName(e.target.value);
                    }}
                    onBlur={handleFloorPlanBlur}
                />
                {formErrors.name && <ErrorStyles>{formErrors.name}</ErrorStyles>}
            </ItemsModal>
        </Modal>
    );
};

export default EditFloorPlanModal;
