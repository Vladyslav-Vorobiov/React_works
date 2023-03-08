import React from "react";
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import cn from 'classnames';


class Modal extends React.Component {
    static Header = Header;
    static Body = Body;
    static Footer = Footer;

    render() {

        const modalClasses = cn('modal', 'w-25', 'p-5', {
            fade: this.props.isOpen,
            show: this.props.isOpen
        });

        return (
            <div className={modalClasses} style={{display: this.props.isOpen ? 'block' : 'none'}}
                 role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Modal;