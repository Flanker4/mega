import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { authActions } from "../../redux/auth/actions";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const AuthForm = styled(Form)`
  max-width: 600px;
  padding: 26px 20px;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  flex-direction: column;
`;

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Required")
});

interface SignInProps {
  signIn: (payload: { username: string; password: string }) => any;
}

const SignIn = ({ signIn }: SignInProps) => {
  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      signIn(values);
      setSubmitting(false);
    },
    [signIn]
  );

  return (
    <div>
      <h1>Sign In</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={handleSubmit}
      >
        <AuthForm>
          <Field placeholder="Email" type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <Field placeholder="Password" type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit">Submit</button>
          <Link to="/sign_up">Have an account?</Link>
        </AuthForm>
      </Formik>
    </div>
  );
};

export default connect(null, {
  signIn: authActions.signIn.started
})(SignIn);
