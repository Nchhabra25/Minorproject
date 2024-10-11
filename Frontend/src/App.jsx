import './App.css'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import {Home} from "./pages/Home"
import {Login} from "./pages/Login"
import {Register} from "./pages/Register"
import {Team} from "./pages/Team"
import { Navbar } from './components/Navbar'

function App() {
  return(
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
