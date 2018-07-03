import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Fa, Container, Row, Col, Card } from 'mdbreact';
import { formFieldChange, formValidation, formClean } from '../../actions/FormActions'
import { FORM_LOGIN, FROM_SERVER, MIN_LENGTH_PASSWORD } from "../../constants/Validate";
import { isLoginForm } from '../../selectors'
import asyncValidation from "../../api/index";
import FormValidator, { validatingFieldsForLoginForm, validatingFieldsForRegistrationForm } from "../../helpers/FormValidator";
import { verificationLength } from '../../helpers/FormValidator.js';

import Spinner from '../../containers/Spinner'
import LoginForm from '../FormLogin'
import RegistrationForm from '../FormRegistration'


class UserForm extends Component {

    constructor(props) {
        super(props);

        this.validator = null;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.renderError = this.renderError.bind(this);
    };

    componentWillReceiveProps (nextProps) {
        if(this.props.isLoginForm !== nextProps.isLoginForm)
            this.props.formClean()
    }

    handleChange = field => event => {
        const { formFieldChange } = this.props;
        formFieldChange(field, event.target.value)
    };

    handleSubmit = event => {
        event.preventDefault();

        const { formValidation } = this.props;
        const { name, email, password, passwordConfirmation } = this.props.form;
        const dataFromValidation = {
            name,
            email,
            password,
            passwordConfirmation
        };
        const validation = this.validator.validate(dataFromValidation);
        formValidation(validation);

        // if (validation.isValid) {
        //     this.setState({
        //         ...this.state,
        //         isLoading: true
        //     });
        //     asyncValidation(
        //         this.state.user,
        //         typeForm
        //     ).then(res => typeForm === FORM_LOGIN ? this.authentication(res) : this.registration(res));
        // }
    };

    renderError = (error, field) => {
        if (error && error[field]) {
            return (
                <Fragment>
                    {error[field] ? <Fa className="input-error" icon="warning" size="lg" /> : null}
                    <p className="error text-center animated fadeIn">{error[field]}</p>
                </Fragment>
            )}
        // if (error && typeof error.fromServer === 'string' && (field === FROM_SERVER)) {
        //     return <p className="error text-center animated fadeIn">{error.fromServer}</p>;
        // }
    };

    render() {
        const {form, isLoginForm} = this.props;
        const {error} = form;
        const rulesValidation = isLoginForm ? validatingFieldsForLoginForm : validatingFieldsForRegistrationForm;
        this.validator = new FormValidator(rulesValidation);
        return (
            <Fragment>
                {isLoginForm ?
                    <LoginForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        renderError={this.renderError}
                        error={error}

                    />
                    :
                    <RegistrationForm
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        renderError={this.renderError}
                        error={error}
                    />
                }
            </Fragment>
        )
    }
}

{/*{isLoading ? <Spinner /> : null}*/}


const mapStateToProps = state => ({
    form: state.form,
    isLoginForm: isLoginForm(state)
});

const mapDispatchToProps = {
    formFieldChange,
    formValidation,
    formClean
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);
