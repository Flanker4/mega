import React, { useCallback } from "react";
import { Formik, ErrorMessage } from "formik";
import { AuthForm, AuthInput, ErrorHint, AuthButton } from "../Auth/common";
import * as Yup from "yup";
import { sendMessage } from "../../redux/feed/saga";

interface EnterMessageProps {
  sendMessage: (payload: { message: string }) => void;
}

const MessageValidationScheme = Yup.object().shape({
  message: Yup.string()
    .min(1)
    .required("Required")
});

const EnterMessage = ({ sendMessage }: EnterMessageProps) => {
  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      sendMessage({ message: values.message });
      setSubmitting(false);
    },
    [sendMessage]
  );

  return (
    <div>
      <Formik
        initialValues={{ message: "" }}
        validationSchema={MessageValidationScheme}
        onSubmit={handleSubmit}
      >
        <AuthForm>
          <ErrorMessage name="message" component={ErrorHint} />
          <AuthInput
            placeholder="Send new message"
            type="text"
            name="message"
          />
          <AuthButton type="submit">Submit</AuthButton>
        </AuthForm>
      </Formik>
    </div>
  );
};

export { EnterMessage };
