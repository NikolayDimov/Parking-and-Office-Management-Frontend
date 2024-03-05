import styled from 'styled-components';

const ReservationSummaryContainer = styled.div`
    padding: 1.25rem;
`;

const ReservationSummaryList = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.25rem;

    gap: 2rem;
    margin-bottom: 1.25rem;
`;

const ReservationSummaryNoItems = styled.div`
    text-align: center;
    margin: 1.25rem 0;
`;

const ReservationSummaryListItem = styled.li`
    position: relative;
    border: 1px solid #ccc;
    width: 18.75rem;
    border-radius: 0.3125rem;
    padding: 0.625rem;
    margin-bottom: 0.625rem;
`;

const ReservationRemveButton = styled.button`
    position: absolute;
    top: 0.3125rem;
    right: 0.3125rem;
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 0.4rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #bd2130;
    }
`;

const SummaryButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 1.25rem auto;

    @media (max-width: 768px) {
        width: 80%;
        gap: 1.25rem;
    }
`;

const ReservationSummaryButton = styled.button`
    display: block;
    background-color: var(--blue-green);
    color: #fff;
    border: none;
    padding: 0.625rem 1.25rem;
    border-radius: 0.3125rem;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 10rem;
    margin: 0 auto;

    &:hover {
        background-color: #0056b3;
    }

    @media (max-width: 768px) {
        padding: 0.5rem 0.75rem;
        font-size: 1rem;
    }
`;

const AddNewReservationButton = styled(ReservationSummaryButton)`
    background-color: var(--brown-light);
`;

export {
    ReservationSummaryButton,
    ReservationSummaryContainer,
    ReservationSummaryList,
    ReservationSummaryListItem,
    ReservationSummaryNoItems,
    ReservationRemveButton,
    AddNewReservationButton,
    SummaryButtonContainer,
};
