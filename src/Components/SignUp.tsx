import React from "react";
import { Link } from "react-router-dom";

export const SignUp = (props: any) => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input placeholder="Email" />

        <input placeholder="Password" />
        <input placeholder="Confirm Password" />
        <button>Sign Up</button>
        <Link to="/sign_in">Have an account?</Link>
      </form>
    </div>
  );
};
