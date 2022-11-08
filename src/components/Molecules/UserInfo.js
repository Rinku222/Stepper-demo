import {
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import RenderButtons from "../Atoms/RenderButtons";
import RenderInput from "../Atoms/RenderInput";
import { Formik } from "formik";
import * as yup from "yup";
import "../../Styles/CommonCSS.css";

const schema = yup.object({
  firstName: yup.string().required("Full Name is a required Field"),
  middleName: yup.string().required("Middle Name is a required Field"),
  lastName: yup.string().required("Last Name is a required Field"),
  age: yup.number("Must be number").required("Age is a required Field"),
  birthday: yup.string().required("Birthday is a required Field"),
  blood: yup.string().required("Blood group is a required Field"),
  height: yup.number().required("Height is a required Field"),
  weight: yup.number().required("Weight is a required Field"),
  gender: yup.string().required("Gender is a required Field"),
  martialStatus: yup.string().required("Martial-Status is a required Field"),
  mobile: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(8)
    .required("A phone number is a required Field"),
  email: yup
    .string()
    .email("Not a proper email")
    .required("Email id is a required Field"),
});

const UserInfo = (props) => {
  const { handleBack, activeStep, setData, data, handleNext } = props;

  const {
    firstName = "",
    middleName = "",
    lastName = "",
    mobile = "",
    email = "",
    birthday = "",
    age = "",
    blood = "",
    weight = "",
    height = "",
    gender = "",
    martialStatus = "",
  } = data?.[0] || {};

  const onSubmit = (values) => {
    setData({ ...data, 0: values });
    handleNext();
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        birthday: birthday,
        age: age,
        blood: blood,
        weight: weight,
        height: height,
        gender: gender,
        martialStatus: martialStatus,
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
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  error={errors.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="middleName"
                  value={values.middleName}
                  onChange={handleChange}
                  error={errors.middleName}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  error={errors.lastName}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="mobile"
                  type="number"
                  value={values.mobile}
                  onChange={handleChange}
                  error={errors.mobile}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="birthday"
                  value={values.birthday}
                  onChange={handleChange}
                  error={errors.birthday}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="age"
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  error={errors.age}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="blood"
                  value={values.blood}
                  onChange={handleChange}
                  error={errors.blood}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="height"
                  type="number"
                  value={values.height}
                  onChange={handleChange}
                  error={errors.height}
                />
              </Grid>
              <Grid item xs={6}>
                <RenderInput
                  name="weight"
                  type="number"
                  value={values.weight}
                  onChange={handleChange}
                  error={errors.weight}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography>Gender</Typography>
                <RadioGroup row name="gender" onChange={handleChange}>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
                <div className="error-text">{errors.gender}</div>
              </Grid>
              <Grid item xs={6}>
                <Typography>Martial Status</Typography>
                <RadioGroup row name="martialStatus" onChange={handleChange}>
                  <FormControlLabel
                    value="single"
                    control={<Radio />}
                    label="Single"
                  />
                  <FormControlLabel
                    value="married"
                    control={<Radio />}
                    label="Married"
                  />
                  <FormControlLabel
                    value="divorced"
                    control={<Radio />}
                    label="Divorced"
                  />
                  <FormControlLabel
                    value="widowed"
                    control={<Radio />}
                    label="Widowed"
                  />
                </RadioGroup>
                <div className="error-text">{errors.martialStatus}</div>
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

export default UserInfo;
