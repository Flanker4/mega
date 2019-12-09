import styled from "styled-components";
import { Form, Field } from "formik";

export const AuthForm = styled(Form)`
  max-width: 600px;
  padding: 26px 20px;
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  flex-direction: column;
`;

export const AuthInput = styled(Field)`
  box-sizing: border-box;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  display: block;
  width: 100%;
  line-height: 1.25;
  color: #55595c;
  background-color: #fff;
  background-image: none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);

  margin: 0 0 1em 0;
`;

export const AuthButton = styled.button`
  color: #fff;
  background-color: #5cb85c;
  border-color: #5cb85c;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
  display: block;
  font-weight: 400;
  line-height: 1.25;
  text-align: center;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  margin: 0 0 1em 0;
`;

export const ErrorHint = styled.div`
  text-align: left;
  box-sizing: border-box;
  margin: 0 0 0.5em 0.1em;
  color: red;
  font-size: 0.25rem;
`;
