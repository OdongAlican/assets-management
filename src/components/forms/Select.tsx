import { useState, useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ISelectComponent } from './interface';

const SelectComponent = ({
    label,
    options,
    required,
    field,
    error,
    id
}: ISelectComponent) => {
    const [option, setOption] = useState<string | undefined>(field?.value || '');

    useEffect(() => {
        setOption(field?.value || '');
    }, [field?.value]);

    const handleChange = (event: SelectChangeEvent<string>) => {
        setOption(event.target.value as string);
        if (field?.onChange) {
            field.onChange(event);
        }
    };

    return (
        <FormControl size='small' fullWidth>
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                required={required}
                {...field}
                error={Boolean(error)}
                labelId={id}
                id={id}
                value={option}
                label={label}
                onChange={handleChange}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default SelectComponent;