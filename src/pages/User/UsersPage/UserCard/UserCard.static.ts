import { User } from '../UsersPage.static';

interface UserCardProps {
    user: User;
    deleteUser: (userId: string) => Promise<void>;
}

interface UserCardContainerProps {
    users: User[];
    deleteUser: (userId: string) => Promise<void>;
}

interface UserDetailsProps {
    user: User;
    deleteUser: (userId: string) => Promise<void>;
}

export type { UserCardProps, UserCardContainerProps, UserDetailsProps };
