import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Container, Row, Col, Input, Button, Card, CardBody, ModalFooter } from 'mdbreact';
import { validate, isEmpty} from '../../helpers/formValidate'
import FormValidator from '../../helpers/FormValidator'



class FormLogin extends Component  {

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
        };

        this.validator = new FormValidator([
            {
                field: 'name',
                method: 'isEmpty',
                validWhen: false,
                message: 'Name is required.'
            },
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'password',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password is required.'
            },
            {
                field: 'passwordConfirmation',
                method: 'isEmpty',
                validWhen: false,
                message: 'Password confirmation is required.'
            },
            {
                field: 'passwordConfirmation',
                method: this.passwordMatch,
                validWhen: true,
                message: 'Password and password confirmation do not match.'
            }
        ]);
        this.passwordMatch = (confirmation, state) => (state.password === confirmation);


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    handleChange = (field) => (event) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [field]: event.target.value
            }
        });
    };

    handleBlur = () => {
        // const error = validate(this.state.user, this.isLoginForm);
        // this.setState({
        //     ...this.state,
        //     error: error
        // });
        console.log('blur')
    };

    handleSubmit(event) {
        event.preventDefault();


        const validation = this.validator.validate(this.state.user);
        console.log(validation);

        const error = validate(this.state.user, this.isLoginForm);
        this.setState({
            ...this.state,
            error: error
        }, () => isEmpty(this.state.error) ? console.log('good'): null);

        // if (isEmpty(this.state.error)) console.log('good')
    }

    render() {
        this.isLoginForm = this.props.pathname === '/user/sign-in' || this.props.pathname  === '/user/sign-in/';

        const dataForm = {
            title: this.isLoginForm ? 'Sign In' : 'Sign Up',
            button: this.isLoginForm ? 'Login' : 'Register',
        };
        const isDisabled = this.state.error && Object.keys(this.state.error).some(x => this.state.error[x]);

        return(
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="5">
                        <Card>
                            <CardBody>
                                <form onSubmit={this.handleSubmit}>
                                    <p className="h4 text-center py-4">{dataForm.title}</p>
                                    <div className="grey-text">
                                        {!this.isLoginForm ?
                                            <Fragment>
                                                <Input onChange={this.handleChange} onBlur={this.handleBlur('name')} label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                                                {this.state.error && this.state.error.name ? <p className="error text-center">{this.state.error.name}</p> : null}
                                            </Fragment>
                                            : null }
                                        <Input onChange={this.handleChange('email')} onBlur={this.handleBlur} label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"  />
                                        {this.state.error && this.state.error.email ? <p className="error text-center">{this.state.error.email}</p> : null}

                                        <Input onChange={this.handleChange('password')} onBlur={this.handleBlur} label="Your password" icon="lock" group type="password" validate/>
                                        { this.state.error && this.state.error.password ? <p className="error text-center">{this.state.error.password}</p> : null}

                                        {!this.isLoginForm ?
                                            <Fragment>
                                                <Input onChange={this.handleChange('confirmPassword')} onBlur={this.handleBlur} label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right"/>
                                                {this.state.error && this.state.error.confirmPassword ? <p className="error text-center">{this.state.error.confirmPassword}</p> : null}
                                            </Fragment>
                                            : null}

                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <Button onBlur={this.handleBlur} color="cyan" type="submit">{dataForm.button}</Button>
                                    </div>
                                </form>
                            </CardBody>
                            {this.isLoginForm ?
                                <ModalFooter className="mx-5 pt-3 mb-1">
                                    <p className="font-small grey-text d-flex justify-content-end">Not a member? <Link to="/user/register" className="blue-text ml-1"> Sign Up</Link></p>
                                </ModalFooter> : null}
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormLogin;

