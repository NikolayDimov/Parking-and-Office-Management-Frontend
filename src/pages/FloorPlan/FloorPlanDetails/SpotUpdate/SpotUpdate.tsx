import { Field, FormikProvider } from 'formik';
import { BaseButton, FormButtonsContainer } from '../../../../components/CommonStyledElements';
import InputField from '../../../../components/InputField/InputField';
import Modal from '../../../../components/Modal/Modal';
import { FormStyled } from '../../../CreateSpots/AddSpotForm/AddSpotForm.style';
import { useDeleteSpot, useUpdateSpot } from './SpotUpdate.logic';
import { DivFlexStyled } from '../../../CreateSpots/CreateSpotsPage.style';
import Loader from '../../../../components/Loader/Loader';

export default function SpotUpdate() {
    const { formik, navigate, isLoading, spotType } = useUpdateSpot();
    const { onDelete, errMessage } = useDeleteSpot();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Modal>
            <FormikProvider value={formik}>
                <FormStyled onSubmit={formik.handleSubmit}>
                    <h3>Update Spot:</h3>
                    <InputField
                        type="name"
                        name={'name'}
                        id={'name'}
                        label="Name:"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
                    <InputField
                        type="text"
                        name={'description'}
                        id={'description'}
                        label="Description:"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                    />
                    {formik.errors.description && formik.touched.description ? (
                        <div>{formik.errors.description}</div>
                    ) : null}
                    {spotType && (spotType.name === 'Office desk' || spotType.name === 'Parking place') && (
                        <DivFlexStyled>
                            <label className="checkbox-label">
                                {'Is Permanent: '}
                                <Field
                                    type="checkbox"
                                    name={'isPermanent'}
                                    id={'isPermanent'}
                                    value={formik.values.isPermanent}
                                    checked={formik.values.isPermanent}
                                    onChange={formik.handleChange}
                                />
                            </label>
                        </DivFlexStyled>
                    )}
                    <BaseButton type="submit" className="edit-btn">
                        Update
                    </BaseButton>
                    {formik.errors.error ? <div>{formik.errors.error}</div> : null}
                </FormStyled>
            </FormikProvider>
            <FormButtonsContainer>
                <BaseButton type="submit" className="delete-btn" onClick={onDelete}>
                    Delete
                </BaseButton>
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
            {errMessage && <p className="error"> {errMessage} </p>}
        </Modal>
    );
}
