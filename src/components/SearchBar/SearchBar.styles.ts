import styled from 'styled-components';

const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 25rem;
        padding: 0.625rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.3125rem;

        @media (max-width: 768px) {
            width: 100%;
        }
    }

    button {
        padding: 0.625rem 1.25rem;
        font-size: 1rem;
        background-color: #007bff;
        color: #fff;
        border: none;
        border-radius: 0.3125rem;
        cursor: pointer;
    }
`;

export { SearchBarWrapper };
