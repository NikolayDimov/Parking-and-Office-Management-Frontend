import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';

const useRightNav = (handleClick: () => void) => {
    const [openDrop, setOpenDrop] = useState(false);
    const { isAuthenticated } = useAuth();
    const decodedToken = useToken();
    const dropdownRef = useRef<HTMLDivElement>(null);
    const profileIconRef = useRef<HTMLDivElement>(null);

    const [showSettings, setShowSettings] = useState(false);

    const handleCloseNav = () => {
        handleClick();
        setOpenDrop(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                profileIconRef.current &&
                !profileIconRef.current.contains(event.target as Node)
            ) {
                setOpenDrop(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, profileIconRef]);

    const handleAccountSettingsClick = () => {
        setShowSettings(!showSettings);
    };

    const handleProfileDropdownClick = () => {
        setOpenDrop(!openDrop);
    };

    useEffect(() => {
        if (openDrop) {
            setShowSettings(false);
        }
    }, [openDrop]);

    return {
        handleCloseNav,
        isAuthenticated,
        decodedToken,
        dropdownRef,
        profileIconRef,
        openDrop,
        setOpenDrop,
        showSettings,
        handleAccountSettingsClick,
        handleProfileDropdownClick,
    };
};

export default useRightNav;
