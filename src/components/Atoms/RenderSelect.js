import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function RenderSelect(props) {

    const { name, value, onChange, options } = props;


    return (
        <Select
            name={name}
            value={value}
            defaultValue="hello"
            onChange={onChange}
            style={{ width: 120 }}
            size="small"
            placeholder='hello'
        >
            {options.map((item, index) => {
                return (
                    <MenuItem value={item.value}>{item.label}</MenuItem>
                )
            })}
        </Select>
    )
}
