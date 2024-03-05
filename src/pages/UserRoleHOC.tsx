import React, { ReactNode } from 'react';
import useToken from '../hooks/Token/Token.hook';

interface UserRoleHOCProps {
    children: ReactNode;
}

const UserRoleHOC: React.FC<UserRoleHOCProps> = ({ children }) => {
    const decodedToken = useToken();
    const canUserViewForm = decodedToken?.role === 'ADMIN';

    return canUserViewForm ? <>{children}</> : null;
};

export default UserRoleHOC;
