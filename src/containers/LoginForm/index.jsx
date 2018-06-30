import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

import { Input, Button, CardBody, ModalFooter } from 'mdbreact';

import withHandleForm from '../../hoc/withHandleForm'
import { verificationLength, MIN_LENGTH_PASSWORD } from '../../helpers/formValidate'

const LoginForm = props => {
    const { setValidator, handleSubmit, handleChange, error } = props;
    setValidator([
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
        }
    ]);

    return (
        <Fragment>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    <p className="h4 text-center py-4">Sign In</p>
                    <div className="grey-text">

                        <Input onChange={handleChange('email')} label="Your email" icon="envelope" group type="text" validate error="wrong" success="right"  />
                        {error && error.email ? <p className="error text-center animated fadeIn">{error.email.message}</p> : null}

                        <Input onChange={handleChange('password')} label="Your password" icon="lock" group type="password" validate/>
                        {error && error.password ? <p className="error text-center animated fadeIn">{error.password.message}</p> : null}

                    </div>
                    <div className="text-center py-4 mt-3">
                        <Button className="w-50" color="success" type="submit">Login</Button>
                    </div>
                </form>
            </CardBody>
            <ModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">Not a member? <Link to="/user/registration" className="blue-text ml-1"> Sign Up</Link></p>
            </ModalFooter>
        </Fragment>
    )
};

export default withHandleForm(LoginForm);
