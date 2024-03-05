import styled from 'styled-components';

const StyledCalendarIcon = styled.div`
    position: relative;
    cursor: pointer;
    padding-right: 1.5625rem;

    .calendar-icon {
        height: 1.5625rem;
        width: 1.5625rem;
        transition: transform 0.3s ease-in-out;
        color: #000;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (max-width: 768px) {
        margin-left: 1.875rem;
        color: #fff;
    }
`;

const CalendarCount = styled.span`
    position: absolute;
    top: -0.4375rem;
    right: 0.75rem;
    background-color: #3498db;
    color: #fff;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { CalendarCount, StyledCalendarIcon };
