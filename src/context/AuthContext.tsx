import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { LoginUser } from '../pages/Login/Login.static';
import { loginService } from '../services/userService';

interface AuthContextType {
    isAuthenticated: boolean;
    loginUser: ({ email, password }: LoginUser) => Promise<LoginUser | undefined>;
    logout: () => void;
}

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const isTokenExpired = (exp: number | undefined) => {
    const currentTime = Date.now() / 1000;
    if (!exp) {
        return false;
    }
    return exp < currentTime;
};
const isTokenValid = (token: string) => {
    try {
        const decodedToken = jwtDecode(token);

        return decodedToken && !isTokenExpired(decodedToken.exp);
    } catch (error) {
        return false;
    }
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        const storedToken = localStorage.getItem('access_token');
        return !!storedToken && isTokenValid(storedToken);
    });
    const currentPath = window.location.pathname;

    const loginUser = async ({ email, password }: LoginUser) => {
        try {
            const response: LoginUser = await loginService({ email, password });

            if (response && response.access_token) {
                localStorage.setItem('access_token', response.access_token);
                setIsAuthenticated(true);
                navigate('/');
            } else {
                setIsAuthenticated(false);
                return response;
            }
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
            setIsAuthenticated(false);
        }
    };

    const logout = () => {
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('reservation');
        setIsAuthenticated(false);
        navigate('/login');
    };

    useEffect(() => {
        const publicRoutes = ['/login'];
        const storedToken = localStorage.getItem('access_token');
        const tokenIsValid = storedToken && isTokenValid(storedToken);

        if (!isAuthenticated && tokenIsValid) {
            setIsAuthenticated(true);
        } else if (!tokenIsValid && !publicRoutes.includes(currentPath)) {
            localStorage.removeItem('access_token');
            sessionStorage.removeItem('reservation');
            navigate('/login');
        }
    }, [navigate, isAuthenticated, currentPath]);

    return <AuthContext.Provider value={{ isAuthenticated, loginUser, logout }}>{children}</AuthContext.Provider>;
};

const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export { useAuth, AuthProvider };
