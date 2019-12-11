import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../../redux/auth/actions";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IStore } from "../../redux";
import { AuthForm, AuthInput, AuthButton, ErrorHint } from "./common";

interface SignInProps {
  isLoading: boolean;
  signIn: (payload: { email: string; password: string }) => any;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .required("Required")
});

const SignIn = ({ signIn, isLoading }: SignInProps) => {
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
          <ErrorMessage name="email" component={ErrorHint} />
          <AuthInput placeholder="Email" type="email" name="email" />
          <ErrorMessage name="password" component={ErrorHint} />
          <AuthInput placeholder="Password" type="password" name="password" />
          <AuthButton type="submit" disabled={isLoading}>
            Submit
          </AuthButton>
          <Link to="/sign_up">Have an account?</Link>
        </AuthForm>
      </Formik>
    </div>
  );
};

export { SignIn };

export default connect(
  ({ auth }: IStore) => ({
    isLoading: auth.isLoading
  }),
  {
    signIn: authActions.signIn.started
  }
)(SignIn);
