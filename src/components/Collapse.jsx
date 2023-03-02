import React from 'react'
import cn from 'classnames'

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpened: this.props.opened
        };
    };

    handleClick = (e) => {
        e.preventDefault();
        this.setState({isOpened: this.state.isOpened ? false : true})
    };

    render() {
        const {text} = this.props;
        const isCollapsed = cn("collapse", {
            show: this.state.isOpened === true,
        });

        return (
            <div>
                <p>
                    <a className="btn btn-primary"
                       data-bs-toggle="collapse"
                       href="#"
                       role="button"
                       aria-expanded={this.state.isOpened}
                       onClick={this.handleClick}> Click me!
                    </a>
                </p>
                <div className={isCollapsed}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        )
    }
}

Collapse.defaultProps = {
    text: "Hello! Nice to meet you!",
    opened: true
}

export default Collapse