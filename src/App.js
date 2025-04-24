import logo from './logo.svg';
import './App.css';
import TodoHeader from './Components/TodoHeader';
import TodoItem from './Components/TodoItem';
import { useId, useState } from 'react';

function App(props) {

    const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
        <TodoHeader tasks={tasks} setTasks={setTasks}/>
        { tasks.map(t => <TodoItem task={t} key={t.info} />) }
    </div>
  );
}

export default App;
