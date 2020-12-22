/**
 *
 * LoginForm
 *
 */

import * as React from 'react';
import styled from 'styled-components/macro';
import { Input } from './components/Input';
import { withFormik, FormikProps, FormikErrors } from 'formik';
import { useAuth } from 'utils/use-auth';
import { AuthForm } from 'types/authTypes';

const API_URL = process.env.REACT_APP_API_URL;

const InnerLogin = (props: FormikProps<AuthForm>) => {
  const { values, errors, touched, handleSubmit, isSubmitting } = props;

  return (
    <FormGroup onSubmit={handleSubmit}>
      <InputWrapper>
        <Input type="text" placeholder="Username" value={values.username} />
        <Input type="text" placeholder="Password" value={values.password} />
        <button
          type="submit"
          disabled={
            isSubmitting ||
            !!(errors.username && touched.username) ||
            !!(errors.password && touched.password)
          }
        />
      </InputWrapper>
    </FormGroup>
  );
};

export const LoginForm = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validate: values => {
    const errors: FormikErrors<AuthForm> = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  },
  handleSubmit: (authForm: AuthForm, { setSubmitting, setErrors, auth }) => {
    setErrors = auth.login(authForm);
    setSubmitting(false);
  },
})(InnerLogin);

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
