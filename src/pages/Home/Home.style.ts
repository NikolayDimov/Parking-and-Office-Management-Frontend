import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: column;
    gap: 5rem;
    align-items: center;

    @media (max-width: 450px) {
        display: block;
    }

    h1 {
        margin-top: 3rem;
        margin-bottom: 3rem;
        text-align: center;

        @media (max-width: 450px) {
            margin-bottom: 2rem;
        }
    }

    ul {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        gap: 2rem;
        margin-bottom: 1.25rem;
    }

    li {
        transition: transform 0.3s ease;
        cursor: pointer;
        margin: 0.625rem;
        /* flex: 1; */
        max-width: 25rem;
        /* width: calc(33.333% - 1.25rem); */
        width: 25rem;
        &:hover {
            transform: translateY(-5px);
        }

        @media (max-width: 450px) {
            margin: 0 1rem;
        }
    }

    a {
        display: block;
        text-decoration: none;
        color: #000;
        text-align: center;
        overflow: hidden;
        margin: 0 auto;
    }
`;

export { HomeContainer };
