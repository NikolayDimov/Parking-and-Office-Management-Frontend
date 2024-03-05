import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { DateRangeOutput, DateRangePickerProps } from './Calendar.static';

const useCalendar = () => {
    const [state, setState] = useState<DateRange[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection',
        },
    ]);

    const [dateTime, setDateTime] = useState<DateRangeOutput>();

    const [selectedTime, setSelectedTime] = useState({
        startTime: '00:00',
        endTime: '24:00',
    });

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 365);

    const handleTimeChange = (selectedOption: { value: string; label: string }, type: 'startTime' | 'endTime') => {
        const time = selectedOption.value;
        setSelectedTime((prev) => ({
            ...prev,
            [type]: time,
        }));
    };

    const handleMakeReservation = () => {
        const selectedStartTime = selectedTime.startTime;
        const selectedEndTime = selectedTime.endTime;

        const formattedStartDate = state[0]?.startDate ? new Date(state[0]?.startDate) : null;
        const formattedEndDate = state[0]?.endDate ? new Date(state[0]?.endDate) : null;

        if (formattedStartDate && formattedEndDate) {
            formattedStartDate.setHours(parseInt(selectedStartTime.split(':')[0], 10));
            formattedStartDate.setMinutes(parseInt(selectedStartTime.split(':')[1], 10));
            formattedStartDate.setSeconds(0);
            formattedStartDate.setMilliseconds(0);
            const startDateOutput = new Date(formattedStartDate).toISOString();

            formattedEndDate.setHours(parseInt(selectedEndTime.split(':')[0], 10));
            formattedEndDate.setMinutes(parseInt(selectedEndTime.split(':')[1], 10));
            formattedEndDate.setSeconds(0);
            formattedEndDate.setMilliseconds(0);
            const newEndDate = formattedEndDate;
            const endDateOutput = new Date(newEndDate).toISOString();

            if (startDateOutput && endDateOutput) {
                setDateTime({
                    startDate: startDateOutput,
                    endDate: endDateOutput,
                    key: 'selection',
                });
            }
        }
    };

    const startHour = 0;
    const endHour = 24;

    const timeOptions = Array.from({ length: endHour - startHour + 1 }, (_, i) => {
        const hour = startHour + i;
        return {
            value: `${hour < 10 ? '0' : ''}${hour}:00`,
            label: `${hour < 10 ? '0' : ''}${hour}:00`,
        };
    });

    const disabledEndTimes = timeOptions
        .map((option) => option.value)
        .filter((value) => value <= selectedTime.startTime);

    const endTimeOptions = timeOptions.map((option) => ({
        ...option,
        isDisabled: disabledEndTimes.includes(option.value),
    }));

    const dateRangePickerProps: DateRangePickerProps = {
        onChange: (item) => setState([item.selection]),
        showPreview: true,
        moveRangeOnFirstSelection: false,
        months: 1,
        ranges: state,
        direction: 'horizontal',
        showDateDisplay: false,
        minDate: new Date(),
        maxDate: maxDate,
    };

    return {
        dateTime,
        state,
        handleTimeChange,
        dateRangePickerProps,
        endTimeOptions,
        handleMakeReservation,
        timeOptions,
        selectedTime,
    };
};

export { useCalendar };
