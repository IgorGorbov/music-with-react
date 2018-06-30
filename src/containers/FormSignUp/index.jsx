import React from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody } from 'mdbreact';

class FormSignUp extends React.Component  {
    render() {
        return(
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="6" justify-content-center>
                        <Card>
                            <CardBody>
                                <form>
                                    <p className="h4 text-center py-4">Sign up</p>
                                    <div className="grey-text">
                                        <Input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
                                        <Input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                                        <Input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
                                        <Input label="Your password" icon="lock" group type="password" validate/>
                                    </div>
                                    <div className="text-center py-4 mt-3">
                                        <Button color="cyan" type="submit">Register</Button>
                                    </div>
                                </form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default FormSignUp;
