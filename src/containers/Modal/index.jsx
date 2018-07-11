import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

import './style.css'

class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <Container>
                <Button color="danger" onClick={this.toggle}>Modal</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                    <ModalHeader toggle={this.toggle}>Welcome to the music with React
                        <span role="img" aria-label="smile">&#128521;</span>
                    </ModalHeader>
                    <ModalBody>
                        Login in your account to listen to music.
                    </ModalBody>
                    <ModalFooter >
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                        <Link className="modal-btn" to="/user/login"><Button color="primary">Login</Button></Link>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default ModalPage;

