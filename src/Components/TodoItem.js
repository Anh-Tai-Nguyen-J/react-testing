import '../App.css';
import { useId, useState } from 'react';

function TodoItem(props) {

    return (
        <div>
            {
                props.task.isChecked ? <img src={"./checked.png"} width="2%"/> : <img src={"./unchecked.png"} width="2%"/>
            }
            <span style={props.task.isChecked ? {textDecoration: "line-through"} : {}}>{props.task.info}</span>
        </div>
    );
}

export default TodoItem;