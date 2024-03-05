import { DateRange } from 'react-date-range';
import { SpotType } from '../../SpotType/SpotTypeCards/SpotTypeCards.static';

interface DateRangePickerProps {
    onChange: (item: { [key: string]: DateRange }) => void;
    showPreview: boolean;
    moveRangeOnFirstSelection: boolean;
    months: number;
    ranges: DateRange[];
    direction: string;
    showDateDisplay: boolean;
    minDate: Date;
    maxDate?: Date | null | undefined;
}

interface CalendarData {
    data: DateRangeOutput;
}

interface TimeOption {
    value: string;
    label: string;
}

interface DateRangeOutput {
    startDate: string;
    endDate: string;
    key: string;
}

interface dataProps {
    sendDateTime: (data: DateRangeOutput) => void;
    spotType: SpotType;
}

export type { dataProps, DateRange, DateRangeOutput, DateRangePickerProps, CalendarData, TimeOption };
