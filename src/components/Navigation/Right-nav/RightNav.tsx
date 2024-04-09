import React from 'react';
import { Link } from 'react-router-dom';
import { route } from '../../../static/routes';
import {
    ButtonLogout,
    ContainerIcons,
    ContainerInsideSettings,
    ContainerSettings,
    DropdownItem,
    DropdownMenuOpen,
    InsideContainer,
    ProfileIcon,
    Settings,
    StyledNavLink,
    Ul,
} from './RightNav.style';
import useRightNav from './RightNav.logic';
import UserRoleHOC from '../../../pages/UserRoleHOC';
import CalendarIcon from '../../../pages/ReservationSummary/CalendarIcon/CalendarIcon';
import { StyledToolTip } from '../../CommonStyledElements';
import { UserProfilePageLogic } from '../../../pages/User/UserProfilePage/UserProfilePage.logic';
import { useTranslation } from 'react-i18next';

interface NavProps {
    open: boolean;
    handleClick: () => void;
}

const RightNav: React.FC<NavProps> = ({ open, handleClick }) => {
    const { t } = useTranslation();

    const {
        handleCloseNav,
        isAuthenticated,
        decodedToken,
        dropdownRef,
        profileIconRef,
        openDrop,
        showSettings,
        handleAccountSettingsClick,
        handleProfileDropdownClick,
        changeLanguage,
    } = useRightNav(handleClick);

    const { logout } = UserProfilePageLogic();

    return (
        <nav>
            <Ul open={open}>
                {isAuthenticated ? (
                    <>
                        <UserRoleHOC>
                            <StyledNavLink to={`/admin`} className="nav-link" onClick={handleCloseNav}>
                                <li>{t('navbar.admin')}</li>
                            </StyledNavLink>
                        </UserRoleHOC>

                        <ContainerIcons>
                            <StyledNavLink
                                to={route.reservationSummary}
                                className="nav-link"
                                onClick={handleCloseNav}
                                data-tooltip-id={`component_calendar_icon`}
                                data-tooltip-place="top"
                            >
                                <CalendarIcon />
                            </StyledNavLink>
                            <StyledToolTip id={`component_calendar_icon`} className="spot-info">
                                {<p>{t('navbar.reservationSummary')}</p>}
                            </StyledToolTip>

                            <ProfileIcon ref={profileIconRef} onClick={handleProfileDropdownClick}>
                                <svg
                                    width="26"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="profile-icon"
                                >
                                    <path d="M19 19.6v-1.926c-.523-.535-1.36-1.134-1.847-1.134-.767 0-1.603 0-2.3-.283-.663-.252-1.108-.85-1.108-2.237 0-.22.296-.44.47-.598.802-.725 1.385-1.45 1.385-4.442 0-1.134-1.277-2.52-3.083-2.52-1.805 0-3.108 1.386-3.108 2.52 0 3.024.481 3.749 1.283 4.442.174.157.5.378.5.598 0 1.386-.348 1.985-1.01 2.237-.697.283-1.498.283-2.23.283-.558 0-1.394.599-1.952 1.134V19.6m6.5 2.4c-5.525 0-10-4.475-10-10s4.475-10 10-10 10 4.475 10 10-4.475 10-10 10z"></path>
                                </svg>
                            </ProfileIcon>
                        </ContainerIcons>

                        {openDrop && (
                            <DropdownMenuOpen ref={dropdownRef}>
                                <DropdownItem onClick={handleAccountSettingsClick}>
                                    <Settings $isOpen={showSettings}>
                                        <ContainerSettings>
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                stroke="var(--light-blue-nav)"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="miter"
                                            >
                                                <circle cx="12" cy="12" r="3"></circle>
                                                <path d="M19.74,14H22V10H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l1.6-1.6L17.66,3.51l-1.6,1.6A8,8,0,0,0,14,4.25V2H10V4.25a8,8,0,0,0-2.06.86l-1.6-1.6L3.51,6.34l1.6,1.6a8.17,8.17,0,0,0-.82,1.92l0,.14H2v4H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92l-1.6,1.6,2.83,2.83,1.6-1.6a8,8,0,0,0,2.06.86V22h4V19.75a8,8,0,0,0,2.06-.86l1.6,1.6,2.83-2.83-1.6-1.6a8.17,8.17,0,0,0,.82-1.92Z"></path>
                                            </svg>

                                            <p>{t('navbar.profile.accountSettings')}</p>
                                        </ContainerSettings>

                                        <svg
                                            width="24px"
                                            height="24px"
                                            viewBox="0 0 48 48"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g id="Shopicon">
                                                <polygon
                                                    points="24,19.171 9.414,4.585 6.586,7.413 24,24.827 41.414,7.413 38.586,4.585"
                                                    style={{ transform: 'translateY(25%)' }}
                                                />
                                            </g>
                                        </svg>
                                    </Settings>
                                </DropdownItem>
                                {showSettings && (
                                    <InsideContainer>
                                        <DropdownItem>
                                            <Link
                                                to={`/user/${decodedToken?.id}/change-password`}
                                                onClick={handleCloseNav}
                                            >
                                                <ContainerInsideSettings>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        stroke="var(--light-blue-nav)"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="miter"
                                                    >
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                        <path d="M19.74,14H22V10H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l1.6-1.6L17.66,3.51l-1.6,1.6A8,8,0,0,0,14,4.25V2H10V4.25a8,8,0,0,0-2.06.86l-1.6-1.6L3.51,6.34l1.6,1.6a8.17,8.17,0,0,0-.82,1.92l0,.14H2v4H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92l-1.6,1.6,2.83,2.83,1.6-1.6a8,8,0,0,0,2.06.86V22h4V19.75a8,8,0,0,0,2.06-.86l1.6,1.6,2.83-2.83-1.6-1.6a8.17,8.17,0,0,0,.82-1.92Z"></path>
                                                    </svg>
                                                    <p>{t('navbar.profile.changePassword')}</p>
                                                </ContainerInsideSettings>
                                            </Link>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <ContainerInsideSettings>
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    stroke="var(--light-blue-nav)"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="miter"
                                                >
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                    <path d="M19.74,14H22V10H19.74l0-.14a8.17,8.17,0,0,0-.82-1.92l1.6-1.6L17.66,3.51l-1.6,1.6A8,8,0,0,0,14,4.25V2H10V4.25a8,8,0,0,0-2.06.86l-1.6-1.6L3.51,6.34l1.6,1.6a8.17,8.17,0,0,0-.82,1.92l0,.14H2v4H4.26l0,.14a8.17,8.17,0,0,0,.82,1.92l-1.6,1.6,2.83,2.83,1.6-1.6a8,8,0,0,0,2.06.86V22h4V19.75a8,8,0,0,0,2.06-.86l1.6,1.6,2.83-2.83-1.6-1.6a8.17,8.17,0,0,0,.82-1.92Z"></path>
                                                </svg>
                                                <button onClick={() => changeLanguage('en')}>EN</button>
                                                <button onClick={() => changeLanguage('bg')}>BG</button>
                                                <button onClick={() => changeLanguage('de')}>DE</button>
                                            </ContainerInsideSettings>
                                        </DropdownItem>
                                    </InsideContainer>
                                )}
                                <DropdownItem>
                                    <ButtonLogout
                                        onClick={() => {
                                            handleProfileDropdownClick();
                                            logout();
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                                            <g>
                                                <path
                                                    d="M21,48.5v-3c0-0.8-0.7-1.5-1.5-1.5h-10C8.7,44,8,43.3,8,42.5v-33C8,8.7,8.7,8,9.5,8h10
                                                    C20.3,8,21,7.3,21,6.5v-3C21,2.7,20.3,2,19.5,2H6C3.8,2,2,3.8,2,6v40c0,2.2,1.8,4,4,4h13.5C20.3,50,21,49.3,21,48.5z"
                                                />
                                                <path
                                                    d="M49.6,27c0.6-0.6,0.6-1.5,0-2.1L36.1,11.4c-0.6-0.6-1.5-0.6-2.1,0l-2.1,2.1c-0.6,0.6-0.6,1.5,0,2.1l5.6,5.6
                                                    c0.6,0.6,0.2,1.7-0.7,1.7H15.5c-0.8,0-1.5,0.6-1.5,1.4v3c0,0.8,0.7,1.6,1.5,1.6h21.2c0.9,0,1.3,1.1,0.7,1.7l-5.6,5.6
                                                    c-0.6,0.6-0.6,1.5,0,2.1l2.1,2.1c0.6,0.6,1.5,0.6,2.1,0L49.6,27z"
                                                />
                                            </g>
                                        </svg>
                                        <p>{t('navbar.profile.logOut')}</p>
                                    </ButtonLogout>
                                </DropdownItem>
                            </DropdownMenuOpen>
                        )}
                    </>
                ) : (
                    <>
                        <StyledNavLink to={route.login} className="nav-link" onClick={handleCloseNav}>
                            <li>Login</li>
                        </StyledNavLink>
                    </>
                )}
            </Ul>
        </nav>
    );
};

export default RightNav;
