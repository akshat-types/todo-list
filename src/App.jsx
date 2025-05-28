import './App.css'
import { useState } from 'react';
import taskList from './taskData.jsx'; 
import Tasks from './components/Tasks.jsx';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <div>
        <header>
          <Navbar />
          <h1>To-Do App</h1>
          <h2>This is an application</h2>
        </header>
        <main>
          <Tasks />
        </main>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App