import styled from 'styled-components';

export const DetailBulletContainer = styled.li`
    display: flex;
    align-items: center;
    margin: 0.5rem 0.5rem;
    background-color: var(--beige-light);
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    img {
        margin-top: 0.1875rem;
        margin-right: 0.3125rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    span {
        margin-bottom: 0.1875rem;
        font-size: 1rem;
        font-weight: bold;
    }
`;
