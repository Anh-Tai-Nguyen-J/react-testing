import '../App.css';
import { useId, useState } from 'react';


function TodoHeader(props) {
    const id = useId();
    const [todoTask, setTodoTask] = useState('');


    const addTask = () => {
        let task = {
            isChecked: false,
            info: todoTask,
        }
        props.setTasks([...props.tasks, task]);
    }

    return (
        <div>
            <h2>To-Do List <img src="icon.png" alt="notepad-with-pen" width="3%"/></h2>
            <div className="row">
                <input type="text" id={id} value={todoTask} onInput={e => setTodoTask(e.target.value)} style={{color: '#000'}} placeholder="Add your text"/>
                <button onClick={() => {addTask()}}>Add</button>
            </div>
        </div>
    );
}
export default TodoHeader;