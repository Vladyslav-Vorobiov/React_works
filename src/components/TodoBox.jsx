import React from 'react';
import _ from 'lodash';
import Item from './Item';

class TodoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todoItems: []
        };
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const todoItem = {id: _.uniqueId(), text: this.state.value};
        this.setState({todoItems: [todoItem, ...this.state.todoItems]},);
        this.setState({value: ''});
    };

    handleRemove = (id) => {
        const currentTodoItems = structuredClone(this.state.todoItems);
        const finalTodoItems = currentTodoItems.filter((el) => el.id !== id);
        this.setState({todoItems: finalTodoItems});
    };

    render() {
        return (
            <div className="m-5 w-50">
                <h3 className="mb-5">React TodoBox</h3>
                <form className="d-flex" onSubmit={this.handleSubmit}>
                    <div className="me-3">
                        <input type="text" value={this.state.value} onChange={this.handleChange} required=""
                               className="form-control" placeholder="I am going..."/>
                    </div>
                    <button type="submit" className="btn btn-primary">add</button>
                </form>
                {this.state.todoItems.map((element, index) => {
                    return (
                        <Item task={element} onRemove={this.handleRemove} key={_.uniqueId()}/>
                    );
                })}
            </div>
        );
    }
}

export default TodoBox;
