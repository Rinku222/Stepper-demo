import React from "react";
import TextField from "@mui/material/TextField";
import "../../Styles/CommonCSS.css";

export default function RenderInput(props) {
  const { name, value, onChange, error, type = "string" } = props;

  return (
    <div>
      <TextField
        name={name}
        fullWidth
        variant="outlined"
        placeholder={name}
        value={value}
        onChange={onChange}
        size="small"
        type={type}
      />
      <div className="error-text">{error}</div>
    </div>
  );
}
