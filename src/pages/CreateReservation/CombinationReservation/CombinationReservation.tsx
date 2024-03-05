import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import InputField from '../../../components/InputField/InputField';
import { FormStyled } from '../../CreateSpots/AddSpotForm/AddSpotForm.style';
import { useReserveSpotCombination } from './CombinationReservation.logic';
import CombinationReservationModal from './CombinationReservationModal/CombinationReservationModal';

export default function CombinationReservation() {
    const { formik, navigate } = useReserveSpotCombination();

    return (
        <CombinationReservationModal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <InputField
                    type="text"
                    name={'comment'}
                    id={'comment'}
                    label="Add comment:"
                    onChange={formik.handleChange}
                />
                {formik.errors.comment && formik.touched.comment ? <div>{formik.errors.comment}</div> : null}
                <FormButtonsContainer>
                    <BaseButton type={'submit'}>Add reservation</BaseButton>
                    <BaseButton
                        type="button"
                        className="close-btn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        Close
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </FormStyled>
        </CombinationReservationModal>
    );
}
