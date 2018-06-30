import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

import { Input, Button, CardBody, ModalFooter } from 'mdbreact';

import withHandleForm from '../../hoc/withHandleForm'
import { verificationLength, passwordMatch, MIN_LENGTH_PASSWORD, MIN_LENGTH_USERNAME } from '../../helpers/formValidate'

const RegisterForm = props => {
    const { setValidator, handleSubmit, handleChange, error } = props;
    setValidator([
        {
            field: 'name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Name is required'
        },
        {
            field: 'name',
            method: verificationLength,
            args: [MIN_LENGTH_USERNAME],
            validWhen: false,
            message: 'Name is too short (minimum is 3 characters)'
        },
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Email is required'
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'That is not a valid email'
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Password is required'
        },
        {
            field: 'password',
            method: verificationLength,
            args: [MIN_LENGTH_PASSWORD],
            validWhen: true,
            message: 'Password is too short (minimum is 6 characters)'
        },
        {
            field: 'passwordConfirmation',
            method: 'isEmpty',
            validWhen: false,
            message: 'Password confirmation is required.'
        },
        {
            field: 'passwordConfirmation',
            method: passwordMatch,
            validWhen: true,
            message: 'Password and password confirmation do not match.'
        }
    ]);

    return (
        <Fragment>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <p className="h4 text-center py-4">Sign Up</p>
                    <div className="grey-text">

                        <Input onChange={handleChange} label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                        {error && error.name ? <p className="error text-center">{error.name.message}</p> : null}

                        <Input onChange={handleChange('email')} label="Your email" icon="envelope" group type="text" validate error="wrong" success="right"  />
                        {error && error.email ? <p className="error text-center">{error.email.message}</p> : null}

                        <Input onChange={handleChange('password')} label="Your password" icon="lock" group type="password" validate/>
                        {error && error.password ? <p className="error text-center">{error.password.message}</p> : null}

                        <Input onChange={handleChange('confirmPassword')} label="Confirm your password" icon="exclamation-triangle" group type="password" validate error="wrong" success="right"/>
                        {error && error.confirmPassword ? <p className="error text-center">{error.confirmPassword.message}</p>: null}

                    </div>
                    <div className="text-center py-4 mt-3">
                        <Button className="w-50" color="cyan" type="submit">Register</Button>
                    </div>
                </form>
            </CardBody>
            <ModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Already register? <Link to="/user/login" className="blue-text ml-1"> Sign In</Link></p>
            </ModalFooter>
        </Fragment>
    )
};

export default withHandleForm(RegisterForm);
