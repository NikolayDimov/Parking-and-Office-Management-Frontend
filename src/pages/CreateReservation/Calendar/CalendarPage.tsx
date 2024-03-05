import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Select from 'react-select';
import {
    CalendarContainer,
    StyledAppContainer,
    StyledCalendarContainer,
    StyledTimePicker,
    StyledTimePickerContainer,
} from './Calendar.style';
import { BaseButton } from '../../../components/CommonStyledElements';
import { useCalendar } from './Calendar.logic';
import { useEffect } from 'react';
import { dataProps } from './Calendar.static';

const CalendarPage = ({ sendDateTime = () => {}, spotType }: dataProps) => {
    const {
        dateTime,
        handleMakeReservation,
        state,
        handleTimeChange,
        dateRangePickerProps,
        endTimeOptions,
        timeOptions,
        selectedTime,
    } = useCalendar();

    useEffect(() => {
        if (dateTime) {
            sendDateTime(dateTime);
        }
    }, [dateTime, sendDateTime]);

    return (
        <>
            <CalendarContainer>
                <StyledAppContainer className="outer-container">
                    <StyledAppContainer>
                        {spotType.name === 'Office desk' || spotType.name === 'Parking place' ? (
                            <StyledCalendarContainer>
                                <DateRangePicker {...dateRangePickerProps} />
                            </StyledCalendarContainer>
                        ) : (
                            <>
                                <StyledCalendarContainer>
                                    <DateRangePicker {...dateRangePickerProps} />
                                </StyledCalendarContainer>
                                <StyledTimePickerContainer>
                                    {state[0]?.startDate && (
                                        <StyledTimePicker>
                                            <label>Start Time:</label>
                                            <Select
                                                options={timeOptions}
                                                value={
                                                    selectedTime.startTime
                                                        ? {
                                                              value: selectedTime.startTime,
                                                              label: selectedTime.startTime,
                                                          }
                                                        : null
                                                }
                                                onChange={(selectedOption) =>
                                                    handleTimeChange(
                                                        selectedOption || { value: '', label: '' },
                                                        'startTime',
                                                    )
                                                }
                                                className="custom-time-picker"
                                            />
                                            {state[0]?.endDate && (
                                                <>
                                                    <label>End Time:</label>
                                                    <Select
                                                        options={endTimeOptions.filter((option) => !option.isDisabled)}
                                                        value={
                                                            selectedTime.endTime
                                                                ? {
                                                                      value: selectedTime.endTime,
                                                                      label: selectedTime.endTime,
                                                                  }
                                                                : null
                                                        }
                                                        onChange={(selectedOption) =>
                                                            handleTimeChange(
                                                                selectedOption || { value: '', label: '' },
                                                                'endTime',
                                                            )
                                                        }
                                                        className="custom-time-picker"
                                                    />
                                                </>
                                            )}
                                        </StyledTimePicker>
                                    )}
                                </StyledTimePickerContainer>
                            </>
                        )}
                    </StyledAppContainer>
                    <BaseButton
                        className="reservation-btn"
                        onClick={() => {
                            handleMakeReservation();
                        }}
                    >
                        Set Reservation Period
                    </BaseButton>
                </StyledAppContainer>
            </CalendarContainer>
        </>
    );
};

export default CalendarPage;
