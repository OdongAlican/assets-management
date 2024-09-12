import { FieldError, FieldValues } from 'react-hook-form';

export interface IButton {
    sendingRequest: boolean;
    variant?: "contained" | "outlined"
    buttonText: string;
    buttonColor: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning";
    type?: "button" | "submit" | "reset";
}

export interface IInputForm {
    field: FieldValues;
    error: FieldError | undefined;
    label: string;
    type?: string;
    id: string;
    adornment?: boolean;
    required?: boolean
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface IInputPropAdornment {
    handleClick?: () => void;
    handleMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void
    optional?: boolean;
    position?: 'start' | 'end';
}

export interface IChip {
    label: string;
    icon: JSX.Element;
    variant?: "filled" | "outlined";
    size: "small" | "medium"
    color: "primary" | "secondary" | "error" | "info" | "success" | "warning"
}