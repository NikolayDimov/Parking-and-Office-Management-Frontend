import React from 'react';
import Modal from '../../components/ModalList/Modal';

interface DeleteModalProps {
    isVisible: boolean;
    hideModal: () => void;
    onDeleteConfirm: () => void;
}

const DeleteFloorPlanModal: React.FC<DeleteModalProps> = ({ isVisible, hideModal, onDeleteConfirm }) => {
    const handleDeleteConfirm = () => {
        onDeleteConfirm();
        hideModal();
    };

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleDeleteConfirm} showConfirmButton={true}>
            <p>Are you sure you want to delete this floor plan?</p>
        </Modal>
    );
};

export default DeleteFloorPlanModal;
