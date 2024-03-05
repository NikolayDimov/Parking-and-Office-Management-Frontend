import { useNavigate } from "react-router";
import useToken from "../../../hooks/Token/Token.hook";
import { useFormik } from "formik";
import { changeProfilePicture } from "../../../services/userService";
import { ChangeProfilePicture, ChangeProfilePictureSchema } from "./ChangeProfilePictureForm.static";
import { useState } from "react";
import { uploadImage } from "../../../services/imageService";
import { UserProfilePageLogic } from "../UserProfilePage/UserProfilePage.logic";
import { toast } from "react-toastify";

const useChangeProfilePicture = () => {
    const navigate = useNavigate();
    const decodedToken = useToken();
    const {userRefetch} = UserProfilePageLogic();
    const [imageFile, setImageFile] = useState<File | null>(null);
    const formik = useFormik({
        initialValues: {
            id: decodedToken?.id,
            imgUrl: '',
            error: '',
        },
        validationSchema: ChangeProfilePictureSchema,

        onSubmit: async (values: ChangeProfilePicture, { setFieldError, setSubmitting, resetForm }) => {
            try {
                const newObj = {
                    id: values.id,
                    imgUrl: values.imgUrl
                }
                if (imageFile) {
                    const imageUrl = await uploadImage(imageFile);
                    newObj.imgUrl = imageUrl;
                }
                const response = await changeProfilePicture(newObj);
                if (response.error) {
                    throw new Error(response.error);
                }
                toast.success("Profile picture changed successfully");
                resetForm();
                userRefetch();
                navigate(-1);
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });
    return { formik, imageFile, setImageFile };
};

export default useChangeProfilePicture;