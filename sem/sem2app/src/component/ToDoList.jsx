import { useState } from "react";

function ToDoList() {
    const [inputText, setInputText] = useState();
    const [arr, setArr] = useState(["prod1", "prod2", "prod3"])


    function clickHandler() {
        if(!inputText.trim()){
            return;
        }
        setArr([...arr, inputText]);
        setInputText("");
    }
    
    return (
        <div>
            <label htmlFor="input">Введите текст</label>
            <input
            onChange={(event) => setInputText(event.target.value)}
            type="text"
            id="nput"
            value={inputText}
            maxLength={50}
            ></input>
            <button onClick={clickHandler}>click to add</button>
            <ul>
                {arr.map((item) => <li key={arr.indexOf(item)}>{item}</li>)}
            </ul>

        </div>
    );
}

export default ToDoList;