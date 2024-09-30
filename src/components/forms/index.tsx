import { FormControl, FormHelperText } from '@mui/material';
import React from 'react';
import {
    Control,
    Controller,
    FieldValues,
    FormState,
    UseFormRegister,
    Path
} from 'react-hook-form';
import { InputComponent } from './Inputs';
import SelectComponent from './Select';
import { IOptions } from '../tables/interface';

interface IUseFormInput<T extends FieldValues> {
    register: UseFormRegister<any>;
    control: Control<any>;
    formState: FormState<T> & {
        errors: any;
    };
    value: Path<T>;
    label: string;
    type?: string;
    options?: IOptions[]
}


export const UseFormInput = <T extends FieldValues>({
    register,
    control,
    formState,
    value,
    label,
    type = "input"
}: IUseFormInput<T>) => {
    return (
        <React.Fragment>
            <FormControl fullWidth>
                <Controller
                    control={control}
                    {...register(value)}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <InputComponent
                            type={type}
                            required
                            label={label}
                            field={field}
                            error={formState.errors[value]?.message}
                            id={value}
                        />
                    )}
                />
                {formState.errors[value] && (
                    <FormHelperText sx={{ color: 'error.main' }}>
                        {formState.errors[value].message}
                    </FormHelperText>
                )}
            </FormControl>
        </React.Fragment>
    );
}

export const UseFormSelect = <T extends FieldValues>({
    register,
    control,
    formState,
    value,
    label,
    options
}: IUseFormInput<T>) => {
    return (
        <React.Fragment>
            <FormControl fullWidth>
                <Controller
                    control={control}
                    {...register(value)}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <SelectComponent
                            id={value}
                            field={field}
                            error={formState.errors[value]}
                            required label={label}
                            options={options as IOptions[]}
                        />
                    )}
                />
                {formState.errors[value] && (
                    <FormHelperText sx={{ color: 'error.main' }}>{formState.errors[value].message}</FormHelperText>
                )}
            </FormControl>
        </React.Fragment>
    )
}