import React from 'react';
import Modal from '../../../../components/ModalList/Modal';
import { useTranslation } from 'react-i18next';

interface DeleteModalProps {
    isVisible: boolean;
    hideModal: () => void;
    onDeleteConfirm: () => void;
}

const DeleteLocationModal: React.FC<DeleteModalProps> = ({ isVisible, hideModal, onDeleteConfirm }) => {
    const { t } = useTranslation();

    const handleDeleteConfirm = () => {
        onDeleteConfirm();
        hideModal();
    };

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleDeleteConfirm} showConfirmButton={true}>
            <p>{t('admin.deleteModal.title')}</p>
        </Modal>
    );
};

export default DeleteLocationModal;
