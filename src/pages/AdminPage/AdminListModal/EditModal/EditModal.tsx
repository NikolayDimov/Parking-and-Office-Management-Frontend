import React from 'react';
import Modal from '../../../../components/ModalList/Modal';
import { ErrorStyles, HeaderModal, InputModal, ItemsModal, LabelModal } from './EditModal.style';
import { useEditLocationModalLogic } from './EditModal.logic';
import { useTranslation } from 'react-i18next';

interface EditModalProps {
    isVisible: boolean;
    hideModal: () => void;
    currentLocation: {
        name: string;
        city: string;
        address: string;
    };
    setCurrentLocation: React.Dispatch<
        React.SetStateAction<{
            name: string;
            city: string;
            address: string;
        }>
    >;
    onConfirm: (newLocationName: string, newLocationCity: string, newLocationAddress: string) => void;
}

const EditLocationModal: React.FC<EditModalProps> = ({
    isVisible,
    hideModal,
    currentLocation,
    setCurrentLocation,
    onConfirm,
}) => {
    const { t } = useTranslation();

    const {
        formErrors,
        newLocationName,
        newLocationCity,
        newLocationAddress,
        setNewLocationName,
        setNewLocationCity,
        setNewLocationAddress,
        handleLocationdBlur,
        handleConfirm,
    } = useEditLocationModalLogic({
        currentLocation,
        onConfirm,
        hideModal,
    });

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleConfirm} showConfirmButton={true}>
            <HeaderModal>{t('admin.editModal.title')}</HeaderModal>
            <ItemsModal>
                <LabelModal>{t('admin.editModal.locationName')}</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location name"
                    value={newLocationName}
                    onChange={(e) => {
                        setNewLocationName(e.target.value);
                        setCurrentLocation((prevLocation) => ({
                            ...prevLocation,
                            name: e.target.value,
                        }));
                    }}
                    onBlur={handleLocationdBlur}
                />
                {formErrors.name && <ErrorStyles>{formErrors.name}</ErrorStyles>}
            </ItemsModal>
            <ItemsModal>
                <LabelModal>{t('admin.editModal.locationCity')}</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location city"
                    value={newLocationCity}
                    onChange={(e) => {
                        setNewLocationCity(e.target.value);
                        setCurrentLocation((prevLocation) => ({
                            ...prevLocation,
                            city: e.target.value,
                        }));
                    }}
                    onBlur={handleLocationdBlur}
                />
                {formErrors.city && <ErrorStyles>{formErrors.city}</ErrorStyles>}
            </ItemsModal>
            <ItemsModal>
                <LabelModal>{t('admin.editModal.locationAddress')}</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location address"
                    value={newLocationAddress}
                    onChange={(e) => {
                        setNewLocationAddress(e.target.value);
                        setCurrentLocation((prevLocation) => ({
                            ...prevLocation,
                            address: e.target.value,
                        }));
                    }}
                    onBlur={handleLocationdBlur}
                />
                {formErrors.address && <ErrorStyles>{formErrors.address}</ErrorStyles>}
            </ItemsModal>
        </Modal>
    );
};

export default EditLocationModal;
