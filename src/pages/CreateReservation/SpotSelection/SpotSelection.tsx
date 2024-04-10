import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import Modal from '../../../components/Modal/Modal';
import { FormStyled } from '../../CreateSpots/AddSpotForm/AddSpotForm.style';
import InputField from '../../../components/InputField/InputField';
import { useReserveSpot } from './SpotSelection.logic';
import { useTranslation } from 'react-i18next';

export default function SpotSelection() {
    const { t } = useTranslation();

    const { formik, navigate, spotProps, startPeriodDate, startPeriodTime, endPeriodDate, endPeriodTime } =
        useReserveSpot();

    return (
        <Modal>
            {spotProps && (
                <>
                    <h3>{spotProps.name}</h3>
                    <p>
                        {t('spotSelection.spotType')} {spotProps.spotType}
                    </p>
                    <p>
                        {t('spotSelection.description')} {spotProps.description}
                    </p>
                    {spotProps.spotType === 'Office desk' || spotProps.spotType === 'Parking place' ? (
                        <div>
                            {t('spotSelection.reservationPeriod')}
                            <p>
                                {t('spotSelection.from')} {startPeriodDate}
                            </p>
                            <p>
                                {t('spotSelection.to')} {endPeriodDate}
                            </p>
                            {spotProps.user && (
                                <p>
                                    {t('spotSelection.user')} {spotProps.user.email}
                                </p>
                            )}
                        </div>
                    ) : (
                        <div>
                            {t('spotSelection.reservationPeriod')} on {startPeriodDate}
                            <p>
                                {t('spotSelection.from')} {startPeriodTime}
                            </p>
                            <p>
                                {t('spotSelection.to')} {endPeriodTime}
                            </p>
                            {spotProps.user && (
                                <p>
                                    {t('spotSelection.user')} {spotProps.user.email}
                                </p>
                            )}
                        </div>
                    )}
                </>
            )}

            <FormStyled onSubmit={formik.handleSubmit}>
                <InputField
                    type="text"
                    name={'comment'}
                    id={'comment'}
                    label={t('spotSelection.addCommentLabel')}
                    onChange={formik.handleChange}
                />
                {formik.errors.comment && formik.touched.comment ? <div>{formik.errors.comment}</div> : null}

                <FormButtonsContainer>
                    <BaseButton type={'submit'}>{t('spotSelection.addReservationBtn')}</BaseButton>
                    <BaseButton
                        type="button"
                        className="close-btn"
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        {t('spotSelection.closeBtn')}
                    </BaseButton>
                </FormButtonsContainer>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </FormStyled>
        </Modal>
    );
}
