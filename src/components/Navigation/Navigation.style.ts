import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const NavDiv = styled.div`
    background: #102d6a;
    width: 100%;
    height: 4rem;
    padding: 1rem 0;
    padding: 0rem 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 10;

    .logo {
        font-size: 1.2rem;
        text-decoration: none;
        color: inherit;
    }
`;

const NavContainer = styled.div`
    max-width: 93.75rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-weight: 700;
    }
`;

const StyledNavLink = styled(RouterNavLink)`
    &.logo {
        color: #e7eaf0;
        text-decoration: none;
    }
    &:hover {
        color: #999;
    }
`;

const ContainerNav = styled.div`
    display: flex;
    gap: 2rem;
`;

export { NavDiv, NavContainer, StyledNavLink, ContainerNav };
