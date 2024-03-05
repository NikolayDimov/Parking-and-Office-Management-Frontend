import { ModalType } from './Modal.static';
import { ModalBox, ModalOverlay } from './Modal.style';

export default function Modal(props: ModalType) {
    return (
        <>
                <ModalOverlay>
                    <ModalBox onClick={(e) => e.stopPropagation()}>{props.children}</ModalBox>
                </ModalOverlay>
        </>
    );
}
