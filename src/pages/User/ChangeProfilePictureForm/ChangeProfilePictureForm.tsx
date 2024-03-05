import { useNavigate } from 'react-router';
import Modal from '../../../components/Modal/Modal';
import useChangeProfilePicture from './ChangeProfilePictureForm.logic';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import InputField from '../../../components/InputField/InputField';
import { FormStyled } from '../../../components/InputField/Form.style';

const ChangeProfilePictureForm = () => {
    const { formik, setImageFile } = useChangeProfilePicture();
    const navigate = useNavigate();

    return (
        <Modal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Change Profile Picture</h2>

                <InputField
                    type="file"
                    id="imgUrl"
                    name="imgUrl"
                    label="Image"
                    placeholder="Please enter location's image"
                    onChange={(event) => {
                        const file = event.currentTarget.files?.[0] || null;
                        setImageFile(file);
                        formik.handleChange(event);
                    }}
                />
                {formik.errors.imgUrl && formik.touched.imgUrl ? <div>{formik.errors.imgUrl}</div> : null}
                <FormButtonsContainer>
                    <BaseButton type={'submit'}>Change Picture</BaseButton>
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
};

export default ChangeProfilePictureForm;
