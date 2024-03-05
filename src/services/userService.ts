import { LoginUser } from '../pages/Login/Login.static';
import { User } from '../pages/User/UsersPage/UsersPage.static';
import { endpoints } from '../static/endpoints';
import { del, get, patch, post } from './fetchService';

interface RegisterUser {
    email: string;
    password: string;
    modifiedBy: string | undefined;
    error?: string;
}
interface ChangePasswordResponse {
    message?: string;
    error?: string;
}
interface ChangeProfilePictureResponse {
    message?: string;
    error?: string;
}

const getUsers = async (): Promise<User[]> => {
    const response = await get(`${endpoints.user}`, {});
    return response;
};

const getUser = async (id: string | undefined): Promise<User> => {
    const response = await get(`${endpoints.user}/${id}`, {});
    return response;
};

const deleteUser = async (id: string): Promise<User> => {
    const response = await del(`${endpoints.user}/${id}`, {});
    return response;
};

const register = async ({ email, password, modifiedBy }: RegisterUser): Promise<RegisterUser> => {
    const response = await post(`${endpoints.register}`, { email, password, modifiedBy });
    return response;
};

const changePassword = async ({
    id,
    password,
    newPassword,
}: {
    id: string | undefined;
    password: string | undefined;
    newPassword: string | undefined;
}): Promise<ChangePasswordResponse> => {
    const response = await patch(`${endpoints.changePassword}/${id}`, { id, password, newPassword });
    return response;
};

const changeProfilePicture = async ({
    id,
    imgUrl,
}: {
    id: string | undefined;
    imgUrl: string | undefined;
}): Promise<ChangeProfilePictureResponse> => {
    const response = await patch(`${endpoints.changeProfilePicture}/${id}`, { id, imgUrl });
    return response;
};

const loginService = async ({ email, password }: LoginUser): Promise<LoginUser> => {
    try {
        const response = await post(`${endpoints.login}`, { email, password });
        return response;
    } catch {
        throw new Error('Failed to login');
    }
};

const logout = async () => {
    localStorage.removeItem('access_token');
};

export type { RegisterUser, ChangePasswordResponse, ChangeProfilePictureResponse };
export { getUser, getUsers, deleteUser, register, changePassword, changeProfilePicture, loginService, logout };
