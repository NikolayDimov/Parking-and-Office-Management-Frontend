import { FaArrowLeft } from 'react-icons/fa';
import { BaseButton } from '../../../components/CommonStyledElements';
import { FormStyled } from '../../../components/InputField/Form.style';
import ImageInputField from '../../../components/InputField/ImageInputField';
import InputField from '../../../components/InputField/InputField';
import { BackButton, ListContainer } from '../FloorPlan.style';
import { useCreateFloorPlan } from './CreateFloorPlan.logic';

const CreateNewFloorPlanForm = () => {
    const { formik, setImageFile, handleGoBack } = useCreateFloorPlan();

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            <FormStyled onSubmit={formik.handleSubmit}>
                <h3 className="form-title">Create new Floor Plan</h3>

                <InputField
                    type="name"
                    id="name"
                    name="name"
                    label="Name"
                    placeholder="Please enter location's name"
                    onChange={formik.handleChange}
                />
                {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}

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
};

export default CreateNewFloorPlanForm;
