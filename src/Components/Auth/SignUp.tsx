import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { AuthForm } from "./SigIn";
import { connect } from "react-redux";
import { authActions } from "../../redux/auth/actions";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SignUpProps {
  signUp: (payload: {
    username: string;
    email: string;
    password: string;
  }) => any;
}

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Required")
});

export const SignUp = ({ signUp }: SignUpProps) => {
  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      signUp(values);
      setSubmitting(false);
    },
    [signUp]
  );

  return (
    <div>
      <h1>Sign Up</h1>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {/*tslint:disable-next-line: jsx-no-multiline-js*/}
        {({ isSubmitting }) => (
          <AuthForm>
            <Field placeholder="Username" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field placeholder="Email" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field placeholder="Password" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            <Link to="/sign_in">Have an account?</Link>
          </AuthForm>
        )}
      </Formik>
    </div>
  );
};

export default connect(null, {
  signUp: authActions.signUp.started
})(SignUp);
