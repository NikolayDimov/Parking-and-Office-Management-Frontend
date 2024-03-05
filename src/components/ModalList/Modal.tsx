import React from 'react';
import { ModalOverlay, StyledModalContainer, ModalContent, ModalActions } from './Modal.style';
import { BaseButton } from '../CommonStyledElements';

interface ModalProps {
    isVisible: boolean;
    hideModal: () => void;
    onConfirm?: () => void;
    showConfirmButton?: boolean;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isVisible, hideModal, onConfirm, showConfirmButton = true, children }) => {
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
                            Confirm
                        </BaseButton>
                    )}

                    <BaseButton className="remove-btn" onClick={hideModal}>
                        Close
                    </BaseButton>
                </ModalActions>
            </StyledModalContainer>
        </ModalOverlay>
    );
};

export default Modal;
