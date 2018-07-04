import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Card, Row, Input, Button, CardBody, ModalFooter } from 'mdbreact';
import Spinner from '../Spinner'

const LoginForm = props => {
  const { handleSubmit, handleChange, renderError, error, Loading } = props;

  return (
      <Container className="animated bounceInUp">
          <Row className="d-flex justify-content-center">
              <Col md="5">
                  <Card>
                      <CardBody>
                          <form onSubmit={handleSubmit}>
                              <p className="h4 text-center py-4">Sign In</p>
                              <div className="grey-text">
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
                                  {renderError(error, 'fromServer')}
                              </div>
                              <div className="text-center py-4 mt-3">
                                  <Button disabled={Loading} className="w-50" color="success" type="submit">
                                      Login
                                  </Button>
                              </div>
                          </form>
                      </CardBody>
                      <ModalFooter className="mx-5 pt-3 mb-1">
                          <p className="font-small grey-text d-flex justify-content-end">
                              Not a member?{' '}
                              <Link to="/user/registration" className="blue-text ml-1">
                                  {' '}
                                  Sign Up
                              </Link>
                          </p>
                      </ModalFooter>
                  </Card>
                  {Loading ? <Spinner /> : null}
              </Col>
          </Row>
      </Container>
  );
};

export default LoginForm;
