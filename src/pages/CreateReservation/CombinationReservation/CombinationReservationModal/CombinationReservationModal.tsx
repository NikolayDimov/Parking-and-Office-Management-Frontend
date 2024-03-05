import { CombinationReservationModalType } from "./CombinationReservationModal.static";
import { CombinationReservationModalBox, CombinationReservationModalOverlay } from "./CombinationReservationModal.styles";

export default function CombinationReservationModal(props: CombinationReservationModalType) {
    return (
        <>
                <CombinationReservationModalOverlay>
                    <CombinationReservationModalBox onClick={(e) => e.stopPropagation()}>{props.children}</CombinationReservationModalBox>
                </CombinationReservationModalOverlay>
        </>
    );
}