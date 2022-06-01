import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from './logo.svg'
import './App.css'
import Home from './Pages/Home'
import GetStarted from './Pages/GetStarted';
import Plans from './Pages/Plans';
import Contact from './Pages/Contact';
import Step1 from './Pages/Step1';
import Step2 from './Pages/Step2';
import Step2a from './Pages/Step2a';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="getstarted" element={<GetStarted />}>
              <Route path="step1" element={<Step1/>}/>
              <Route path="step2" element={<Step2/>}/>
              <Route path="step2a" element={<Step2a/>}/>
              </Route>
            <Route path='plans' element={<Plans />}/>
            <Route path="contacts" element={<Contact />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
