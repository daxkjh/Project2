import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home'
import GetStarted from './Pages/GetStarted';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="getstarted" element={<GetStarted />}/>  
            
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
