import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home'
import GetStarted from './Pages/GetStarted';
import Plans from './Pages/Plans';
import Contact from './Pages/Contact';
import Step1 from './Components/Step1';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="getstarted" element={<GetStarted />}>
              <Route path="step1" element={<Step1/>}/>
              </Route>
            <Route path='plan' element={<Plans />}/>
            <Route path="contacts" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
