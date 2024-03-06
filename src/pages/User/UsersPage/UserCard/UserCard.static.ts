import { User } from '../UsersPage.static';

interface UserCardProps {
    user: User;
    deleteUser: (userId: string) => Promise<void>;
    userReservations: (userId: string) => void;
}

interface UserCardContainerProps {
    users: User[];
    deleteUser: (userId: string) => Promise<void>;
    userReservations: (userId: string) => void;
}

interface UserDetailsProps {
    user: User;
    deleteUser: (userId: string) => Promise<void>;
    userReservations: (userId: string) => void;
}

export type { UserCardProps, UserCardContainerProps, UserDetailsProps };
