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
    box-shadow: 0 2px 10px black;
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

interface SettingsProps {
    $isOpen: boolean;
}

const Settings = styled.div<SettingsProps>`
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        stroke: var(--light-blue-nav);
        border: none;
        transition: transform 0.4s ease;
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    }

    p {
        font-family: var(--font-family);
        font-size: 16px;
        font-weight: 500;
    }
`;

const ContainerSettings = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        stroke: var(--light-blue-nav);
        margin-right: 1rem;
    }
`;

const ContainerInsideSettings = styled.div`
    display: flex;
    align-items: center;
    padding: 0.4rem 1rem;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg {
        width: 22px;
        height: 22px;
        stroke: var(--light-blue-nav);
        margin-right: 1rem;
    }
`;

const InsideContainer = styled.div`
    box-shadow: inset 0px 3px 10px -4px #615757;
    transition: transform 4s ease;
`;

// interface InsideContainerProps {
//     $show: boolean;
// }

// const InsideContainer = styled.div<InsideContainerProps>`
//     box-shadow: inset 0px 3px 10px -4px #615757;
//     opacity: ${(props) => (props.$show ? '1' : '0')};
//     max-height: ${(props) => (props.$show ? '1000px' : '0')};
//     overflow: hidden;
//     transition:
//         opacity 2s ease-in-out,
//         max-height 2s ease-in-out; /* Adjust the transition duration */
// `;

export {
    Ul,
    StyledNavLink,
    DropdownItem,
    ProfileIcon,
    ButtonLogout,
    Settings,
    DropdownMenuOpen,
    ContainerIcons,
    ContainerSettings,
    InsideContainer,
    ContainerInsideSettings,
};
