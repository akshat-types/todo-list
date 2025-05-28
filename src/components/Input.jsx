import { useState } from "react";

const Input =(props) => {
    const [enteredValue,setEnteredValue] = useState("");
    const handleChange =(e) => {
        setEnteredValue(e.target.value);
    };
    //console.log(enteredValue);

    const handleSubmit =(e) => {
        e.preventDefault();
        props.onAddTask(enteredValue);
        setEnteredValue("");
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
            <input placeholder='Enter your task' onChange={handleChange} value={enteredValue}></input>
            <button className="add-task-button">Create</button>
            </form>
        </>
    )
};

export default Input