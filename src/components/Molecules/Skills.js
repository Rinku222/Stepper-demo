import React from "react";
import { Formik } from "formik";
import { Checkbox, Grid } from "@mui/material";
import RenderButtons from "../Atoms/RenderButtons";
import RenderSlider from "../Atoms/RenderSlider";
import * as yup from "yup";
import "./Skills.css";
import RenderRating from "../Atoms/RenderRating";

const schema = yup.object({
  hindi: yup.string().required("Hindi selection is a required Field"),
  english: yup.string().required("English selection is a required Field"),
  gujarati: yup.string().required("Gujarati selection is a required Field"),
  HTML: yup.string().required("Rate your HTML Skills"),
  CSS: yup.string().required("Rate your CSS Skills"),
  ES6: yup.string().required("Rate your ES6 Skills"),
  React: yup.string().required("Rate your React Skills"),
  Redux: yup.string().required("Rate your Redux Skills"),
  terms: yup.bool().oneOf([true], "You must have to accept T & C"),
});

const Skills = (props) => {
  const { activeStep, handleBack, handleNext, setData, data } = props;

  const onSubmit = (values) => {
    setData({ ...data, 2: values });
    handleNext();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{}}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, values, errors, handleSubmit, setFieldValue }) => {
        return (
          <>
            <div className="heading">RATE YOUR SKILLS</div>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <RenderRating
                  name="HTML"
                  title="HTML"
                  value={values.HTML}
                  setFieldValue={setFieldValue}
                  error={errors.HTML}
                />
              </Grid>
              <Grid item xs={3}>
                <RenderRating
                  name="CSS"
                  title="CSS"
                  value={values.CSS}
                  setFieldValue={setFieldValue}
                  error={errors.CSS}
                />
              </Grid>
              <Grid item xs={3}>
                <RenderRating
                  name="ES6"
                  title="ES6"
                  value={values.ES6}
                  setFieldValue={setFieldValue}
                  error={errors.ES6}
                />
              </Grid>
              <Grid item xs={3}>
                <RenderRating
                  name="React"
                  title="React"
                  value={values.React}
                  setFieldValue={setFieldValue}
                  error={errors.React}
                />
              </Grid>
              <Grid item xs={3}>
                <RenderRating
                  name="Redux"
                  title="Redux"
                  value={values.Redux}
                  setFieldValue={setFieldValue}
                  error={errors.Redux}
                />
              </Grid>
            </Grid>
            <div className="heading">RATE YOUR LANGUAGE PROFICIENCY LEVEL</div>
            <Grid container spacing={4}>
              <Grid item xs={3}>
                <RenderSlider
                  name="english"
                  value={values.english}
                  onChange={handleChange}
                  error={errors.english}
                  title="English"
                />
              </Grid>
              <Grid item xs={3}>
                <RenderSlider
                  name="hindi"
                  value={values.english}
                  onChange={handleChange}
                  error={errors.hindi}
                  title="Hindi"
                />
              </Grid>
              <Grid item xs={3}>
                <RenderSlider
                  name="gujarati"
                  value={values.english}
                  onChange={handleChange}
                  error={errors.gujarati}
                  title="Gujarati"
                />
              </Grid>
            </Grid>
            <div className="terms-container">
              <Checkbox
                name="terms"
                onChange={(e) => setFieldValue("terms", e.target.checked)}
              />
              <div>Terms And Condition</div>
            </div>
            {console.log("values", values)}
            {console.log("errors", errors)}
            <RenderButtons
              handleNext={handleSubmit}
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </>
        );
      }}
    </Formik>
  );
};

export default Skills;
