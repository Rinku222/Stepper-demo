import React from "react";
import { Formik } from 'formik';
import RenderInput from "../components/Atoms/RenderInput";
import RenderSelect from "../components/Atoms/RenderSelect";
import RenderSlider from "../components/Atoms/RenderSlider";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const options = [
    { label: "hello", value: "hello" },
    { label: "world", value: "world" }
]

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

const Stepper1 = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    return (
        <div>
            <Formik
                initialValues={{}}
                // validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ values, errors, touched, handleChange }) => (
                    <div>
                        {console.log("values", values)}
                        {/* <input name="input" value={values.input} onChange={handleChange} /> */}
                        {/* <RenderInput name="name" value={values.name} onChange={handleChange} /> */}
                        {/* <RenderSelect name="name" value={values.name} onChange={handleChange} options={options} /> */}
                        {/* <div style={{ marginTop: 100, width: 100 }} >
                            <RenderSlider name="name" value={values.name} onChange={handleChange} />
                        </div> */}
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label} >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Stepper1;