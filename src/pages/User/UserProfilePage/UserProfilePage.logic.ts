import { useLocation, useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import { getUser } from '../../../services/userService';
import { route } from '../../../static/routes';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';

const useUser = (userId: string | undefined) => {
    const { data: user, refetch: userRefetch } = useQuery(['user', userId], () => getUser(userId));
    return { user, userRefetch };
};

const UserProfilePageLogic = () => {
    const { id: userId } = useParams();
    const decodedToken = useToken();
    const { id: tokenId, role: tokenRole } = decodedToken || {};
    const { user, userRefetch } = useUser(userId);

    const { logout } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        navigate(-1);
    };

    return {
        user,
        userRefetch,
        logout,
        tokenId,
        tokenRole,
        handleGoBack,
        handleUpdateUserProfilePicture: (id: string) =>
            navigate(`${route.user}/${id}/change-picture`, { state: { background: location } }),
        handleUpdateUserPassword: (id: string) =>
            navigate(`${route.user}/${id}/change-password`, { state: { background: location } }),
    };
};

export { useUser, UserProfilePageLogic };
