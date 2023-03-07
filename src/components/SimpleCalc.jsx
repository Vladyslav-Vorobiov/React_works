import React from 'react'
import LogList from './LogList'

class SimpleCalc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            logs: []
        }
    };

    handleChange = (btnType) => () => {
        const updatedValue = btnType === 'increase' ? this.state.value + 1 : this.state.value - 1;
        this.setState(
            {
                value: updatedValue,
                logs: [updatedValue, ...this.state.logs]
            });
    };

    deleteItem = (event) => {

        const currentLogs = [...this.state.logs];
        const finalLogs = currentLogs.filter((el, index) => {return index !== +event.target.dataset.id});
        this.setState({logs: finalLogs} );

    };

    render() {
        return (
            <div className="m-5 w-25">
                <div className="btn-group font-monospace mb-3" role="group">
                    <button type="button" className="btn btn-outline-success" onClick={this.handleChange('increase')}>+</button>
                    <button type="button" className="btn btn-outline-danger" onClick={this.handleChange('decrease')}>-</button>
                </div>
                <LogList logsArr = {this.state.logs} deleteBtn = {this.deleteItem}/>
            </div>
        );
    };
}

export default SimpleCalc