import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../../Styles/CommonCSS.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function RenderSelect(props) {
  const { name, value, onChange, options, error, placeHolder } = props;

  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "100%", margin: 0 }}
        size="small"
        fullWidth
      >
        <InputLabel id="demo-simple-select-label">{placeHolder}</InputLabel>
        <Select
          name={name}
          value={value}
          onChange={onChange}
          label={placeHolder}
        >
          {options.map((item, index) => {
            return (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <div className="error-text">{error}</div>
    </div>
  );
}
