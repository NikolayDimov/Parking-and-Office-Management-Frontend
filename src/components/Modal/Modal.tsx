import { useNavigate } from 'react-router-dom';
import { ModalType } from './Modal.static';
import { ModalBox, ModalOverlay } from './Modal.style';

export default function Modal(props: ModalType) {
    const navigate = useNavigate();
    return (
        <>
            <ModalOverlay
                onClick={() => {
                    navigate(-1);
                }}
            >
                <ModalBox
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {props.children}
                </ModalBox>
            </ModalOverlay>
        </>
    );
}
