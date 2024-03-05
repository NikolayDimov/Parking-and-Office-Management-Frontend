import { BASE_URL } from '../static/constants';

const uploadImage = async (imageFile: File): Promise<string> => {
    try {
        const formData = new FormData();
        formData.append('image', imageFile);

        const userAuth = localStorage.getItem('access_token');
        const headers: HeadersInit = {};

        if (userAuth) {
            headers['Authorization'] = `Bearer ${userAuth}`;
        }

        const response = await fetch(`${BASE_URL}/image-upload`, {
            method: 'POST',
            headers,
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`Failed to upload image: ${response.statusText}`);
        }

        return await response.text();
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};

export { uploadImage };
