import { Link } from 'react-router-dom';
import styled from 'styled-components';

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--light-blue);
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background-color: var(--card-background);
    width: 100%;

    span {
        display: block;
        padding: 0.625rem;
        margin: 0.6375rem auto;
        font-weight: bold;
        width: 100%;
        border-radius: 0.3125rem;
    }
`;

const LocationImage = styled.img`
    width: 100%;
    height: 14rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
`;

const DeleteButton = styled.div`
    top: 0.625rem;
    right: 0.625rem;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    padding: 0.3125rem;
    border-radius: 50%;
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

const LinkContainer = styled(Link)`
    box-shadow: 0px 0px 6px 0px #615757;
    border-radius: 0.5rem;
`;

export { DeleteButton, LocationImage, InformationContainer, LinkContainer };
