import React from "react";

class Item extends React.Component {

    handleRemoveItem = () => {
        this.props.onRemove(this.props.task.id);
    };

    render() {
        return (
            <div>
                <div className="row m-3">
                    <div className="col-auto">
                        <button type="button" className="btn btn-danger btn-sm" onClick={this.handleRemoveItem}>remove
                        </button>
                    </div>
                    <div className="col">{this.props.task.text}</div>
                </div>
                <hr/>
            </div>
        );
    }
}

Item.defaultProps = {
    task: {id: 1, text: 'sleep'}
};

export default Item;