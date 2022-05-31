import React from "react";
import Stepper from "@mui/material/Stepper";

const ProgressBar = () => {
  return (
    <>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};
export default ProgressBar;
