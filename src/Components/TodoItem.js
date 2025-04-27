import '../App.css';
import { useId, useState } from 'react';

function TodoItem(props) {

    return (
    <div>
        <div onClick={() => props.updateTask(props.task.info)} style={{display: "inline"}}>
            {
                props.task.isChecked ? <img src={"./checked.png"} width="2%"/> : <img src={"./unchecked.png"} width="2%"/>
            }
            <span style={props.task.isChecked ? {textDecoration: "line-through"} : {}}>{props.task.info}</span>
        </div>
        <button onClick={() => props.deleteTask(props.task.info)}>X</button>
    </div>
    );
}

export default TodoItem;