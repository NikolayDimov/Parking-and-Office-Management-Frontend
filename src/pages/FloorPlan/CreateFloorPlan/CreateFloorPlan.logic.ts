import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../../hooks/Token/Token.hook';
import { useState } from 'react';
import { uploadImage } from '../../../services/imageService';
import { FloorPlan, FloorPlanCreateSchema } from '../FloorPlan.static';
import { addFloorPlan } from '../../../services/floorPlanService';
import { toast } from 'react-toastify';

function useCreateFloorPlan() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { locationId } = location.state || {};

    const decodedToken = useToken();

    const handleGoBack = () => {
        navigate(-1);
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            locationId: '',
            imgUrl: '',
            modifiedBy: '',
            error: '',
        },
        validationSchema: FloorPlanCreateSchema,

        onSubmit: async (values: FloorPlan, { setFieldError, setSubmitting, resetForm }) => {
            const newObj = {
                name: values.name,
                locationId: locationId,
                imgUrl: values.imgUrl,
                modifiedBy: decodedToken?.id,
            };
            try {
                if (imageFile) {
                    const imageUrl = await uploadImage(imageFile);
                    newObj.imgUrl = imageUrl;
                }
                const createdFloorPlan = await addFloorPlan(newObj);

                if (createdFloorPlan.error) {
                    throw new Error(createdFloorPlan.error);
                } else {
                    toast.success('Floor Plan created successfully!');
                    resetForm();
                    navigate('/admin');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
                toast.error('An unexpected error occurred.');
                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, imageFile, setImageFile, handleGoBack };
}

export { useCreateFloorPlan };
