import React from 'react'
import TextField from '@mui/material/TextField';
import "./RenderInput.css";

export default function RenderInput(props) {

    const { name, value, onChange, error = "error" } = props;

    return (
        <div>
            <TextField variant="outlined" placeholder={name} value={value} onChange={onChange} size="small" />
            <div className='error-text'>{error}</div>
        </div>
    )
}
