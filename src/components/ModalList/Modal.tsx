import React from 'react';
import { ModalOverlay, StyledModalContainer, ModalContent, ModalActions } from './Modal.style';
import { BaseButton } from '../CommonStyledElements';
import { useTranslation } from 'react-i18next';

interface ModalProps {
    isVisible: boolean;
    hideModal: () => void;
    onConfirm?: () => void;
    showConfirmButton?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, hideModal, onConfirm, showConfirmButton = true, children }) => {
    const { t } = useTranslation();

    return (
        <ModalOverlay $show={isVisible} $confirmation={showConfirmButton}>
            <StyledModalContainer $show={isVisible} $confirmation={showConfirmButton}>
                <ModalContent>{children}</ModalContent>
                <ModalActions>
                    {showConfirmButton && (
                        <BaseButton
                            className="create-btn"
                            onClick={() => {
                                onConfirm && onConfirm();
                            }}
                        >
                            {t('admin.editModal.confirmBtn')}
                        </BaseButton>
                    )}

                    <BaseButton className="remove-btn" onClick={hideModal}>
                        {t('admin.editModal.closeBtn')}
                    </BaseButton>
                </ModalActions>
            </StyledModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
