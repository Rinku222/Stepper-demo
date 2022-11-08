import React from "react";
import Slider from "@mui/material/Slider";
import "../../Styles/CommonCSS.css";

export default function RenderSlider(props) {
  const { name, value, onChange, error, title } = props;

  return (
    <div>
      <div className="heading">{title}</div>
      <Slider
        name={name}
        value={value}
        onChange={onChange}
        size="small"
        defaultValue={0}
        aria-label="Small"
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={10}
      />
      <div className="error-text">{error}</div>
    </div>
  );
}
