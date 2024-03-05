import * as Yup from "yup";
interface LocationCreate {
    id?: string;
    name?: string;
    city?: string;
    address?: string;
    imgUrl?: string;
    modifiedBy?: string;
    error?: string;
}

const LocationCreateShema = Yup.object().shape({
    name: Yup.string().min(3, "Name is too short!").max(100, "Name is too long!").required("Name is required"),
    city: Yup.string().min(3, "City is too short!").max(100, "City is too long!").required("City is required"),
    address: Yup.string().min(5, "Address is too short!").max(100, "Address is too long!").required("Address is required"),
    imgUrl: Yup.string().required("Image is required"),
});

export type { LocationCreate };
export { LocationCreateShema };
