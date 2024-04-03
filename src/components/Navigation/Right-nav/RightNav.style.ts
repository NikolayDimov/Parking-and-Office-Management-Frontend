import styled from 'styled-components';
import { NavProps } from './RightNav.static';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Ul = styled.ul<NavProps>`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row nowrap;

    li {
        padding: 1.125rem 0.625rem;
        font-size: 1.2rem;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    .nav-link:hover {
        color: #999;
    }
`;

const StyledNavLink = styled(RouterNavLink)`
    &.nav-link {
        color: #e7eaf0;
        text-decoration: none;
        cursor: pointer;
        margin-right: 1rem;
    }
`;

const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProfileIcon = styled.div<{ ref?: React.Ref<HTMLDivElement> }>`
    background-color: transparent;
    width: 26px;
    height: 26px;
    color: #fff;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        stroke: #999;
    }
`;

const DropdownMenuOpen = styled.div<{ ref?: React.Ref<HTMLDivElement> }>`
    position: absolute;
    width: 300px;
    top: calc(100% + -5px);
    right: 10px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0;
    z-index: 2;
`;

const DropdownItem = styled.div`
    padding: 0.2rem 0.2rem;
    color: #000;
    text-decoration: none;
    &:hover {
        background-color: var(--hover-color);
    }
`;

const ButtonLogout = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        fill: var(--light-blue-nav);
        margin-right: 1rem;
    }

    p {
        font-family: var(--font-family);
        font-size: 16px;
        font-weight: 500;
    }
`;

const Settings = styled.div`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    width: 100%;
    background-color: transparent;
    border: none;

    svg {
        width: 22px;
        height: 22px;
        stroke: var(--light-blue-nav);
        margin-right: 1rem;
    }

    p {
        font-family: var(--font-family);
        font-size: 16px;
        font-weight: 500;
    }
`;

export { Ul, StyledNavLink, DropdownItem, ProfileIcon, ButtonLogout, Settings, DropdownMenuOpen, ContainerIcons };
