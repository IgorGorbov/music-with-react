import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  Input,
  Button,
  CardBody,
  ModalFooter,
} from 'mdbreact';
import Spinner from '../Spinner/index';

const FormRegistration = props => {
  const { handleSubmit, handleChange, renderError, error, Loading } = props;
  return (
    <Container className="animated bounceInUp">
      <Row className="d-flex justify-content-center">
        <Col md="5">
          <Card>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-4">Sign Up</p>
                <div className="grey-text">
                  <div className="input-wrapper">
                    <Input
                      onChange={handleChange('name')}
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    {renderError(error, 'name')}
                  </div>
                  <div className="input-wrapper">
                    <Input
                      onChange={handleChange('email')}
                      label="Your email"
                      icon="envelope"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    {renderError(error, 'email')}
                  </div>
                  <div className="input-wrapper">
                    <Input
                      onChange={handleChange('password')}
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                    />
                    {renderError(error, 'password')}
                  </div>
                  <div className="input-wrapper">
                    <Input
                      onChange={handleChange('passwordConfirmation')}
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                    />
                    {renderError(error, 'passwordConfirmation')}
                  </div>
                  {renderError(error, 'fromServer')}
                </div>
                <div className="text-center py-4 mt-3">
                  <Button
                    disabled={Loading}
                    className="w-50"
                    color="cyan"
                    type="submit"
                  >
                    Register
                  </Button>
                </div>
              </form>
            </CardBody>
            <ModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already register?{' '}
                <Link to="/user/login" className="blue-text ml-1">
                  {' '}
                  Sign In
                </Link>
              </p>
            </ModalFooter>
          </Card>
          {Loading ? <Spinner type={'form'} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default FormRegistration;
