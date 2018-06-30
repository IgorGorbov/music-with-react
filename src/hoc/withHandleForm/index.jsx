import React, { Component } from 'react';
import { Container, Row, Col, Card} from 'mdbreact';
import FormValidator from '../../helpers/FormValidator'

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
            };

            this.validator = null;

            this.handleSubmit = this.handleSubmit.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.setValidator = this.setValidator.bind(this);
        }

        setValidator(rules) {
            this.validator = new FormValidator(rules);
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


        handleSubmit = (event) => {
            event.preventDefault();
            const validation = this.validator.validate(this.state.user);

            this.setState({
                ...this.state,
                error: {
                    ... validation
                }
            });

            if (validation.isValid) console.log('good')
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
                                />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            );
        }
    }
    return HandleForm;
};

export default withHandleForm;
