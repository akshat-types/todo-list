import './App.css'
import Tasks from './components/Tasks.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
          <Routes>
            <Route path='/' element={<Tasks />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App