import taskList from '../taskData.jsx'; 
import { useState } from 'react';
import Input from './Input'
import Card from './Card'

const Tasks =() => {
    const [tasks,setTasks] = useState(taskList);
    const addTasksHandler = (newTask) => {
        setTasks((prev) => {
            return[...prev, {id: Math.random(),text: newTask}]
        })
    };

    const deleteTaskHandler = (id) => {
        setTasks((prev) =>{
            return prev.filter((task) => task.id != id)
        })
    };

    return(
        <>
            <div className='Tasks'>
                <Input onAddTask={addTasksHandler}/>
                {
                    tasks.map((task) => (
                        <Card text={task.text} id={task.id} onTaskComplete={deleteTaskHandler}/>
                ))}
            </div>
        </>

    );
};

export default Tasks