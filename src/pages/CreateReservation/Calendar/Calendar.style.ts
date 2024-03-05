import styled from 'styled-components';

const CalendarContainer = styled.div`
    background-color: var(--blue-green-light);
    text-align: center;
    max-width: 37.5rem;
    width: auto;

    @media screen and (max-width: 400px) {
        padding: 0;
    }
`;

const StyledAppContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    border-radius: 0.625rem;
    background-color: var(--beige);
    font-family: Arial, sans-serif;

    &.outer-container {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.8rem;
        &.outer-container,
        .calendar {
            padding: 0;
            width: auto;
        }
    }
`;

const StyledCalendarContainer = styled.div`
    flex: 1;

    .rdrCalendarWrapper {
        border-radius: 0.625rem;
        border: 1px solid var(--brown);
        @media screen and (max-width: 400px) {
            max-width: 16.875rem;
            padding: 0;
        }
    }

    .rdrStaticRanges button {
        color: black !important;
    }

    .rdrDefinedRangesWrapper {
        display: none;
    }
`;

const StyledTimePickerContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: stretch;
    @media screen and (max-width: 640px) {
        flex-direction: column;
        padding-top: 0.625rem;
    }
`;

const StyledTimePicker = styled.div`
    background-color: #ffffff;
    border: 1px solid var(--brown);
    border-radius: 0.625rem;
    padding: 1.5625rem;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .custom-time-picker {
        color: black;
    }

    @media screen and (max-width: 640px) {
        & label {
            padding-top: 0.625rem;
            padding-bottom: 0.625rem;
        }
    }
`;

export { CalendarContainer, StyledTimePicker, StyledTimePickerContainer, StyledAppContainer, StyledCalendarContainer };
