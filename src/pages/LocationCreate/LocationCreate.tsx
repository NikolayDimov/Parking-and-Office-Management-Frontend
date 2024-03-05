import { FaArrowLeft } from 'react-icons/fa';
import { BaseButton } from '../../components/CommonStyledElements';
import { FormStyled } from '../../components/InputField/Form.style';
import ImageInputField from '../../components/InputField/ImageInputField';
import InputField from '../../components/InputField/InputField';
import { ListContainer } from '../AdminPage/AdminPage.style';
import { BackButton } from '../FloorPlan/FloorPlan.style';
import { useCreateLocation } from './LocationCreate.logic';

export default function LocationCreateForm() {
    const { formik, setImageFile, handleGoBack } = useCreateLocation();

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3 className="form-title">Create new location</h3>

                <InputField
                    type="name"
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Please enter location's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}

                <InputField
                    type="name"
                    id="city"
                    name="city"
                    label="City"
                    placeholder="Please enter location's city"
                    onChange={formik.handleChange}
                />
                {formik.errors.city && formik.touched.city && <div className="error-message">{formik.errors.city}</div>}

                <InputField
                    type="name"
                    id="address"
                    name="address"
                    label="Address"
                    placeholder="Please enter location's address"
                    onChange={formik.handleChange}
                />
                {formik.errors.address && formik.touched.address && (
                    <div className="error-message">{formik.errors.address}</div>
                )}

                <ImageInputField
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
                {formik.errors.imgUrl && formik.touched.imgUrl && (
                    <div className="error-message">{formik.errors.imgUrl}</div>
                )}

                <BaseButton className="create-btn" type="submit">
                    Create
                </BaseButton>
            </FormStyled>
        </ListContainer>
    );
}
