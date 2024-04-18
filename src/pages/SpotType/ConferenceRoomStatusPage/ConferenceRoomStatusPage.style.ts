import styled from 'styled-components';

export interface ContainerProps {
    $backgroundColor: string;
}

const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.$backgroundColor};
    height: 92.84vh;
    overflow: hidden;
    padding: 1rem;
`;

const Title = styled.h1`
    text-align: center;
    margin-top: 2rem;
`;

const CenteredContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const ClockContainer = styled.div`
    text-align: center;
    margin-top: 2rem;
`;

const ReservationsTableStyle = styled.table`
    width: 100%;
    margin: 0 auto;
    margin: 3rem 0;
    text-align: center;
    font-size: 1.2rem;

    caption {
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .table-head {
        background-color: var(--beige-light);
        background-color: var(--light-blue);
    }

    th,
    td {
        background-color: var(--blue-green-light);

        padding: 0.5rem 1rem;
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
`;

const ContainerNoReservations = styled.div`
    margin-top: 8rem;
    font-size: 2rem;
    width: 100%;
    text-align: center;
`;

const NoReservations = styled.div``;

export {
    Container,
    Title,
    CenteredContent,
    ClockContainer,
    ReservationsTableStyle,
    NoReservations,
    ContainerNoReservations,
};
