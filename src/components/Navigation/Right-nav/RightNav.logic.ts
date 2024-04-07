import { useEffect, useRef, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';
import { useTranslation } from 'react-i18next';

const useRightNav = (handleClick: () => void) => {
    const { i18n } = useTranslation();

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

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
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
        changeLanguage,
    };
};

export default useRightNav;
