import * as Yup from 'yup';

const ChangeProfilePictureSchema = Yup.object().shape({
    imgUrl: Yup.string().required('Required'),
});

interface ChangeProfilePicture {
    id?: string;
    imgUrl?: string;
    error?: string;
}

export { ChangeProfilePictureSchema };
export type { ChangeProfilePicture };
