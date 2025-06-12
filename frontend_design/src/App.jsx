import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import HomePage from "./components/HomePage.jsx"
import Signin from './components/Signin.jsx'
import Signup from './components/Signup.jsx'
import Panel from "./components/Panel.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage/>} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<Panel />} />
        </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
