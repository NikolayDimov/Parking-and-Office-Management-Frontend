import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import Modal from '../../../components/Modal/Modal';
import { FormStyled } from '../../CreateSpots/AddSpotForm/AddSpotForm.style';
import InputField from '../../../components/InputField/InputField';
import { useReservSpot } from './SpotSelection.logic';

export default function SpotSelection() {
    const { formik, navigate, spotProps, startPeriodDate, startPeriodTime, endPeriodDate, endPeriodTime } =
        useReservSpot();

    return (
        <Modal>
            <h3>{spotProps.name}</h3>
            <p>Spot type: {spotProps.spotType}</p>
            <p>Description: {spotProps.description}</p>
            {spotProps.spotType === 'Office desk' || spotProps.spotType === 'Parking place' ? (
                <div>
                    Reservation period:
                    <p>from: {startPeriodDate}</p>
                    <p>to: {endPeriodDate}</p>
                </div>
            ) : (
                <div>
                    Reservation period: on {startPeriodDate}
                    <p>from: {startPeriodTime}</p>
                    <p>to: {endPeriodTime}</p>
                </div>
            )}
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
        </Modal>
    );
}
