import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Route, NavLink } from 'react-router-dom';

import { validate } from '../../helpers/formValidate';

import './style.css';

const renderField = ({
  input,
  label,
  className,
  type,
  meta: { touched, error },
}) => (
  <Fragment>
    <input {...input} placeholder={label} type={type} className={className} />
    {touched && (error && <p className="error">{error}</p>)}
  </Fragment>
);

const SignForm = props => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="sign-form">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <NavLink
            to="/sign-in"
            className="linkSignForm"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Sign in
          </NavLink>
          <NavLink
            to="/sign-up"
            className="linkSignForm"
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            Sign up
          </NavLink>

          <Field
            className="sign-up sign-in"
            name="email"
            component={renderField}
            type="email"
            label="Email"
          />
          <Field
            className="sign-up sign-in"
            name="password"
            component={renderField}
            type="password"
            label="Password"
          />
          <Route />

          <Route
            path="/sign-up"
            render={() => (
              <Field
                className="sign-up"
                name="confirmPassword"
                component={renderField}
                type="password"
                label="Repeat Password"
              />
            )}
          />

          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
};

export default reduxForm({
  form: 'signForm',
  validate,
})(SignForm);
