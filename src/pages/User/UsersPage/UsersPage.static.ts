import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';

interface User {
    id: string;
    email: string;
    role: string;
    imgUrl?: string;
    error?: string;
}

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

interface RefetchFunction<TPageData> {
    (
        options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined,
    ): Promise<QueryObserverResult<User[], unknown>>;
}

export type { User, RefetchFunction, RegisterUser, ChangePasswordResponse, ChangeProfilePictureResponse };
