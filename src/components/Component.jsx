import React from "react";
import Modal from "./Modal/Modal";

export default class Component extends React.Component {
    state = {modal: false};

    toggle = (e) => {
        e.preventDefault();
        this.setState({
            modal: !this.state.modal,
        });
    };

    render() {
        return (
            <div className="w-25">
                <button type="button" className="modal-open-button btn btn-success m-2"
                        onClick={this.toggle}>Open
                </button>
                <Modal isOpen={this.state.modal}>
                    <Modal.Header toggle={this.toggle}>Modal title</Modal.Header>
                    <Modal.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="button" className="modal-close-button btn btn-warning"
                                onClick={this.toggle}>Cancel
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}