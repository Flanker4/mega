import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AuthForm = styled.form`
  max-width: 600px;
  padding: 26px 20px;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  flex-direction: column;
`;

export const SignIn = (props: any) => {
  return (
    <div>
      <h1>Sign In</h1>
      <AuthForm>
        <input placeholder="Email" />

        <input placeholder="Password" />
        <button>Sign In</button>
        <Link to="/sign_up">Need an account?</Link>
      </AuthForm>
    </div>
  );
};
