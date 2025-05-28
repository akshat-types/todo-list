import './App.css'
import { useState } from 'react';
import taskList from './taskData.jsx'; 
import Tasks from './components/Tasks.jsx';
function App() {
  const [tasks,setTasks] = useState(taskList);
  return (
    <>
      <div>
        <header>
          <h1>To-Do App</h1>
          <h2>This is an application</h2>
        </header>
        <main>
          <Tasks />
        </main>
      </div>
    </>
  )
}

export default App