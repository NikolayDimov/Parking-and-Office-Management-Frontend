import { NavLink } from 'react-router-dom';
import { route } from '../../../static/routes';

import { StyledNavLink, Ul } from './RightNav.style';
import { useAuth } from '../../../context/AuthContext';
import useToken from '../../../hooks/Token/Token.hook';
import useRightNav from './RightNav.logic';

import UserRoleHOC from '../../../pages/UserRoleHOC';
import CalendarIcon from '../../../pages/ReservationSummary/CalendarIcon/CalendarIcon';
import { StyledToolTip } from '../../CommonStyledElements';

interface NavProps {
    open: boolean;
    handleClick: () => void;
}

const RightNav: React.FC<NavProps> = ({ open, handleClick }) => {
    const { isAuthenticated } = useAuth();
    const decodedToken = useToken();
    const { handleCloseNav } = useRightNav(handleClick);

    return (
        <nav>
            <Ul open={open}>
                {isAuthenticated ? (
                    <>
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
                            {<p>Reservation Summary</p>}
                        </StyledToolTip>
                        <UserRoleHOC>
                            <StyledNavLink to={`/admin`} className="nav-link" onClick={handleCloseNav}>
                                <li>Admin</li>
                            </StyledNavLink>
                        </UserRoleHOC>

                        <StyledNavLink to={`/user/${decodedToken?.id}`} className="nav-link" onClick={handleCloseNav}>
                            <li>Profile</li>
                        </StyledNavLink>
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
