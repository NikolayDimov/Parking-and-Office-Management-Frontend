import styled from 'styled-components';
import { BaseButton } from '../../components/CommonStyledElements';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 1.25rem;
`;

const ListContainer = styled.div`
    max-width: 93rem;
    margin: 0 auto;
    padding: 1.25rem;

    @media (max-width: 768px) {
        padding: 0.625rem;
    }
`;

const ContainerCreateSerch = styled.li`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ContainerCreate = styled.div`
    display: flex;
    justify-content: left;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const BaseButtonCreateLocation = styled(BaseButton)`
    font-size: 1rem;
    padding: 0.93rem;
`;

const LocationTableStyle = styled.table`
    width: 100%;
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    font-size: 1.2rem;

    caption {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    .table-head {
        background-color: var(--beige-light);
    }

    th,
    td {
        background-color: var(--blue-green-light);
        padding: 0.5rem;
    }

    th {
        background-color: #f2f2f2;
    }

    tr:first-child th:first-child {
        border-top-left-radius: 0.625rem;
    }
    tr:first-child th:last-child {
        border-top-right-radius: 0.625rem;
    }
    tr:last-child td:first-child {
        border-bottom-left-radius: 0.625rem;
    }
    tr:last-child td:last-child {
        border-bottom-right-radius: 0.625rem;
    }

    button {
        background-color: var(--beige);
        color: var(--grey-dark);
        border: none;
        padding: 0.3125rem 0.625rem;
        border-radius: 0.3125rem;
        cursor: pointer;
    }

    button:hover {
        background-color: var(--beige-light);
    }

    @media (max-width: 768px) {
        font-size: 1rem;
        border-collapse: unset;

        th {
            display: none;
        }

        td {
            display: block;
            text-align: left;
            border: none;

            button {
                margin: 0 auto;
                display: block;
            }
        }

        td::before {
            content: attr(data-label);
            float: left;
            font-weight: bold;
            margin-right: 0.625rem;
        }
    }
`;

export { LocationTableStyle, BaseButtonCreateLocation, ListContainer, Table, ContainerCreateSerch, ContainerCreate };
