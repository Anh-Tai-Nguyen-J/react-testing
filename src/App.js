import logo from './logo.svg';
import './App.css';
import TodoHeader from './Components/TodoHeader';
import TodoItem from './Components/TodoItem';
import { useId, useState } from 'react';
import CatFacts from './Components/CatFacts';

function App(props) {

    const [tasks, setTasks] = useState([]);

    const updateTask = (taskInfo) => {
        let taskToUpdate = tasks.find(t => t.info === taskInfo);
        taskToUpdate.isChecked = !taskToUpdate.isChecked;
        taskToUpdate.info = taskInfo;
        let newTaskList = tasks.filter(t => t.info !== taskInfo);
        setTasks([taskToUpdate, ...newTaskList]);
    }

    const deleteTask = (taskInfo) => {
        let newTaskList = tasks.filter(t => t.info !== taskInfo);
        setTasks(newTaskList);
    }

  return (
    <div className="App">
        <CatFacts />
        <TodoHeader tasks={tasks} setTasks={setTasks} />
        { tasks.map(t => <TodoItem task={t} key={t.info} updateTask={updateTask} deleteTask={deleteTask}/>) }
    </div>
  );
}

export default App;
