import { deleteUser, getUsers } from './../../../services/userService';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { route } from '../../../static/routes';
import { useMutation, useQuery } from 'react-query';
import { RefetchFunction, User } from './UsersPage.static';
import { useLocation } from 'react-router-dom';

const useUsers = () => {
    const { data: users, isLoading, error, refetch } = useQuery({ queryKey: ['users'], queryFn: getUsers });
    return { users, isLoading, error, refetch };
};

const useDeleteUser = (refetch: RefetchFunction<User>) => {
    const deleteUserMutation = useMutation(deleteUser, {
        onSuccess: () => {
            refetch();
        },
    });

    return { deleteUser: deleteUserMutation.mutate };
};

const useUsersPageLogic = () => {
    const location = useLocation();
    const { users, isLoading, refetch } = useUsers();
    const { deleteUser } = useDeleteUser(refetch);
    const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);
    const title = 'All Users';
    const searchPlaceholder = 'Search user..';
    const navigate = useNavigate();
    const handleCreateUser = () => {
        navigate(route.register, { state: { background: location } });
    };
    const handleDeleteUser = async (userId: string) => {
        deleteUser(userId);
        refetch();
    };

    useEffect(() => {
        if (users) {
            setFilteredUsers(users);
        }
    }, [users]);

    const handleSearch = (query: string) => {
        const filtered = users?.filter((user: User) => user.email.toLowerCase().includes(query.toLowerCase()));
        setFilteredUsers(filtered);
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleDisplayUserReservations = async (userId: string) => {
        try {
            navigate(`/user/${userId}`);
        } catch (error) {}
    };

    return {
        users: filteredUsers,
        isLoading,
        handleSearch,
        handleCreateUser,
        handleDeleteUser,
        title,
        searchPlaceholder,
        handleGoBack,
        handleDisplayUserReservations,
    };
};

export { useUsers, useDeleteUser, useUsersPageLogic };
