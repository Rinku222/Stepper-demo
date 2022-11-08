import { Grid } from "@mui/material";
import React from "react";
import RenderButtons from "../Atoms/RenderButtons";
import RenderInput from "../Atoms/RenderInput";
import { Formik } from "formik";
import RenderSelect from "../Atoms/RenderSelect";
import * as yup from "yup";

const schema = yup.object({
  Country: yup.string().required("Country is a required Field"),
  city: yup.string().required("City is a required Field"),
  address1: yup.string().required("Address 1 is a required Field"),
  address2: yup.string().required("Address 2 is a required Field"),
  state: yup.string().required("State is a required Field"),
  PinCode: yup
    .string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 digits")
    .required("PinCode is a required Field"),
});

const UserAddress = (props) => {
  const { handleBack, activeStep, setData, data, handleNext } = props;

  const {
    address1 = "",
    address2 = "",
    state = "",
    city = "",
    Country = "",
    PinCode = "",
  } = data?.[1] || {};

  const onSubmit = (values) => {
    console.log("values in onsubmit", values);
    setData({ ...data, 1: values });
    handleNext();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        address1: address1,
        address2: address2,
        state: state,
        city: city,
        Country: Country,
        PinCode: PinCode,
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ handleChange, values, errors, handleSubmit }) => {
        return (
          <>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <RenderInput
                  name="address1"
                  value={values.address1}
                  onChange={handleChange}
                  error={errors.address1}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="address2"
                  value={values.address2}
                  onChange={handleChange}
                  error={errors.address2}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderSelect
                  name="state"
                  value={values.state}
                  onChange={handleChange}
                  options={["gujarat", "maharashtra"]}
                  error={errors.state}
                  placeHolder="State"
                />
              </Grid>
              <Grid item xs={6}>
                <RenderSelect
                  name="city"
                  value={values.city}
                  onChange={handleChange}
                  options={["gujarat", "maharashtra"]}
                  error={errors.city}
                  placeHolder="City"
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="Country"
                  value={values.name}
                  onChange={handleChange}
                  error={errors.Country}
                  placeHolder="Country"
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="PinCode"
                  value={values.PinCode}
                  onChange={handleChange}
                  error={errors.PinCode}
                />
              </Grid>
            </Grid>
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

export default UserAddress;
