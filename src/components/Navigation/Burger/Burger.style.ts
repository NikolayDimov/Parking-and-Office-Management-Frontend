import styled from 'styled-components';
import { NavProps } from '../Right-nav/RightNav.static';

const BurgerDiv = styled.div<NavProps>`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    border-radius: 0.25rem;
    z-index: 20;

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({ open }) => (open ? '#fff' : '#333')};
        border-radius: 0.625rem;
        transform-origin: 1px;
        transition: all 0.3s linear;

        &:nth-child(1) {
            background-color: #fff;
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            background-color: #fff;
            transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }

        &:nth-child(3) {
            background-color: #fff;
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

    @media (min-width: 769px) {
        display: none;
    }
`;

export { BurgerDiv };
