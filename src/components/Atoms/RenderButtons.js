import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
// import "./CommonCSS.css";
import "../../Styles/CommonCSS.css";

function RenderButtons(props) {
  const { activeStep, handleNext, handleBack } = props;

  return (
    <Grid container justifyContent={"flex-start"} className="button-container">
      <Button
        disabled={!activeStep}
        variant="contained"
        color="primary"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button color="primary" variant="contained" onClick={handleNext}>
        {activeStep === 2 ? "Finish" : "Next"}
      </Button>
    </Grid>
  );
}

export default RenderButtons;
