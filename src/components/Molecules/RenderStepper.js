import React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { STEPS } from "../../utils/constants";

const RenderStepper = (props) => {
  const { activeStep } = props;

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className="stepper-container"
    >
      {STEPS.map((label, index) => {
        return (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
};

export default RenderStepper;
