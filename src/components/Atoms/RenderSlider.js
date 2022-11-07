import React from 'react'
import Slider from '@mui/material/Slider';

export default function RenderSlider(props) {

    const { name, value, onChange } = props;

    return (
        <Slider
            name='name'
            value={value}
            onChange={onChange}
            size="small"
            defaultValue={70}
            aria-label="Small"
            valueLabelDisplay="auto"
        />
    )
}
