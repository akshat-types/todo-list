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
    return(
        <>
            <div>
                <Input onAddTask={addTasksHandler}/>
                {
                    tasks.map((task) => (
                        <Card key={task.id} text={task.text} id={task.id}/>
                ))}
            </div>
        </>

    );
};

export default Tasks