import React from "react";

class LogList extends React.Component {

    render() {
        const {logsArr, deleteBtn} = this.props;
        return (
            <div className="list-group">
                {logsArr.map((el, index) => {
                        return <button type="button" className="list-group-item list-group-item-action" key={index} data-id={index} onClick={deleteBtn}>{el}</button>
                    }
                )}
            </div>
        );
    };
};

export default LogList