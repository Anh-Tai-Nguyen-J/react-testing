import '../App.css';
import { useId, useState } from 'react';


function addTask(input){
//    if(input === ''){
//        alert("You must write something!");
//    }

    console.log(input);

}

function TodoHeader() {
    const id = useId();
      const [input, setInput] = useState('');
    return (
        <div>
            <h2>To-Do List <img src="icon.png" alt="notepad-with-pen"/></h2>
            <div class="row">
                <input type="text" id={id} value={input} onInput={e => setInput(e.target.value)} classStyle="color:#fff;opacity:0.3;filter:alpha(opacity=30)" placeholder="Add your text"/>
                <button onClick={addTask(input)}>Add </button>
            </div>
        </div>
    );
}
export default TodoHeader;