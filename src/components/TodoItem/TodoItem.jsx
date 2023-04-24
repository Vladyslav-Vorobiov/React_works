import './TodoItem.scss';
import {useNavigate} from 'react-router-dom';
import Checkbox from 'react-bootstrap/FormCheck';
import Button from "react-bootstrap/Button";
import React from 'react';
import RemoveIcon from "../UI/icons/RemoveIcon";
import EditIcon from "../UI/icons/EditIcon";

const TodoItem = ({title, description, id, checked, changeStatus, removeTodoItem}) => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate('edit-todo/' + id);
    };

    return (
        <div className="taskWrapper">
            <div className="taskHeading fw-bold">{title}</div>
            <div className="taskDescription">{description}</div>
            <hr/>
            <Checkbox className="d-inline-block me-2" checked={checked} onChange={changeStatus(id)}/>
            <span>Done ?</span>
            <hr/>
            <div className='d-flex justify-content-between'>
                <Button variant="danger" className="rounded-pill" onClick={removeTodoItem(id)}>
                    <RemoveIcon/>
                </Button>
                <Button variant="success" className="rounded-pill" onClick={redirect}>
                    <EditIcon/>
                </Button>
            </div>
        </div>
    );
};

export default TodoItem;