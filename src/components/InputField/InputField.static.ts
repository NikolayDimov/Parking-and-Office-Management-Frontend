import { ChangeEvent } from 'react';

interface InputProps {
    type?: string;
    id?: string;
    label?: string;
    value?: string | number | boolean;
    name?: string;
    className?: string;
    placeholder?: string;
    checked?: boolean;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    defaultValue?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
    readonly?: boolean;
}

export type { InputProps };
