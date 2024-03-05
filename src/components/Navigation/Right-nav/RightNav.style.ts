import styled from 'styled-components';
import { NavProps } from './RightNav.static';

const Ul = styled.ul<NavProps>`
    list-style: none;
    display: flex;
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

    @media (max-width: 768px) {
        flex-flow: column nowrap;
        align-items: center;
        background-color: #333;

        position: fixed;
        transform: ${({ open }: NavProps) => (open ? 'translateX(0)' : 'translateX(100%)')};
        top: 0;
        right: 0;
        height: 100vh;
        width: 100%;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
        z-index: 1;

        li {
            color: #fff;
            margin-top: 1.25rem;
            border-bottom: 1px solid #fff;
        }
    }
`;

export { Ul };
