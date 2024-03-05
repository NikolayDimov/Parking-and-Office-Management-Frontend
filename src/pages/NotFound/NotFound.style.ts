import styled from 'styled-components';

const NotFoundContainer = styled.div`
    text-align: center;
    margin-top: 3.125rem;

    @media (max-width: 768px) {
        padding: 2.5rem;
    }
`;

const NotFoundTitle = styled.h1`
    color: #ff6347;
`;

const GoToHome = styled.h1`
    text-decoration: none;
`;

const StyledButton = styled.a`
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 0.7rem;
    box-shadow: darkgrey 0.9375rem 1.75rem 1.75rem -1.125rem;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-weight: 500;
    line-height: 0.6rem;
    outline: none;
    padding: 1rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0.5rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0.125rem 0.5rem 0.5rem -0.3125rem;
        transform: translate3d(0, 2px, 0);
    }

    @media (max-width: 200px) {
        line-height: 1rem;
    }
`;

export { StyledButton, GoToHome, NotFoundContainer, NotFoundTitle };
