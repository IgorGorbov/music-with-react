import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { Fa, Container, Row, Col, Card } from 'mdbreact';
import FormValidator from '../../helpers/FormValidator.js'
import { FROM_SERVER, FORM_LOGIN } from '../../constants/Validate'
import asyncValidation from '../../api'
import Spinner from '../../containers/Spinner'
import { userLogin, userRegistration } from "../../actions/UserActions";

const withHandleForm = (InnerComponent) => {
    class HandleForm extends Component {

        constructor(props) {
            super(props);

            this.state = {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    passwordConfirmation: ''
                },
                error: null,
                isLoading: false
            };

            this.validator = null;

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.setValidator = this.setValidator.bind(this);
            this.renderError = this.renderError.bind(this);
            this.authentication = this.authentication.bind(this);
            this.registration = this.registration.bind(this);
        }

        setValidator = rules => {
            this.validator = new FormValidator(rules);
        };

        handleChange = field => event => {
            this.setState({
                ...this.state,
                user: {
                    ...this.state.user,
                    [field]: event.target.value
                }
            });
        };

        handleSubmit = typeForm => event => {
            event.preventDefault();
            const validation = this.validator.validate(this.state.user);

            this.setState({
                ...this.state,
                error: validation
            });

            if (validation.isValid) {
                this.setState({
                    ...this.state,
                    isLoading: true
                });
               asyncValidation(
                   this.state.user,
                   typeForm
               ).then(res => typeForm === FORM_LOGIN ? this.authentication(res) : this.registration(res));
            }
        };

        authentication (dataFromServer) {
            const { userLogin } = this.props;

            this.setState({
                ...this.state,
                error: {
                    fromServer: dataFromServer.error
                }
            });

            if(dataFromServer.isValidate === true) userLogin(dataFromServer.user);
            this.setState({
                ...this.state,
                isLoading: false
            });
        }

        registration (dataFromServer)  {
            const { userRegistration } = this.props;
            if(dataFromServer.error) {
                this.setState({
                    ...this.state,
                    error: {
                        fromServer: dataFromServer.error
                    }
                });
            }
            if(dataFromServer.isValidate === true) userRegistration(dataFromServer.user);
            this.setState({
                ...this.state,
                isLoading: false
            });
        }

         renderError = (error, field) => {
            if (error && error[field]) {
                return (
                    <Fragment>
                        {error[field].isInvalid ? <Fa className="input-error" icon="warning" size="lg" /> : null}
                        <p className="error text-center animated fadeIn">{error[field].message}</p>
                    </Fragment>
            )}
             if (error && typeof error.fromServer === 'string' && (field === FROM_SERVER)) {
                 return <p className="error text-center animated fadeIn">{error.fromServer}</p>;
             }

        };

        render() {
            return(
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="5">
                            <Card>
                                <InnerComponent
                                    {...this.state}
                                    {...this.props}
                                    handleSubmit={this.handleSubmit}
                                    handleChange={this.handleChange}
                                    setValidator={this.setValidator}
                                    renderError={this.renderError}
                                />
                            </Card>
                        </Col>
                        {this.state.isLoading ? <Spinner /> : null}
                    </Row>
                </Container>
            );
        }
    }
    return HandleForm;
};

const mapDispatchToProps = {
    userLogin,
    userRegistration
};

export default compose(
    connect(null, mapDispatchToProps),
    withHandleForm
);
