import React from "react";
import RenderStepper from "../components/Molecules/RenderStepper";
import UserInfo from "../components/Molecules/UserInfo";
import UserAddress from "../components/Molecules/UserAddress";
import Skills from "../components/Molecules/Skills";
import ThankYou from "../components/Molecules/ThankYou";
import "../Styles/CommonCSS.css";

function StepContent(props) {
  const { activeStep } = props;

  switch (activeStep) {
    case 0:
      return <UserInfo {...props} />;
    case 1:
      return <UserAddress {...props} />;
    case 2:
      return <Skills {...props} />;
    case 3:
      return <ThankYou {...props} />;
    default:
      return <UserInfo {...props} />;
  }
}

const MainScreen = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  const [data, setData] = React.useState({});

  return (
    <div>
      <>
        <RenderStepper activeStep={activeStep} />
        <div className="step-content-container">
          <StepContent
            activeStep={activeStep}
            handleBack={handleBack}
            data={data}
            setData={setData}
            handleNext={handleNext}
          />
        </div>
      </>
    </div>
  );
};

export default MainScreen;
