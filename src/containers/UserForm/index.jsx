import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Fa } from 'mdbreact';

import {
  formFieldChange,
  formValidation,
  changeTypeForm,
  formAsyncValidation,
  formClean,
} from '../../actions/FormActions';

import { getTypeForm, getPathForRedirect } from '../../selectors/index';
import FormValidator, {
  validatingFieldsForLoginForm,
  validatingFieldsForRegistrationForm,
} from '../../helpers/FormValidator';
import LoginForm from '../../components/LoginForm/index';
import RegistrationForm from '../../components/RegistrationForm/index';
import PropTypes from 'prop-types';

class UserForm extends Component {
  static propTypes = {
    user: PropTypes.object,
    form: PropTypes.object.isRequired,
    typeForm: PropTypes.string.isRequired,
    redirectPath: PropTypes.string.isRequired,
    formFieldChange: PropTypes.func.isRequired,
    formValidation: PropTypes.func.isRequired,
    formAsyncValidation: PropTypes.func.isRequired,
    changeTypeForm: PropTypes.func.isRequired,
    formClean: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.validator = null;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderError = this.renderError.bind(this);
  }

  componentDidMount() {
    this.props.changeTypeForm(this.props.typeForm);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.typeForm !== nextProps.typeForm)
      this.props.changeTypeForm(nextProps.typeForm);
    if (
      nextProps.form.isValid &&
      this.props.form.isValid !== nextProps.form.isValid
    )
      this.props.formAsyncValidation();
  }

  componentWillUnmount() {
    const { formClean } = this.props;
    formClean();
  }

  handleChange = field => event => {
    const { formFieldChange } = this.props;
    formFieldChange(field, event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const { formValidation } = this.props;
    const { name, email, password, passwordConfirmation } = this.props.form;
    const dataFromValidation = {
      name,
      email,
      password,
      passwordConfirmation,
    };
    const validation = this.validator.validate(dataFromValidation);
    formValidation(validation);
  };

  renderError = (error, field) => {
    if (error && error[field] && field !== 'fromServer') {
      return (
        <Fragment>
          {error[field] ? (
            <Fa className="input-error" icon="warning" size="lg" />
          ) : null}
          <p className="error text-center animated fadeIn">{error[field]}</p>
        </Fragment>
      );
    }
    if (error && error[field] && field === 'fromServer') {
      return (
        <p className="error text-center animated fadeIn">{error.fromServer}</p>
      );
    }
  };

  render() {
    const { form, typeForm, redirectPath, user } = this.props;
    const isLogin = typeForm === 'Login';
    const { error, isValid, isAsyncValid, Loading } = form;

    const rulesValidation = isLogin
      ? validatingFieldsForLoginForm
      : validatingFieldsForRegistrationForm;
    this.validator = new FormValidator(rulesValidation);

    if (isValid && isAsyncValid && user) {
      return <Redirect to={redirectPath} />;
    }
    return (
      <Fragment>
        {isLogin ? (
          <LoginForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            renderError={this.renderError}
            error={error}
            Loading={Loading}
          />
        ) : (
          <RegistrationForm
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            renderError={this.renderError}
            error={error}
            Loading={Loading}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.session.user,
  form: state.form,
  typeForm: getTypeForm(state),
  redirectPath: getPathForRedirect(state),
});

const mapDispatchToProps = {
  formFieldChange,
  formValidation,
  formAsyncValidation,
  changeTypeForm,
  formClean,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserForm);
