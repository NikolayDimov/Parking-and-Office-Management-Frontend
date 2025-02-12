import styled from 'styled-components';

const StyledCalendarIcon = styled.div`
    position: relative;
    cursor: pointer;

    .calendar-icon {
        height: 1.5625rem;
        width: 1.5625rem;
        transition: transform 0.3s ease-in-out;
        color: #e7eaf0;

        &:hover {
            transform: scale(1.1);
            color: #999;
        }
    }

    @media (max-width: 768px) {
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
