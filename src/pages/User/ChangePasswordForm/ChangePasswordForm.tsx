import { useNavigate } from 'react-router';
import Modal from '../../../components/Modal/Modal';
import useChangePassword from './ChangePasswordForm.logic';
import { BaseButton, FormButtonsContainer } from '../../../components/CommonStyledElements';
import { FormStyled } from '../../../components/InputField/Form.style';
import InputField from '../../../components/InputField/InputField';

const ChangePasswordForm = () => {
    const { formik } = useChangePassword();
    const navigate = useNavigate();

    return (
        <Modal>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h2 className="form-title">Change Password</h2>
                <InputField
                    type="password"
                    name={'password'}
                    id={'password'}
                    label="Current Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
                <InputField
                    type="password"
                    name={'newPassword'}
                    id={'newPassword'}
                    label="New Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.newPassword && formik.touched.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                ) : null}
                <InputField
                    type="password"
                    name={'confirmPassword'}
                    id={'confirmPassword'}
                    label="Confirm Password"
                    onChange={formik.handleChange}
                />
                {formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <div>{formik.errors.confirmPassword}</div>
                ) : null}
                <FormButtonsContainer>
                    <BaseButton type={'submit'}>Change Password</BaseButton>
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

export default ChangePasswordForm;
